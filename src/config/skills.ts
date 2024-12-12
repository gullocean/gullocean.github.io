export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Astro"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "SQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Jest"]
  }
];