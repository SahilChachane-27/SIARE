'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import Image from 'next/image';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface NavLink {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/why-us', label: 'Membership' },
  { href: '/journals', label: 'Proceedings' },
  { href: '/resources', label: 'Authors & Conferences' },
  { href: '/events', label: 'Events' },
  {
    label: 'News',
    children: [
      { href: '/blog', label: 'Latest News & Updates' },
    ],
  },
  { href: '/contact', label: 'Contact' },
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
        scrolled ? 'bg-primary shadow-xl py-2 border-b border-accent/10' : 'bg-primary/95 backdrop-blur-md py-4'
      )}
    >
      <div className="w-full px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-3 leading-tight font-headline transition-transform hover:scale-[1.02] shrink-0">
            <div className="relative h-16 w-48 md:h-20 md:w-72 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="SIARE Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>
          
          <div className="hidden xl:flex items-center gap-6">
            <nav className="flex items-center gap-1">
              {navLinks.map((link, idx) => {
                if (link.children) {
                  return (
                    <DropdownMenu key={idx}>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-white/80 hover:text-white transition-all uppercase tracking-wider whitespace-nowrap outline-none group hover:underline underline-offset-8 decoration-accent decoration-2">
                          {link.label}
                          <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-primary border-accent/20 min-w-[200px]">
                        {link.children.map((child, childIdx) => (
                          <DropdownMenuItem key={childIdx} asChild className="focus:bg-accent focus:text-accent-foreground text-white cursor-pointer py-3 px-4 border-b border-white/5 last:border-0">
                            <Link href={child.href} className="text-xs uppercase tracking-widest font-medium w-full">
                              {child.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                return (
                  <Link key={idx} href={link.href!} className="px-3 py-2 text-[13px] font-medium text-white/80 hover:text-white transition-all uppercase tracking-wider whitespace-nowrap hover:underline underline-offset-8 decoration-accent decoration-2">
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky text-[11px] h-10 px-6 shrink-0 transition-all hover:scale-105 active:scale-95 ml-4">
              <Link href="/contact">Begin Research</Link>
            </Button>
          </div>

          <div className="xl:hidden flex items-center">
            {isClient && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-12 w-12">
                    <Menu className="h-8 w-8" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-primary border-l-0 text-white w-[85%] sm:w-80 p-6 overflow-y-auto">
                  <SheetHeader className="text-left mb-8 pr-8">
                    <SheetTitle className="sr-only">SIARE</SheetTitle>
                    <div className="relative h-12 w-48 mb-4">
                      <Image 
                        src="/logo.png" 
                        alt="SIARE Logo" 
                        fill 
                        className="object-contain object-left"
                      />
                    </div>
                    <SheetDescription className="sr-only">
                      SIARE Portal Navigation
                    </SheetDescription>
                  </SheetHeader>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {navLinks.map((link, idx) => {
                      if (link.children) {
                        return (
                          <AccordionItem value={`item-${idx}`} key={idx} className="border-white/10">
                            <AccordionTrigger className="text-white/80 hover:text-accent font-medium py-4 uppercase tracking-widest text-xs">
                              {link.label}
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col space-y-1 pb-4">
                              {link.children.map((child, childIdx) => (
                                <SheetClose asChild key={childIdx}>
                                  <Link 
                                    href={child.href} 
                                    className="text-white/60 hover:text-accent py-3 pl-4 text-xs font-medium border-l border-white/10 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                </SheetClose>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        );
                      }
                      return (
                        <div key={idx} className="border-b border-white/10">
                          <SheetClose asChild>
                            <Link 
                              href={link.href!} 
                              className="text-white/80 hover:text-accent font-medium py-4 flex w-full transition-colors uppercase tracking-widest text-xs"
                            >
                              {link.label}
                            </Link>
                          </SheetClose>
                        </div>
                      );
                    })}
                  </Accordion>

                  <div className="pt-8 w-full">
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky h-14 text-base">
                        <Link href="/contact">submit your paper</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
