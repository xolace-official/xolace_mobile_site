"use client"

import { motion } from "motion/react"

type FadeInProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

// Opacity-only entrance — brief specifies no position transforms on scroll
export function FadeIn({ children, className, id }: FadeInProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
