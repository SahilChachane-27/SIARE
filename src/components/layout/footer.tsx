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
  { href: '/membership', label: 'About SIARE' },
  { href: '/membership', label: 'Join SIARE' },
  { href: '/services', label: 'Publishing Model' },
  { href: '/submit-your-paper', label: 'Submit a Conference Proposal' },
];

const resourceLinks = [
  { href: '/proceedings', label: 'Proceedings' },
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
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02] shrink-0">
              <div className="relative h-16 w-48 md:h-20 md:w-64">
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
            <h5 className="font-bold text-base md:text-lg text-accent mb-4 font-headline italic">Platform</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs md:text-sm text-white hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-base md:text-lg text-accent mb-4 font-headline italic">Community</h5>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs md:text-sm text-white hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-white/5 mt-3">
                <p className="flex items-center gap-3 italic text-xs md:text-sm text-white group">
                  <Mail className="h-4 w-4 text-accent group-hover:text-accent transition-colors" />
                  <a href="mailto:editor@academicproceeding.org" className="hover:text-accent transition-colors truncate">editor@academicproceeding.org</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 border-t border-white/5 pt-8">
          {connectLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="group flex flex-col items-center gap-1"
              aria-label={link.label}
            >
              <div className="h-8 w-8 md:h-10 md:w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-lg">
                <link.icon className="h-4 w-4" />
              </div>
              <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-opacity">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 text-center border-t border-white/5 pt-8 space-y-4">
          {isClient && (
            <>
              <p className="text-[9px] md:text-[10px] font-black tracking-widest text-white uppercase max-w-5xl mx-auto leading-relaxed px-4 opacity-80">
                Copyright © {year} Society of Integrated Academic Research and Education (SIARE), its licensors, and contributors. All rights are reserved, including those for text and data mining, AI training, and similar technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[9px] md:text-[10px] font-black tracking-widest text-white uppercase px-4 pb-4">
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
