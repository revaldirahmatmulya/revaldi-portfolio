
import React from 'react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import { ExperienceData } from '../types';

interface ExperienceProps {
  experienceData: ExperienceData;
}

const Experience: React.FC<ExperienceProps> = ({ experienceData }) => {
  return (
    <Section id="experience" title={experienceData.title} className="bg-slate-900">
      <div className="max-w-3xl mx-auto">
        {experienceData.experienceList.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
