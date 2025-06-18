'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { animate, stagger } from 'animejs'

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Remove excessive floating animations - keep only text reveal
    if (statsRef.current) {
      animate('.reveal-text', {
        translateY: [50, 0],
        opacity: [0, 1],
        delay: stagger(100, { start: 500 }),
        easing: 'spring(1, 80, 10, 0)',
        duration: 1000,
      })
    }
  }, [])

  const stats = [
    { number: '2+', label: 'Years Experience', color: 'from-primary-500 to-primary-600' },
    { number: '20+', label: 'Projects Completed', color: 'from-accent-500 to-accent-600' },
    { number: '4', label: 'Research Papers', color: 'from-primary-400 to-accent-500' },
    { number: '20+', label: 'Students Guided', color: 'from-accent-400 to-primary-500' },
  ]

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full px-4 py-20 overflow-hidden bg-gradient-to-br from-background via-primary-50/20 to-accent-50/20 dark:from-background dark:via-primary-900/10 dark:to-accent-900/10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Geometric Shapes */}        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 180, 360],
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-24 h-24"
        >
          <svg width="96" height="96" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_104_40)">
              <path 
                d="M100.254 200C97.0998 200 94.4337 197.716 93.6699 194.656C91.2352 184.903 86.5744 174.531 79.6875 163.542C71.5278 150.347 59.8958 138.108 44.7917 126.823C31.6549 116.894 18.5181 110.123 5.38138 106.511C2.27005 105.656 0 102.897 0 99.6702V99.6702C0 96.5066 2.18273 93.7795 5.22473 92.9109C18.1045 89.2335 30.5122 83.2631 42.4479 75C56.1632 65.4514 67.6215 53.993 76.8229 40.625C84.9629 28.7165 90.5507 16.9388 93.5863 5.29207C94.3815 2.24095 97.0676 0 100.221 0V0C103.409 0 106.114 2.29058 106.89 5.3833C108.642 12.3654 111.38 19.512 115.104 26.8229C119.792 35.8507 125.781 44.5312 133.073 52.8646C140.538 61.0243 148.872 68.4028 158.073 75C170.097 83.5231 182.32 89.5111 194.744 92.964C197.792 93.8109 200 96.5244 200 99.6874V99.6874C200 102.898 197.725 105.634 194.629 106.483C186.754 108.642 178.648 112.124 170.313 116.927C160.243 122.83 150.868 129.861 142.187 138.021C133.507 146.007 126.389 154.427 120.833 163.281C113.933 174.293 109.267 184.745 106.837 194.639C106.083 197.708 103.413 200 100.254 200V200Z" 
                fill="url(#paint0_linear_104_40)"
              />
            </g>
            <defs>
              <linearGradient id="paint0_linear_104_40" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--primary-500)" stopOpacity="0.16" />
                <stop offset="1" stopColor="var(--accent-400)" stopOpacity="0.10" />
              </linearGradient>
              <clipPath id="clip0_104_40">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div><motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 90, 180, 270, 360],
            x: [0, -25, 15, -10, 0],
            y: [0, 20, -15, 25, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.4 },
            scale: { duration: 1.2, delay: 0.4 },
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-32 left-16 w-16 h-16"
        >
          <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_105_351)">
              <path 
                d="M156.064 143.936L112.127 100L156.064 56.0636L200 100L156.064 143.936ZM43.9364 143.936L0 100L43.9364 56.0636L87.8728 100L43.9364 143.936ZM100 200L56.0636 156.064L100 112.127L143.936 156.064L100 200ZM100 87.8728L56.0636 43.9364L100 0L143.936 43.9364L100 87.8728Z" 
                fill="url(#paint0_linear_105_351)"
              />
            </g>
            <defs>
              <linearGradient id="paint0_linear_105_351" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--accent-400)" stopOpacity="0.18" />
                <stop offset="1" stopColor="var(--primary-500)" stopOpacity="0.12" />
              </linearGradient>
              <clipPath id="clip0_105_351">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            x: [0, 20, -15, 25, 0],
            y: [0, -20, 30, -15, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay: 0.6 },
            scale: { duration: 1.5, delay: 0.6 },
            rotate: { duration: 16, repeat: Infinity, ease: "linear" },
            x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/3 left-1/4 w-12 h-12"
        >
          <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_119_243)">
              <path 
                d="M99.995 200V143.969L0 99.995H56.0313L99.995 0V56.0313L200 99.995H143.969L99.995 200Z" 
                fill="url(#paint0_linear_119_243)"
              />
            </g>
            <defs>
              <linearGradient id="paint0_linear_119_243" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--accent-600)" stopOpacity="0.14" />
                <stop offset="1" stopColor="var(--primary-300)" stopOpacity="0.08" />
              </linearGradient>
              <clipPath id="clip0_119_243">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>        {/* Floating Lines */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: 1, 
            scaleX: 1,
            rotate: [0, 15, -15, 0],
            x: [0, 10, -10, 0],
            y: [0, -8, 8, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.8 },
            scaleX: { duration: 1.5, delay: 0.8 },
            rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 right-1/4 w-32 h-32"
        >
          <svg width="128" height="128" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_227_29)">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M132.136 164.537C122.432 180.711 110.697 188 100 188C89.3026 188 77.5678 180.711 67.8635 164.537C58.3025 148.602 52 125.813 52 100C52 74.1867 58.3025 51.3982 67.8635 35.4633C77.5678 19.2895 89.3026 12 100 12C110.697 12 122.432 19.2895 132.136 35.4633C141.697 51.3982 148 74.1867 148 100C148 125.813 141.697 148.602 132.136 164.537ZM200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100ZM12 100C12 135.93 33.5326 166.83 64.3973 180.5C49.5982 162.289 40 133.013 40 100C40 66.9873 49.5982 37.7108 64.3973 19.4995C33.5326 33.1701 12 64.0704 12 100ZM188 100C188 135.93 166.467 166.83 135.603 180.5C150.402 162.289 160 133.013 160 100C160 66.9873 150.402 37.7108 135.603 19.4995C166.467 33.1701 188 64.0704 188 100ZM100 111C106.075 111 111 106.075 111 100C111 93.9249 106.075 89 100 89C93.9249 89 89 93.9249 89 100C89 106.075 93.9249 111 100 111Z" 
                fill="url(#paint0_linear_227_29)"
              />
            </g>
            <defs>
              <linearGradient id="paint0_linear_227_29" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--primary-400)" stopOpacity="0.13" />
                <stop offset="1" stopColor="var(--accent-300)" stopOpacity="0.07" />
              </linearGradient>
              <clipPath id="clip0_227_29">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
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
          className="text-center mb-8 md:mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-allura mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p 
                className="reveal-text text-lg md:text-xl text-foreground/80 leading-relaxed font-inter"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I&apos;m a passionate{" "}
                <span className="text-primary-600 font-semibold">Web Architect</span>{" "}
                who transforms ideas into immersive digital experiences. From contributing to open-source projects
                during Hacktoberfest to publishing research papers in{" "}
                <span className="text-accent-600 font-semibold">Conferences</span>, 
                I believe in pushing boundaries and sharing knowledge.
              </motion.p>

              <motion.p 
                className="reveal-text text-lg md:text-xl text-foreground/80 leading-relaxed font-inter"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                When I&apos;m not crafting code, you&apos;ll find me{" "}
                <span className="text-primary-600 font-semibold">mentoring</span>{" "}
                aspiring developers through personalized guidance,{" "}
                <span className="text-accent-600 font-semibold">contributing</span>{" "}
                to tech communities, or{" "}
                <span className="text-primary-600 font-semibold">exploring</span>{" "}
                the latest innovations in web technologies. My journey spans across 
                development, research, and mentorship.
              </motion.p>
            </div>

            {/* Experience Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-foreground/90 font-space-grotesk">
                Journey Highlights
              </h3>
              
              <div className="space-y-3">
                {[
                  'Served on IEEE Delhi Student team for one year (2023-24)',
                  'Active contributor in Hacktoberfest 2023 & 2024',
                  'Published research in Web Architecture, Blockchain & Healthcare',
                  'Provided 1:1 mentorship with personalized roadmaps to mentees'
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0" />
                    <span className="text-foreground/70 font-inter">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-accent-100/30 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl blur-3xl" />
            
            <div ref={floatingRef} className="relative bg-white/60 dark:bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-primary-200/40 dark:border-white/10 shadow-lg shadow-primary-100/20 dark:shadow-none">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center space-y-3"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        delay: 0.7 + index * 0.1 
                      }}
                      className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-space-grotesk`}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      className="text-sm md:text-base text-foreground/70 font-medium font-inter leading-tight"
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>            </div>
                          {/* Floating Elements Inside Card */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-4 right-4 w-8 h-8"
              >
                <svg width="32" height="32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_227_4)">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 188C148.601 188 188 148.601 188 100C188 51.3989 148.601 12 100 12C51.3989 12 12 51.3989 12 100C12 148.601 51.3989 188 100 188ZM100 176C141.974 176 176 141.974 176 100C176 58.0264 141.974 24 100 24C58.0264 24 24 58.0264 24 100C24 141.974 58.0264 176 100 176ZM100 164C135.346 164 164 135.346 164 100C164 64.6538 135.346 36 100 36C64.6538 36 36 64.6538 36 100C36 135.346 64.6538 164 100 164ZM152 100C152 128.719 128.719 152 100 152C71.2812 152 48 128.719 48 100C48 71.2812 71.2812 48 100 48C128.719 48 152 71.2812 152 100ZM140 100C140 122.091 122.091 140 100 140C77.9086 140 60 122.091 60 100C60 77.9086 77.9086 60 100 60C122.091 60 140 77.9086 140 100Z" 
                      fill="url(#paint0_linear_227_4)"
                    />
                  </g>                  <defs>
                    <linearGradient id="paint0_linear_227_4" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--primary-400)" stopOpacity="0.15" />
                      <stop offset="1" stopColor="var(--accent-300)" stopOpacity="0.1" />
                    </linearGradient>
                    <clipPath id="clip0_227_4">
                      <rect width="200" height="200" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 left-4 w-6 h-6"
              >
                <svg width="24" height="24" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_235_970)">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M0 100L7.62939e-06 0H100H200V100C144.78 100 100.013 55.2417 100 0.0239258C99.987 55.2417 55.2204 100 0 100ZM100 200C100 144.771 144.772 100 200 100V200H100ZM100 200C100 144.771 55.2285 100 0 100V200H100Z" 
                      fill="url(#paint0_linear_235_970)"
                    />
                  </g>                  <defs>
                    <linearGradient id="paint0_linear_235_970" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--accent-500)" stopOpacity="0.12" />
                      <stop offset="1" stopColor="var(--primary-400)" stopOpacity="0.08" />
                    </linearGradient>
                    <clipPath id="clip0_235_970">
                      <rect width="200" height="200" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.p 
            className="text-xl md:text-2xl text-foreground/60 font-inter mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Ready to bring your vision to life? Let&apos;s create something extraordinary together.
          </motion.p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold text-lg rounded-2xl shadow-lg transition-all duration-300 font-inter"
          >
            Let&apos;s Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About