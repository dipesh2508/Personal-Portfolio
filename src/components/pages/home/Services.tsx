'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Monitor, Zap, Palette, Rocket, Settings, TrendingUp, User, Users, ClipboardList, TestTube, Wrench, Sparkles } from 'lucide-react'
import tryNTestLogo from '@/assets/Logo Full.png'

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Enhanced Parallax transforms
  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yParallax3 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const yParallax4 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const rotateBottomLeft = useTransform(scrollYProgress, [0, 1], [-45, 315])

    const services = [
    // Row 1: Frontend (wide), Backend (wide), UI/UX (slim)
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Modern, responsive web applications using React, Next.js, TypeScript, and cutting-edge CSS frameworks.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-500 to-purple-600",
      row: 1,
      span: "equal" // Wide width (5/12 columns)
    },
    {
      icon: Zap,
      title: "Backend Development", 
      description: "Scalable server-side solutions with Node.js, databases, and cloud infrastructure.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-600",
      row: 1,
      span: "equal" // Wide width (5/12 columns)
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design creating intuitive interfaces with modern aesthetics.",
      technologies: ["Figma", "Framer", "Design Systems", "Prototyping"],
      gradient: "from-pink-500 to-rose-600",      row: 1,
      span: "slim" // Slim width (2/12 columns)
    },
    // Row 2: Custom Solutions (3/12), Performance Optimization (4/12), Full-Stack (5/12)
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored web solutions for your specific business needs.",
      technologies: ["Custom APIs", "Automation", "Third-party Integration"],
      gradient: "from-orange-500 to-amber-600",
      row: 2,
      span: "small" // 3/12 columns
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Speed up your website with advanced optimization techniques.",
      technologies: ["Core Web Vitals", "SEO", "Code Splitting", "CDN"],
      gradient: "from-cyan-500 to-teal-600",
      row: 2,
      span: "medium" // 4/12 columns
    },
    {
      icon: Rocket,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications combining beautiful frontends with powerful backend systems.",
      technologies: ["MERN Stack", "Next.js", "Prisma", "tRPC"],
      gradient: "from-indigo-500 to-blue-600",
      row: 2,
      span: "large" // 5/12 columns
    }
  ]

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative min-h-screen w-full px-4 py-20 overflow-hidden bg-gradient-to-br from-background via-accent-50/30 to-primary-50/30 dark:from-background dark:via-accent-900/20 dark:to-primary-900/20"
    >
      {/* Enhanced Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Geometric Shapes with Strong Parallax */}        <motion.div
          style={{ 
            y: yParallax1, 
            rotate: rotateParallax,
            opacity: opacityParallax 
          }}
          className="absolute top-20 right-16 w-40 h-40"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_105_560)">
              <path fillRule="evenodd" clipRule="evenodd" d="M200 100.671L100 0L0 100.671H98.6668L0 200H200L101.333 100.671H200Z" fill="url(#paint0_linear_105_560)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_105_560" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(172, 170, 255)" stopOpacity="0.4"/>
                <stop offset="1" stopColor="rgb(192, 232, 255)" stopOpacity="0.4"/>
              </linearGradient>
              <clipPath id="clip0_105_560">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>        
        <motion.div
          style={{ 
            y: yParallax2, 
            scale: scaleParallax,
            opacity: opacityParallax, 
            rotate: rotateBottomLeft,
          }}
          className="absolute bottom-32 left-12 w-32 h-32"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_231_648)">
              <path fillRule="evenodd" clipRule="evenodd" d="M100 33.6449C92.7738 33.6449 86.9159 39.5028 86.9159 46.729H53.271C53.271 20.9213 74.1923 0 100 0C125.808 0 146.729 20.9213 146.729 46.729C146.729 72.5367 125.808 93.4579 100 93.4579V59.8131C107.226 59.8131 113.084 53.9551 113.084 46.729C113.084 39.5028 107.226 33.6449 100 33.6449ZM166.355 100C166.355 92.7738 160.497 86.9159 153.271 86.9159L153.271 53.271C179.079 53.271 200 74.1923 200 100C200 125.808 179.079 146.729 153.271 146.729C127.463 146.729 106.542 125.808 106.542 100H140.187C140.187 107.226 146.045 113.084 153.271 113.084C160.497 113.084 166.355 107.226 166.355 100ZM46.729 113.084C39.5028 113.084 33.6449 107.226 33.6449 100C33.6449 92.7738 39.5028 86.9159 46.729 86.9159C53.9551 86.9159 59.8131 92.7738 59.8131 100H93.4579C93.4579 74.1923 72.5367 53.271 46.729 53.271C20.9213 53.271 0 74.1923 0 100C0 125.808 20.9213 146.729 46.729 146.729V113.084ZM100 166.355C107.226 166.355 113.084 160.497 113.084 153.271H146.729C146.729 179.079 125.808 200 100 200C74.1923 200 53.271 179.079 53.271 153.271C53.271 127.463 74.1923 106.542 100 106.542L100 140.187C92.7738 140.187 86.9159 146.045 86.9159 153.271C86.9159 160.497 92.7738 166.355 100 166.355Z" fill="url(#paint0_linear_231_648)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_231_648" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(184, 219, 252)" stopOpacity="0.4"/>
                <stop offset="1" stopColor="rgb(248, 251, 254)" stopOpacity="0.4"/>
              </linearGradient>
              <clipPath id="clip0_231_648">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          style={{ 
            y: yParallax3, 
            rotate: rotateParallax,
            opacity: opacityParallax 
          }}
          className="absolute top-1/3 left-1/4 w-28 h-28"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M32 100.641C32 68.391 54.1651 41.3515 84 34.1102V1.28125C36.3772 8.98855 0 50.5392 0 100.641C0 150.742 36.3772 192.293 84 200V167.171C54.1651 159.93 32 132.89 32 100.641ZM200 100.641C200 150.742 163.623 192.293 116 200V167.171C145.835 159.93 168 132.89 168 100.641C168 68.391 145.835 41.3515 116 34.1102V1.28125C163.623 8.98855 200 50.5392 200 100.641Z" fill="url(#paint0_linear_231_555)"/>
            <defs>
              <linearGradient id="paint0_linear_231_555" x1="157.5" y1="33.0763" x2="44.7421" y2="148.561" gradientUnits="userSpaceOnUse">
                <stop offset="0.0509862" stopColor="rgb(255, 182, 225)" stopOpacity="0.4"/>
                <stop offset="1" stopColor="rgb(251, 227, 234)" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          style={{ 
            y: yParallax4, 
            scale: scaleParallax,
            opacity: opacityParallax 
          }}
          className="absolute top-2/3 right-1/4 w-24 h-24"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="100" height="100" rx="20" fill="url(#paintServices4)" fillOpacity="0.3"/>
            <defs>
              <linearGradient id="paintServices4" x1="50" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(249, 115, 22)"/>
                <stop offset="1" stopColor="rgb(251, 191, 36)"/>
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-allura mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-foreground/60 font-inter max-w-3xl mx-auto"
          >
            Comprehensive web development solutions from concept to deployment
          </motion.p>
        </motion.div>        {/* Custom Bento Box Grid Layout */}
        <motion.div 
          className="space-y-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >          {/* Row 1: Frontend (wide) + Backend (wide) + UI/UX (slim) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {services.filter(service => service.row === 1).map((service, index) => {
              const getColumnSpan = (span: string) => {
                switch (span) {
                  case 'equal': return 'md:col-span-5' // 5/12 each for frontend and backend (wider)
                  case 'slim': return 'md:col-span-2' // 2/12 for UI/UX (slimmer)
                  default: return 'md:col-span-4'
                }
              }

              const getIconColor = (gradient: string) => {
                if (gradient.includes('blue')) return 'text-blue-600'
                if (gradient.includes('green')) return 'text-green-600'
                if (gradient.includes('pink')) return 'text-pink-600'
                if (gradient.includes('orange')) return 'text-orange-600'
                if (gradient.includes('cyan')) return 'text-cyan-600'
                if (gradient.includes('indigo')) return 'text-indigo-600'
                return 'text-primary-600'
              }

              return (
                <motion.div
                  key={`row1-${index}`}
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
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
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`${getColumnSpan(service.span)} group relative overflow-hidden`}
                >
                  <div className={`relative h-full ${service.span === 'slim' ? 'min-h-[180px]' : 'min-h-[220px]'} p-6 lg:p-8 bg-background/40 backdrop-blur-md border border-primary-200/20 dark:border-primary-700/30 rounded-3xl hover:border-primary-300/40 dark:hover:border-primary-600/50 transition-all duration-500`}>
                    
                    {/* Gradient Background Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
                    
                    {/* Floating Icon */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15 
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 w-12 h-12 mb-4 flex items-center justify-center"
                    >
                      <service.icon className={`w-8 h-8 ${getIconColor(service.gradient)}`} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      <h3 className={`${service.span === 'slim' ? 'text-lg lg:text-xl' : 'text-xl lg:text-2xl'} font-bold font-space-grotesk text-foreground group-hover:text-primary-600 transition-colors duration-300`}>
                        {service.title}
                      </h3>
                      
                      <p className={`${service.span === 'slim' ? 'text-xs lg:text-sm' : 'text-sm lg:text-base'} text-foreground/70 font-inter leading-relaxed`}>
                        {service.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.technologies.slice(0, service.span === 'slim' ? 2 : 4).map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.1 + techIndex * 0.05 
                            }}
                            className="px-3 py-1 text-xs font-medium bg-primary-100/50 dark:bg-primary-800/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200/30 dark:border-primary-700/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute top-6 right-6 text-foreground/30 group-hover:text-primary-500 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>          {/* Row 2: Custom Solutions (3/12) + Performance Optimization (4/12) + Full-Stack (5/12) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {services.filter(service => service.row === 2).map((service, index) => {
              const getColumnSpan = (span: string) => {
                switch (span) {
                  case 'small': return 'md:col-span-3' // 3/12 for custom solutions
                  case 'medium': return 'md:col-span-4' // 4/12 for performance optimization
                  case 'large': return 'md:col-span-5' // 5/12 for full-stack
                  default: return 'md:col-span-3'
                }
              }

              const getIconColor = (gradient: string) => {
                if (gradient.includes('blue')) return 'text-blue-600'
                if (gradient.includes('green')) return 'text-green-600'
                if (gradient.includes('pink')) return 'text-pink-600'
                if (gradient.includes('orange')) return 'text-orange-600'
                if (gradient.includes('cyan')) return 'text-cyan-600'
                if (gradient.includes('indigo')) return 'text-indigo-600'
                return 'text-primary-600'
              }

              return (
                <motion.div
                  key={`row2-${index}`}
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: (index + 3) * 0.1, // Continue delay from row 1
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`${getColumnSpan(service.span)} group relative overflow-hidden`}
                >
                  <div className={`relative h-full ${service.span === 'large' ? 'min-h-[280px]' : service.span === 'medium' ? 'min-h-[260px]' : 'min-h-[240px]'} p-6 lg:p-8 bg-background/40 backdrop-blur-md border border-primary-200/20 dark:border-primary-700/30 rounded-3xl hover:border-primary-300/40 dark:hover:border-primary-600/50 transition-all duration-500`}>
                    
                    {/* Gradient Background Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
                    
                    {/* Floating Icon */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15 
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 w-12 h-12 mb-4 flex items-center justify-center"
                    >
                      <service.icon className={`w-8 h-8 ${getIconColor(service.gradient)}`} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      <h3 className={`${service.span === 'large' ? 'text-2xl lg:text-3xl' : service.span === 'medium' ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'} font-bold font-space-grotesk text-foreground group-hover:text-primary-600 transition-colors duration-300`}>
                        {service.title}
                      </h3>
                      
                      <p className="text-sm lg:text-base text-foreground/70 font-inter leading-relaxed">
                        {service.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: (index + 3) * 0.1 + techIndex * 0.05 
                            }}
                            className="px-3 py-1 text-xs font-medium bg-primary-100/50 dark:bg-primary-800/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200/30 dark:border-primary-700/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute top-6 right-6 text-foreground/30 group-hover:text-primary-500 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
        {/* Try N Test Foundation Section - Enhanced with Parallax */}
        <motion.div
          style={{ y: yParallax4 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-primary-200/30 dark:border-primary-700/30 overflow-hidden"
        >
          {/* Enhanced Background with Parallax Elements */}
          <motion.div 
            style={{ 
              y: yParallax2, 
              opacity: opacityParallax 
            }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-primary-200/10 to-accent-200/10 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ 
              y: yParallax3, 
              scale: scaleParallax 
            }}
            className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-tr from-accent-200/10 to-primary-200/10 rounded-full blur-2xl"
          />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center justify-center">
            {/* Content with Enhanced Animations */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Try N Test Foundation
                  </span>
                </motion.h3>
                <p className="text-base sm:text-lg text-foreground/70 font-inter leading-relaxed mb-6">
                  As the founder of Try N Test Foundation, I offer services both solo and through our sophisticated 
                  freelancing team. Whether you need individual expertise or a full development team, we deliver 
                  exceptional results tailored to your project requirements.
                </p>
              </motion.div>

              {/* Enhanced Feature List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3"
              >
                {[
                  { text: "Solo Development Services", icon: User, color: "text-blue-600" },
                  { text: "Full-Stack Development Teams", icon: Users, color: "text-purple-600" },
                  { text: "Project Management & Coordination", icon: ClipboardList, color: "text-green-600" },
                  { text: "Quality Assurance & Testing", icon: TestTube, color: "text-orange-600" },
                  { text: "Ongoing Support & Maintenance", icon: Wrench, color: "text-cyan-600" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center group"
                  >
                    <div className="w-6 h-6 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <feature.icon className={`w-5 h-5 ${feature.color} group-hover:scale-110 transition-all duration-200`} />
                    </div>
                    <span className="text-sm sm:text-base text-foreground/70 font-inter group-hover:text-foreground transition-colors duration-200">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="https://tryntest.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 font-inter text-center text-sm sm:text-base"
                >
                  Visit Try N Test →
                </motion.a>
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    borderColor: "rgb(99, 201, 102)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-300 font-inter text-sm sm:text-base"
                >
                  Get Team Quote
                </motion.button>
              </motion.div>
            </div>
            {/* Try N Test Logo with Enhanced Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center md:justify-end items-center mt-8 md:mt-0"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-72 h-48 sm:w-80 sm:h-56 md:w-90 md:h-64">
                  <Image
                    src={tryNTestLogo}
                    alt="Try N Test Foundation Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Bottom CTA with Parallax */}
        <motion.div
          style={{ y: yParallax4 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 relative"
        >
          <motion.div
            style={{ 
              y: yParallax1, 
              opacity: opacityParallax 
            }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary-200/10 to-accent-200/10 rounded-full blur-3xl -z-10"
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/60 font-inter mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Ready to transform your digital presence? Let&apos;s discuss your project requirements.
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
            Start Your Project <Sparkles className="w-5 h-5 text-amber-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services