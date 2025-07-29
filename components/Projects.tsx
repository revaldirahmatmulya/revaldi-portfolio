
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { ProjectsData } from '../types';

interface ProjectsProps {
  projectsData: ProjectsData;
}

const Projects: React.FC<ProjectsProps> = ({ projectsData }) => {
  return (
    <Section id="projects" title={projectsData.title} className="bg-slate-800">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projectsData.projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
