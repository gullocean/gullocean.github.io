export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of your first project",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/projects/project1.jpg",
    link: "https://project1.com",
    github: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "Description of your second project",
    tech: ["Vue", "Express", "PostgreSQL"],
    image: "/images/projects/project2.jpg",
    link: "https://project2.com",
    github: "https://github.com/yourusername/project2"
  }
];