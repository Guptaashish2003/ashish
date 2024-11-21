"use client";
import { Project } from "@/_types/interfaces";
import Image from "next/image";
import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import Filters from "../Filter";
import SectionHeading from "../ui/Typography/SectionHeading";
import SlideIn from "../ui/Transitions/SlideIn";
import { TextReveal } from "../ui/Typography/TextReveal";
import { Transition } from "../ui/Transitions/Transition";
import { Button } from "../ui/Button";
import UseMediaQuery from "@/utils/UseMediaQuery";
import { useCursorProvider } from "@/utils/Context";
import { useProjects,ProjectsProvider } from "@/utils/ProjectContext";
import { ProjectProps } from "@/_types/interfaces";


export const Projects = ({data}:ProjectProps) => {
  return (
    <ProjectsProvider data={data}>
      <section className="md:p-8 p-4 relative" id="projects">
        <SectionHeading className="md:pl-16">
          <SlideIn className="text-white/40">Selected</SlideIn>
          <br />
          <SlideIn>Projects</SlideIn>
        </SectionHeading>
        <Filters />
        

      </section>


    </ProjectsProvider>
  )
}
