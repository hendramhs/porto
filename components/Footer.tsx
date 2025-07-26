'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="text-4xl font-serif font-bold text-gradient mb-2">
              GET IN CONTACT
            </div>
            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="https://github.com/hendradarmawan" target="_blank" rel="noopener noreferrer" className="hover:text-cream-100 transition-colors duration-300">
                GitHub
              </a>
              <a href="https://linkedin.com/in/hendradarmawan" target="_blank" rel="noopener noreferrer" className="hover:text-cream-100 transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right - Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">
                © 2024 Hendra Darmawan
              </div>
              <div className="text-xs text-gray-500">
                Made with ❤️ in Indonesia
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-dark-200 rounded-full hover:bg-dark-300 transition-colors duration-300 group"
            >
              <ArrowUp size={20} className="text-cream-100 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Bottom - Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <a
            href="mailto:hendra.darmawan@example.com"
            className="text-sm text-gray-400 hover:text-cream-100 transition-colors duration-300"
          >
            hendra.darmawan@example.com
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer