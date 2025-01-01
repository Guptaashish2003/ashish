" use client";
import { Cn } from "@/utils/Cn";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { TextReveal } from "./ui/Typography/TextReveal";
import { Transition } from "./ui/Transitions/Transition";
import { useProjects } from "@/utils/ProjectContext";
import type { Project } from "@/_types/interfaces";
import type { Dispatch, SetStateAction } from "react";

interface FiltersProps {
  projects: Project[];
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
}
const Filters = ({ projects, filterValue, setFilterValue }: FiltersProps) => {
  const techStack = projects.flatMap((filter) => 
    filter.techStack.map((val) => val.trim())
  );
  const filter = Array.from(new Set(techStack));
  return (
    <>
      <div className="flex items-center gap-4 py-8 justify-center max-md:flex-wrap">
        <Transition viewport={{ once: true }}>
          <button
            className={Cn(
              "border border-white/30 px-6 py-2 rounded-full relative",
              filterValue === "all" && "text-black border-transparent"
            )}
            onClick={() => setFilterValue("all")}
          >
            {filterValue === "all" && (
              <motion.span
                transition={{ type: "spring", bounce: 0.3 }}
                exit={{ type: "spring" }}
                layoutId="active-filter"
                className="absolute top-0 left-0 w-full h-full bg-primary -z-10 rounded-full"
              />
            )}
            <TextReveal>All</TextReveal>
          </button>
        </Transition>
        {filter.map((filter, index) => (
          <Transition
            key={index}
            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setFilterValue(filter)}
              animate={{ color: filterValue === filter ? "black" : "" }}
              transition={{ delay: 0.4 }}
              className="relative border border-white/20 px-3 py-2 rounded-full"
            >
              {filterValue === filter && (
                <motion.span
                  transition={{ type: "spring", bounce: 0.3 }}
                  exit={{ type: "spring" }}
                  layoutId="active-filter"
                  className="absolute top-0 left-0 w-full h-full bg-primary -z-10 rounded-full"
                />
              )}
              <TextReveal>{filter}</TextReveal>
            </motion.button>
          </Transition>
        ))}
      </div>
    </>
  );
};

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
