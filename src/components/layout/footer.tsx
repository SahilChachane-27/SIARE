'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowRight,
  Youtube,
  MessageCircle,
  Pin,
  MessageSquare
} from 'lucide-react';
import { useEffect, useState } from 'react';

const quickLinks = [
  { href: '/about', label: 'About the Platform' },
  { href: '/about', label: 'About Academic Proceeding' },
  { href: '/about', label: 'About SIARE' },
  { href: '/why-us', label: 'Join SIARE' },
  { href: '/services', label: 'Publishing Model' },
  { href: '/contact', label: 'Submit a Conference Proposal' },
];

const policyLinks = [
  { href: '/ethics-guidelines', label: 'Publication Ethics' },
  { href: '/ethics-guidelines', label: 'Peer Review Policy' },
  { href: '/ethics-guidelines', label: 'Plagiarism and Similarity Policy' },
  { href: '/ethics-guidelines', label: 'Conflict of Interest Policy' },
  { href: '/ethics-guidelines', label: 'Open Access and Data Policy' },
];

const resourceLinks = [
  { href: '/resources', label: 'Author Guidelines' },
  { href: '/resources', label: 'Editorial Guidelines' },
  { href: '/resources', label: 'Indexing & Archiving' },
  { href: '/contact', label: 'FAQs' },
  { href: '/contact', label: 'Contact Us' },
];

const connectLinks = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
  { label: 'X', href: '#', icon: Twitter },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'Pinterest', href: '#', icon: Pin },
  { label: 'WeChat', href: '#', icon: MessageSquare },
];

export function Footer() {
  const [year, setYear] = useState<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold font-headline text-accent italic transition-opacity hover:opacity-80">
              SIARE
            </Link>
            <p className="text-xs leading-relaxed text-white/60 font-medium italic max-w-xs">
              Empowering global academic communities through integrated research, ethical publishing, and international collaboration.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-lg text-accent mb-6 font-headline italic">About the Platform</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/60 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg text-accent mb-6 font-headline italic">Publishing Policies</h5>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/60 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg text-accent mb-6 font-headline italic">Authors & Conferences</h5>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/60 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/5 mt-4">
                <p className="flex items-center gap-3 italic text-[11px] text-white/60 group">
                  <Mail className="h-4 w-4 text-accent/60 group-hover:text-accent transition-colors" />
                  <a href="mailto:editor@academicproceeding.org" className="hover:text-accent transition-colors truncate">editor@academicproceeding.org</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 border-t border-white/5 pt-12">
          {connectLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="group flex flex-col items-center gap-2"
              aria-label={link.label}
            >
              <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-lg">
                <link.icon className="h-4 w-4" />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-opacity">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-10 text-center px-4">
          {isClient && (
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-10 w-40 mb-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <Image 
                  src="/logo.png" 
                  alt="SIARE Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <p className="text-[10px] font-black tracking-widest text-white/30 uppercase max-w-5xl mx-auto leading-relaxed">
                Copyright © {year} Society of Integrated Academic Research and Education (SIARE), its licensors, and contributors. All rights are reserved, including those for text and data mining, AI training, and similar technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-black tracking-widest text-white/30 uppercase">
                <Link href="#" className="hover:text-accent transition-colors">Terms & Conditions</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy policy</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="#" className="hover:text-accent transition-colors">Legal notice</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="/accessibility-statement" className="hover:text-accent transition-colors">Accessibility</Link>
                <span className="hidden sm:inline">|</span>
                <button className="hover:text-accent transition-colors">Cookie settings</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}