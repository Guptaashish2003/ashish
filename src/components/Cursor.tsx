"use client"
import { useCursorProvider } from "@/utils/Context"
import {motion,useSpring,useMotionValue,AnimationProps,Variants} from "framer-motion"

import { ArrowUpRight } from "lucide-react"
import { useEffect } from "react"
export const Cursor = () => {
    const {variant} = useCursorProvider()
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springConfig = {damping: 25,stiffness: 100}
    const cursorSpringX = useSpring(cursorX,springConfig)
    const cursorSpringY = useSpring(cursorY,springConfig)

    useEffect(()=>{
        const moveCursor = (e:MouseEvent) =>{
            requestAnimationFrame(()=>{
                cursorX.set(e.clientX -(variant ==="PROJECT"?32:8))
                cursorY.set(e.clientY -(variant ==="PROJECT"?32:8))
            })
        }
        window.addEventListener("mousemove",moveCursor)
        return () => window.removeEventListener("mousemove",moveCursor)
    },[variant])
    const variants:Variants = {
        DEFAULT :{
            width:16,
            height:16,
            backgroundColor:"transparent",
            border:"1px solid white",
        },
        PROJECT: {
            height: 100,
            width: 100,
            mixBlendMode: "unset",
          },
          BUTTON: {
            opacity: 0,
          },
          TEXT: {
            height: 100,
            width: 100,
            backgroundColor: "transparent",
            border: "1px solid white",
          },
    }
  return (
    <motion.div
      className="fixed top-0 left-0 bg-white mix-blend-difference z-50 rounded-full pointer-events-none grid place-items-center max-md:hidden"
      variants={variants}
      animate={variant}
      style={{
        translateX: cursorSpringX,
        translateY: cursorSpringY,
      }}
    >
      {variant === "PROJECT" && (
        <div className="text-black">
          <ArrowUpRight size={28} />
        </div>
      )}
    </motion.div>
  )
}
