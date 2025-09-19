'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Send } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Track event to Google Analytics and database
  const trackEvent = async (eventType: string, eventData: any) => {
    // Track to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventType, {
        event_category: 'Contact Form',
        event_label: eventData.name || 'Anonymous',
        value: 1
      })
    }

    // Track to our database
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: eventType,
          message: JSON.stringify(eventData)
        }),
      })
    } catch (error) {
      console.error('Failed to track event:', error)
    }
  }

  // Listen for iframe load to detect submission
  const handleIframeLoad = () => {
    if (formRef.current) {
      setSubmitted(true)
      // Track the contact form submission
      trackEvent('contact_form_submit', {
        name: form.name,
        email: form.email,
        message: form.message.substring(0, 100) + (form.message.length > 100 ? '...' : '')
      })
    }
  }

  return (
    <section id="contact" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Get in touch for opportunities, collaborations, or just to say hi!
          </p>
        </motion.div>

        <div className="max-w-lg sm:max-w-xl mx-auto px-4">
          {submitted ? (
            <div className="glass-effect rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary-400 mb-2">Thank you!</h3>
              <p className="text-gray-300 text-lg">Your message has been sent successfully. I'll get back to you soon.</p>
            </div>
          ) : (
            <form
              ref={formRef}
              action="https://formsubmit.co/krishnavraman@outlook.com"
              method="POST"
              target="hidden_iframe"
              className="glass-effect rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-dark-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-dark-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-dark-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center mx-auto"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Message
              </button>
              {/* Hidden iframe for FormSubmit */}
              <iframe
                name="hidden_iframe"
                style={{ display: 'none' }}
                onLoad={handleIframeLoad}
              />
            </form>
          )}

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <a
              href="https://linkedin.com/in/krishna-raman-17a57a217"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
              aria-label="LinkedIn"
              onClick={() => trackEvent('social_link_click', { platform: 'linkedin' })}
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
            </a>
            <a
              href="https://github.com/krishnavenkataraman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
              aria-label="GitHub"
              onClick={() => trackEvent('social_link_click', { platform: 'github' })}
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
            </a>
            <a
              href="mailto:krishnavraman@outlook.com"
              className="p-3 sm:p-4 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
              aria-label="Email"
              onClick={() => trackEvent('social_link_click', { platform: 'email' })}
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 