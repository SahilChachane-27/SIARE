'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  PhoneCall, 
  ArrowRight,
  Youtube,
  MessageCircle,
  Pin,
  MessageSquare
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

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
  { label: 'LinkedIn', href: '#', icon: LinkedIn },
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
      {/* CTA Section Integrated in Footer Top */}
      <div className="bg-accent py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-16 lg:px-32 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-primary font-headline italic mb-4" data-aos="zoom-in">
            Ready to Collaborate With SIARE?
          </h2>
          <p className="text-primary/70 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium italic" data-aos="fade-up">
            Partner with us for conferences, proceedings, academic training, and global research activities.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-white hover:text-primary rounded-xl px-8 py-4 text-xs sm:text-sm font-black italic shadow-xl transition-all hover:scale-105 h-auto">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-xl px-8 py-4 text-xs sm:text-sm font-bold transition-all hover:scale-105 h-auto italic">
              <Link href="/contact">Submit Conference Proposal</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-xl px-8 py-4 text-xs sm:text-sm font-bold transition-all hover:scale-105 h-auto italic">
              <Link href="/contact">Contact SIARE</Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Mail className="absolute top-10 left-10 w-32 h-32 -rotate-12" />
          <PhoneCall className="absolute bottom-10 right-10 w-32 h-32 rotate-12" />
        </div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-32 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <div className="relative h-16 w-48 sm:h-20 sm:w-64">
                <Image src="/footer.png" alt="SIARE Logo" fill className="object-contain" />
              </div>
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

        {/* Social Icons Section - Moved to upper side of copyright */}
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