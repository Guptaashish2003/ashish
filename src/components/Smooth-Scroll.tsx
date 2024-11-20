"use client"
import { ReactNode, useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const lennis = new Lenis()
        function raf(time:number) {
            lennis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    } ,[])
  return children
}
