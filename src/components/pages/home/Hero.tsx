'use client'

import React, { useEffect, useRef } from 'react'
import heroImage from '@/assets/Hero.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { animate, stagger } from 'animejs'

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null)
  
  // Animate the background text on mount only
  useEffect(() => {
    if (textRef.current) {
      animate('.dev-letter', {
        translateY: [100, 0],
        opacity: [0, 0.1],
        scale: [0.8, 1],
        delay: stagger(60, { start: 300 }),
        easing: 'spring(1, 80, 10, 0)',
        duration: 1200,
        complete: () => {
          // Add subtle floating animation
          animate('.dev-letter', {
            translateY: [0, -5, 0],
            scale: [1, 1.02, 1],
            delay: stagger(80),
            easing: 'easeInOutSine',
            duration: 6000,
            loop: true,
          })
        }
      })
    }
  }, [])
  
  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-16 overflow-hidden pt-24 xl:pt-12"
    >
      {/* Background Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span className="sr-only">DEVELOPER</span>        
        {"DEVELOPER".split("").map((char, i) => (
          <span
            key={i}
            className="dev-letter font-black text-[clamp(6rem,15vw,20rem)] lg:text-[clamp(8rem,20vw,24rem)] tracking-wide mx-1 text-foreground/[0.03] opacity-30 font-space-grotesk"
            style={{
              display: 'inline-block',
              transform: `translateY(${Math.sin(i * 0.5) * 6}px)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.05, 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 100, 
          damping: 25, 
          duration: 1.2,
          delay: 0.1
        }}
        className="relative z-10 mb-8"
      >
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          
          {/* Image Container */}
          <div className="relative rounded-full overflow-hidden border-2 border-primary-200/30 bg-background shadow-2xl">
            <Image
              src={heroImage}
              alt="Dipesh Ranjan - Professional Web Developer"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-4xl">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.3, 
            duration: 0.8, 
            type: 'spring',
            stiffness: 80,
            damping: 20
          }}
          className="space-y-2"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] font-space-grotesk">
            <span className="text-foreground">
              Dipesh {" "}
            </span>
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
              Ranjan
            </span>
          </h1>
          
          {/* Professional Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/70 font-medium font-inter mt-4"
          >
            Full-Stack Developer & UI/UX Designer
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.6, 
            duration: 0.8, 
            type: 'spring',
            stiffness: 60,
            damping: 15
          }}
          className="max-w-7xl"
        >
          <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-inter">
            I create{" "}
            <span className="text-primary-600 font-semibold">
              exceptional digital experiences
            </span>{" "}            that blend cutting-edge technology with stunning design. 
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.8, 
            duration: 0.7, 
            type: 'spring',
            stiffness: 100,
            damping: 15
          }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
          >
            Let&apos;s Work Together
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-transparent border-2 border-primary-300 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold text-lg rounded-xl transition-all duration-300 font-inter"
          >
            View Portfolio
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1, 
            duration: 0.8, 
            type: 'spring'
          }}
          className="grid grid-cols-3 gap-8 mt-12 w-full max-w-lg"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary-600 mb-1 font-space-grotesk">
              50+
            </div>
            <div className="text-sm sm:text-base text-foreground/60 font-medium font-inter">
              Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary-600 mb-1 font-space-grotesk">
              5+
            </div>
            <div className="text-sm sm:text-base text-foreground/60 font-medium font-inter">
              Years
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary-600 mb-1 font-space-grotesk">
              100%
            </div>
            <div className="text-sm sm:text-base text-foreground/60 font-medium font-inter">
              Quality
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero