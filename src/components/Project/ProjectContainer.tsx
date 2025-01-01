
"use client";
import { useEffect,useState } from "react";
import { Project } from "@/_types/interfaces";
import { useProjects } from "@/utils/ProjectContext";
import UseMediaQuery from "@/utils/UseMediaQuery";
import { AnimatePresence,motion } from "framer-motion";
import { Transition } from "../ui/Transitions/Transition";
import { TextReveal } from "../ui/Typography/TextReveal";
import { Dialog } from "../ui/Dialog";
import { Button } from "../ui/Button";
import Card from './CardProject'

export const ProjectContainer = () => {
  const {filteredProjects,setSingleProject} = useProjects();
  const [showMore , setShowMore] = useState(false);
  const [showDialog , setShowDialog] = useState(false);
  const isMobile = UseMediaQuery("(max-width: 768px)");
  const numProjectToShow = isMobile?6:8
  return (
    <AnimatePresence>
      <motion.div
        layout
        className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3"
      >
        {filteredProjects
          .slice(0, showMore ? filteredProjects.length : numProjectToShow)
          .map((project, index) =>
            project.enabled ? (
              <Transition
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                key={project._id}
                onClick={() => {
                  setShowDialog(true);
                  setSingleProject(project);
                }}
              >
                <Card {...project} />
              </Transition>
            ) : null
          )}
      </motion.div>
      <div className="grid place-items-center py-8">
        {filteredProjects.length > numProjectToShow && (
          <Button onClick={() => setShowMore(!showMore)}>
            <TextReveal>{showMore ? "Show less" : "Show more"}</TextReveal>
          </Button>
        )}
      </div>
      <Dialog showDialog={showDialog} setShowDialog={setShowDialog} />
    </AnimatePresence>
  )
}
