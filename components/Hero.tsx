'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, Download, Eye } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Placeholder path
    link.download = 'Krishna_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-primary-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            {/* Hi, I'm{' '} */}
            <motion.span 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%]"
            >
              Krishna
            </motion.span>{' '}
            <motion.span 
              animate={{
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_200%]"
            >
              Raman
            </motion.span> 
          </motion.h1>

          {/* Typewriter animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 h-12 sm:h-16 lg:h-20 flex items-center justify-center px-2"
          >
            <TypeAnimation
              sequence={[
                'Software Dev • AI Enthusiast',
                2000,
                'Crafting Code • Creating Impact',
                2000,
                'Software Engineer @ HubSpot',
                2000,
                'Building With Purpose & Precision',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text font-semibold"
            />
          </motion.div>

          {/* Description - Mobile vs Desktop versions */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
          >
            {/* Mobile version (shorter) */}
            <span className="block sm:hidden">
            Goal-oriented full-stack developer and AI enthusiast with experience building scalable 
            web apps, automation tools, and intelligent solutions. 
            </span>
            {/* Desktop version (full) */}
            <span className="hidden sm:block">
            Goal-oriented full-stack developer and AI enthusiast with experience building 
            scalable web apps, automation tools, and intelligent solutions. Currently working 
            as a Software Engineer at HubSpot, where I apply my expertise in Python, C++, Java, 
            React, and machine learning to develop cutting-edge real-world applications.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <button
              onClick={scrollToProjects}
              className="button-primary flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              View My Work
            </button>
            <button
              onClick={downloadResume}
              className="button-secondary flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </button>
          </motion.div>

          {/* Tech stack preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 px-4"
          >
            <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">Python</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">React</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">Java</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">C++</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">AI/ML</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full glass-effect hover:bg-white/20 transition-colors flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 