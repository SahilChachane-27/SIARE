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
  MessageSquare
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
      <div className="container mx-auto px-8 sm:px-12 md:px-20 lg:px-32 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center">
          {/* Brand Identity Column */}
          <div className="space-y-4 lg:col-span-1 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-[1.02] shrink-0">
              <div className="relative h-12 w-48 md:h-14 md:w-56">
                <Image 
                  src="/footer.png" 
                  alt="SIARE Logo" 
                  fill 
                  className="object-contain object-center"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 font-medium italic max-w-xs">
              Empowering global academic communities through integrated research, ethical publishing, and international collaboration.
            </p>
          </div>

          {/* Platform Column */}
          <div>
            <h5 className="font-bold text-base text-accent mb-4 uppercase tracking-widest italic">Platform</h5>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-accent transition-colors flex items-center justify-center group italic">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h5 className="font-bold text-base text-accent mb-4 uppercase tracking-widest italic">Legal</h5>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-accent transition-colors flex items-center justify-center group italic">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h5 className="font-bold text-base text-accent mb-4 uppercase tracking-widest italic">Community</h5>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-accent transition-colors flex items-center justify-center group italic">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <p className="flex items-center justify-center gap-2 italic text-sm text-white group">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:editor@academicproceeding.org" className="hover:text-accent transition-colors truncate">editor@academicproceeding.org</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 border-t border-white/5 pt-8">
          {connectLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="group flex flex-col items-center"
              aria-label={link.label}
            >
              <div className="h-8 w-8 md:h-9 md:w-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-lg border border-white/5">
                <link.icon className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="text-center border-t border-white/5 pt-8 space-y-2">
          {isClient && (
            <>
              <p className="text-xs font-black tracking-widest text-white uppercase max-w-5xl mx-auto leading-relaxed px-4 opacity-40">
                Copyright © {year} Society of Integrated Academic Research and Education (SIARE). All rights are reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-black tracking-widest text-white/30 uppercase pb-4">
                <button className="hover:text-white transition-colors">Terms & Conditions</button>
                <span className="opacity-20">|</span>
                <button className="hover:text-white transition-colors">Legal Notice</button>
                <span className="opacity-20">|</span>
                <button className="hover:text-white transition-colors">Cookie settings</button>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
