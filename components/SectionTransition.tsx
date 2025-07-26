"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SectionTransitionProps {
  variant: "hero-to-about" | "about-to-projects" | "projects-to-contact" | "contact-to-footer";
  className?: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ variant, className = "" }) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getParallaxTransform = (speed: number) => {
    if (!sectionRef.current) return "";
    const rect = sectionRef.current.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const relativePos = scrollY - elementTop;
    return `translateY(${relativePos * speed}px)`;
  };

  const getMouseParallax = (intensity: number) => {
    const x = (mousePosition.x - window.innerWidth / 2) * intensity * 0.0001;
    const y = (mousePosition.y - window.innerHeight / 2) * intensity * 0.0001;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  const renderTransitionContent = () => {
    switch (variant) {
      case "hero-to-about":
        return (
          <>
            {/* Floating Code Elements */}
            <div 
              className="absolute top-1/4 left-10 opacity-20"
              style={{ transform: getParallaxTransform(-0.3) }}
            >
              <div className="text-cream-100/40 font-mono text-sm">
                <div>&lt;developer&gt;</div>
                <div className="ml-4">passion.code();</div>
                <div>&lt;/developer&gt;</div>
              </div>
            </div>

            {/* Geometric Shapes */}
            <div 
              className="absolute top-1/3 right-20 w-32 h-32 border border-cream-100/20 rounded-full"
              style={{ 
                transform: `${getParallaxTransform(-0.2)} rotate(${scrollY * 0.1}deg) ${getMouseParallax(15).transform || ''}`,
              }}
            />

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cream-100/30 rounded-full"
                style={{
                  top: `${20 + (i * 12)}%`,
                  left: `${15 + (i * 10)}%`,
                  transform: `${getParallaxTransform(-0.4 - (i * 0.05))} ${getMouseParallax(20 + (i * 3)).transform || ''}`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Gradient Orb */}
            <div 
              className="absolute top-1/2 left-1/2 w-96 h-96 opacity-10 -translate-x-1/2 -translate-y-1/2"
              style={{ 
                transform: `${getParallaxTransform(-0.1)} scale(${1 + Math.sin(scrollY * 0.01) * 0.1}) ${getMouseParallax(5).transform || ''}`,
              }}
            >
              <div className="w-full h-full bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-xl" />
            </div>
          </>
        );

      case "about-to-projects":
        return (
          <>
            {/* Tech Stack Elements */}
            <div 
              className="absolute top-1/4 right-10 opacity-25"
              style={{ transform: getParallaxTransform(-0.35) }}
            >
              <div className="text-cream-100/50 font-mono text-xs space-y-1">
                <div>React.tsx</div>
                <div>Next.js</div>
                <div>TypeScript</div>
                <div>Tailwind</div>
              </div>
            </div>

            {/* Hexagonal Grid */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 border border-cream-100/15"
                style={{
                  top: `${30 + (i % 3) * 20}%`,
                  left: `${20 + (i % 4) * 15}%`,
                  transform: `${getParallaxTransform(-0.25 - (i * 0.02))} rotate(${45 + (i * 15)}deg) ${getMouseParallax(12 + (i * 2)).transform || ''}`,
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            ))}

            {/* Flowing Lines */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-10"
              style={{ transform: getParallaxTransform(-0.15) }}
            >
              <path
                d="M0,50 Q150,20 300,50 T600,50"
                stroke="rgba(245, 245, 220, 0.3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;10"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M0,80 Q200,60 400,80 T800,80"
                stroke="rgba(245, 245, 220, 0.2)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="3,3"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            {/* Project Icons */}
            <div 
              className="absolute bottom-1/4 left-1/4 opacity-20"
              style={{ 
                transform: `${getParallaxTransform(-0.4)} rotate(${scrollY * 0.05}deg) ${getMouseParallax(25).transform || ''}`,
              }}
            >
              <div className="text-cream-100/40 text-2xl">⚡</div>
            </div>
          </>
        );

      case "projects-to-contact":
        return (
          <>
            {/* Communication Elements */}
            <div 
              className="absolute top-1/3 left-10 opacity-25"
              style={{ transform: getParallaxTransform(-0.3) }}
            >
              <div className="text-cream-100/50 font-mono text-sm">
                <div>📧 hello@portfolio.dev</div>
                <div>🌐 linkedin.com/in/dev</div>
                <div>📱 +62 xxx xxx xxx</div>
              </div>
            </div>

            {/* Network Nodes */}
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <div
                  className="absolute w-4 h-4 bg-cream-100/30 rounded-full"
                  style={{
                    top: `${25 + (i * 15)}%`,
                    left: `${30 + (i * 12)}%`,
                    transform: `${getParallaxTransform(-0.2 - (i * 0.03))} ${getMouseParallax(18 + (i * 3)).transform || ''}`,
                  }}
                />
                {/* Connection Lines */}
                {i < 4 && (
                  <div
                    className="absolute h-px bg-gradient-to-r from-cream-100/20 to-transparent"
                    style={{
                      top: `${27 + (i * 15)}%`,
                      left: `${32 + (i * 12)}%`,
                      width: "60px",
                      transform: getParallaxTransform(-0.15),
                    }}
                  />
                )}
              </div>
            ))}

            {/* Message Bubbles */}
            <motion.div
              className="absolute top-1/2 right-20 opacity-20"
              style={{ transform: getParallaxTransform(-0.25) }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <div className="bg-cream-100/10 rounded-lg p-3 text-cream-100/60 text-xs">
                Let's collaborate!
              </div>
            </motion.div>

            {/* Social Icons */}
            <div 
              className="absolute bottom-1/3 right-1/3 opacity-15"
              style={{ 
                transform: `${getParallaxTransform(-0.35)} rotate(${scrollY * 0.02}deg) ${getMouseParallax(20).transform || ''}`,
              }}
            >
              <div className="flex space-x-4 text-cream-100/40 text-xl">
                <span>💼</span>
                <span>📧</span>
                <span>🔗</span>
              </div>
            </div>
          </>
        );

      case "contact-to-footer":
        return (
          <>
            {/* Thank You Message */}
            <div 
              className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-30"
              style={{ transform: getParallaxTransform(-0.2) }}
            >
              <div className="text-cream-100/60 font-serif text-lg text-center">
                <div>Thank you for visiting</div>
                <div className="text-sm mt-2 opacity-70">Let's build something amazing together</div>
              </div>
            </div>

            {/* Floating Hearts */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-cream-100/20 text-xl"
                style={{
                  top: `${40 + (i * 10)}%`,
                  left: `${20 + (i * 20)}%`,
                  transform: `${getParallaxTransform(-0.3 - (i * 0.05))} ${getMouseParallax(15 + (i * 5)).transform || ''}`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              >
                ❤️
              </motion.div>
            ))}

            {/* Copyright Elements */}
            <div 
              className="absolute bottom-1/4 left-1/2 -translate-x-1/2 opacity-20"
              style={{ transform: getParallaxTransform(-0.4) }}
            >
              <div className="text-cream-100/40 font-mono text-xs text-center">
                <div>&copy; 2024 Portfolio</div>
                <div>Made with 💻 & ☕</div>
              </div>
            </div>

            {/* Final Gradient */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{ 
                transform: getParallaxTransform(-0.1),
                background: "radial-gradient(circle at center, rgba(245, 245, 220, 0.1) 0%, transparent 70%)"
              }}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`relative h-32 md:h-48 overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-200/50 to-transparent" />
      
      {/* Transition Content */}
      <div className="absolute inset-0">
        {renderTransitionContent()}
      </div>

      {/* Subtle Divider Line */}
      <div 
        className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cream-100/30 to-transparent -translate-x-1/2 -translate-y-1/2"
        style={{ transform: getParallaxTransform(-0.1) }}
      />
    </div>
  );
};

export default SectionTransition;