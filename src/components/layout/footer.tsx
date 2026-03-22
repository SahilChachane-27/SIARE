'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Youtube,
  MessageCircle,
  Pin,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { useEffect, useState } from 'react';

const platformLinks = [
  { href: '/about', label: 'About SIARE' },
  { href: '/membership', label: 'Join SIARE' },
  { href: '/proceedings', label: 'Proceedings' },
  { href: '/events', label: 'Events' },
  { href: '/services', label: 'Academic Solutions' },
  { href: '/submit-your-paper', label: 'Submit a Conference Proposal' },
];

const communityLinks = [
  { href: '/about', label: 'Guidelines' },
  { href: '/contact', label: 'FAQs' },
  { href: '/membership', label: 'Membership' },
  { href: '/contact', label: 'Contact Us' },
];

const legalLinks = [
  { href: '/publication-ethics', label: 'Publication Ethics' },
  { href: '/peer-review-policy', label: 'Peer Review Policy' },
  { href: '/plagiarism-policy', label: 'Plagiarism Policy' },
  { href: '/conflicts-of-interest', label: 'Conflicts of Interest' },
  { href: '/open-access-policy', label: 'Open Access Policy' },
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
    <footer className="bg-primary text-primary-foreground overflow-hidden border-t border-accent/10">
      <div className="container mx-auto px-8 sm:px-12 md:px-20 lg:px-40 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Identity Column */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-[1.02] shrink-0">
              <div className="relative h-12 w-48 md:h-14 md:w-56">
                <Image 
                  src="/footer.png" 
                  alt="SIARE Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-base leading-relaxed text-white/60 font-medium italic max-w-xs">
              Empowering global academic communities through integrated research, ethical publishing, and international collaboration.
            </p>
          </div>

          {/* Platform Column */}
          <div>
            <h5 className="font-bold text-lg text-accent mb-6 uppercase tracking-widest italic">Platform</h5>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-white/80 hover:text-accent transition-all flex items-center group italic">
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h5 className="font-bold text-lg text-accent mb-6 uppercase tracking-widest italic">Legal</h5>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-white/80 hover:text-accent transition-all flex items-center group italic">
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h5 className="font-bold text-lg text-accent mb-6 uppercase tracking-widest italic">Community</h5>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-white/80 hover:text-accent transition-all flex items-center group italic">
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/5 mt-4">
                <p className="flex items-center gap-3 italic text-base text-white group">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <a href="mailto:editor@academicproceeding.org" className="hover:text-accent transition-colors truncate">editor@academicproceeding.org</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap justify-start gap-4 mb-10 border-t border-white/5 pt-10">
          {connectLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="group flex flex-col items-center"
              aria-label={link.label}
            >
              <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-lg border border-white/5">
                <link.icon className="h-5 w-5" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="text-left border-t border-white/5 pt-10 space-y-4">
          {isClient && (
            <>
              <p className="text-sm font-black tracking-widest text-white uppercase max-w-5xl leading-relaxed opacity-40">
                Copyright © {year} Society of Integrated Academic Research and Education (SIARE). All rights are reserved.
              </p>
              <div className="flex flex-wrap justify-start gap-x-6 gap-y-2 text-xs font-black tracking-widest text-white/30 uppercase pb-6">
                <button className="hover:text-white transition-colors">Terms & Conditions</button>
                <span className="opacity-20 hidden sm:inline">|</span>
                <button className="hover:text-white transition-colors">Legal Notice</button>
                <span className="opacity-20 hidden sm:inline">|</span>
                <button className="hover:text-white transition-colors">Cookie settings</button>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
