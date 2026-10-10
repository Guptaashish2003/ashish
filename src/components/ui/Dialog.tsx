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
          <div className="bg-black/90 w-11/12 md:w-1/2 max-h-[90vh] overflow-y-auto rounded-xl border border-white/10">
            {singleProject && (
              <div className="relative">
                <button
                  className="absolute top-4 right-4 bg-black/80 size-8 rounded-full border border-white/40 grid place-items-center text-white z-10 hover:bg-white/20 transition-colors"
                  onClick={() => setShowDialog(false)}
                >
                  <X size={20} />
                </button>
                <div className="relative w-full h-[250px] md:h-[350px]">
                  <Image
                    src={singleProject.image.url}
                    alt={singleProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h5 className="text-2xl md:text-3xl font-bold">
                      {singleProject.title}
                    </h5>
                    <div className="flex items-center gap-4 shrink-0">
                      {singleProject.githuburl && (
                        <Link
                          href={singleProject.githuburl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                          title="View GitHub Repository"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </Link>
                      )}
                      {singleProject.liveurl && (
                        <Link
                          href={singleProject.liveurl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                          title="View Live Site"
                        >
                          <ExternalLink size={24} />
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="py-3 flex flex-wrap items-center gap-2 md:gap-3">
                    {singleProject.techStack?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 border border-white/30 rounded-2xl text-xs md:text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <ul className="space-y-2.5 text-white/80 text-sm md:text-base">
                      {singleProject.description
                        ?.split("\n")
                        .map((line) => line.trim())
                        .filter((line) => line.length > 0)
                        .map((line, index) => {
                          const cleanText = line.replace(/^[•\-\*]\s*/, "");
                          return (
                            <li key={index} className="flex items-start gap-3">
                              <span className="h-1.5 w-1.5 rounded-full bg-white/70 mt-2 shrink-0" />
                              <span className="leading-relaxed">{cleanText}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
