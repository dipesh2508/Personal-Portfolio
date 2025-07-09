'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import LogoBlack from '@/assets/Personal Logo.svg'
import LogoWhite from '@/assets/Personal Logo White.svg'
import Image from 'next/image'

const Footer = () => {
  const { resolvedTheme } = useTheme()

  // Navigation links array
  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  // Contact information array
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sinhadipesh25@gmail.com',
      href: 'mailto:sinhadipesh25@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 62990 35580',
      href: 'tel:+916299035580'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sector-55, Faridabad - 121004',
      href: 'https://maps.google.com?q=Sector-55,+Faridabad,+Haryana'
    }
  ]

  // Social links array
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/dipesh2508',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/dipesh-ranjan',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/Dipesh_Ranjan07',
      color: 'hover:text-pink-400'
    },
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      href: 'https://twitter.com/dipeshranjan12',
      color: 'hover:text-gray-400'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-white/5 dark:bg-black/5 backdrop-blur-xl backdrop-saturate-150 border-t border-white/10 dark:border-white/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-10 right-20 w-16 h-16 border border-primary-400/20 rounded-lg"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-16 w-12 h-12 bg-gradient-to-br from-accent-400/15 to-primary-400/10 rounded-full blur-sm"
        />

        <motion.div
          animate={{
            rotate: [0, -180, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-8 h-8 border border-accent-400/25 rotate-45"
        />
      </div>

      {/* Glass overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/2 via-transparent to-accent/2 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-white/1 to-transparent dark:from-white/2 dark:via-white/0.5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Image
                src={resolvedTheme === 'dark' ? LogoWhite : LogoBlack}
                alt="Dipesh Ranjan Logo"
                width={56}
                height={56}
                className="h-14 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk">
                  <span className="text-primary">Dipesh</span>
                  <span className="text-foreground"> Ranjan</span>
                </h3>
                <p className="text-sm text-foreground/60 font-inter">Full-Stack Developer & UI/UX Designer</p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground/70 leading-relaxed font-inter max-w-md"
            >
              Crafting digital experiences that blend creativity with functionality. 
              Let&apos;s build something extraordinary together.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    rotate: [0, -5, 5, 0]
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-full border-2 border-foreground/20 hover:border-primary/50 text-foreground/70 ${social.color} transition-all duration-300 flex items-center justify-center group relative overflow-hidden`}
                  aria-label={social.name}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                  
                  <social.icon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-foreground font-space-grotesk">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 font-inter relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-foreground font-space-grotesk">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={contact.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <motion.a
                    href={contact.href}
                    target={contact.label === 'Location' ? '_blank' : undefined}
                    rel={contact.label === 'Location' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 text-foreground/70 hover:text-primary transition-colors duration-200 group"
                  >
                    <contact.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="text-sm font-medium text-foreground/50 font-inter">{contact.label}</p>
                      <p className="font-inter text-sm leading-relaxed">{contact.value}</p>
                    </div>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center mb-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-primary/50"></div>
          <div className="mx-6">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full ring-2 ring-primary/20"
            />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"></div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-foreground/60 text-sm font-inter text-center md:text-left">
            © {new Date().getFullYear()} Dipesh Ranjan. All rights reserved. Built with ❤️ and lots of ☕
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 font-inter text-sm"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer