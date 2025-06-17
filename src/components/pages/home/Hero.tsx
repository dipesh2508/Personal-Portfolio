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
        opacity: [0, 1],
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
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-16 overflow-hidden pt-18"
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Background Orbs (z-0) */}
        
        {/* Large Orb - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          className="absolute top-12 left-8 w-36 h-36 rounded-full bg-gradient-to-br from-primary-400/35 to-primary-600/15 blur-2xl z-0"
          transition={{
            opacity: { duration: 1.2, delay: 0.1 },
            scale: { duration: 1.2, delay: 0.1 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Medium Orb - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, 12, 0],
            x: [0, -18, 0],
          }}
          className="absolute top-24 right-12 w-28 h-28 rounded-full bg-gradient-to-br from-accent-400/40 to-primary-500/20 blur-xl z-0"
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            scale: { duration: 1, delay: 0.3 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          }}
        />

        {/* Small Orb - Left Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -8, 0],
            x: [0, 6, 0],
          }}
          className="absolute top-1/3 left-16 w-18 h-18 rounded-full bg-gradient-to-br from-primary-300/50 to-accent-400/25 blur-lg z-0"
          transition={{
            opacity: { duration: 1.1, delay: 0.5 },
            scale: { duration: 1.1, delay: 0.5 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
        />

        {/* Large Orb - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, 20, 0],
            x: [0, -14, 0],
          }}
          className="absolute bottom-28 right-6 w-32 h-32 rounded-full bg-gradient-to-br from-accent-300/45 to-primary-400/20 blur-2xl z-0"
          transition={{
            opacity: { duration: 1.3, delay: 0.7 },
            scale: { duration: 1.3, delay: 0.7 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
          }}
        />

        {/* Small Orb - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -6, 0],
            x: [0, 4, 0],
          }}
          className="absolute bottom-36 left-24 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500/55 to-accent-300/30 blur-md z-0"
          transition={{
            opacity: { duration: 0.9, delay: 0.9 },
            scale: { duration: 0.9, delay: 0.9 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.1 },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.1 },
          }}
        />

        {/* Medium Orb - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, 16, 0],
            x: [0, -12, 0],
          }}
          className="absolute top-3/5 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-accent-200/50 to-primary-300/25 blur-xl z-0"
          transition={{
            opacity: { duration: 1.1, delay: 1.1 },
            scale: { duration: 1.1, delay: 1.1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
        />

        {/* Tiny Orb - Top Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          }}
          className="absolute top-20 left-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-primary-400/60 to-accent-400/35 blur-sm z-0"
          transition={{
            opacity: { duration: 1, delay: 1.3 },
            scale: { duration: 1, delay: 1.3 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.8 },
          }}
        />

        {/* Random Medium Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -12, 0],
            x: [0, 10, 0],
          }}
          className="absolute top-2/5 left-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-accent-500/35 to-primary-500/20 blur-lg z-0"
          transition={{
            opacity: { duration: 1.2, delay: 1.5 },
            scale: { duration: 1.2, delay: 1.5 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.0 },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.0 },
          }}
        />

        {/* Foreground Orbs (z-30) */}
        
        {/* Small Foreground Orb - Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -8, 0],
            x: [0, 5, 0],
          }}
          className="absolute top-32 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-primary-300/25 to-accent-300/15 blur-md z-30"
          transition={{
            opacity: { duration: 1, delay: 1.7 },
            scale: { duration: 1, delay: 1.7 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          }}
        />

        {/* Medium Foreground Orb - Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, 14, 0],
            x: [0, -7, 0],
          }}
          className="absolute bottom-1/3 left-1/4 w-22 h-22 rounded-full bg-gradient-to-br from-accent-400/20 to-primary-400/12 blur-lg z-30"
          transition={{
            opacity: { duration: 1.1, delay: 1.9 },
            scale: { duration: 1.1, delay: 1.9 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
        />

        {/* Tiny Foreground Orb - Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -6, 0],
            x: [0, 8, 0],
          }}
          className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-200/20 blur-sm z-30"
          transition={{
            opacity: { duration: 0.8, delay: 2.1 },
            scale: { duration: 0.8, delay: 2.1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
          }}
        />

        {/* Additional Large Foreground Orb - Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -12, 0],
            x: [0, 10, 0],
          }}
          className="absolute top-1/2 left-3/4 w-24 h-24 rounded-full bg-gradient-to-br from-primary-400/18 to-accent-500/10 blur-xl z-30"
          transition={{
            opacity: { duration: 1.3, delay: 2.3 },
            scale: { duration: 1.3, delay: 2.3 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
        />

        {/* Small Foreground Orb - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, 10, 0],
            x: [0, -6, 0],
          }}
          className="absolute top-1/4 left-1/5 w-14 h-14 rounded-full bg-gradient-to-br from-accent-300/25 to-primary-300/15 blur-md z-30"
          transition={{
            opacity: { duration: 1, delay: 2.5 },
            scale: { duration: 1, delay: 2.5 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          }}
        />
      </div>

      {/* Background Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-5"
        aria-hidden="true"
      >
        <span className="sr-only">DEVELOPER</span>        
        {"DEVELOPER".split("").map((char, i) => (
          <span
            key={i}
            className="dev-letter font-black text-[clamp(6rem,15vw,20rem)] lg:text-[clamp(8rem,20vw,24rem)] tracking-wide mx-1 text-foreground/10 font-space-grotesk"
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
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px]">
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
      <div className="relative z-10 flex flex-col items-center gap-3 text-center max-w-4xl">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] font-allura">
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
      </div>
    </section>
  )
}

export default Hero