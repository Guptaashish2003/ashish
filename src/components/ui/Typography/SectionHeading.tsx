"use client"
import { Cn } from "@/utils/Cn"
import { HTMLMotionProps,motion } from "framer-motion"
interface SectionHeadingProps extends HTMLMotionProps<"h3"> {}

const SectionHeading = ({className,...props}:SectionHeadingProps) => {
  return (
    <motion.h3
    className={Cn(
      "text-4xl md:text-6xl font-semibold md:px-4 px-2 pb-10 mx-auto",
      className
    )}
    {...props}
  />
  )
}

export default SectionHeading