
import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="bg-sky-500/20 text-sky-300 text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-sky-500/30 transition-colors cursor-default">
      {name}
    </span>
  );
};

export default SkillBadge;