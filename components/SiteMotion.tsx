"use client";

import { useEffect } from "react";

const GSAP = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
const SCROLL = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing?.dataset.loaded === "1") {
      resolve();
      return;
    }
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(src)), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "1";
      resolve();
    };
    script.onerror = () => reject(new Error(src));
    document.body.appendChild(script);
  });
}

type GsapLike = {
  registerPlugin: (...plugins: unknown[]) => void;
  from: (target: unknown, vars: Record<string, unknown>) => void;
  to: (target: unknown, vars: Record<string, unknown>) => void;
  set?: (target: unknown, vars: Record<string, unknown>) => void;
  timeline: (vars?: Record<string, unknown>) => {
    set: (target: unknown, vars: Record<string, unknown>) => void;
    to: (target: unknown, vars: Record<string, unknown>, position?: string | number) => void;
    from: (target: unknown, vars: Record<string, unknown>, position?: string) => void;
    fromTo: (target: unknown, fromVars: Record<string, unknown>, toVars: Record<string, unknown>, position?: string) => void;
  };
  utils: { toArray: (selector: string) => Element[] };
  killTweensOf: (target: string) => void;
};

export default function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.add("motion-static");
      return () => root.classList.remove("motion-static");
    }

    let alive = true;
    const stops: Array<() => void> = [];

    async function start() {
      await loadScript(GSAP);
      await loadScript(SCROLL);
      if (!alive) return;
      const w = window as Window & { gsap?: GsapLike; ScrollTrigger?: { getAll: () => Array<{ kill: () => void }> } };
      const gsap = w.gsap;
      const ScrollTrigger = w.ScrollTrigger;
      if (!gsap || !ScrollTrigger) throw new Error("gsap missing");
      gsap.registerPlugin(ScrollTrigger);
      const desktop = window.matchMedia("(min-width: 901px)").matches;

      gsap.from(".hero-copy > *", { y: 36, opacity: 0, duration: 0.75, stagger: 0.09, ease: "back.out(1.4)", delay: 0.15 });
      gsap.from(".hero-art img", { scale: 0.84, rotate: 3, opacity: 0, duration: 1, ease: "back.out(1.35)", delay: 0.12 });

      const heroDepth = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: desktop ? "+=55%" : "bottom top",
          scrub: desktop ? 0.8 : 0.55,
          pin: desktop,
          anticipatePin: 1,
        },
      });
      heroDepth.to(".hero-ring.r1", { scale: 2.15, opacity: 0.38, ease: "none" }, 0);
      heroDepth.to(".hero-ring.r2", { scale: 1.62, opacity: 0.08, ease: "none" }, 0);
      heroDepth.to(".hero-art img", { scale: desktop ? 1.09 : 1.045, yPercent: desktop ? -2 : -1, ease: "none" }, 0);
      heroDepth.to(".hero-copy", { scale: desktop ? 0.965 : 0.985, y: desktop ? -18 : -6, transformOrigin: "center center", ease: "none" }, 0);

      if (desktop) {
        const slides = gsap.utils.toArray(".reaction-slide");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ".reaction-stage", start: "top top", end: "+=220%", pin: true, scrub: 0.65 },
        });
        slides.forEach((slide, i) => {
          if (i === 0) tl.set(slide, { autoAlpha: 1 });
          else {
            tl.to(slides[i - 1], { autoAlpha: 0, scale: 0.96, duration: 0.35 }, "+=0.55");
            tl.fromTo(slide, { autoAlpha: 0, xPercent: i % 2 ? 8 : -8, scale: 1.04 }, { autoAlpha: 1, xPercent: 0, scale: 1, duration: 0.55 }, "<0.05");
          }
          const image = (slide as Element).querySelector(".reaction-image");
          const copy = (slide as Element).querySelectorAll(".reaction-copy > *");
          tl.from(image, { scale: 0.82, rotate: i % 2 ? 3 : -3, duration: 0.55, ease: "back.out(1.5)" }, "<");
          tl.from(copy, { y: 24, opacity: 0, stagger: 0.07, duration: 0.35 }, "<0.08");
        });
      } else {
        gsap.utils.toArray(".reaction-slide").forEach((slide) => {
          gsap.from((slide as Element).querySelectorAll(".reaction-copy > *, .reaction-image"), {
            y: 30,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
            scrollTrigger: { trigger: slide, start: "top 76%" },
          });
        });
      }

      gsap.from(".pop-card", { y: 80, scale: 0.86, rotate: 6, opacity: 0, stagger: 0.12, duration: 0.7, ease: "back.out(1.55)", scrollTrigger: { trigger: ".trio-grid", start: "top 78%" } });
      gsap.from(".sticker-stage", { scale: 0.8, rotate: -6, opacity: 0, duration: 0.9, ease: "back.out(1.35)", scrollTrigger: { trigger: ".sticker-stage", start: "top 80%" } });
      gsap.to(".sticker-stage", { rotate: 1.5, y: -18, ease: "none", scrollTrigger: { trigger: ".meme-wall", start: "top bottom", end: "bottom top", scrub: 1 } });
      gsap.from(".token-box", { y: 70, rotate: -2, opacity: 0, duration: 0.75, ease: "back.out(1.4)", scrollTrigger: { trigger: ".token-box", start: "top 78%" } });
      gsap.from(".ape h2", { scale: 0.6, opacity: 0, duration: 0.8, ease: "elastic.out(1, 0.55)", scrollTrigger: { trigger: ".ape", start: "top 70%" } });
      gsap.from(".footer-peek", { x: 220, rotate: 9, duration: 0.75, ease: "back.out(1.5)", scrollTrigger: { trigger: ".footer", start: "top 80%" } });

      if (desktop) {
        const magnets = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
        const movers = magnets.map((el) => {
          const move = (event: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            gsap.to(el, { x: (event.clientX - rect.left - rect.width / 2) * 0.12, y: (event.clientY - rect.top - rect.height / 2) * 0.14, duration: 0.25, ease: "power2.out" });
          };
          const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.55)" });
          el.addEventListener("mousemove", move);
          el.addEventListener("mouseleave", leave);
          return () => {
            el.removeEventListener("mousemove", move);
            el.removeEventListener("mouseleave", leave);
          };
        });
        stops.push(() => movers.forEach((stop) => stop()));
      }

      stops.push(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf("*");
      });
    }

    start().catch(() => {
      if (alive) root.classList.add("motion-static");
    });

    return () => {
      alive = false;
      stops.forEach((stop) => stop());
      root.classList.remove("motion-static");
    };
  }, []);

  return null;
}
