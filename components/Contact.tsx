import React, { useState } from 'react';
import Section from './Section';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { EmailIcon } from './icons/EmailIcon';
import { ContactData } from '../types';
import { SocialLink } from './SocialLink';

interface ContactProps {
  contactData: ContactData;
  email: string;
  github: string;
  linkedin: string;
}

const Contact: React.FC<ContactProps> = ({ contactData, email, github, linkedin }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault(); // Mencegah reload karena href="#"
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const socialLinks = [
    {
      href: github,
      text: 'GitHub',
      icon: <GithubIcon />,
      hoverColor: 'hover:bg-gray-600',
    },
    {
      href: linkedin,
      text: 'LinkedIn',
      icon: <LinkedInIcon />,
      hoverColor: 'hover:bg-blue-600',
    },
    {
      href: '#',
      text: emailCopied ? 'Email Copied!' : 'Email',
      icon: <EmailIcon />,
      hoverColor: 'hover:bg-red-500',
      onClick: handleEmailClick, // tetap lewat props
    },
  ];

  return (
    <Section id="contact" title={contactData.title} className="bg-slate-800">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-slate-300 mb-10 text-lg">{contactData.introText}</p>
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto text-white transform transition-all duration-500 hover:scale-[1.02]">
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <div key={link.text} onClick={link.onClick}>
                <SocialLink
                  href={link.href}
                  text={link.text}
                  icon={link.icon}
                  hoverColor={link.hoverColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
