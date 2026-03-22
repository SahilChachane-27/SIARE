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
  { href: '/about', label: 'About SIARE' },
  { href: '/membership', label: 'Membership' },
  { href: '/proceedings', label: 'Proceedings' },
  { href: '/events', label: 'Events' },
];

const resourceLinks = [
  { href: '/services', label: 'Academic Solutions' },
  { href: '/submit-your-paper', label: 'Submit Paper' },
  { href: '/contact', label: 'Contact Us' },
];

const policyLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/accessibility-statement', label: 'Accessibility' },
  { href: '/hosting-agreement', label: 'Hosting Agreement' },
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-10 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="space-y-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-[1.02] shrink-0">
              <div className="relative h-12 w-40 md:h-14 md:w-56">
                <Image 
                  src="/footer.png" 
                  alt="SIARE Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[11px] md:text-xs leading-relaxed text-white/60 font-medium italic max-w-xs">
              Empowering global academic communities through integrated research, ethical publishing, and international collaboration.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-xs text-accent mb-3 uppercase tracking-widest italic">Navigation</h5>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/80 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-2.5 w-2.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xs text-accent mb-3 uppercase tracking-widest italic">Resources</h5>
            <ul className="space-y-1.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/80 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-2.5 w-2.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xs text-accent mb-3 uppercase tracking-widest italic">Legal</h5>
            <ul className="space-y-1.5">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/80 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-2.5 w-2.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <p className="flex items-center gap-2 italic text-[10px] text-white group">
                  <Mail className="h-3 w-3 text-accent" />
                  <a href="mailto:editor@academicproceeding.org" className="hover:text-accent transition-colors truncate">editor@academicproceeding.org</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-6 border-t border-white/5 pt-6">
          {connectLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="group flex flex-col items-center gap-1"
              aria-label={link.label}
            >
              <div className="h-7 w-7 md:h-8 md:w-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-lg border border-white/5">
                <link.icon className="h-3.5 w-3.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="text-center border-t border-white/5 pt-6 space-y-2">
          {isClient && (
            <>
              <p className="text-[8px] md:text-[9px] font-black tracking-widest text-white uppercase max-w-5xl mx-auto leading-relaxed px-4 opacity-40">
                Copyright © {year} Society of Integrated Academic Research and Education (SIARE). All rights are reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[8px] font-black tracking-widest text-white/30 uppercase pb-4">
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
