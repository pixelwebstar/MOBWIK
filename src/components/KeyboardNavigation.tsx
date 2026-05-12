"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTES = ["/", "/about", "/services", "/reviews", "/contact"];

export default function KeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      
      // Don't navigate if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % ROUTES.length;
        router.push(ROUTES[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + ROUTES.length) % ROUTES.length;
        router.push(ROUTES[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, router]);

  return null;
}
