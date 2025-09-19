'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Brain, Users, Dumbbell, Music, Award, Monitor, Database, Cloud, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

// Custom hook for animated counting
const useCountUp = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    const timer = setTimeout(() => {
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(end * easeOutQuart)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)
  }, [inView, end, duration, delay])

  return { count, ref }
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [techIndices, setTechIndices] = useState([0, 0, 0, 0])
  const [funFactIndex, setFunFactIndex] = useState(0)

  const funFacts = [
    {
      icon: Brain,
      title: 'Self-Taught in React & Supabase',
      description: 'Learned React and Supabase in 2 weeks to build and launch a complete passion project.'
    },
    {
      icon: Users,
      title: 'Scaled an IG Page',
      description: 'Grew a brand-new Instagram account from 0 to 2600 followers in just 24 hours using reels and DMs.'
    },
    {
      icon: Award,
      title: 'Cricket League',
      description: 'Compete in weekend league fixtures and co-organise inter-society and indoor cricket tournaments.'
    }
  ]

  const techCategories = [
    {
      name: 'Frontend',
      icon: Monitor,
      color: 'text-blue-400',
      technologies: ['React', 'HTML/CSS', 'JavaScript', 'Next.js']
    },
    {
      name: 'AI/ML',
      icon: Brain,
      color: 'text-pink-400',
      technologies: ['Python', 'TensorFlow', 'spaCy', 'NLTK']
    },
    {
      name: 'Backend',
      icon: Database,
      color: 'text-green-400',
      technologies: ['Java', 'C++', 'SQL', 'PHP']
    },
    {
      name: 'Tools',
      icon: Cloud,
      color: 'text-purple-400',
      technologies: ['Git', 'Azure', 'Power BI', 'AWS']
    }
  ]

  // Auto-scroll effect for tech categories
  useEffect(() => {
    if (!inView) return

    const interval = setInterval(() => {
      setTechIndices(prev =>
        prev.map((index, i) =>
          (index + 1) % techCategories[i].technologies.length
        )
      )
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [inView, techCategories])

  // Auto-scroll effect for fun facts
  useEffect(() => {
    if (!inView) return

    const interval = setInterval(() => {
      setFunFactIndex(prev => (prev + 1) % funFacts.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [inView])

  // Animated stats
  const stats = [
    { number: 9, label: 'Tech Stacks' },
    { number: 11, label: 'Projects Completed' },
    { number: 6, label: 'Internships' },
    { number: 5, label: 'Certifications' },
  ]

  const { count: languagesCount, ref: languagesRef } = useCountUp(9, 1500, 1200)
  const { count: projectsCount, ref: projectsRef } = useCountUp(11, 1500, 1300)
  const { count: internshipsCount, ref: internshipsRef } = useCountUp(6, 1500, 1400)
  const { count: leadershipCount, ref: leadershipRef } = useCountUp(4, 1500, 1500)

  const countRefs = [languagesRef, projectsRef, internshipsRef, leadershipRef]
  const counts = [languagesCount, projectsCount, internshipsCount, leadershipCount]

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Get to know me better
          </p>
          {/* Mobile bio section appears first after title */}
          <div className="block sm:hidden mt-8">
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Full-Stack Developer & AI Enthusiast</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
              <p>
                Currently a Software Engineer at HubSpot, I work on scalable web apps using agile methods and modern development practices. I'm especially interested in blending software engineering with AI to solve real-world problems.
              </p>
              <p>
              Outside of tech, I stay actively engaged in university life through leadership, event management, and community initiatives that keep me grounded and collaborative.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start flex-col-reverse lg:flex-row">
          {/* Left side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white hidden sm:block">
              Full-Stack Developer & AI Enthusiast
            </h3>
            <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base hidden sm:block">
              <p>
                I'm a goal-driven full-stack developer and AI enthusiast with a passion for building impactful, real-world software solutions. Proficient in Python, C++, Java, C#, Swift, and SQL, I enjoy turning complex ideas into elegant code and practical tools.
              </p>
              <p>
                Currently working as a Software Engineer at HubSpot, I apply agile methodologies and advanced programming techniques to develop, optimize, and scale cutting-edge web applications. My interests lie at the intersection of software engineering and AI, where I explore how machine learning models can solve high-impact challenges.
              </p>
              <p>
                Beyond tech, I actively contribute to student life as Chair of the Indian Society and Badminton Coordinator for Social Sport — roles that have sharpened my leadership, event planning, and community engagement skills. My academic focus spans core modules such as Embedded Systems, Software Engineering, Machine Learning, and Web Development.
              </p>
            </div>
          </motion.div>

          {/* Right side - Skills & Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center sm:text-left"
          >
            {/* Enhanced Tech Stack with Carousel */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {techCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + categoryIndex * 0.1 }}
                    className="space-y-2"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-2 mb-2 justify-center text-center sm:justify-start sm:text-left">
                      <category.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${category.color}`} />
                      <span className="text-sm sm:text-base font-medium text-white">{category.name}</span>
                    </div>

                    {/* Carousel Tech Chip */}
                    <motion.div
                      key={techIndices[categoryIndex]}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <Code className={`w-4 h-4 sm:w-5 sm:h-5 ${category.color} flex-shrink-0`} />
                      <span className="text-sm sm:text-base font-medium text-gray-300">
                        {category.technologies[techIndices[categoryIndex]]}
                      </span>
                      <div className="ml-auto flex gap-1">
                        {category.technologies.map((_, index) => (
                          <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${index === techIndices[categoryIndex]
                                ? (category.color === 'text-blue-400' ? 'bg-blue-400' :
                                  category.color === 'text-pink-400' ? 'bg-pink-400' :
                                    category.color === 'text-green-400' ? 'bg-green-400' :
                                      category.color === 'text-purple-400' ? 'bg-purple-400' : 'bg-primary-400')
                                : 'bg-white/20'
                              }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun Facts Carousel */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Beyond the Résumé</h4>
              <motion.div
                key={funFactIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3 p-4 sm:p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-32 sm:h-36"
              >
                {(() => {
                  const currentFact = funFacts[funFactIndex];
                  const IconComponent = currentFact.icon;
                  return (
                    <>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-h-0">
                        <h5 className="font-medium text-white text-base sm:text-lg mb-2 line-clamp-2">{currentFact.title}</h5>
                        <p className="text-sm sm:text-base text-gray-400 line-clamp-3 overflow-hidden">{currentFact.description}</p>
                      </div>
                      {/* Progress indicators */}
                      <div className="flex flex-col gap-1 ml-2 flex-shrink-0">
                        {funFacts.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${index === funFactIndex
                              ? 'bg-primary-400'
                              : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-4 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center" ref={countRefs[index]}>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1, type: 'spring' }}
                className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2"
              >
                {counts[index]}+
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 