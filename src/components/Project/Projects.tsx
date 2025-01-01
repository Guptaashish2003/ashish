"use client";
import { Project } from "@/_types/interfaces";
import Image from "next/image";
import { AnimatePresence,motion } from "framer-motion";
import { useEffect, useState } from "react";
import Filters from "../Filter";
import SectionHeading from "../ui/Typography/SectionHeading";
import SlideIn from "../ui/Transitions/SlideIn";
import { TextReveal } from "../ui/Typography/TextReveal";
import { Transition } from "../ui/Transitions/Transition";
import { Button } from "../ui/Button";
import UseMediaQuery from "@/utils/UseMediaQuery";
import { useCursorProvider } from "@/utils/Context";
import { useProjects,ProjectsProvider } from "@/utils/ProjectContext";
import { projectData } from "@/utils/Data";
import { ProjectContainer } from "./ProjectContainer";

interface ProjectProps {
  data: Project[];
}
export const Projects = ({data}:ProjectProps) => {
  const [filterValue , setFilterValue] = useState("")

  return (
    <ProjectsProvider data={data}>
    <section className="md:p-8 p-4 relative" id="projects">
      <SectionHeading className="md:pl-16">
        <SlideIn className="text-white/40">Selected</SlideIn>
        <br />
        <SlideIn>works</SlideIn>
      </SectionHeading>
      <Filters filterValue={filterValue} projects={data} setFilterValue={setFilterValue} />
      <ProjectContainer />
    </section>
  </ProjectsProvider>
  )
}
