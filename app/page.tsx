"use client";

import { useEffect } from "react";
import { About } from "@/components/About/about";

import CtaSection from "@/components/CtaSection/ctaSection";
import { Process } from "@/components/Process/Process";
import { Projects } from "@/components/Projects/projects";
import { Services } from "@/components/Services/services";
import { Hero } from "@/components/Hero/hero";
import { SocialProof } from "@/components/SocialProof/socialProof";
import { CtaFooter } from "@/components/CtaFooter/ctaFooter";

export default function Home() {
  useEffect(() => {
    const id = sessionStorage.getItem("scrollTo");

    if (id) {
      const scroll = () => {
        const el = document.getElementById(id);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          sessionStorage.removeItem("scrollTo");
        } else {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  }, []);

  return (
    <div>
      <Hero />
      <SocialProof />
      <Services />
      <Projects />
      <CtaSection />
      <Process />
      <About />
      <CtaFooter />
    </div>
  );
}
