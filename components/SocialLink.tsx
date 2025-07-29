
import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  hoverColor: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, text, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center p-4 bg-gray-700/50 border border-gray-600 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${hoverColor}`}
    >
      <div className="w-8 h-8 flex-shrink-0">{icon}</div>
      <span className="ml-4 font-medium text-lg text-gray-200">{text}</span>
      <span className="ml-auto text-gray-400 transition-transform duration-300 transform group-hover:translate-x-1">&rarr;</span>
    </a>
  );
};
