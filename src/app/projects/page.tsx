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

  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yParallax3 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 360])

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
        {/* Cross Plus Pattern - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            y: [0, -12, 8, 0],
            x: [0, -10, 6, 0],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.2 },
            scale: { duration: 1.2, delay: 0.2 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 28, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-20 right-16 w-32 h-32"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_133_2)">
              <path fillRule="evenodd" clipRule="evenodd" d="M50.7143 0H0.71429V50C0.71429 75.462 19.7466 96.4788 44.361 99.6002C19.4015 102.402 4.22025e-06 123.578 2.18557e-06 149.286L0 199.286H50C75.462 199.286 96.4788 180.253 99.6002 155.639C102.402 180.599 123.578 200 149.286 200H199.286V150C199.286 124.538 180.253 103.521 155.639 100.4C180.599 97.5984 200 76.422 200 50.7143V0.714286L150 0.714284C124.538 0.714282 103.521 19.7466 100.4 44.361C97.5984 19.4015 76.422 0 50.7143 0Z" fill="url(#paint0_linear_133_2)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_133_2" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(251, 191, 36)"/>
                <stop offset="1" stopColor="rgb(245, 158, 11)"/>
              </linearGradient>
              <clipPath id="clip0_133_2">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        {/* Concentric Circles - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.08, 
            scale: 1,
            y: [0, 15, -10, 0],
            x: [0, 8, -12, 0],
            rotate: [0, -120, -240, -360],
          }}
          transition={{
            opacity: { duration: 1.4, delay: 0.5 },
            scale: { duration: 1.4, delay: 0.5 },
            y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 32, repeat: Infinity, ease: "linear" },
          }}
          className="absolute bottom-32 left-12 w-24 h-24"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_235_973)">
              <path fillRule="evenodd" clipRule="evenodd" d="M100 -4.37114e-06C155.228 -6.78525e-06 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 5.67237e-06 155.228 3.25826e-06 100C8.44143e-07 44.7715 44.7715 -1.95703e-06 100 -4.37114e-06ZM100 -4.37114e-06C138.108 -6.03688e-06 169 30.8923 169 69C169 107.108 138.108 138 100 138C61.8924 138 31 107.108 31 69C31 30.8923 61.8924 -2.7054e-06 100 -4.37114e-06ZM132 69C132 51.3269 117.673 37 100 37C82.3269 37 68 51.3269 68 69C68 86.6731 82.3269 101 100 101C117.673 101 132 86.6731 132 69Z" fill="url(#paint0_linear_235_973)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_235_973" x1="-9.344e-06" y1="23" x2="152.5" y2="160.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(59, 130, 246)"/>
                <stop offset="1" stopColor="rgb(147, 197, 253)"/>
              </linearGradient>
              <clipPath id="clip0_235_973">
                <rect width="200" height="200" fill="white" transform="translate(7.62939e-06 200) rotate(-90)"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>        {/* Rounded Rectangle - Left */}
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

        {/* Plus Cross Shape - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.12, 
            scale: 1,
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.3 },
            scale: { duration: 1.2, delay: 0.3 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-16 left-20 w-20 h-20"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M100 0C72.3858 0 50 22.3858 50 50C22.3858 50 2.18557e-06 72.3858 0 100C0 127.614 22.3858 150 50 150C50 177.614 72.3858 200 100 200C127.614 200 150 177.614 150 150C177.614 150 200 127.614 200 100C200 72.3858 177.614 50 150 50C150 22.3858 127.614 0 100 0Z" fill="url(#paint0_linear_cross1)"/>
            <defs>
              <linearGradient id="paint0_linear_cross1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(251, 191, 36)"/>
                <stop offset="1" stopColor="rgb(245, 158, 11)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>        {/* Badge Shape - Right Center */}
        <motion.div
          style={{ 
            y: yParallax2, 
            rotate: rotateParallax,
          }}
          className="absolute top-1/2 right-8 w-36 h-36 opacity-9"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.5579 16.3347C84.3365 -5.4449 115.825 -5.44489 128.603 16.3347L129.067 17.1257C134.963 27.1733 145.709 33.378 157.358 33.4596L158.276 33.466C183.527 33.6428 199.271 60.9123 186.798 82.8687L186.345 83.6661C180.591 93.7953 180.591 106.205 186.345 116.334L186.798 117.131C199.271 139.088 183.527 166.357 158.276 166.534L157.358 166.54C145.709 166.622 134.963 172.827 129.067 182.874L128.603 183.665C115.825 205.445 84.3365 205.445 71.5579 183.665L71.0938 182.874C65.1986 172.827 54.4517 166.622 42.8027 166.54L41.8856 166.534C16.6346 166.357 0.890585 139.088 13.3629 117.131L13.8159 116.334C19.5698 106.205 19.5698 93.7953 13.8159 83.6661L13.3629 82.8687C0.890585 60.9123 16.6346 33.6428 41.8856 33.466L42.8027 33.4596C54.4518 33.378 65.1986 27.1733 71.0938 17.1257L71.5579 16.3347Z" fill="url(#paint0_linear_badge1)"/>
            <defs>
              <linearGradient id="paint0_linear_badge1" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(244, 63, 94)"/>
                <stop offset="1" stopColor="rgb(239, 68, 68)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Geometric Pattern - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.08, 
            scale: 1,
            y: [0, -20, 15, 0],
            x: [0, -12, 8, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            opacity: { duration: 1.3, delay: 0.8 },
            scale: { duration: 1.3, delay: 0.8 },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          }}
          className="absolute bottom-20 right-20 w-24 h-24"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_geo1)">
              <path fillRule="evenodd" clipRule="evenodd" d="M75.5492 178.786L62.9138 166.152C62.9709 166.927 63 167.71 63 168.5C63 185.897 48.897 200 31.5 200C14.103 200 0 185.897 0 168.5C0 151.103 14.103 137 31.5 137C32.2899 137 33.073 137.029 33.8483 137.086L20.8627 124.101C7.95846 110.931 0 92.8947 0 73C0 32.6832 32.6832 0 73 0C92.8947 0 110.931 7.95845 124.098 20.8654L137.086 33.849C137.029 33.0735 137 32.2901 137 31.5C137 14.103 151.103 0 168.5 0C185.897 0 200 14.103 200 31.5C200 48.897 185.897 63 168.5 63C167.71 63 166.927 62.9709 166.151 62.9137L178.786 75.5491C191.898 88.7461 200 106.927 200 127C200 167.317 167.317 200 127 200C106.927 200 88.7461 191.898 75.5492 178.786Z" fill="url(#paint0_linear_geo1)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_geo1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(147, 51, 234)"/>
                <stop offset="1" stopColor="rgb(168, 85, 247)"/>
              </linearGradient>
              <clipPath id="clip0_geo1">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        {/* Hexagon Shape - Center Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.09, 
            scale: 1,
            y: [0, 18, -12, 0],
            x: [0, 15, -10, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            opacity: { duration: 1.1, delay: 1.2 },
            scale: { duration: 1.1, delay: 1.2 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-2/3 left-16 w-20 h-20"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 10L173.205 55V145L100 190L26.795 145V55L100 10Z" fill="url(#paint0_linear_hex1)"/>
            <defs>
              <linearGradient id="paint0_linear_hex1" x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(6, 182, 212)"/>
                <stop offset="1" stopColor="rgb(8, 145, 178)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Triangle Pattern - Bottom Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.07, 
            scale: 1,
            y: [0, -10, 5, 0],
            x: [0, 8, -5, 0],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            opacity: { duration: 1.4, delay: 1.5 },
            scale: { duration: 1.4, delay: 1.5 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-16"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20L180 160H20L100 20Z" fill="url(#paint0_linear_tri1)"/>
            <defs>
              <linearGradient id="paint0_linear_tri1" x1="100" y1="20" x2="100" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(34, 197, 94)"/>
                <stop offset="1" stopColor="rgb(22, 163, 74)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Circle Pattern - Top Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.06, 
            scale: 1,
            y: [0, 12, -8, 0],
            x: [0, -6, 10, 0],
            rotate: [0, 45, 90, 135, 180],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.9 },
            scale: { duration: 1.2, delay: 0.9 },
            y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 22, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-12 left-1/2 transform -translate-x-1/2 w-18 h-18"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="url(#paint0_linear_circle1)"/>
            <circle cx="100" cy="100" r="50" fill="url(#paint1_linear_circle1)"/>
            <circle cx="100" cy="100" r="20" fill="url(#paint2_linear_circle1)"/>
            <defs>
              <linearGradient id="paint0_linear_circle1" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(251, 146, 60)" stopOpacity="0.3"/>
                <stop offset="1" stopColor="rgb(249, 115, 22)" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="paint1_linear_circle1" x1="100" y1="50" x2="100" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(251, 146, 60)" stopOpacity="0.2"/>
                <stop offset="1" stopColor="rgb(249, 115, 22)" stopOpacity="0.05"/>
              </linearGradient>
              <linearGradient id="paint2_linear_circle1" x1="100" y1="80" x2="100" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(251, 146, 60)" stopOpacity="0.4"/>
                <stop offset="1" stopColor="rgb(249, 115, 22)" stopOpacity="0.2"/>
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