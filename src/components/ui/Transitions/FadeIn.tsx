"use client"
import { motion } from 'framer-motion'

const FadeIn = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    ></motion.div>
  )
}

export default FadeIn