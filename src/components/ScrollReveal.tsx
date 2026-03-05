"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the new page DOM render after client-side navigation
    const timeout = setTimeout(() => {
      // Generic IntersectionObserver-based reveal
      const revealSections = [
        ".s-section",
        ".intro-section",
        ".services-section",
        ".why-section",
        ".cta-section",
        ".about-hero",
        ".about-section",
        ".experience-section",
        ".timeline-section",
        ".expertise-section",
        ".philosophy-section",
        ".cuplana-section",
        ".mission-section",
      ];

      const observers: IntersectionObserver[] = [];

      revealSections.forEach((selector) => {
        const el = document.querySelector(selector);
        if (el) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                el.classList.toggle("show", entry.isIntersecting);
              });
            },
            { threshold: 0.2 }
          );
          observer.observe(el);
          observers.push(observer);
        }
      });

      // Scroll-based reveal sections
      const scrollRevealSections = [
        ".services-hero",
        ".services",
        ".cta",
        ".contacthero",
        ".contact-section",
        ".regions",
        ".faq",
      ];

      const revealOnScroll = () => {
        scrollRevealSections.forEach((selector) => {
          const el = document.querySelector(selector);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight && rect.bottom > 0) {
            el.classList.add("show");
          } else {
            el.classList.remove("show");
          }
        });
      };

      window.addEventListener("scroll", revealOnScroll);
      // Trigger immediately for elements already in viewport
      revealOnScroll();

      // FAQ accordion
      const faqItems = document.querySelectorAll(".faq-item");
      const faqHandlers: Array<{ el: Element; handler: () => void }> = [];
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        if (question) {
          const handler = () => item.classList.toggle("active");
          question.addEventListener("click", handler);
          faqHandlers.push({ el: question, handler });
        }
      });

      // Store cleanup refs
      (window as unknown as Record<string, unknown>).__scrollRevealCleanup = () => {
        observers.forEach((o) => o.disconnect());
        window.removeEventListener("scroll", revealOnScroll);
        faqHandlers.forEach(({ el, handler }) =>
          el.removeEventListener("click", handler)
        );
      };
    }, 50);

    return () => {
      clearTimeout(timeout);
      const cleanup = (window as unknown as Record<string, unknown>).__scrollRevealCleanup as (() => void) | undefined;
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return null;
}
