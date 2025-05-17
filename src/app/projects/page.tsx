// src/app/projects/page.tsx
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'Awesome Portfolio',
    description: 'A clean, fast portfolio built with Next.js and Tailwind CSS.',
    link: 'https://github.com/audiomuse1/personal-portfolioWebsite',
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}