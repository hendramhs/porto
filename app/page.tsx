"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectShowcase from "../components/TimelineSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SectionTransition from "../components/SectionTransition";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "works", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(
          section === "home" ? "hero" : section
        );
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId === "home" ? "hero" : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <main className="min-h-screen bg-dark-100">
      <Navigation
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />

      <div id="hero">
        <HeroSection />
      </div>

      {/* Transition: Hero to About */}
      <SectionTransition variant="hero-to-about" />

      <AboutSection />

      {/* Transition: About to Projects */}
      <SectionTransition variant="about-to-projects" />

      <section id="projects">
        <ProjectShowcase />
      </section>

      {/* Transition: Projects to Contact */}
      <SectionTransition variant="projects-to-contact" />

      <ContactSection />


      <Footer />
    </main>
  );
}
