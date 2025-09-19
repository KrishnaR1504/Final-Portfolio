'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Placeholder path
    link.download = 'Krishna_Resume.pdf'
    link.click()
  }

  return (
    <section id="resume" className="section-padding bg-dark-900">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Download my resume or preview it below.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-4 sm:gap-6 px-4">
          <button
            onClick={downloadResume}
            className="button-primary flex items-center gap-2 mb-4 w-full sm:w-auto justify-center"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Download Resume
          </button>

          {/* Optional embedded preview */}
          <div className="w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden glass-effect border border-white/10">
            <div className="w-full h-full overflow-hidden">
              <iframe
                src="/resume.pdf"
                title="Resume Preview"
                className="w-[150%] h-[150%] sm:w-full sm:h-full min-h-[300px] sm:min-h-[400px] transform -translate-x-1/3 -translate-y-0 sm:translate-x-0 sm:translate-y-0 origin-top-left"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume 