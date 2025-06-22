'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import LogoBlack from '@/assets/Personal Logo.svg'
import LogoWhite from '@/assets/Personal Logo White.svg'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    console.log('Theme toggled to:', newTheme) // Debug log
  }

  // Don't render theme button until mounted
  if (!mounted) {
    return null
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/5 dark:bg-black/5 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 dark:border-white/5"
      style={{
        backdropFilter: 'blur(20px) saturate(50%) contrast(120%) brightness(110%)',
        WebkitBackdropFilter: 'blur(20px) saturate(50%) contrast(120%) brightness(110%)',
      }}
    >
      {/* Glass overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/2 to-transparent dark:from-white/4 dark:via-white/1"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center space-x-3">
              <Image
                src={resolvedTheme === 'dark' ? LogoWhite : LogoBlack}
                alt="Dipesh Ranjan Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold font-space-grotesk hidden md:inline-block">
                <span className="text-primary">Dipesh</span>
                <span className="text-foreground"> Ranjan</span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ y: -2 }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium font-inter relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
              aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <AnimatePresence mode="wait">
                {resolvedTheme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/10 dark:bg-black/10 backdrop-blur-xl backdrop-saturate-150 border-t border-white/10 dark:border-white/5"
            style={{
              backdropFilter: 'blur(20px) saturate(50%) contrast(120%) brightness(110%)',
              WebkitBackdropFilter: 'blur(20px) saturate(50%) contrast(120%) brightness(110%)',
            }}
          >
            {/* Glass overlay for mobile menu */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent dark:from-white/2"></div>
            <div className="relative px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors duration-200 font-inter"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar