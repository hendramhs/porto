"use client";

import { motion } from "framer-motion";
import { Calendar, Code, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface ProjectItem {
  year: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  icon: any;
  technologies?: string[];
  link?: string;
}

const ProjectShowcase = () => {
  const [showMore, setShowMore] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxElementsRef = useRef<HTMLDivElement[]>([]);

  // Mouse tracking for interactive parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectData: ProjectItem[] = [
    {
      year: "2024",
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "Website portfolio modern dengan desain minimalis Jepang dan animasi yang halus",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      icon: Code,
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
      ],
      link: "#",
    },
    {
      year: "2024",
      title: "E-Commerce Dashboard",
      category: "Web Application",
      description:
        "Dashboard admin untuk mengelola toko online dengan fitur analytics dan inventory management",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      icon: Code,
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      link: "#",
    },
    {
      year: "2023",
      title: "Task Management App",
      category: "Mobile App",
      description:
        "Aplikasi mobile untuk manajemen tugas dengan fitur kolaborasi tim dan notifikasi real-time",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      icon: Code,
      technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
      link: "#",
    },
    {
      year: "2023",
      title: "Restaurant Website",
      category: "Web Design",
      description:
        "Website restoran dengan sistem reservasi online dan menu digital interaktif",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      icon: Code,
      technologies: ["WordPress", "PHP", "MySQL", "Booking System"],
      link: "#",
    },
    {
      year: "2022",
      title: "First Web Project",
      category: "Learning Project",
      description:
        "Website pertama yang dibuat saat belajar web development dengan HTML, CSS, dan JavaScript",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      icon: Code,
      technologies: ["HTML/CSS", "JavaScript", "Responsive Design", "Git"],
      link: "#",
    },
  ];

  // Show only first 3 projects initially
  const displayedProjects = showMore ? projectData : projectData.slice(0, 3);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Web Application":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Mobile App":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Web Design":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Learning Project":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  // Parallax calculation function
  const getParallaxTransform = (speed: number, offset: number = 0) => {
    const sectionTop = sectionRef.current?.offsetTop || 0;
    const parallaxValue = (scrollY - sectionTop + offset) * speed;
    return `translateY(${parallaxValue}px)`;
  };

  // Mouse parallax calculation
  const getMouseParallax = (intensity: number) => {
    return {
      transform: `translate(${mousePosition.x * intensity}px, ${
        mousePosition.y * intensity
      }px)`,
    };
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 tracking-wider">
            PROJECTS
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gradient mb-8">
            PROJECTS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Koleksi project yang telah saya kerjakan, dari website sederhana
            hingga aplikasi kompleks, menampilkan evolusi skill dan kreativitas
            dalam pengembangan digital.
          </p>
        </motion.div>

        {/* Projects Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Desktop with Parallax */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full timeline-line"
            style={{
              transform: `translateX(-50%) ${getParallaxTransform(-0.05)}`,
            }}
          />

          {/* Timeline Line - Mobile with Parallax */}
          <div
            className="md:hidden absolute left-8 w-0.5 h-full timeline-line"
            style={{
              transform: getParallaxTransform(-0.05),
            }}
          />

          {/* Project Items */}
          <div className="space-y-16">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row flex-col"
                    : "md:flex-row-reverse flex-col"
                }`}
              >
                {/* Content */}
                <div
                  className={`md:w-5/12 w-full timeline-content ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right text-left pl-16 md:pl-0"
                      : "md:pl-8 md:text-left text-left pl-16 md:pl-0"
                  }`}
                  style={{
                    transform: `${getParallaxTransform(-0.02 * (index + 1))} ${
                      getMouseParallax(3 * (index % 2 === 0 ? 1 : -1))
                        .transform || ""
                    }`,
                  }}
                >
                  {/* Year Badge */}

                  {/* Category */}
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-cream-100 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-dark-300 text-xs text-gray-300 rounded hover:bg-dark-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Project Link */}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-cream-100 text-dark-100 rounded-full text-sm font-medium hover:bg-cream-200 transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Lihat Project
                    </motion.a>
                  )}
                </div>

                {/* Center Icon */}
                <div
                  className="relative z-10 md:static absolute left-0"
                  style={{
                    transform: `${getParallaxTransform(-0.08)} ${
                      getMouseParallax(8).transform || ""
                    }`,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(245, 245, 220, 0.3)",
                    }}
                    className="w-12 h-12 md:w-16 md:h-16 bg-dark-100 border-4 border-cream-100 rounded-full flex items-center justify-center timeline-dot timeline-dot-animated cursor-pointer"
                  >
                    <project.icon
                      size={20}
                      className="md:w-6 md:h-6 text-cream-100"
                    />
                  </motion.div>

                  {/* Floating particles around icon */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cream-100/40 rounded-full"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${80 + i * 10}%`,
                        transform: `${getParallaxTransform(-0.1 - i * 0.02)} ${
                          getMouseParallax(15 + i * 5).transform || ""
                        }`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Image */}
                <div
                  className={`md:w-5/12 w-full mt-4 md:mt-0 ${
                    index % 2 === 0
                      ? "md:pl-8 pl-16 md:pl-8"
                      : "md:pr-8 pl-16 md:pr-8"
                  }`}
                  style={{
                    transform: `${getParallaxTransform(-0.03 * (index + 1))} ${
                      getMouseParallax(5 * (index % 2 === 0 ? -1 : 1))
                        .transform || ""
                    }`,
                  }}
                >
                  {project.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        rotateY: index % 2 === 0 ? 5 : -5,
                        rotateX: 2,
                      }}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden hover-glow group cursor-pointer"
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                      {/* Image overlay with category */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                            project.category
                          )} backdrop-blur-sm`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Parallax overlay elements */}
                      <div
                        className="absolute top-2 right-2 w-4 h-4 border border-cream-100/30 rounded-full"
                        style={{
                          transform: `${getParallaxTransform(-0.15)} ${
                            getMouseParallax(20).transform || ""
                          }`,
                        }}
                      />
                      <div
                        className="absolute bottom-2 left-2 w-2 h-2 bg-cream-100/40 rounded-full"
                        style={{
                          transform: `${getParallaxTransform(-0.2)} ${
                            getMouseParallax(-15).transform || ""
                          }`,
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {!showMore && projectData.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mt-16"
            >
              <motion.button
                onClick={() => setShowMore(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-dark-200 border border-cream-100/20 rounded-full text-cream-100 font-medium hover:bg-dark-100 hover:border-cream-100/40 transition-all duration-300 hover-glow"
              >
                <span className="mr-3">Lihat Lagi</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
      </div>

      {/* Parallax Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1: Slow moving geometric shapes */}
        <div
          className="absolute top-10 left-10 w-64 h-64 opacity-5"
          style={{
            transform: `${getParallaxTransform(-0.1)} ${
              getMouseParallax(5).transform || ""
            }`,
          }}
        >
          <div className="w-full h-full border border-cream-100/20 rounded-full animate-pulse" />
        </div>

        <div
          className="absolute top-1/3 right-20 w-48 h-48 opacity-10"
          style={{
            transform: `${getParallaxTransform(-0.15)} ${
              getMouseParallax(-8).transform || ""
            }`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cream-100/10 to-transparent rounded-lg rotate-45" />
        </div>

        {/* Layer 2: Medium speed floating elements */}
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 opacity-15"
          style={{
            transform: `${getParallaxTransform(-0.2)} ${
              getMouseParallax(12).transform || ""
            }`,
          }}
        >
          <div className="w-full h-full border-2 border-cream-100/30 rounded-full" />
        </div>

        <div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 opacity-8"
          style={{
            transform: `${getParallaxTransform(-0.25)} ${
              getMouseParallax(-15).transform || ""
            }`,
          }}
        >
          <div className="w-full h-full bg-cream-100/5 rounded-full blur-xl" />
        </div>

        {/* Layer 3: Fast moving particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cream-100/20 rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 8}%`,
              transform: `${getParallaxTransform(-0.3 - i * 0.05)} ${
                getMouseParallax(20 + i * 5).transform || ""
              }`,
            }}
          />
        ))}

        {/* Layer 4: Code-like floating elements */}
        <div
          className="absolute top-20 right-10 opacity-10"
          style={{
            transform: `${getParallaxTransform(-0.4)} ${
              getMouseParallax(25).transform || ""
            }`,
          }}
        >
          <div className="text-cream-100/30 font-mono text-xs">
            <div>&lt;div className="project"&gt;</div>
            <div className="ml-4">&lt;h1&gt;Portfolio&lt;/h1&gt;</div>
            <div>&lt;/div&gt;</div>
          </div>
        </div>

        <div
          className="absolute bottom-20 left-20 opacity-10"
          style={{
            transform: `${getParallaxTransform(-0.35)} ${
              getMouseParallax(-20).transform || ""
            }`,
          }}
        >
          <div className="text-cream-100/30 font-mono text-xs">
            <div>const projects = [</div>
            <div className="ml-4">{"{ name: 'Portfolio' }"},</div>
            <div>];</div>
          </div>
        </div>

        {/* Layer 5: Animated gradient orbs */}
        <div
          className="absolute top-1/4 left-1/2 w-96 h-96 opacity-5"
          style={{
            transform: `${getParallaxTransform(-0.1)} ${
              getMouseParallax(8).transform || ""
            }`,
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-cream-100/20 via-cream-100/10 to-transparent rounded-full animate-pulse" />
        </div>

        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 opacity-8"
          style={{
            transform: `${getParallaxTransform(-0.18)} ${
              getMouseParallax(-12).transform || ""
            }`,
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
