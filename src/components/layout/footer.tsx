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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="space-y-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-[1.02] shrink-0">
              <div className="relative h-10 w-36 md:h-12 md:w-48">
                <Image 
                  src="/footer.png" 
                  alt="SIARE Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[10px] md:text-xs leading-relaxed text-white/60 font-medium italic max-w-xs">
              Empowering global academic communities through integrated research, ethical publishing, and international collaboration.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-[10px] text-accent mb-2 uppercase tracking-widest italic">Platform</h5>
            <ul className="space-y-1">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[10px] text-white/80 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-2 w-2 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[10px] text-accent mb-2 uppercase tracking-widest italic">Legal</h5>
            <ul className="space-y-1">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[10px] text-white/80 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-2 w-2 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[10px] text-accent mb-2 uppercase tracking-widest italic">Community</h5>
            <ul className="space-y-1">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[10px] text-white/80 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-2 w-2 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <p className="flex items-center gap-2 italic text-[9px] text-white group">
                  <Mail className="h-2.5 w-2.5 text-accent" />
                  <a href="mailto:editor@academicproceeding.org" className="hover:text-accent transition-colors truncate">editor@academicproceeding.org</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 border-t border-white/5 pt-4">
          {connectLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="group flex flex-col items-center"
              aria-label={link.label}
            >
              <div className="h-6 w-6 md:h-7 md:w-7 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-lg border border-white/5">
                <link.icon className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="text-center border-t border-white/5 pt-4 space-y-1">
          {isClient && (
            <>
              <p className="text-[8px] md:text-[9px] font-black tracking-widest text-white uppercase max-w-5xl mx-auto leading-relaxed px-4 opacity-40">
                Copyright © {year} Society of Integrated Academic Research and Education (SIARE). All rights are reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[8px] font-black tracking-widest text-white/30 uppercase pb-2">
                <span>Terms & Conditions</span>
                <span className="opacity-20">|</span>
                <span>Legal Notice</span>
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