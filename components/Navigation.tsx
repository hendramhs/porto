"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "hero", label: "ホーム", labelId: "Beranda" },
    { id: "about", label: "私について", labelId: "Tentang" },
    { id: "projects", label: "プロジェクト", labelId: "Projects" },
    { id: "works", label: "制作実績", labelId: "Karya" },
    { id: "contact", label: "お問い合わせ", labelId: "Kontak" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/hendradarmawan",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/hendradarmawan",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:hendra@example.com", label: "Email" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold text-gradient"
          >
            HENDRA DARMAWAN
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm transition-colors duration-300 hover:text-cream-100 ${
                  activeSection === item.id ? "text-cream-100" : "text-gray-400"
                }`}
              >
                <div className="text-xs mb-1">{item.label}</div>
                <div className="text-sm">{item.labelId}</div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-cream-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-dark-100 border-l border-gray-800"
            >
              <div className="p-6 pt-20">
                <div className="space-y-6">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left transition-colors duration-300 ${
                        activeSection === item.id
                          ? "text-cream-100"
                          : "text-gray-400"
                      }`}
                    >
                      <div className="text-sm mb-1">{item.label}</div>
                      <div className="text-lg">{item.labelId}</div>
                    </button>
                  ))}
                </div>

                <div className="mt-12 pt-6 border-t border-gray-800">
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-cream-100 transition-colors duration-300"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
