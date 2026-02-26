'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/journals', label: 'Journals' },
  { href: '/pricing', label: 'Subscription' },
  { href: '/contact', label: 'Contact' },
];

const policiesLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/hosting-agreement', label: 'Hosting Agreement' },
  { href: '/ethics-guidelines', label: 'Ethics & Guidelines' },
  { href: '/accessibility-statement', label: 'Accessibility Statement' },
];

export function Footer() {
  const [year, setYear] = useState<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground/80 pt-10 pb-6 overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Column 1: Branding & Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 leading-tight font-headline transition-opacity hover:opacity-80">
                <div className="relative h-16 w-48 sm:h-20 sm:w-64 shrink-0">
                  <Image 
                    src="/JTlogo.png" 
                    alt="Technical Journals Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
            </Link>
            <div className="text-xs leading-relaxed max-w-sm">
              <p>Empowering academic institutions with secure, scalable, and professional journal hosting since 2024.</p>
              <div className="pt-2">
                <p className="font-bold text-accent mb-1 uppercase text-[10px] tracking-widest">Platform Info:</p>
                <ul className="text-[10px] space-y-0.5 opacity-80">
                  <li>• Exclusively for Universities</li>
                  <li>• Secure OJS Platform Hosting</li>
                  <li>• Institutional Branding</li>
                  <li>• No Private Publishers</li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="font-bold text-base text-primary-foreground mb-3 font-headline">Quick Links</h5>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div>
            <h5 className="font-bold text-base text-primary-foreground mb-3 font-headline">Policies</h5>
            <ul className="space-y-2 text-xs">
              {policiesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-1">
            <h5 className="font-bold text-base text-primary-foreground font-headline mb-3">Get in Touch</h5>
            <div className="text-xs space-y-3 mb-4">
              <p className="leading-tight"><span className="text-accent font-bold">Email:</span><br/>support@technicaljournals.org</p>
              <p className="leading-tight"><span className="text-accent font-bold">Mobile:</span><br/>0000000000</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          {isClient && (
            <p className="text-[10px] font-bold tracking-[0.2em] text-primary-foreground uppercase opacity-60">
              Copyright © {year} Technical Journals. All Rights Reserved. Built for Academic Sovereignty.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}