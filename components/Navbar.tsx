
import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

interface NavbarProps {
  navLinks: NavLink[];
  portfolioTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, portfolioTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = '';
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      
      sections.forEach(section => {
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                const correspondingLink = navLinks.find(navLink => navLink.href.substring(1) === section.id);
                if (correspondingLink) {
                    currentSection = correspondingLink.href;
                }
            }
        }
      });
      
      if (!currentSection && window.scrollY < 200 && navLinks.length > 0) {
        // No specific active section if very close to top
      } else if (!currentSection && sections.length > 0 && sections[0] && window.scrollY < (sections[0] as HTMLElement).offsetTop - 100) {
        currentSection = '';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-sky-400 transition ease transform duration-300`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-3xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
            {portfolioTitle}
          </a>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${activeSection === link.href ? 'text-sky-400 border-b-2 border-sky-400' : 'text-slate-300 hover:text-sky-400'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="flex flex-col h-10 w-10 border-2 border-sky-400 rounded justify-center items-center group"
              aria-label="Open menu"
            >
              <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-1.5 opacity-100 group-hover:opacity-100" : "opacity-100 group-hover:opacity-100"}`} />
              <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"}`} />
              <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-1.5 opacity-100 group-hover:opacity-100" : "opacity-100 group-hover:opacity-100"}`} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-center
                  ${activeSection === link.href ? 'text-sky-400 bg-slate-800' : 'text-slate-300 hover:text-sky-400 hover:bg-slate-800'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
