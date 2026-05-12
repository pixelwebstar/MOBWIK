"use client";

import React, { useState, useEffect, useRef } from "react";
import { useChat, UIMessage } from "@ai-sdk/react";
import { ArrowUp, X, PhoneCall } from "lucide-react";

interface ChatInterfaceProps {
  onClose: () => void;
}

const ChatInterface = ({ onClose }: ChatInterfaceProps) => {
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { messages, sendMessage, status } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome-message",
        role: "assistant",
        parts: [{ type: "text", text: "Welcome to Mobwik. How can I help with your device?" }],
      }
    ],
    onToolCall: ({ toolCall }: any) => {
      const args = toolCall.args;
      if (toolCall.toolName === "scrollTo") {
        const element = document.getElementById(args.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      if (toolCall.toolName === "bookRepair") {
        window.location.href = "/contact?scroll=form";
      }
    },
  } as any);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const isLoading = status === "streaming" || status === "submitted";

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue || isLoading) return;
    const text = inputValue;
    setInputValue("");
    await sendMessage({ text });
  };

  const handleRequestCallback = async () => {
    if (isLoading) return;
    await sendMessage({ text: "I want to request a call back" });
  };

  return (
    <div className="w-[380px] h-[540px] bg-white flex flex-col rounded-2xl overflow-hidden border border-black/5">

      {/* ── Header ── */}
      <div className="relative px-5 py-4 bg-secondary text-white flex justify-between items-center shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary to-primary/20 pointer-events-none" />
        
        <div className="relative flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold tracking-wide">Mobwik</span>
            <span className="text-[9px] font-medium text-white/50 uppercase tracking-[0.15em]">AI Assistant</span>
          </div>
        </div>

        <button 
          onClick={onClose} 
          className="relative w-8 h-8 flex items-center justify-center bg-white/15 hover:bg-white/25 rounded-lg transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* ── Messages ── */}
      <div 
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto px-5 py-4 space-y-4 bg-gradient-to-b from-surface-2/40 to-white"
        style={{ scrollbarWidth: "none" }}
      >
        {messages.map((m: UIMessage) => {
          const textPart = m.parts.find(p => p.type === 'text') as any;
          const content = textPart?.text || "";
          if (!content && m.role === 'assistant') return null;

          return (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-primary" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"/>
                  </svg>
                </div>
              )}
              <div className={`max-w-[78%] px-4 py-3 text-[13px] leading-relaxed ${
                m.role === "user" 
                  ? "bg-primary text-white rounded-2xl rounded-tr-sm font-medium" 
                  : "bg-white text-secondary/80 rounded-2xl rounded-tl-sm border border-black/5 shadow-sm"
              }`}>
                {content}
              </div>
            </div>
          );
        })}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-2 mt-1 shrink-0">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-primary animate-pulse" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"/>
              </svg>
            </div>
            <div className="bg-white border border-black/5 px-4 py-3 rounded-2xl rounded-tl-sm flex space-x-1.5 items-center shadow-sm">
              <div className="w-1.5 h-1.5 bg-secondary/20 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1.5 h-1.5 bg-secondary/30 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* ── Footer ── */}
      <div className="bg-white border-t border-black/5 shrink-0">
        {/* Quick Action — Request Callback */}
        <div className="px-4 pt-3">
          <button
            onClick={handleRequestCallback}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-2 text-[11px] font-bold text-secondary bg-surface-2/60 hover:bg-primary/5 hover:text-primary border border-black/5 hover:border-primary/15 px-4 py-2.5 rounded-xl transition-all disabled:opacity-40"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Request a Call Back</span>
          </button>
        </div>

        {/* Input */}
        <div className="px-4 pt-3 pb-4">
          <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about repairs..."
              className="flex-grow text-[13px] bg-surface-2/60 pl-4 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/15 focus:bg-white transition-all border border-transparent focus:border-primary/10"
            />
            <button 
              type="submit" 
              disabled={!inputValue || isLoading}
              className="p-3 bg-primary text-white rounded-xl hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-20 shadow-lg shadow-primary/20"
            >
              <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
