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
  { href: '/policies', label: 'Publication Ethics' },
  { href: '/policies', label: 'Peer Review Policy' },
  { href: '/policies', label: 'Plagiarism Policy' },
  { href: '/policies', label: 'Conflict of Interest' },
  { href: '/policies', label: 'Open Access Policy' },
];

const resourceLinks = [
  { href: '/proceedings', label: 'Proceedings' },
  { href: '/policies', label: 'Guidelines' },
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
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02] shrink-0">
              <div className="relative h-20 w-56 md:h-28 md:w-80">
                <Image 
                  src="/footer.png" 
                  alt="SIARE Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm md:text-base leading-relaxed text-white/80 font-medium italic max-w-xs">
              Empowering global academic communities through integrated research, ethical publishing, and international collaboration.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-lg md:text-xl text-accent mb-6 font-headline italic">Platform</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm md:text-base text-white hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg md:text-xl text-accent mb-6 font-headline italic">Policies</h5>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm md:text-base text-white hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg md:text-xl text-accent mb-6 font-headline italic">Community</h5>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm md:text-base text-white hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/5 mt-4">
                <p className="flex items-center gap-3 italic text-sm md:text-base text-white group">
                  <Mail className="h-4 w-4 text-accent group-hover:text-accent transition-colors" />
                  <a href="mailto:editor@academicproceeding.org" className="hover:text-accent transition-colors truncate">editor@academicproceeding.org</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 border-t border-white/5 pt-12">
          {connectLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="group flex flex-col items-center gap-2"
              aria-label={link.label}
            >
              <div className="h-10 w-10 md:h-12 md:w-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-lg">
                <link.icon className="h-5 w-5" />
              </div>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-opacity">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 text-center border-t border-white/5 pt-12 space-y-6">
          {isClient && (
            <>
              <p className="text-[10px] md:text-xs font-black tracking-widest text-white/40 uppercase max-w-5xl mx-auto leading-relaxed px-4">
                Copyright © {year} Society of Integrated Academic Research and Education (SIARE), its licensors, and contributors. All rights are reserved, including those for text and data mining, AI training, and similar technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-[10px] md:text-xs font-black tracking-widest text-white/40 uppercase px-4 pb-8">
                <Link href="#" className="hover:text-accent transition-colors">Terms & Conditions</Link>
                <span className="hidden sm:inline opacity-20">|</span>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy policy</Link>
                <span className="hidden sm:inline opacity-20">|</span>
                <Link href="#" className="hover:text-accent transition-colors">Legal notice</Link>
                <span className="hidden sm:inline opacity-20">|</span>
                <Link href="/accessibility-statement" className="hover:text-accent transition-colors">Accessibility</Link>
                <span className="hidden sm:inline opacity-20">|</span>
                <button className="hover:text-accent transition-colors">Cookie settings</button>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
