'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Code } from 'lucide-react'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const projects = [
    {
      id: 6,
      title: 'ExpenseEase - Finance Tracker',
      description: 'A sleek, Android-native expense tracker built using Jetpack Compose. Users can log and categorize expenses, attach receipt images, and view dynamic daily/monthly breakdowns through intuitive graphs.',
      longDescription: 'ExpenseEase is a comprehensive personal finance management app that simplifies expense tracking and budgeting. Built with modern Android development practices using Jetpack Compose, the app provides an intuitive interface for users to log expenses with categories, dates, and notes. It features dynamic dashboard toggles for day/month views, custom expense types, and real-time visual insights through interactive graphs. The app also supports image uploads for receipts, making expense documentation effortless.',
      tags: ['Android', 'Jetpack Compose', 'Kotlin'],
      image: '/expenseease-dashboard.png',
      images: [
        '/expenseease-dashboard.png',
        '/expenseease-dashboard2.png'
      ],
      liveUrl: 'https://1drv.ms/v/c/D30CBD899B5D79CA/Ebu7ukRlVs1AsAS7dfrE8NcB_062qaV5YX4ayOMO6GzC7w?e=h86vEj',
      githubUrl: 'https://github.com/krishnavenkataraman/expenseease',
      featured: true,
      challenges: [
        'Designing an intuitive UI for expense logging and categorization',
        'Implementing real-time data visualization with dynamic graphs',
        'Managing image uploads and storage for receipt attachments',
        'Creating responsive dashboard toggles for different time periods'
      ],
      solutions: [
        'Used Jetpack Compose for modern, declarative UI development',
        'Implemented Chart libraries for dynamic daily/monthly breakdowns',
        'Integrated image picker and storage for receipt management',
        'Built custom dashboard components with state management for view toggles'
      ]
    },
    {
      id: 3,
      title: 'Wedding Services Project',
      description: 'Created a dynamic full-stack website using JavaScript for interactive frontend and PHP for server-side management, with filtering features and location-based services using Leaflet JS.',
      longDescription: 'A comprehensive wedding services platform that connects couples with vendors. Features include advanced search and filtering, location-based services, vendor profiles, booking management, and a review system.',
      tags: ['JavaScript', 'PHP', 'Leaflet JS', 'Full-Stack'],
      image: '/wedding-home.png',
      images: [
        '/wedding-home.png',
        '/wedding-venue.png',
        '/wedding-booking.png',
        '/wedding-dashboard.png',
        '/wedding-map.png'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/krishnavenkataraman/wedding-services',
      featured: false,
      challenges: [
        'Managing complex vendor-customer interactions',
        'Implementing location-based search and filtering',
        'Handling real-time booking and availability updates',
        'Ensuring data security for user information'
      ],
      solutions: [
        'Built a robust booking system with real-time availability checks',
        'Integrated Leaflet JS for interactive maps and location services',
        'Implemented AJAX for dynamic content updates without page refresh',
        'Added comprehensive input validation and SQL injection protection'
      ]
    },
    {
      id: 4,
      title: 'Java Store Management System',
      description: 'Designed an inventory management system with Java, utilizing HashMaps and ArrayLists for data organization, applying OOP principles to improve modularity by 25%.',
      longDescription: 'A comprehensive retail management system that handles inventory tracking, sales processing, customer management, and reporting. The system is designed with scalability and maintainability in mind.',
      tags: ['Java', 'OOP', 'HashMaps', 'ArrayLists'],
      image: '/java-store-sales.png',
      images: [
        '/java-store-sales.png',
        '/java-store-main.png',
        '/java-store-inventory.png',
        '/java-store-customer.png',
        '/java-store-dashboard.png'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/krishnavenkataraman/store-management',
      featured: false,
      challenges: [
        'Designing an efficient data structure for large inventory',
        'Implementing complex business logic for sales and discounts',
        'Creating a user-friendly interface for store staff',
        'Ensuring data consistency across multiple operations'
      ],
      solutions: [
        'Used HashMaps for O(1) lookup performance on inventory items',
        'Implemented the Strategy pattern for flexible discount calculations',
        'Created a console-based interface with clear navigation',
        'Added transaction management to prevent data corruption'
      ]
    },
    {
      id: 1,
      title: 'AI Sentiment Analysis Tool',
      description: 'Developed a Python-based tool leveraging machine learning (NLTK, spaCy) for real-time sentiment analysis, achieving 85% accuracy with a Flask dashboard for actionable marketing insights.',
      longDescription: 'This project involved building a comprehensive sentiment analysis system that can process large volumes of text data and provide real-time insights. The system uses advanced NLP techniques to understand context and nuance in language, making it particularly effective for social media monitoring and customer feedback analysis.',
      tags: ['Python', 'NLTK', 'spaCy', 'Flask'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: 'https://github.com/krishnavenkataraman/sentiment-analysis',
      featured: true,
      challenges: [
        'Handling large-scale text processing efficiently',
        'Achieving high accuracy across different languages and contexts',
        'Real-time processing of streaming data',
        'Creating an intuitive dashboard for non-technical users'
      ],
      solutions: [
        'Implemented batch processing with Redis for improved performance',
        'Used ensemble methods combining multiple ML models for better accuracy',
        'Built a scalable microservices architecture',
        'Designed a responsive web interface with real-time updates'
      ]
    },
    {
      id: 2,
      title: 'Embedded Systems Project',
      description: 'Built an automated parking management system using Arduino and finite state machines (FSM), enabling efficient vehicle tracking and space allocation.',
      longDescription: 'An IoT-based smart parking solution that uses sensors and microcontrollers to automatically detect vehicle presence, manage parking space allocation, and provide real-time availability updates. The system reduces parking time and improves user experience.',
      tags: ['Arduino', 'C++', 'Embedded Systems', 'FSM'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: 'https://github.com/krishnavenkataraman/parking-system',
      featured: true,
      challenges: [
        'Designing reliable sensor integration for vehicle detection',
        'Implementing efficient state management for parking operations',
        'Ensuring system reliability in various environmental conditions',
        'Creating a user-friendly interface for parking attendants'
      ],
      solutions: [
        'Used ultrasonic sensors with redundancy for accurate detection',
        'Implemented a robust FSM with error handling and recovery',
        'Added environmental protection and calibration features',
        'Built a simple LCD interface with intuitive controls'
      ]
    },
    {
      id: 5,
      title: 'Neuro Notion - AI Platform',
      description: 'Developed innovative AI-powered digital solutions for adults with ADHD, building interactive frontend components using React.js and Next.js with server-side rendering.',
      longDescription: 'An AI-powered platform designed specifically for adults with ADHD, featuring task management, focus tracking, and personalized productivity tools. The platform uses machine learning to adapt to individual user patterns.',
      tags: ['React.js', 'Next.js', 'AI', 'SSR', 'SSG'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: 'https://github.com/krishnavenkataraman/neuro-notion',
      featured: false,
      challenges: [
        'Creating an accessible interface for users with ADHD',
        'Implementing AI algorithms for personalized recommendations',
        'Ensuring fast loading times with SSR and SSG',
        'Building a responsive design that works across all devices'
      ],
      solutions: [
        'Used color psychology and simplified UI patterns for better focus',
        'Implemented collaborative filtering for personalized suggestions',
        'Optimized with Next.js SSR/SSG for improved performance',
        'Built a mobile-first responsive design with touch-friendly controls'
      ]
    }
  ]

  // Show only 3 projects on mobile, all on larger screens
  const mobileProjects = projects.slice(0, 3)
  const desktopProjects = projects

  return (
    <section id="projects" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          Built with <span className="gradient-text">Code</span> & <span className="gradient-text">Curiosity</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, AI, and mobile development.
          </p>
        </motion.div>

        {/* Mobile Projects (4 cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 sm:hidden">
          {mobileProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl glass-effect card-hover cursor-pointer text-center sm:text-left flex flex-col h-full ${
                project.featured ? 'ring-2 ring-primary-500/50' : ''
              }`}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-dark-800 via-dark-900 to-primary-900/10">
                {project.image && project.image !== '/api/placeholder/400/250' ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400">Project Preview</p>
                    </div>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-4 mb-4 sm:mb-6 justify-center sm:justify-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(project)
                    }}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg hover:bg-primary-500/20 transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">View Details</span>
                    <span className="sm:hidden">Details</span>
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">GitHub</span>
                    <span className="sm:hidden">Code</span>
                  </a>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Desktop Projects (all 6 cards) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {desktopProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl glass-effect card-hover cursor-pointer text-center sm:text-left flex flex-col h-full ${
                project.featured ? 'ring-2 ring-primary-500/50' : ''
              }`}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-dark-800 via-dark-900 to-primary-900/10">
                {project.image && project.image !== '/api/placeholder/400/250' ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400">Project Preview</p>
                    </div>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-primary-400 transition-colors text-center">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 text-center">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-4 mb-4 sm:mb-6 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(project)
                    }}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg hover:bg-primary-500/20 transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">View Details</span>
                    <span className="sm:hidden">Details</span>
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">GitHub</span>
                    <span className="sm:hidden">Code</span>
                  </a>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="https://github.com/krishnavenkataraman"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">View More on GitHub</span>
            <span className="sm:hidden">View More</span>
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default Projects 