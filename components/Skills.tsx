
import React from 'react';
import Section from './Section';
import SkillBadge from './SkillBadge';
import { SkillsData } from '../types';

interface SkillsProps {
  skillsData: SkillsData;
}

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
  return (
    <Section id="skills" title={skillsData.title} className="bg-slate-900">
      <div className="space-y-12">
        {skillsData.categories.map((category) => (
          <div key={category.id} className="bg-slate-800/50 p-6 rounded-xl shadow-lg ring-1 ring-sky-500/30">
            <h3 className="text-2xl font-semibold text-sky-400 mb-6 text-center sm:text-left border-b border-sky-500/30 pb-3">
              {category.name}
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-4">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.id} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
