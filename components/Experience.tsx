'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, Building, Users, Music, Award } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      title: 'Software Engineering Placement',
      company: 'HubSpot',
      location: 'London, United Kingdom',
      period: 'Jul 2025 - Present',
      description: 'Working as a Software Engineer at HubSpot, where I leverage my technical skills to build and improve cutting-edge software applications.',
      achievements: [
        'Engaging in collaborative projects and applying agile methodologies',
        'Supporting the development and maintenance of HubSpot\'s innovative products',
        'Leveraging technical skills to build and improve cutting-edge software applications',
        'Applying machine learning and AI expertise to enhance product features'
      ],
      tags: ['Software Engineering', 'Agile', 'Collaboration'],
      icon: Building,
      type: 'work'
    },
    {
      id: 2,
      title: 'Full-Stack Software Developer Intern',
      company: 'Neuro Notion',
      location: 'United Kingdom',
      period: 'Apr 2025 - Jun 2025',
      description: 'Developed innovative AI-powered digital solutions for adults with ADHD, improving user engagement and creating impactful features for the life management platform.',
      achievements: [
        'Collaborated closely with senior developers to build highly interactive frontend components using React.js and Next.js',
        'Integrated complex API services to seamlessly connect frontend and back-end',
        'Implemented server-side rendering (SSR) and static site generation (SSG) to optimize SEO and page load time',
        'Enhanced overall user experience and platform performance'
      ],
      tags: ['React.js', 'Next.js', 'AI', 'SSR', 'SSG'],
      icon: Building,
      type: 'internship'
    },
    {
      id: 3,
      title: 'Data Analytics and Technology Intern',
      company: 'Loughborough University',
      location: 'United Kingdom',
      period: 'Jul 2024 - Sept 2024',
      description: 'Analysed placement trends and managed comprehensive database using advanced Excel functions, improving data accuracy and reporting efficiency.',
      achievements: [
        'Automated routine administrative tasks using Microsoft Power Automate, enhancing productivity by 40%',
        'Developed and visualised data by creating detailed charts and graphs for student destination statistics',
        'Updated career network presentations with comprehensive data insights',
        'Improved data accuracy and reporting efficiency through advanced Excel functions'
      ],
      tags: ['Data Analytics', 'Excel', 'Power Automate'],
      icon: Building,
      type: 'internship'
    },
    {
      id: 4,
      title: 'Software Solutions Development Intern',
      company: 'Moebius Management Solutions',
      location: 'Dubai, UAE',
      period: 'Jul 2023 - Sept 2023',
      description: 'Designed, developed, and deployed automated software solutions to streamline business processes and improve operational efficiency.',
      achievements: [
        'Utilized cloud computing platforms (AWS, Azure) to deploy scalable web applications, reducing infrastructure costs by 20%',
        'Contributed to the design and optimization of internal dashboards using Power BI and Python',
        'Implemented real-time data analytics and reporting solutions',
        'Streamlined business processes through automated software solutions'
      ],
      tags: ['AWS', 'Azure', 'Power BI', 'Cloud Compute'],
      icon: Building,
      type: 'internship'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'border-primary-500 bg-primary-500/10'
      case 'work':
        return 'border-green-500 bg-green-500/10'
      case 'leadership':
        return 'border-purple-500 bg-purple-500/10'
      case 'entrepreneurship':
        return 'border-orange-500 bg-orange-500/10'
      default:
        return 'border-gray-500 bg-gray-500/10'
    }
  }

  return (
    <section id="experience" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            My professional journey, internships, and leadership experiences that have shaped my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Remove the single timeline line */}

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row md:items-start gap-4 sm:gap-8 text-center sm:text-left"
              >
                {/* Timeline dot - mobile: top, desktop: left */}
                <div className="relative z-10 flex-shrink-0 hidden sm:flex justify-center md:justify-start" style={{ minWidth: '4rem' }}>
                  {/* Per-icon timeline line segment: start at bottom of circle, extend down 80% of card height */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-0 w-0.5" style={{ top: '100%', height: '400%' }}>
                    <div className="w-full h-full bg-gradient-to-b from-primary-500 to-transparent" />
                  </div>
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 ${getTypeColor(experience.type)} flex items-center justify-center relative bg-dark-800 z-10`}>
                    <experience.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-effect rounded-xl p-4 sm:p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm justify-center sm:justify-start text-center sm:text-left">
                        <div className="flex items-center gap-1">
                          <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                          {experience.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {experience.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {experience.period}
                        </div>
                      </div>
                    </div>
                    {/* Type badge */}
                    <span className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full capitalize self-center sm:self-auto ${
                      experience.type === 'internship' ? 'bg-primary-500/20 text-primary-400' :
                      experience.type === 'work' ? 'bg-green-500/20 text-green-400' :
                      experience.type === 'leadership' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {experience.type}
                    </span>
                  </div>

                  <p className="text-white mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1 text-left">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-gray-200 flex items-start gap-2">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-400 rounded-full border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 