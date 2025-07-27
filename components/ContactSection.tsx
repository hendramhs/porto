"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hendra.darmawan@example.com",
      href: "mailto:hendra.darmawan@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hendradarmawan",
      href: "https://linkedin.com/in/hendradarmawan",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hendradarmawan",
      href: "https://github.com/hendradarmawan",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm text-gray-400 mb-4 tracking-wider">
              KONTAK
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gradient mb-8">
              LET'S CONNECT
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Tertarik untuk berkolaborasi atau sekadar ingin berbincang tentang
              teknologi? Saya selalu terbuka untuk diskusi dan peluang baru.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-dark-200 p-8 rounded-lg hover-glow transition-all duration-300 group-hover:bg-dark-300">
                  <div className="flex items-center justify-between mb-4">
                    <method.icon size={24} className="text-cream-100" />
                    <ArrowUpRight
                      size={20}
                      className="text-gray-400 group-hover:text-cream-100 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-cream-100 mb-2">
                    {method.label}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-dark-200 p-12 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-serif font-bold text-cream-100 mb-4">
                Mari Berkolaborasi
              </h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Punya proyek menarik atau ide yang ingin diwujudkan? Mari kita
                diskusikan bagaimana kita bisa bekerja sama.
              </p>
              <a
                href="mailto:hendra.darmawan@example.com"
                className="inline-flex items-center px-8 py-3 bg-cream-100 text-dark-100 rounded-full font-medium hover:bg-cream-200 transition-colors duration-300"
              >
                Kirim Email
                <ArrowUpRight size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cream-100 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cream-100 rounded-full opacity-3 blur-3xl" />
      </div>
    </section>
  );
};

export default ContactSection;
