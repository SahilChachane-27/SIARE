'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, PhoneCall, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/why-us', label: 'Membership' },
  { href: '/journals', label: 'Proceedings' },
  { href: '/events', label: 'Events' },
  { href: '/resources', label: 'Learning Hub' },
  { href: '/privacy-policy', label: 'Policies' },
  { href: '/contact', label: 'Contact' },
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
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-lg">
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg text-accent mb-6 font-headline italic">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-white/60 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg text-accent mb-6 font-headline italic">Contact Information</h5>
            <div className="space-y-4 text-xs font-medium text-white/60">
              <p className="flex items-center gap-3 italic">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@academicproceeding.org" className="hover:text-accent transition-colors">info@academicproceeding.org</a>
              </p>
              <p className="flex items-center gap-3 italic">
                <PhoneCall className="h-4 w-4 text-accent" />
                <span>+1 000 000 0000</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest pt-4 opacity-40 leading-relaxed font-black">
                SIARE Administrative Office<br/>[City, State, Country]
              </p>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg text-accent mb-6 font-headline italic">Platform Values</h5>
            <ul className="text-[10px] space-y-3 font-black uppercase tracking-widest opacity-40">
              <li className="flex items-center gap-2">• Academic Integrity</li>
              <li className="flex items-center gap-2">• University-Focused</li>
              <li className="flex items-center gap-2">• Global Network</li>
              <li className="flex items-center gap-2">• Ethical Publishing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center">
          {isClient && (
            <p className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">
              Copyright © {year} SIARE – Society of Integrated Academic Research and Education. All Rights Reserved.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
