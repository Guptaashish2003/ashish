"use client"
import { useState,createContext,useEffect,useContext,Dispatch,SetStateAction,ReactNode } from "react"
import { Project } from "@/_types/interfaces"

import { ProjectContextProps } from "@/_types/interfaces"


const ProjectsContext = createContext<ProjectContextProps>({
    projects: [] as Project[],
    appliedFilter:"all",
    filteredProjects: [] as Project[],
    sort:false,
    setAppliedFilter:()=>{},
    setFilteredProjects:()=>{},
    setSort:()=>{},
    singleProject:null,
    setSingleProject:()=>{}
})
const ProjectsProvider = ({children,data}:{children:ReactNode,data:Project[]})=>{
    const [projects , setProjects] = useState(data);
    const [appliedFilter,setAppliedFilter] = useState<string>("all");
    const [filteredProjects,setFilteredProjects] = useState(data);
    const [sort,setSort] = useState<boolean>(false);
    const [singleProject,setSingleProject] = useState<Project | null>(null);
    useEffect(()=>{
        const filtered = applyFilters(projects,appliedFilter);
        setFilteredProjects(filtered);

    },[appliedFilter,projects])
    useEffect(()=>{
        if(sort){
            const sorted = projects.toSorted((a,b)=>b.sequence-a.sequence);
            setProjects(sorted);
        }
    },[sort])
    const applyFilters = (data:Project[],filterValues:string)=>{
        if(filterValues === "all") return data;
        return data.filter((project)=>
        project.techStack.some((tech)=>filterValues === tech.trim()))
    
    }

    const value = {
        projects,
        appliedFilter,
        filteredProjects,
        sort,
        setAppliedFilter,
        setFilteredProjects,
        setSort,
        singleProject,
        setSingleProject

    }
    return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
}


const useProjects = ()=>{
    const context = useContext(ProjectsContext);
    if(context === undefined){
        throw new Error("useProjects must be used within a ProjectsProvider")
    }
    return context;
}
export {ProjectsProvider,useProjects}