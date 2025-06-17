'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { animate, stagger } from 'animejs'

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate floating numbers
    if (floatingRef.current) {
      animate('.floating-stat', {
        translateY: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1],
        delay: stagger(200),
        easing: 'easeInOutSine',
        duration: 4000,
        loop: true,
      })
    }

    // Animate text reveal
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
        {/* Floating Geometric Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 360],
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-24 h-24 border-2 border-primary-400/30 rounded-lg"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, -180, 0],
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.4 },
            scale: { duration: 1.2, delay: 0.4 },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 90, 180, 270, 360],
            x: [0, 30, -20, 10, 0],
            y: [0, -30, 40, -10, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay: 0.6 },
            scale: { duration: 1.5, delay: 0.6 },
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-accent-400/40 rotate-45"
        />

        {/* Floating Lines */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: 1, 
            scaleX: 1,
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.8 },
            scaleX: { duration: 1.5, delay: 0.8 },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 right-1/4 w-32 h-0.5 bg-gradient-to-r from-primary-400/50 to-transparent"
        />
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
                  'Provided 1:1 mentorship with personalized roadmaps'
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
                    className="floating-stat text-center space-y-3"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.3 }
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
              </div>

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
                className="absolute top-4 right-4 w-8 h-8 border border-primary-400/30 rounded-full"
              />
              
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
                className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-sm"
              />
            </div>
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