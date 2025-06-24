'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Instagram,
  Calendar,
  Clock,
  Globe
} from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yParallax3 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 360])

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setStatus({ type: 'loading', message: 'Sending your message...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.' 
        })
        form.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Oops! Something went wrong. Please try again or reach out via email directly.' 
      })
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'sinhadipesh25@gmail.com',
      href: 'mailto:sinhadipesh25@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 62990 35580',
      href: 'tel:+916299035580',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Sector-55, Faridabad - 121004',
      href: 'https://maps.google.com?q=Sector-55,+Faridabad,+Haryana',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: 'Timezone',
      value: 'IST (UTC+5:30)',
      href: '#',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/dipesh2508',
      color: 'hover:text-gray-600'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/dipesh-ranjan',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaXTwitter className="w-5 h-5" />,
      label: 'X (Twitter)',
      href: 'https://twitter.com/dipeshranjan12',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://instagram.com/Dipesh_Ranjan07',
      color: 'hover:text-pink-600'
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full px-4 py-24 overflow-hidden bg-gradient-to-br from-background via-accent-50/30 to-primary-50/30 dark:from-background dark:via-accent-900/20 dark:to-primary-900/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Email Icon - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            y: [0, -15, 10, 0],
            x: [0, -8, 12, 0],
            rotate: [0, 45, -30, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.3 },
            scale: { duration: 1.2, delay: 0.3 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-16 w-32 h-32"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 60L100 120L180 60V160C180 171.046 171.046 180 160 180H40C28.9543 180 20 171.046 20 160V60Z" fill="url(#paint0_linear_email)" fillOpacity="0.6"/>
            <path d="M20 60L100 120L180 60V40C180 28.9543 171.046 20 160 20H40C28.9543 20 20 28.9543 20 40V60Z" fill="url(#paint1_linear_email)" fillOpacity="0.8"/>
            <defs>
              <linearGradient id="paint0_linear_email" x1="20" y1="60" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(59, 130, 246)"/>
                <stop offset="1" stopColor="rgb(147, 197, 253)"/>
              </linearGradient>
              <linearGradient id="paint1_linear_email" x1="20" y1="20" x2="180" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(99, 102, 241)"/>
                <stop offset="1" stopColor="rgb(196, 181, 253)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Message Bubble - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.08, 
            scale: 1,
            y: [0, 18, -12, 0],
            x: [0, 10, -15, 0],
            rotate: [0, -15, 10, 0],
          }}
          transition={{
            opacity: { duration: 1.4, delay: 0.6 },
            scale: { duration: 1.4, delay: 0.6 },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-32 left-12 w-28 h-28"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 40C40 29.5431 48.9543 20 60 20H140C151.046 20 160 29.5431 160 40V120C160 131.046 151.046 140 140 140H80L50 170V140H60C48.9543 140 40 131.046 40 120V40Z" fill="url(#paint0_linear_message)"/>
            <circle cx="80" cy="70" r="8" fill="white" fillOpacity="0.8"/>
            <circle cx="100" cy="70" r="8" fill="white" fillOpacity="0.6"/>
            <circle cx="120" cy="70" r="8" fill="white" fillOpacity="0.4"/>
            <defs>
              <linearGradient id="paint0_linear_message" x1="40" y1="20" x2="160" y2="170" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(34, 197, 94)"/>
                <stop offset="1" stopColor="rgb(74, 222, 128)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Phone Icon - Left Center */}
        <motion.div
          style={{ y: yParallax2 }}
          className="absolute top-1/3 left-8 w-24 h-24 opacity-7"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="20" width="80" height="160" rx="20" fill="url(#paint0_linear_phone)" fillOpacity="0.4"/>
            <rect x="70" y="40" width="60" height="100" rx="8" fill="white" fillOpacity="0.3"/>
            <circle cx="100" cy="160" r="8" fill="white" fillOpacity="0.6"/>
            <defs>
              <linearGradient id="paint0_linear_phone" x1="60" y1="20" x2="140" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(239, 68, 68)"/>
                <stop offset="1" stopColor="rgb(248, 113, 113)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Location Pin - Right Center */}
        <motion.div
          style={{ 
            y: yParallax1, 
            rotate: rotateParallax,
          }}
          className="absolute top-1/2 right-8 w-36 h-36 opacity-6"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20C75.1472 20 55 40.1472 55 65C55 89.8528 100 180 100 180C100 180 145 89.8528 145 65C145 40.1472 124.853 20 100 20Z" fill="url(#paint0_linear_location)"/>
            <circle cx="100" cy="65" r="20" fill="white" fillOpacity="0.9"/>
            <defs>
              <linearGradient id="paint0_linear_location" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(244, 63, 94)"/>
                <stop offset="1" stopColor="rgb(251, 113, 133)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Send Arrow - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.09, 
            scale: 1,
            y: [0, -20, 15, 0],
            x: [0, 15, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            opacity: { duration: 1.1, delay: 0.9 },
            scale: { duration: 1.1, delay: 0.9 },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-16 left-20 w-20 h-20"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L180 100L20 180L50 100L20 20Z" fill="url(#paint0_linear_send)"/>
            <path d="M50 100L180 100" stroke="white" strokeWidth="4" strokeOpacity="0.8"/>
            <defs>
              <linearGradient id="paint0_linear_send" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(168, 85, 247)"/>
                <stop offset="1" stopColor="rgb(196, 181, 253)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Chat Bubbles - Bottom Right */}
        <motion.div
          style={{ y: yParallax3 }}
          className="absolute bottom-20 right-20 w-32 h-32 opacity-8"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="70" cy="70" rx="50" ry="35" fill="url(#paint0_linear_chat1)" fillOpacity="0.6"/>
            <ellipse cx="130" cy="130" rx="40" ry="25" fill="url(#paint1_linear_chat1)" fillOpacity="0.8"/>
            <path d="M45 90L30 110L60 100L45 90Z" fill="url(#paint0_linear_chat1)" fillOpacity="0.6"/>
            <path d="M155 145L170 165L140 155L155 145Z" fill="url(#paint1_linear_chat1)" fillOpacity="0.8"/>
            <defs>
              <linearGradient id="paint0_linear_chat1" x1="20" y1="35" x2="120" y2="105" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(251, 146, 60)"/>
                <stop offset="1" stopColor="rgb(249, 115, 22)"/>
              </linearGradient>
              <linearGradient id="paint1_linear_chat1" x1="90" y1="105" x2="170" y2="155" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(6, 182, 212)"/>
                <stop offset="1" stopColor="rgb(34, 211, 238)"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Notification Bell - Top Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.07, 
            scale: 1,
            y: [0, -8, 12, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            opacity: { duration: 1.3, delay: 1.2 },
            scale: { duration: 1.3, delay: 1.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-16"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 30C85.1929 30 73 42.1929 73 57V90C73 100.609 67.6652 110.267 59 116L59 125C59 133.284 65.7157 140 74 140H126C134.284 140 141 133.284 141 125V116C132.335 110.267 127 100.609 127 90V57C127 42.1929 114.807 30 100 30Z" fill="url(#paint0_linear_bell)"/>
            <path d="M85 140C85 148.284 91.7157 155 100 155C108.284 155 115 148.284 115 140" stroke="url(#paint1_linear_bell)" strokeWidth="6" strokeLinecap="round"/>
            <circle cx="130" cy="50" r="12" fill="rgb(239, 68, 68)"/>
            <defs>
              <linearGradient id="paint0_linear_bell" x1="100" y1="30" x2="100" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(251, 191, 36)"/>
                <stop offset="1" stopColor="rgb(245, 158, 11)"/>
              </linearGradient>
              <linearGradient id="paint1_linear_bell" x1="85" y1="140" x2="115" y2="155" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(251, 191, 36)"/>
                <stop offset="1" stopColor="rgb(245, 158, 11)"/>
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
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-allura mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Let&apos;s Connect
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
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Information - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Info Header */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground">
                Get in Touch
              </h2>
              <p className="text-base text-foreground/70 font-inter">
                Ready to bring your ideas to life? Let&apos;s connect and make it happen.
              </p>
            </div>

            {/* Compact Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.slice(0, 4).map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : undefined}
                  rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center gap-3 p-4 bg-background/50 backdrop-blur-md border border-primary-200/30 dark:border-primary-700/30 rounded-xl hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300 group"
                >
                  <div className={`p-2.5 rounded-lg bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {React.cloneElement(info.icon, { className: "w-4 h-4" })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-foreground group-hover:text-primary-600 transition-colors duration-300 truncate">
                      {info.label}
                    </h3>
                    <p className="text-xs text-foreground/70 font-inter truncate">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold text-foreground font-space-grotesk">
                Let&apos;s Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-2 bg-background/50 backdrop-blur-md border border-primary-200/30 dark:border-primary-700/30 rounded-lg hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300 text-foreground/70 ${social.color} text-sm font-medium`}
                  >
                    {social.icon}
                    <span className="hidden sm:inline">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Combined Status & CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="p-5 bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-green-500/10 border border-primary-500/20 rounded-xl backdrop-blur-sm"
            >
              {/* Status Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Available</span>
                  </div>
                  <div className="text-xs text-foreground/60">•</div>
                  <div className="flex items-center gap-1 text-xs text-foreground/60">
                    <Clock className="w-3 h-3" />
                    <span>24h response</span>
                  </div>
                </div>
                <div className="text-xs text-foreground/50 font-mono">IST</div>
              </div>

              {/* CTA Section */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Ready to Start Something Amazing?</h3>
                <p className="text-sm text-foreground/70 font-inter leading-relaxed">
                  Let&apos;s discuss your project and explore how we can work together.
                </p>
                <div className="flex gap-3">
                  <Link href="https://calendly.com/sinhadipesh25" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        Schedule Call
                    </motion.button>
                  </Link>
                  <motion.a
                    href="mailto:sinhadipesh25@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2.5 bg-background/50 hover:bg-background/70 border border-primary-300/50 hover:border-primary-400/50 text-primary-600 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Form Header */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground">
                Send a Message
              </h2>
              <p className="text-lg text-foreground/70 font-inter">
                I&apos;d love to hear about your project. Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field}
                            className="h-12 bg-background/50 border-primary-200/30 dark:border-primary-700/30 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 backdrop-blur-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            type="email"
                            {...field}
                            className="h-12 bg-background/50 border-primary-200/30 dark:border-primary-700/30 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 backdrop-blur-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Subject Field */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project Collaboration" 
                          {...field}
                          className="h-12 bg-background/50 border-primary-200/30 dark:border-primary-700/30 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 backdrop-blur-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project idea, timeline, and any specific requirements..."
                          rows={6}
                          {...field}
                          className="bg-background/50 border-primary-200/30 dark:border-primary-700/30 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 backdrop-blur-sm resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.type === 'loading'}
                  whileHover={{ 
                    scale: status.type === 'loading' ? 1 : 1.02, 
                    y: status.type === 'loading' ? 0 : -2,
                    boxShadow: status.type === 'loading' ? 'none' : "0 20px 40px rgba(99, 102, 241, 0.3)" 
                  }}
                  whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
                  className={`w-full h-14 px-8 rounded-xl font-semibold text-lg transition-all duration-300 font-inter flex items-center justify-center gap-3 ${
                    status.type === 'loading'
                      ? 'bg-gray-500/50 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white shadow-lg'
                  }`}
                >
                  {status.type === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </Form>

            {/* Status Message */}
            {status.type !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                className={`p-4 rounded-xl border backdrop-blur-sm ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400'
                    : status.type === 'error'
                    ? 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400'
                    : 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-400'
                }`}
              >
                <div className="flex items-start gap-3">
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : status.type === 'error' ? (
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 mt-0.5 border-2 border-current border-t-transparent rounded-full flex-shrink-0"
                    />
                  )}
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
