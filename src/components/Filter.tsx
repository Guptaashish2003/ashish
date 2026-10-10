"use client";
import { Cn } from "@/utils/Cn";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { TextReveal } from "./ui/Typography/TextReveal";
import { Transition } from "./ui/Transitions/Transition";
import { useProjects } from "@/utils/ProjectContext";
import { getAvailableFilters } from "@/utils/filterConfig";
import type { Project } from "@/_types/interfaces";
import type { Dispatch, SetStateAction } from "react";

interface FiltersProps {
  projects: Project[];
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
}

const Filters = ({ projects, filterValue, setFilterValue }: FiltersProps) => {
  const { setAppliedFilter, appliedFilter } = useProjects();
  const availableFilters = getAvailableFilters(projects);

  const activeFilter = filterValue || appliedFilter || "all";

  const handleSelect = (val: string) => {
    setFilterValue(val);
    setAppliedFilter(val);
  };

  const isAll = activeFilter.toLowerCase() === "all";

  return (
    <>
      <div className="flex items-center gap-3 md:gap-4 py-8 justify-center flex-wrap">
        <Transition viewport={{ once: true }}>
          <button
            className={Cn(
              "border px-6 py-2 rounded-full relative transition-colors",
              isAll
                ? "text-black border-transparent font-medium"
                : "border-white/30 text-white/80 hover:border-white/50"
            )}
            onClick={() => handleSelect("all")}
          >
            {isAll && (
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
        {availableFilters.map((item, index) => {
          const isActive =
            activeFilter.toLowerCase() === item.name.toLowerCase() ||
            activeFilter.toLowerCase() === item.id.toLowerCase();

          return (
            <Transition
              key={item.id}
              transition={{ duration: 1, delay: 0.2 + index * 0.08 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => handleSelect(item.name)}
                className={Cn(
                  "relative border px-5 py-2 rounded-full transition-colors",
                  isActive
                    ? "text-black border-transparent font-medium"
                    : "border-white/20 text-white/80 hover:border-white/40"
                )}
              >
                {isActive && (
                  <motion.span
                    transition={{ type: "spring", bounce: 0.3 }}
                    exit={{ type: "spring" }}
                    layoutId="active-filter"
                    className="absolute top-0 left-0 w-full h-full bg-primary -z-10 rounded-full"
                  />
                )}
                <TextReveal>{item.name}</TextReveal>
              </motion.button>
            </Transition>
          );
        })}
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
