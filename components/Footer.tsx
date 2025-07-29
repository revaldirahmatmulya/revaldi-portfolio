
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { EmailIcon } from './icons/EmailIcon';
import { FooterData, PersonalInfo } from '../types';

interface FooterProps {
  footerData: FooterData;
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ footerData, personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex justify-center space-x-6 mb-4">
          <a
            href={`https://github.com/${personalInfo.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-7 h-7" />
          </a>
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedinUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-7 h-7" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-400 hover:text-sky-400 transition-colors"
            aria-label="Email Me"
          >
            <EmailIcon className="w-7 h-7" />
          </a>
        </div> */}
        <p className="text-slate-400 text-sm">
          &copy; {currentYear} {personalInfo.name}. {footerData.copyrightSuffix}
        </p>
        <p className="text-slate-500 text-xs mt-2">
          {footerData.builtWithText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
