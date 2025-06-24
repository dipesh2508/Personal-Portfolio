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
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-16 overflow-hidden pt-20 md:pt-24"
    >      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Background Shapes (z-0) - Reduced to 5 shapes with lower opacity */}
        
        {/* Purple Rounded Squares Shape - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.15, 
            scale: 1,
            y: [0, -15, 0],
            x: [0, 8, 0],
            rotate: [0, 360],
          }}
          className="absolute top-12 left-8 w-32 h-32 z-0"
          transition={{
            opacity: { duration: 1.2, delay: 0.1 },
            scale: { duration: 1.2, delay: 0.1 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_238_1269)">
              <path fillRule="evenodd" clipRule="evenodd" d="M75.5492 178.786L75.5488 178.787L62.9138 166.152C62.9709 166.927 63 167.71 63 168.5C63 185.897 48.897 200 31.5 200C14.103 200 0 185.897 0 168.5C0 151.103 14.103 137 31.5 137C32.2899 137 33.073 137.029 33.8483 137.086L20.8627 124.101L20.8654 124.098C7.95846 110.931 0 92.8947 0 73C0 32.6832 32.6832 0 73 0C92.8947 0 110.931 7.95845 124.098 20.8654L124.1 20.863L124.491 21.2532C124.576 21.3384 124.662 21.4239 124.747 21.5095L137.086 33.849C137.029 33.0735 137 32.2901 137 31.5C137 14.103 151.103 0 168.5 0C185.897 0 200 14.103 200 31.5C200 48.897 185.897 63 168.5 63C167.71 63 166.927 62.9709 166.151 62.9137L178.492 75.2547C178.577 75.3389 178.661 75.4234 178.745 75.508L178.786 75.5491L178.786 75.5492C191.898 88.7461 200 106.927 200 127C200 167.317 167.317 200 127 200C106.927 200 88.7461 191.898 75.5492 178.786Z" fill="url(#paint0_linear_238_1269)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_238_1269" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="oklch(75% 0.25 285)"/>
                <stop offset="1" stopColor="oklch(90% 0.15 320)"/>
              </linearGradient>
              <clipPath id="clip0_238_1269">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        {/* Plus Cross Shape - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.12, 
            scale: 1,
            y: [0, 12, 0],
            x: [0, -18, 0],
            rotate: [0, -360],
          }}
          className="absolute top-24 right-12 w-28 h-28 z-0"
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            scale: { duration: 1, delay: 0.3 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_236_1056)">
              <path fillRule="evenodd" clipRule="evenodd" d="M100 0C72.3858 0 50 22.3858 50 50C22.3858 50 2.18557e-06 72.3858 0 100C0 127.614 22.3858 150 50 150C50 177.614 72.3858 200 100 200C127.614 200 150 177.614 150 150C177.614 150 200 127.614 200 100C200 72.3858 177.614 50 150 50C150 22.3858 127.614 0 100 0ZM140.306 59.6939C140.306 37.4334 122.26 19.3878 100 19.3878C77.7395 19.3878 59.6939 37.4334 59.6939 59.6939C37.4334 59.6939 19.3878 77.7395 19.3878 100C19.3878 122.26 37.4334 140.306 59.6939 140.306C59.6939 162.567 77.7395 180.612 100 180.612C122.26 180.612 140.306 162.567 140.306 140.306C162.567 140.306 180.612 122.26 180.612 100C180.612 77.7395 162.567 59.6939 140.306 59.6939ZM69.3878 69.3878C69.3878 52.4811 83.0933 38.7755 100 38.7755C116.907 38.7755 130.612 52.4811 130.612 69.3878C147.519 69.3878 161.224 83.0933 161.224 100C161.224 116.907 147.519 130.612 130.612 130.612C130.612 147.519 116.907 161.224 100 161.224C83.0933 161.224 69.3878 147.519 69.3878 130.612C52.4811 130.612 38.7755 116.907 38.7755 100C38.7755 83.0933 52.4811 69.3877 69.3878 69.3878Z" fill="url(#paint0_linear_236_1056)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_236_1056" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="oklch(70% 0.22 200)"/>
                <stop offset="1" stopColor="oklch(85% 0.12 220)"/>
              </linearGradient>
              <clipPath id="clip0_236_1056">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        {/* Star Shape - Left Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            y: [0, -8, 0],
            x: [0, 6, 0],
            rotate: [0, 360],
          }}
          className="absolute top-1/3 left-16 w-20 h-20 z-0"
          transition={{
            opacity: { duration: 1.1, delay: 0.5 },
            scale: { duration: 1.1, delay: 0.5 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.106 0L115 54.1591L158.884 19.0983L139.1 71.6687L195.211 69.0983L148.306 100L195.211 130.902L139.1 128.331L158.884 180.902L115 145.841L100.106 200L85.211 145.841L41.3271 180.902L61.111 128.331L5 130.902L51.9057 100L5 69.0983L61.111 71.6687L41.3271 19.0983L85.211 54.1591L100.106 0Z" fill="url(#paint0_linear_103_4)"/>
            <defs>
              <linearGradient id="paint0_linear_103_4" x1="31.1541" y1="19" x2="153.991" y2="168.516" gradientUnits="userSpaceOnUse">
                <stop stopColor="oklch(65% 0.20 60)"/>
                <stop offset="1" stopColor="oklch(85% 0.08 80)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Badge Shape - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.12, 
            scale: 1,
            y: [0, 20, 0],
            x: [0, -14, 0],
            rotate: [0, -360],
          }}
          className="absolute bottom-28 right-6 w-36 h-36 z-0"
          transition={{
            opacity: { duration: 1.3, delay: 0.7 },
            scale: { duration: 1.3, delay: 0.7 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_103_21)">
              <path d="M71.5579 16.3347C84.3365 -5.4449 115.825 -5.44489 128.603 16.3347L129.067 17.1257C134.963 27.1733 145.709 33.378 157.358 33.4596L158.276 33.466C183.527 33.6428 199.271 60.9123 186.798 82.8687L186.345 83.6661C180.591 93.7953 180.591 106.205 186.345 116.334L186.798 117.131C199.271 139.088 183.527 166.357 158.276 166.534L157.358 166.54C145.709 166.622 134.963 172.827 129.067 182.874L128.603 183.665C115.825 205.445 84.3365 205.445 71.5579 183.665L71.0938 182.874C65.1986 172.827 54.4517 166.622 42.8027 166.54L41.8856 166.534C16.6346 166.357 0.890585 139.088 13.3629 117.131L13.8159 116.334C19.5698 106.205 19.5698 93.7953 13.8159 83.6661L13.3629 82.8687C0.890585 60.9123 16.6346 33.6428 41.8856 33.466L42.8027 33.4596C54.4518 33.378 65.1986 27.1733 71.0938 17.1257L71.5579 16.3347Z" fill="url(#paint0_linear_103_21)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_103_21" x1="100.081" y1="0" x2="100.081" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="oklch(65% 0.25 340)"/>
                <stop offset="1" stopColor="oklch(80% 0.15 10)"/>
              </linearGradient>
              <clipPath id="clip0_103_21">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>        {/* Medium Plus - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            y: [0, -12, 0],
            x: [0, 8, 0],
            rotate: [0, 360],
          }}
          className="absolute bottom-32 left-8 w-24 h-24 z-0"
          transition={{
            opacity: { duration: 1.1, delay: 1.1 },
            scale: { duration: 1.1, delay: 1.1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            rotate: { duration: 22, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_236_1056_med)">
              <path fillRule="evenodd" clipRule="evenodd" d="M100 0C72.3858 0 50 22.3858 50 50C22.3858 50 2.18557e-06 72.3858 0 100C0 127.614 22.3858 150 50 150C50 177.614 72.3858 200 100 200C127.614 200 150 177.614 150 150C177.614 150 200 127.614 200 100C200 72.3858 177.614 50 150 50C150 22.3858 127.614 0 100 0ZM140.306 59.6939C140.306 37.4334 122.26 19.3878 100 19.3878C77.7395 19.3878 59.6939 37.4334 59.6939 59.6939C37.4334 59.6939 19.3878 77.7395 19.3878 100C19.3878 122.26 37.4334 140.306 59.6939 140.306C59.6939 162.567 77.7395 180.612 100 180.612C122.26 180.612 140.306 162.567 140.306 140.306C162.567 140.306 180.612 122.26 180.612 100C180.612 77.7395 162.567 59.6939 140.306 59.6939ZM69.3878 69.3878C69.3878 52.4811 83.0933 38.7755 100 38.7755C116.907 38.7755 130.612 52.4811 130.612 69.3878C147.519 69.3878 161.224 83.0933 161.224 100C161.224 116.907 147.519 130.612 130.612 130.612C130.612 147.519 116.907 161.224 100 161.224C83.0933 161.224 69.3878 147.519 69.3878 130.612C52.4811 130.612 38.7755 116.907 38.7755 100C38.7755 83.0933 52.4811 69.3877 69.3878 69.3878Z" fill="url(#paint0_linear_236_1056_med)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_236_1056_med" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="oklch(70% 0.18 140)"/>
                <stop offset="1" stopColor="oklch(85% 0.10 160)"/>
              </linearGradient>
              <clipPath id="clip0_236_1056_med">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.div>
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
            I weave{" "}
            <span className="text-primary-600 font-semibold">
               together threads of creativity 
              
            </span>{" "}
            and logic, crafting expansive websites that sing with beauty, respond to every need, and delight the user&apos;s senses.
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
          className="flex flex-col sm:flex-row gap-2 mt-2 md:gap-4 md:mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-4 md:px-8 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
          >
            Let&apos;s Work Together
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 md:px-8 py-4 bg-transparent border-2 border-primary-300 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold text-lg rounded-xl transition-all duration-300 font-inter"
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero