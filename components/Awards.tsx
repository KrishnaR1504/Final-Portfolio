'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Trophy, Star, Medal, Crown, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const Awards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const awards = [
    {
      id: 1,
      title: 'Ethical Hacking Certified',
      description: 'Completed professional training in ethical hacking and cybersecurity with credential ID 3253361.',
      year: '2024',
      icon: Star,
      category: 'Cybersecurity',
      color: 'from-yellow-500 to-pink-500'
    },
    {
      id: 2,
      title: 'F1 in Schools – Top 10',
      description: 'Led a team to the Top 10 nationally in the F1 in Schools STEM Challenge, excelling in engineering design and teamwork.',
      year: '2022',
      icon: Award,
      category: 'STEM Innovation',
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Toastmasters Best Speaker & Debater',
      description: 'Awarded Best Evaluator, Best Speaker, and 1st Place Debater by Toastmasters International.',
      year: '2021',
      icon: Zap,
      category: 'Communication',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Delegate – ILMUNC 2019 (France)',
      description: 'Represented France at Ivy League Model UN Conference, recognized by the University of Pennsylvania.',
      year: '2019',
      icon: Crown,
      category: 'Leadership & Diplomacy',
      color: 'from-blue-500 to-green-500'
    },
    {
      id: 5,
      title: 'UKMT Silver Medalist',
      description: 'Received the Silver Award in the UK Mathematics Trust Challenge for exceptional problem-solving and logical reasoning.',
      year: '2020',
      icon: Medal,
      category: 'Mathematics',
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 6,
      title: 'High Distinction – ACER Benchmark',
      description: 'Earned High Distinction in international tests across Mathematics, Science, and English.',
      year: '2019–2020',
      icon: Trophy,
      category: 'Scholarly Achievement',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 7,
      title: 'Google Digital Marketing Certification',
      description: 'Earned industry-recognized certification with Credential ID NWU XX8 0MB, demonstrating strategic marketing and analytics expertise.',
      year: '2023',
      icon: Trophy,
      category: 'Certification',
      color: 'from-yellow-500 to-pink-500'
    }
  ]

  const nextAward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length)
  }

  const prevAward = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + awards.length) % awards.length)
  }

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovered, awards.length])

  // Reset auto-scroll timer on manual navigation
  const handleManualNav = (navFn: () => void) => {
    navFn()
    setIsHovered(true)
    setTimeout(() => setIsHovered(false), 1000)
  }

  return (
    <section id="awards" className="section-padding bg-dark-800">
      <div className="container-custom relative overflow-visible py-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Awards</span> & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Highlights from my academic and professional journey, showcasing achievements and milestones.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="sm:hidden">
          <div className="relative max-w-sm mx-auto px-4 h-96">
            {/* Mobile Single Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="glass-effect rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-primary-500/20 w-full max-h-full overflow-y-auto">
                {/* Award Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${awards[currentIndex].color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  {(() => {
                    const IconComponent = awards[currentIndex].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                {/* Category Badge */}
                <div className="text-center mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/20">
                    {awards[currentIndex].category}
                  </span>
                </div>
                {/* Award Title */}
                <h3 className="text-xl font-bold text-white text-center mb-3">
                  {awards[currentIndex].title}
                </h3>
                {/* Award Description */}
                <p className="text-gray-400 text-sm text-center leading-relaxed mb-4">
                  {awards[currentIndex].description}
                </p>
                {/* Year */}
                <div className="text-center">
                  <span className="text-primary-400 font-bold text-lg">
                    {awards[currentIndex].year}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden sm:block">
          <div
            className="relative max-w-4xl mx-auto px-4 flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ height: '440px', '--card-width': '20rem', '--card-gap': '1.5rem' } as React.CSSProperties }
          >
            {/* Desktop Navigation Buttons */}
            <button
              onClick={() => handleManualNav(prevAward)}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous award"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Desktop Sliding Carousel Track */}
            <motion.div
              className="flex items-center gap-0 sm:gap-[var(--card-gap)] lg:gap-[var(--card-gap)]"
              animate={{
                x: `calc(50% - (var(--card-width) * 0.5) - (${currentIndex} * (var(--card-width) + var(--card-gap))))`
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ minWidth: '100%' }}
            >
              {awards.map((award, index) => {
                let offset = index - currentIndex;
                if (offset < -Math.floor(awards.length / 2)) offset += awards.length;
                if (offset > Math.floor(awards.length / 2)) offset -= awards.length;
                const isCenter = offset === 0;
                const isSide = Math.abs(offset) === 1;
                const IconComponent = award.icon;
                return (
                  <div
                    key={award.id}
                    className={`transition-all duration-500 flex-shrink-0 w-full sm:w-[var(--card-width)] lg:w-[var(--card-width)] mx-0 sm:mx-0 ${
                      isCenter ? 'z-20 scale-110 opacity-100' : isSide ? 'z-10 scale-95 opacity-70' : 'hidden sm:block scale-90 opacity-0 pointer-events-none'
                    }`}
                    style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
                  >
                    <div className={`glass-effect rounded-xl p-8 sm:p-6 border border-white/10 transition-all duration-300 ${isCenter ? 'hover:border-white/20 hover:shadow-2xl hover:shadow-primary-500/20' : ''}`}>
                      {/* Award Icon with Gradient Background */}
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      {/* Category Badge */}
                      <div className="text-center mb-6">
                        <span className="px-4 py-2 text-sm font-medium bg-white/10 text-gray-300 rounded-full border border-white/20">
                          {award.category}
                        </span>
                      </div>
                      {/* Award Title */}
                      <h3 className="text-2xl sm:text-xl font-bold text-white text-center mb-4">
                        {award.title}
                      </h3>
                      {/* Award Description */}
                      <p className="text-gray-400 text-base sm:text-sm text-center leading-relaxed mb-6 max-w-2xl mx-auto">
                        {award.description}
                      </p>
                      {/* Year */}
                      <div className="text-center">
                        <span className="text-primary-400 font-bold text-xl">
                          {award.year}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <button
              onClick={() => handleManualNav(nextAward)}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next award"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Desktop Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-3 mt-8"
          >
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNav(() => setCurrentIndex(index))}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8 scale-110'
                    : 'bg-white/20 hover:bg-white/40 hover:scale-110'
                }`}
                aria-label={`Go to award ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Award Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-gray-500">
            {currentIndex + 1} of {awards.length}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Awards 