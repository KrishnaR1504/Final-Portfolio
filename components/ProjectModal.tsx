'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Code, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  images?: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  longDescription?: string
  technologies?: string[]
  challenges?: string[]
  solutions?: string[]
  date?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const handleNextImage = () => {
    if (project?.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length)
    }
  }

  const handlePrevImage = () => {
    if (project?.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length)
    }
  }

  const resetImageIndex = () => {
    setCurrentImageIndex(0)
    setIsImageExpanded(false)
  }

  const handleImageClick = () => {
    if (project?.images && project.images.length > 0) {
      setIsImageExpanded(true)
    }
  }

  const handleExpandedImageClose = () => {
    setIsImageExpanded(false)
  }

  useEffect(() => {
    const disableBodyScroll = () => {
      document.body.style.overflow = 'hidden'
    }

    const enableBodyScroll = () => {
      document.body.style.overflow = 'auto'
    }

    if (isImageExpanded) {
      disableBodyScroll()
    } else {
      enableBodyScroll()
    }

    return () => {
      enableBodyScroll()
    }
  }, [isImageExpanded])

  useEffect(() => {
    const disableBodyScroll = () => {
      document.body.style.overflow = 'hidden'
    }

    const enableBodyScroll = () => {
      document.body.style.overflow = 'auto'
    }

    if (isOpen) {
      disableBodyScroll()
    } else {
      enableBodyScroll()
    }

    return () => {
      enableBodyScroll()
    }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-2 sm:inset-4 z-50 flex items-center justify-center p-2 sm:p-4 overflow-x-hidden"
            onClick={(e) => e.stopPropagation()}
            onAnimationStart={() => resetImageIndex()}
          >
            {/* Mobile Close Button (Outside) */}
            <button
              onClick={onClose}
              className="sm:hidden absolute top-2 right-2 p-2 text-white hover:text-gray-300 transition-colors z-[70] bg-black/50 rounded-full flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-dark-800 rounded-2xl max-w-4xl w-full h-[80vh] sm:h-[90vh] overflow-y-auto overflow-x-hidden glass-effect border border-white/10">
              {/* Header */}
              <div className="sticky top-0 bg-dark-800 border-b border-white/10 p-4 sm:p-6 rounded-t-2xl z-20">
                <div className="flex items-center justify-center">
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base hidden sm:block">
                      {project.description}
                    </p>
                  </div>
                  {/* Desktop Close Button (Inside) */}
                  <button
                    onClick={onClose}
                    className="hidden sm:block absolute right-4 p-2 text-white hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors z-[70]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Project Image/Preview */}
                <div className="mb-4 sm:mb-6">
                  <div className="relative h-40 sm:h-48 lg:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/20">
                    {project.images && project.images.length > 0 ? (
                      <>
                        <img 
                          src={project.images[currentImageIndex]} 
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={handleImageClick}
                        />
                        {project.images.length > 1 && (
                          <>
                            {/* Navigation arrows */}
                            <button
                              onClick={handlePrevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={handleNextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            
                            {/* Image indicators */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                              {project.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                            
                            {/* Image counter */}
                            <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                              {currentImageIndex + 1} / {project.images.length}
                            </div>
                            
                            {/* Click to expand indicator */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-xs rounded-full">
                              Click to expand
                            </div>
                          </>
                        )}
                      </>
                    ) : project.image && project.image !== '/api/placeholder/400/250' ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={handleImageClick}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Code className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />
                          </div>
                          <p className="text-sm sm:text-base text-gray-400">Project Preview</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2 justify-center sm:justify-start">
                      <Code className="w-5 h-5 text-primary-400" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 justify-center sm:justify-start">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium bg-primary-500/20 text-primary-400 rounded-full border border-primary-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.longDescription && (
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2 text-center sm:text-left">About This Project</h3>
                        <p className="text-gray-300 leading-relaxed text-center sm:text-left text-sm sm:text-base hidden sm:block">
                          {project.longDescription}
                        </p>
                        <p className="text-gray-300 leading-relaxed text-center sm:text-left text-sm sm:text-base sm:hidden">
                          {(() => {
                            if (project.longDescription.length <= 200) {
                              return project.longDescription;
                            }
                            const truncated = project.longDescription.substring(0, 200);
                            const lastPeriod = truncated.lastIndexOf('.');
                            const lastExclamation = truncated.lastIndexOf('!');
                            const lastQuestion = truncated.lastIndexOf('?');
                            const lastSentenceEnd = Math.max(lastPeriod, lastExclamation, lastQuestion);
                            
                            if (lastSentenceEnd > 0) {
                              return truncated.substring(0, lastSentenceEnd + 1);
                            } else {
                              // If no sentence end found, find the last word boundary
                              const lastSpace = truncated.lastIndexOf(' ');
                              if (lastSpace > 150) {
                                return truncated.substring(0, lastSpace) + '...';
                              } else {
                                return truncated + '...';
                              }
                            }
                          })()}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div>
                    {project.challenges && (
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Key Challenges</h3>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className={`text-gray-300 text-sm flex items-start gap-2 ${index >= 2 ? 'hidden sm:flex' : ''}`}>
                              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.solutions && (
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Solutions Implemented</h3>
                        <ul className="space-y-2">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className={`text-gray-300 text-sm flex items-start gap-2 ${index >= 2 ? 'hidden sm:flex' : ''}`}>
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    View Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Expanded Image Overlay */}
      <AnimatePresence>
        {isImageExpanded && project.images && project.images.length > 0 && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60]"
              onClick={handleExpandedImageClose}
            />

            {/* Expanded Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-4 z-[60] flex items-center justify-center p-4"
            >
              <div className="relative max-w-[75vw] max-h-[75vh] -mt-8">
                {/* Close button */}
                <button
                  onClick={handleExpandedImageClose}
                  className="absolute -top-16 -right-4 p-2 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image */}
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Navigation for multiple images */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Image counter */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

export default ProjectModal 