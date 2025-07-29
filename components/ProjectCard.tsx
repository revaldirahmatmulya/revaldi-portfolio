
import React from 'react';
import { Project } from '../types';
import { GithubIcon } from './icons/GithubIcon'; 
import { ExternalLinkIcon } from './icons/ExternalLinkIcon'; 

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-56 object-cover" 
        onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/fallback/600/350')} // Fallback image
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-sky-400">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-sky-700/50 text-sky-300 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-4 items-center">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors flex items-center"
              aria-label={`Live demo of ${project.title}`}
            >
              <ExternalLinkIcon className="w-5 h-5 mr-1.5" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors flex items-center"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-5 h-5 mr-1.5" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;