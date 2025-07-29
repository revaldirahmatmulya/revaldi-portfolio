
import React from 'react';
import { ExperienceItemDetails } from '../types';

interface ExperienceItemProps {
  experience: ExperienceItemDetails;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="mb-10 pl-4 relative border-l-2 border-sky-500/50 last:mb-0">
      <div className="absolute w-3 h-3 bg-sky-500 rounded-full -left-[7px] top-1 border border-slate-900"></div>
      <div className="ml-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-xl font-semibold text-sky-400">{experience.role}</h3>
          <p className="text-sm text-slate-400 mt-1 sm:mt-0">{experience.duration}</p>
        </div>
        <p className="text-md font-medium text-slate-200 mb-2">{experience.company}</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
          {experience.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
