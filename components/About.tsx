
import React from 'react';
import Section from './Section';
import { AboutData } from '../types';

interface AboutProps {
  aboutData: AboutData;
  name: string;
}

const About: React.FC<AboutProps> = ({ aboutData, name }) => {
  return (
    <Section id="about" title={aboutData.title} className="bg-slate-800">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="text-lg text-slate-300 space-y-5 text-center lg:text-left">
          {aboutData.introductionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <div className="bg-slate-700/50 p-6 rounded-lg shadow-md ">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 className="text-xl font-semibold text-sky-400">{aboutData.philosophyTitle}</h4>
              </div>
              <p className="text-slate-300 text-md">
                "{aboutData.philosophyStatement}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
