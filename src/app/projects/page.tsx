// src/app/projects/page.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  learnings: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Interactive Heatmap Dashboard",
    description: "A dynamic data visualization tool that transforms complex datasets into intuitive heatmaps. Built with D3.js and React, this application demonstrates advanced data visualization techniques and interactive user interfaces.",
    learnings: "This project strengthened my expertise in data visualization, D3.js integration with React, and handling complex data transformations. I implemented responsive design patterns and optimized performance for large datasets.",
    image: "/images/portfolioProjectImages/portfolioInteractiveHeatmap.png",
    liveUrl: "https://audiomuse1.github.io/personal-portfolio-interactiveHeatmap",
    githubUrl: "https://github.com/audiomuse1/personal-portfolio-interactiveHeatmap",
    technologies: ["React", "D3.js", "JavaScript", "CSS", "Data Visualization", "API Integration"]
  },
  {
    title: "Colorify App",
    description: "A sophisticated color palette generator and management tool that helps designers and developers create harmonious color schemes. Features include palette generation, color space conversion, and accessibility checking.",
    learnings: "Through this project, I gained deep understanding of color theory, accessibility standards, and state management in React. I also implemented drag-and-drop functionality and local storage for user preferences.",
    image: "/images/portfolioProjectImages/portfolioColorifyApp.png",
    liveUrl: "https://audiomuse1.github.io/personal-portfolio-projectColorifyApp/",
    githubUrl: "https://github.com/audiomuse1/portfolio-project-colorify-app",
    technologies: ["React", "JavaScript", "CSS", "Color Theory", "Accessibility", "Local Storage"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full h-[300px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'contain' }}
                className="p-2 bg-gray-50"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-600 mb-4 italic">{project.learnings}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-800 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}