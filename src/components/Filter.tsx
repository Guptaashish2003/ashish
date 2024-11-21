" use client"
import { Cn } from "@/utils/Cn"
import {motion } from "framer-motion"
import { Button } from "./ui/Button"
import { TextReveal } from "./ui/Typography/TextReveal"
import { Transition } from "./ui/Transitions/Transition"
import { useProjects } from "@/utils/ProjectContext"

const Filters = () => {
    return(
        <>
        </>
    )
}
  
  export default Filters;
  
  const Sort = () => {
    const { setSort, sort } = useProjects();
  
    return (
      <Button
        className="border border-white/20 px-4 py-2 rounded-full"
        onClick={() => setSort(true)}
      >
        <TextReveal>{sort ? "Sorted" : "Sort"}</TextReveal>
      </Button>
    );
  };
  