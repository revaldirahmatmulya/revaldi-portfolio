
import React from 'react';
import { HeroData } from '../types';

interface HeroProps {
  heroData: HeroData;
  name: string;
}

const Hero: React.FC<HeroProps> = ({ heroData, name }) => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-slate-100">
          <span className="block">{heroData.greeting}</span>
          <span className="block text-sky-400 animate-pulse">{name}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-xl mx-auto">
          {heroData.subtitle}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <a
            href={heroData.ctaPrimaryLink}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg w-full sm:w-auto"
          >
            {heroData.ctaPrimaryText}
          </a>
          <a
            href={heroData.ctaSecondaryLink}
            className="bg-transparent hover:bg-sky-500 text-sky-400 font-semibold hover:text-white py-3 px-8 border border-sky-400 hover:border-transparent rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg w-full sm:w-auto"
          >
            {heroData.ctaSecondaryText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
