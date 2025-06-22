'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Github, 
  ExternalLink, 
  Users, 
  User, 
  Code,
  Zap,
  Target,
  Award,
  Globe,
  Server,
  ChevronRight,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import { projects } from '@/lib'

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yParallax3 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const getScaleIcon = (scale: string) => {
    switch (scale) {
      case 'mini': return <Zap className="w-4 h-4" />
      case 'medium': return <Target className="w-4 h-4" />
      case 'capstone': return <Award className="w-4 h-4" />
      default: return <Zap className="w-4 h-4" />
    }
  }

  const getScaleColor = (scale: string) => {
    switch (scale) {
      case 'mini': return 'from-green-500 to-emerald-600'
      case 'medium': return 'from-blue-500 to-cyan-600'
      case 'capstone': return 'from-purple-500 to-pink-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getSocialIcon = (platform: string | undefined) => {
    switch (platform) {
      case 'twitter': return <Twitter className="w-4 h-4" />
      case 'linkedin': return <Linkedin className="w-4 h-4" />
      case 'github': return <Github className="w-4 h-4" />
      case 'instagram': return <Instagram className="w-4 h-4" />
      default: return <ExternalLink className="w-4 h-4" />
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full px-4 py-24 overflow-hidden bg-gradient-to-br from-background via-accent-50/30 to-primary-50/30 dark:from-background dark:via-accent-900/20 dark:to-primary-900/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ 
            y: yParallax1, 
            rotate: rotateParallax,
          }}
          className="absolute top-20 right-16 w-32 h-32 opacity-10"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0L115 54.1591L158.884 19.0983L139.1 71.6687L195.211 69.0983L148.306 100L195.211 130.902L139.1 128.331L158.884 180.902L115 145.841L100 200L85.211 145.841L41.3271 180.902L61.111 128.331L5 130.902L51.9057 100L5 69.0983L61.111 71.6687L41.3271 19.0983L85.211 54.1591L100 0Z" fill="url(#paint0_linear_projects)"/>
            <defs>
              <linearGradient id="paint0_linear_projects" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(99, 102, 241)"/>
                <stop offset="1" stopColor="rgb(168, 85, 247)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          style={{ 
            y: yParallax2, 
            scale: scaleParallax,
          }}
          className="absolute bottom-32 left-12 w-24 h-24 opacity-8"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M156.064 143.936L112.127 100L156.064 56.0636L200 100L156.064 143.936ZM43.9364 143.936L0 100L43.9364 56.0636L87.8728 100L43.9364 143.936ZM100 200L56.0636 156.064L100 112.127L143.936 156.064L100 200ZM100 87.8728L56.0636 43.9364L100 0L143.936 43.9364L100 87.8728Z" fill="url(#paint0_linear_diamond)"/>
            <defs>
              <linearGradient id="paint0_linear_diamond" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(34, 197, 94)"/>
                <stop offset="1" stopColor="rgb(16, 185, 129)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          style={{ 
            y: yParallax3, 
          }}
          className="absolute top-1/3 left-8 w-28 h-28 opacity-6"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="100" height="100" rx="20" fill="url(#paintProjects)" fillOpacity="0.3"/>
            <defs>
              <linearGradient id="paintProjects" x1="50" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(236, 72, 153)"/>
                <stop offset="1" stopColor="rgb(251, 113, 133)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-allura mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-foreground/60 font-inter max-w-3xl mx-auto"
          >
            A showcase of my development journey through innovative solutions and creative implementations
          </motion.p>
        </motion.div>

        {/* Projects Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`group relative overflow-hidden break-inside-avoid mb-6 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative bg-background/40 backdrop-blur-md border border-primary-200/20 dark:border-primary-700/30 rounded-3xl overflow-hidden hover:border-primary-300/40 dark:hover:border-primary-600/50 transition-all duration-500">
                
                {/* Project Image */}
                <div className={`relative overflow-hidden aspect-[3/2]`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 z-10" />
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain bg-white/5 transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'complete' 
                          ? 'bg-green-500/80 text-white border border-green-500/50' 
                          : project.status === 'ongoing'
                          ? 'bg-yellow-500/80 text-white border border-yellow-500/50'
                          : project.status === 'beta'
                          ? 'bg-blue-500/80 text-white border border-blue-500/50'
                          : project.status === 'deprecated'
                          ? 'bg-red-500/80 text-white border border-red-500/50'
                          : 'bg-gray-500/80 text-white border border-gray-500/50'
                      } backdrop-blur-sm`}
                    >
                      {project.status === 'complete' ? '✓ Complete' 
                       : project.status === 'ongoing' ? '⚡ Ongoing'
                       : project.status === 'beta' ? '🚀 Beta'
                       : project.status === 'deprecated' ? '⚠️ Deprecated'
                       : project.status}
                    </motion.div>
                  </div>

                  {/* Scale Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getScaleColor(project.scale)} text-white border border-white/20 backdrop-blur-sm flex items-center gap-1`}
                    >
                      {getScaleIcon(project.scale)}
                      {project.scale.charAt(0).toUpperCase() + project.scale.slice(1)}
                    </motion.div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 dark:bg-background/60 text-foreground border border-primary-200/30 dark:border-primary-700/30 backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute bottom-4 right-4 z-20">
                      <div className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white border border-white/20 backdrop-blur-sm flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className={`p-6 space-y-4 ${project.featured ? 'pb-8' : ''}`}>
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className={`font-bold font-space-grotesk text-foreground group-hover:text-primary-600 transition-colors duration-300 ${
                        project.featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                      }`}>
                        {project.name}
                      </h3>
                      
                      {/* Project Type Icon */}
                      <div className="flex items-center gap-2 text-foreground/60">
                        {project.projectType === 'team' ? (
                          <Users className="w-5 h-5" />
                        ) : (
                          <User className="w-5 h-5" />
                        )}
                        <span className="text-sm font-medium capitalize">
                          {project.projectType}
                        </span>
                      </div>
                    </div>

                    <p className={`text-foreground/70 font-inter leading-relaxed ${
                      project.featured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + techIndex * 0.05 
                          }}
                          className="px-2 py-1 text-xs font-medium bg-primary-100/50 dark:bg-primary-800/30 text-primary-700 dark:text-primary-300 rounded-md border border-primary-200/30 dark:border-primary-700/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Team Members (if team project) */}
                  {project.projectType === 'team' && project.teammates.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Team Members
                      </h4>
                      <div className="space-y-2">
                        {project.teammates.map((teammate, teammateIndex) => (
                          <motion.div
                            key={teammateIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + teammateIndex * 0.1 }}
                            className="flex items-center justify-between group/teammate"
                          >
                            <div className="flex-1">
                              <p className="text-sm font-medium text-foreground/80">{teammate.name}</p>
                              <p className="text-xs text-foreground/60">{teammate.role}</p>
                            </div>
                            <motion.a
                              href={teammate.social}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100/50 dark:bg-primary-800/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200/50 dark:hover:bg-primary-700/50 transition-colors duration-200"
                            >
                              {getSocialIcon(teammate.platform)}
                            </motion.a>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-foreground/10 hover:bg-foreground/20 text-foreground border border-foreground/20 font-medium rounded-xl transition-all duration-300 font-inter text-center text-sm flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    
                    {project.liveUrl ? (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-medium rounded-xl shadow-lg transition-all duration-300 font-inter text-center text-sm flex items-center justify-center gap-2"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    ) : (
                      <motion.div
                        className="flex-1 px-4 py-2 bg-gray-500/20 text-gray-500 border border-gray-500/20 font-medium rounded-xl transition-all duration-300 font-inter text-center text-sm flex items-center justify-center gap-2 cursor-not-allowed"
                      >
                        <Server className="w-4 h-4" />
                        Not Hosted
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.p 
            className="text-xl md:text-2xl text-foreground/60 font-inter mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Interested in collaborating on a project? Let&apos;s build something amazing together.
          </motion.p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px rgba(99, 102, 241, 0.25)" 
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold text-lg rounded-2xl shadow-lg transition-all duration-300 font-inter flex items-center gap-2 mx-auto"
          >
            Let&apos;s Work Together <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects