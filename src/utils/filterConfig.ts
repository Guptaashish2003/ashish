export interface FilterItem {
  id: string;
  name: string;
  matches: (tech: string) => boolean;
}

export const ALLOWED_FILTERS: FilterItem[] = [
  {
    id: "reactjs",
    name: "React.js",
    matches: (tech: string) => /^(react|react\.?js)$/i.test(tech.trim()),
  },
  {
    id: "nextjs",
    name: "Next.js",
    matches: (tech: string) => /^(next|next\.?js)$/i.test(tech.trim()),
  },
  {
    id: "docker",
    name: "Docker",
    matches: (tech: string) => /^docker$/i.test(tech.trim()),
  },
  {
    id: "nodejs",
    name: "Node.js",
    matches: (tech: string) => /^(node|node\.?js)$/i.test(tech.trim()),
  },
  {
    id: "python",
    name: "Python",
    matches: (tech: string) => /^python$/i.test(tech.trim()),
  },
  {
    id: "django",
    name: "Django",
    matches: (tech: string) => /^django$/i.test(tech.trim()),
  },
  {
    id: "fastapi",
    name: "FastAPI",
    matches: (tech: string) => /^fastapi$/i.test(tech.trim()),
  },
  {
    id: "ai",
    name: "AI",
    matches: (tech: string) => /^(ai|artificial\s*intelligence)$/i.test(tech.trim()),
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    matches: (tech: string) => /^(machine\s*learning|ml)$/i.test(tech.trim()),
  },
];

export const getAvailableFilters = (projects: { techStack?: string[] }[]): FilterItem[] => {
  return ALLOWED_FILTERS.filter((filterItem) =>
    projects.some((project) =>
      project.techStack?.some((tech) => filterItem.matches(tech))
    )
  );
};

export const matchesFilter = (techStack: string[] = [], filterValue: string): boolean => {
  if (!filterValue || filterValue.toLowerCase() === "all") return true;

  const targetFilter = ALLOWED_FILTERS.find(
    (f) =>
      f.name.toLowerCase() === filterValue.toLowerCase() ||
      f.id.toLowerCase() === filterValue.toLowerCase()
  );

  if (targetFilter) {
    return techStack.some((tech) => targetFilter.matches(tech));
  }

  return techStack.some((tech) => tech.trim().toLowerCase() === filterValue.toLowerCase());
};
