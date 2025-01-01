"use client";

import { useProjects } from "@/utils/ProjectContext";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Dispatch, ReactNode, SetStateAction } from "react";

interface DialogProps {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}

export const Dialog = ({ showDialog, setShowDialog }: DialogProps) => {
  const { singleProject } = useProjects();

  return (
    <>
      {showDialog && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 grid place-items-center"
          onClick={(e) => e.target === e.currentTarget && setShowDialog(false)}
        >
          <div className="bg-black/80 w-11/12 md:w-1/2 h-4/5 md:h-[90%] overflow-hidden rounded-xl">
            {singleProject && (
              <div className="relative ">
                <button
                  className="absolute top-4 right-4 bg-black size-8 rounded-full border border-white/40 grid place-items-center text-white"
                  onClick={() => setShowDialog(false)}
                >
                  <X size={20} />
                </button>
                <Image
                  src={singleProject.image.url}
                  width={300}
                  height={300}
                  alt={singleProject.title}
                  className="w-full h-full aspect-video md:aspect-[12/6] object-cover object-center"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-4xl font-bold">
                      {singleProject.title}
                    </h5>
                    <div className="flex items-center gap-4">
                      <Link href={singleProject.githuburl}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </Link>
                      <Link href={singleProject.liveurl}>
                        <ExternalLink />
                      </Link>
                    </div>
                  </div>
                  <div className="py-3 flex items-center gap-4">
                    {singleProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 border border-white/40 rounded-2xl text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, tempora. Officiis eveniet harum nemo sed sint
                    distinctio fugiat earum cumque aliquid in magnam nam odio
                    molestias architecto veniam, asperiores voluptates?
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
