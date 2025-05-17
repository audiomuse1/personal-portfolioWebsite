// src/components/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="border rounded-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View Project
      </a>
    </div>
  );
}