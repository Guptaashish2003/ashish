"use client"

import { TextRevealProps } from "@/_types/interfaces"
import { useState } from "react"
import { motion } from "framer-motion"
import { Cn } from "@/utils/Cn"


export const TextReveal = ({children,className}:TextRevealProps) => {
    const [hover,setHover] = useState(false)
  return (
    <motion.div
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    className={Cn("relative overflow-hidden whitespace-pre",className)}    
    >
        <div className="overflow-hidden">
            {children.split("").map((char,index) => (
                <motion.span
                initial={{ y: 0 }}
                animate={{ y: hover ? "-100%" : 0 }}
                layout
                transition={{ delay: index * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
                exit={{
                  y: 0,
                  transition: { delay: index * 0.02, ease: [0.215, 0.61, 0.355, 1] },
                }}
                key={index}
                className="inline-block whitespace-"
              >
                {char}
              </motion.span>
            ))}
        </div>
        <motion.div className="absolute left-0 top-0">
            {children.split("").map((char,index) => (
                <motion.span
                initial={{ y: "100%" }}
                animate={{ y: hover ? 0 : "100%" }}
                layout
                transition={{ delay: index * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
                exit={{
                  y: "100%",
                  transition: { delay: index * 0.02, ease: [0.215, 0.61, 0.355, 1] },
                }}
                key={index}
                className="inline-block whitespace-"
              >
                {char}
              </motion.span>
            ))}

        </motion.div>

    </motion.div>
  )
}
