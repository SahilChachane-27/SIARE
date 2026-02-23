'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/journals', label: 'Journals Hosted' },
  { href: '/for-universities', label: 'For Universities' },
  { href: '/resources', label: 'Resources' },
  { href: '/pricing', label: 'Subscription Plans' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-primary shadow-xl py-2 border-b border-accent/10' : 'bg-primary/90 backdrop-blur-md py-4'
      )}
    >
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 leading-tight font-headline transition-transform hover:scale-[1.02] shrink-0">
            <BookOpen className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-accent">Technical Journals</span>
              <span className="text-[10px] md:text-[11px] font-medium text-white/80 tracking-[0.1em] uppercase leading-tight">University Journal Hosting</span>
            </div>
          </Link>
          
          <div className="hidden xl:flex items-center gap-6">
            <nav className="flex items-center gap-5">
              {navLinks.map((link, idx) => {
                return (
                  <Link key={idx} href={link.href!} className="text-[11px] font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky text-[10px] h-8 px-4 shrink-0">
              <Link href="/contact">Begin your Research Journey</Link>
            </Button>
          </div>

          <div className="xl:hidden">
            {isClient && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-primary border-l-0 text-white w-80 p-6 overflow-y-auto">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <SheetDescription>
                      Access all pages and resources of Technical Journals.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col items-start space-y-4 mt-8">
                    {navLinks.map((link, idx) => (
                      <div key={idx} className="py-4 border-b border-white/10 w-full text-left">
                        <SheetClose asChild>
                          <Link href={link.href!} className="text-white/80 hover:text-white font-medium block w-full">
                            {link.label}
                          </Link>
                        </SheetClose>
                      </div>
                    ))}
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky mt-6">
                        <Link href="/contact">Begin your Research Journey</Link>
                      </Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
