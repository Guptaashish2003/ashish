"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { TextReveal } from "./ui/Typography/TextReveal";
import UseMediaQuery from "@/utils/UseMediaQuery";
import {  HeaderProps, } from "@/_types/interfaces";
import { menu } from "@/utils/Animatin";
import { NavBar } from "./NavBar";

export const Header = ({social}:HeaderProps) => {
    const [isActive, setIsActive] = useState(false)
    const isMobile = UseMediaQuery("(max-width: 768px)")
  return (
    <motion.div
    initial={{
      height: isActive ? "auto" : "0",
    }}
    animate={{
      height: isActive ? (isMobile ? "100vh" : "94%") : "0",
    }}
    className="fixed top-0 min-h-full md:top-12 md:right-12 right-0 z-20"
  >
    <motion.div
      className="md:w-[480px] w-full h-auto bg-primary relative rounded-3xl"
      variants={menu(isMobile)}
      animate={isActive ? "open" : "closed"}
      initial="closed"
    >
      <AnimatePresence>
        {isActive && <NavBar social={social} setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.div>
    <Button
      isActive={isActive}
      toggleMenu={() => {
        setIsActive(!isActive);
      }}
    />
  </motion.div>
);
};

export default Header;

function Button({
isActive,
toggleMenu,
}: {
isActive: boolean;
toggleMenu: () => void;
}) {
return (
  <div className="absolute md:top-0 top-4 right-4 md:right-0 w-[100px] h-10 rounded-full overflow-hidden cursor-pointer">
    <motion.div
      className="relative w-full h-full"
      animate={{ top: isActive ? "-100%" : "0%" }}
      transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="bg-primary h-full w-full grid place-items-center text-black"
        onClick={() => {
          toggleMenu();
        }}
      >
        <TextReveal>Menu</TextReveal>
      </motion.div>
      <motion.div
        className="bg-black h-full w-full grid place-items-center"
        onClick={() => {
          toggleMenu();
        }}
      >
        <TextReveal>Close</TextReveal>
      </motion.div>
    </motion.div>
  </div>
);
}
