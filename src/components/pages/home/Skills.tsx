'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { animate, stagger } from 'animejs'

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate skill cards on scroll
    if (skillsRef.current) {
      animate('.skill-card', {
        translateY: [30, 0],
        opacity: [0, 1],
        scale: [0.95, 1],
        delay: stagger(150, { start: 200 }),
        easing: 'spring(1, 80, 10, 0)',
        duration: 800,
      })
    }
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
      skills: [
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 
        'React JS', 'Next JS', 'Axios', 'Material UI', 'Motion.dev'
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      skills: [
        'Node JS', 'Express JS', 'MongoDB', 'Firebase', 'Prisma',
        'PostgreSQL', 'GraphQL', 'Next Auth'
      ]
    },
    {
      title: 'Design',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      skills: [
        'Figma (UI/UX)', 'Typography', 'Color Theory', 'Photoshop',
        'Illustrator', 'Lightroom', 'Canva', 'Firefly'
      ]
    },
    {
      title: 'Other',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
      skills: [
        'Git', 'Docker', 'SEO', 'Testing', 'Python', 'Java',
        'Postman', 'Documentation', 'Mono-repo', 'Content Writing'
      ]
    }
  ]

  return (
    <section 
      id="skills" 
      className="relative w-full px-4 py-16 md:py-20 overflow-hidden bg-gradient-to-br from-background via-accent-50/10 to-primary-50/10 dark:from-background dark:via-accent-900/5 dark:to-primary-900/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Small floating shapes with reduced opacity */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.08, 
            scale: 1,
            rotate: [0, 360],
            x: [0, 20, -15, 0],
            y: [0, -25, 10, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-10 right-16 w-16 h-16"
        >
          <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0L115 54.1591L158.884 19.0983L139.1 71.6687L195.211 69.0983L148.306 100L195.211 130.902L139.1 128.331L158.884 180.902L115 145.841L100 200L85.211 145.841L41.3271 180.902L61.111 128.331L5 130.902L51.9057 100L5 69.0983L61.111 71.6687L41.3271 19.0983L85.211 54.1591L100 0Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(99, 102, 241)"/>
                <stop offset="1" stopColor="rgb(168, 85, 247)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.06, 
            scale: 1,
            rotate: [0, -360],
            x: [0, -15, 20, 0],
            y: [0, 15, -10, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.4 },
            scale: { duration: 1.2, delay: 0.4 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-20 left-12 w-12 h-12"
        >
          <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M99.995 200V143.969L0 99.995H56.0313L99.995 0V56.0313L200 99.995H143.969L99.995 200Z" fill="url(#paint0_linear_plus)"/>
            <defs>
              <linearGradient id="paint0_linear_plus" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(34, 197, 94)"/>
                <stop offset="1" stopColor="rgb(16, 185, 129)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.07, 
            scale: 1,
            rotate: [0, 180, 360],
            x: [0, 25, -20, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay: 0.6 },
            scale: { duration: 1.5, delay: 0.6 },
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 left-8 w-20 h-20"
        >
          <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M156.064 143.936L112.127 100L156.064 56.0636L200 100L156.064 143.936ZM43.9364 143.936L0 100L43.9364 56.0636L87.8728 100L43.9364 143.936ZM100 200L56.0636 156.064L100 112.127L143.936 156.064L100 200ZM100 87.8728L56.0636 43.9364L100 0L143.936 43.9364L100 87.8728Z" fill="url(#paint0_linear_diamond)"/>
            <defs>
              <linearGradient id="paint0_linear_diamond" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(239, 68, 68)"/>
                <stop offset="1" stopColor="rgb(245, 101, 101)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-allura mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
          />
        </motion.div>        {/* Skills Clean Grid Design */}
        <div 
          ref={skillsRef}
          className="relative max-w-5xl mx-auto"
        >
          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-card relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                  className="mb-6"
                >
                  <h3 className={`text-2xl md:text-3xl font-bold font-allura bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                    {category.title}
                  </h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`} />
                </motion.div>

                {/* Skills Tag Cloud */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        y: 20
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        scale: 1,
                        y: 0
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.3 + skillIndex * 0.08,
                        type: "spring",
                        stiffness: 150,
                        damping: 12
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      className="group/skill"
                    >
                      {/* Skill Tag */}
                      <div className="relative">
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-30 transition-opacity duration-300 blur-md rounded-full scale-110`} />
                        
                        {/* Skill Content */}
                        <div className={`relative px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm font-medium font-inter rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-white/20`}>
                          <span className="relative z-10">{skill}</span>
                          
                          {/* Pulse animation */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2 + skillIndex * 0.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: skillIndex * 0.3
                            }}
                            className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>                {/* Category Background Decoration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.8, type: "spring", stiffness: 100 }}
                  className="absolute -top-4 right-12 w-24 h-24 group-hover:scale-110 transition-all duration-500 blur-[1px]"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 8 + categoryIndex * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full"
                  >
                    {categoryIndex === 0 && (
                      // Frontend - Complex Geometric Shape
                      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_frontend)" opacity="0.10" className="group-hover:opacity-15 transition-opacity duration-500">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z" fill="url(#paint0_frontend)"/>
                        </g>
                        <defs>
                          <linearGradient id="paint0_frontend" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="rgb(99, 102, 241)"/>
                            <stop offset="1" stopColor="rgb(168, 85, 247)"/>
                          </linearGradient>
                          <clipPath id="clip0_frontend">
                            <rect width="200" height="200" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                    {categoryIndex === 1 && (
                      // Backend - Cross Pattern
                      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_backend)" opacity="0.05" className="group-hover:opacity-10 transition-opacity duration-500">
                          <path fillRule="evenodd" clipRule="evenodd" d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z" fill="url(#paint0_backend)"/>
                        </g>
                        <defs>
                          <linearGradient id="paint0_backend" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                            <stop stopColor="rgb(34, 197, 94)"/>
                            <stop offset="1" stopColor="rgb(16, 185, 129)"/>
                          </linearGradient>
                          <clipPath id="clip0_backend">
                            <rect width="200" height="200" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                    {categoryIndex === 2 && (
                      // Design - Abstract L-Shape
                      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_design)" opacity="0.05" className="group-hover:opacity-10 transition-opacity duration-500">
                          <path fillRule="evenodd" clipRule="evenodd" d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z" fill="url(#paint0_design)"/>
                        </g>
                        <defs>
                          <linearGradient id="paint0_design" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="rgb(236, 72, 153)"/>
                            <stop offset="1" stopColor="rgb(251, 113, 133)"/>
                          </linearGradient>
                          <clipPath id="clip0_design">
                            <rect width="200" height="200" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                    {categoryIndex === 3 && (
                      // Other - Curved Corner Shape
                      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_other)" opacity="0.05" className="group-hover:opacity-10 transition-opacity duration-500">
                          <path fillRule="evenodd" clipRule="evenodd" d="M200 2.62268e-06V60L200 200H140V130.033C139.982 168.678 108.649 200 70 200C31.3401 200 0 168.66 0 130C0 91.3401 31.3401 60 70 60C108.649 60 139.982 91.3222 140 129.967V60H70H0V2.62268e-06L140 0L200 2.62268e-06Z" fill="url(#paint0_other)"/>
                        </g>
                        <defs>
                          <linearGradient id="paint0_other" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0509862" stopColor="rgb(249, 115, 22)"/>
                            <stop offset="1" stopColor="rgb(251, 191, 36)"/>
                          </linearGradient>
                          <clipPath id="clip0_other">
                            <rect width="200" height="200" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}          </div>
        </div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-foreground/60 font-inter max-w-2xl mx-auto">
            Constantly learning and evolving with the latest technologies to deliver 
            <span className="text-primary-600 font-semibold"> exceptional digital experiences</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills