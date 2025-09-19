'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/krishnavenkataraman',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/krishna-raman-17a57a217/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:krishnavraman@outlook.com',
      icon: Mail,
      color: 'hover:text-red-400'
    }
  ]

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-white">Krishna Raman</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Computer Science & AI student passionate about creating innovative solutions and pushing the boundaries of technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-white/5 rounded-lg text-gray-400 transition-all duration-300 hover:bg-white/10 flex items-center justify-center ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 mt-8 pt-6 text-center"
        >
          <div>
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Krishna Venkata Raman. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 