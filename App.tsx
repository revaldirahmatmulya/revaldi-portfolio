
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { 
  PersonalInfo,
  NavbarData,
  HeroData,
  AboutData,
  SkillsData,
  ProjectsData,
  ExperienceData,
  ContactData,
  FooterData
} from './types';

const App: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [navbarData, setNavbarData] = useState<NavbarData | null>(null);
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [experienceData, setExperienceData] = useState<ExperienceData | null>(null);
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('./data/personalInfo.json'),
          fetch('./data/navbar.json'),
          fetch('./data/hero.json'),
          fetch('./data/about.json'),
          fetch('./data/skills.json'),
          fetch('./data/projects.json'),
          fetch('./data/experience.json'),
          fetch('./data/contact.json'),
          fetch('./data/footer.json'),
        ]);

        for (const response of responses) {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${response.url}: ${response.status} ${response.statusText}`);
          }
        }

        const [
          personalInfoJson,
          navbarJson,
          heroJson,
          aboutJson,
          skillsJson,
          projectsJson,
          experienceJson,
          contactJson,
          footerJson,
        ] = await Promise.all(responses.map(res => res.json()));

        setPersonalInfo(personalInfoJson as PersonalInfo);
        setNavbarData(navbarJson as NavbarData);
        setHeroData(heroJson as HeroData);
        setAboutData(aboutJson as AboutData);
        setSkillsData(skillsJson as SkillsData);
        setProjectsData(projectsJson as ProjectsData);
        setExperienceData(experienceJson as ExperienceData);
        setContactData(contactJson as ContactData);
        setFooterData(footerJson as FooterData);

      } catch (err) {
        console.error("Failed to load portfolio data:", err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (personalInfo) {
      document.title = personalInfo.portfolioTitle || 'Personal Portfolio';
    }
  }, [personalInfo]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-200 items-center justify-center">
        <div className="text-2xl text-sky-400">Loading Portfolio Data...</div>
        {/* Optional: Add a spinner or more elaborate loading animation here */}
         <svg className="animate-spin mt-4 h-8 w-8 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-200 items-center justify-center p-4">
        <div className="text-2xl text-red-500 text-center">Error loading portfolio data:</div>
        <p className="text-red-400 mt-2 text-center">{error}</p>
        <p className="text-slate-400 mt-4 text-center">Please try refreshing the page. If the problem persists, check the console for more details.</p>
      </div>
    );
  }

  if (!personalInfo || !navbarData || !heroData || !aboutData || !skillsData || !projectsData || !experienceData || !contactData || !footerData) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-200 items-center justify-center">
        <div className="text-2xl text-yellow-500">Essential data is missing. Cannot render the portfolio.</div>
        <p className="text-slate-400 mt-2">Please ensure all data files are correctly placed and accessible.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-200">
      <Navbar navLinks={navbarData.links} portfolioTitle={personalInfo.portfolioTitle} />
      <main className="flex-grow">
        <Hero heroData={heroData} name={personalInfo.name} />
        <About aboutData={aboutData} name={personalInfo.name} />
        <Skills skillsData={skillsData} />
        <Projects projectsData={projectsData} />
        <Experience experienceData={experienceData} />
        <Contact contactData={contactData} email={personalInfo.email} github={personalInfo.githubUsername} linkedin={personalInfo.linkedinUsername} />
      </main>
      <Footer footerData={footerData} personalInfo={personalInfo} />
    </div>
  );
};

export default App;
