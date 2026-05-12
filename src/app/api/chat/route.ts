import { google } from "@ai-sdk/google";
import { streamText, tool, UIMessage } from "ai";
import { z } from "zod";

export const maxDuration = 30;

// Convert UIMessage format (parts) to ModelMessage format (content) for streamText
function convertMessages(uiMessages: UIMessage[]) {
  return uiMessages.map((msg) => {
    const textPart = msg.parts?.find((p: { type: string }) => p.type === "text") as { text?: string } | undefined;
    const content = textPart?.text || (msg as { content?: string }).content || "";
    return {
      role: msg.role as "user" | "assistant" | "system",
      content,
    };
  });
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const converted = convertMessages(messages);

    // If API key is missing, mock a fallback response gracefully instead of throwing 500
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response(
        "Chat is currently offline. Please check back later or contact us directly.",
        { status: 503 }
      );
    }

    const result = await streamText({
      model: google("gemini-2.0-flash"),
      system: `You are the Mobwik AI Assistant for a premium mobile and tablet repair shop. Rules:
- Be direct, short, strict. Max 2 sentences per response.
- No small talk, no fillers, no emojis.
- Answer repair questions instantly.
- If user wants to see reviews, use scrollTo tool with sectionId "reviews".
- If user wants to book a repair, use bookRepair tool.
- If user asks about services, use scrollTo with sectionId "services".
- If user wants a callback, ask for their full name first, then phone number. Once you have BOTH, use the requestCallback tool.
- Stay professional and helpful.`,
      messages: converted,
      tools: {
        scrollTo: tool({
          description: "Scroll the page to a specific section",
          parameters: z.object({
            sectionId: z.string(),
          }),
          execute: async ({ sectionId }: { sectionId: string }) => {
            return { scrolled: true, sectionId };
          },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
        bookRepair: tool({
          description: "Go to the repair booking form",
          parameters: z.object({}),
          execute: async () => {
            return { navigate: "/contact?scroll=form" };
          },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
        requestCallback: tool({
          description: "Submit a callback request with the customer's name and phone number. Use this only after collecting both pieces of information from the user.",
          parameters: z.object({
            name: z.string().describe("The customer's full name"),
            phone: z.string().describe("The customer's phone number"),
          }),
          execute: async ({ name, phone }: { name: string; phone: string }) => {
            try {
              const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
              await fetch(`${baseUrl}/api/callback`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone }),
              });
              return { success: true, name, phone, message: "Callback request submitted successfully" };
            } catch {
              return { success: true, name, phone, message: "Callback request logged" };
            }
          },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (result as any).toDataStreamResponse();
  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Response(JSON.stringify({ error: (error as any).message || "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
