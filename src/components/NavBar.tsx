"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { perspective,slideIn } from "@/utils/Animatin"
import { TextReveal } from "./ui/Typography/TextReveal"
import { ArrowRight } from "lucide-react"
import { NavBarProps } from "@/_types/interfaces"
import { NavLinks } from "@/utils/Data"
export const NavBar = ({setIsActive,social}:NavBarProps) => {
    const MotionLink = motion(Link)
    return (
        <div className="flex justify-between flex-col w-full h-full px-10 pt-[100px] pb-[50px]">
          <div className="flex gap-2 flex-col">
            {NavLinks.map((link, index) => {
              const { title, url } = link;
              return (
                <div
                  key={`b_${index}`}
                  className="linkContainer"
                  onClick={() => setIsActive(false)}
                >
                  <Link href={url} className="flex flex-wrap overflow-hidden">
                    <motion.div
                      variants={perspective}
                      custom={index}
                      initial="initial"
                      animate="enter"
                      whileHover="whileHover"
                      whileTap="whileHover"
                      exit="exit"
                      className="text-5xl text-background flex items-center justify-between"
                    >
                      <motion.span
                        variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
                      >
                        <ArrowRight />
                      </motion.span>
                      <motion.span
                        variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
                      >
                        {title}
                      </motion.span>
                    </motion.div>
                  </Link>
                </div>
              );
            })}
          </div>
          <motion.div className="flex flex-wrap">
            {social.map((link, index) => {
              const { platform, _id, url } = link;
              return (
                <MotionLink
                  href={url}
                  className=" w-1/2 mt-1 text-background"
                  variants={slideIn}
                  custom={index}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  key={_id}
                >
                  <TextReveal>{platform}</TextReveal>
                </MotionLink>
              );
            })}
          </motion.div>
        </div>
      );
}
