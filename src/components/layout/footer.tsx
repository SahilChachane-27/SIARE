'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

const supportLinks = [
  { href: '/resources', label: 'Documentation' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Help Center' },
];

export function Footer() {
  const [year, setYear] = useState<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Branding & Info */}
          <div className="space-y-6 lg:col-span-1" data-aos="fade-up">
            <Link href="/" className="flex items-center gap-3 leading-tight font-headline transition-opacity hover:opacity-80">
                <BookOpen className="h-8 w-8 text-accent" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-accent">Technical Journals</span>
                  <span className="text-[11px] font-medium text-accent/80 tracking-[0.2em] uppercase">University Journal Hosting</span>
                </div>
            </Link>
            <div className="text-sm leading-relaxed space-y-2">
              <p>Empowering academic institutions with secure, scalable, and professional journal hosting since 2024.</p>
              <div className="pt-2">
                <p className="font-bold text-accent mb-1">Platform Info:</p>
                <ul className="text-xs space-y-1 opacity-80">
                  <li>• Exclusively for Universities</li>
                  <li>• Secure ScholarJMS Hosting</li>
                  <li>• Institutional Branding</li>
                  <li>• No Private Publishers</li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h5 className="font-bold text-lg text-primary-foreground mb-4 font-headline">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-bold text-lg text-primary-foreground mb-4 font-headline">Company</h5>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h5 className="font-bold text-lg text-primary-foreground mb-4 font-headline">Support</h5>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Newsletter */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="space-y-6">
              <h5 className="font-bold text-lg text-primary-foreground font-headline">Get in Touch</h5>
              <div className="text-sm space-y-1">
                <p>Email: support@technicaljournals.org</p>
                <p>Mobile: +91 8200385143</p>
              </div>
              {isClient && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider font-bold text-accent">Join Our Newsletter</p>
                  <form className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 border-primary-foreground/10 focus-visible:ring-accent" 
                    />
                    <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky px-4">Go</Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Links & Policies Section */}
        <div className="border-t border-primary-foreground/10 pt-8 pb-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px] font-medium text-primary-foreground/60" data-aos="fade-up">
          <div className="flex flex-wrap gap-x-2 gap-y-1 items-center justify-center md:justify-start">
            <span className="text-accent font-black uppercase tracking-widest mr-1">Quick Links</span>
            <Link href="/" className="hover:text-accent">Home</Link> | 
            <Link href="/about" className="hover:text-accent">About</Link> | 
            <Link href="/services" className="hover:text-accent">Services</Link> | 
            <Link href="/journals" className="hover:text-accent">Journals</Link> | 
            <Link href="/pricing" className="hover:text-accent">Subscription</Link> | 
            <Link href="/contact" className="hover:text-accent">Contact</Link>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 items-center justify-center md:justify-end">
            <span className="text-accent font-black uppercase tracking-widest mr-1">Policies</span>
            <span className="opacity-40">•</span>
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <span className="opacity-40">•</span>
            <Link href="#" className="hover:text-accent">Hosting Agreement</Link>
            <span className="opacity-40">•</span>
            <Link href="#" className="hover:text-accent">Ethics & Guidelines</Link>
            <span className="opacity-40">•</span>
            <Link href="#" className="hover:text-accent">Accessibility Statement</Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs tracking-widest text-primary-foreground/40 uppercase" data-aos="fade-up">
          {isClient && <p>© {year} Technical Journals. All Rights Reserved. Built for Academic Sovereignty.</p>}
        </div>
      </div>
    </footer>
  );
}