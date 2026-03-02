'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-right">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="SIARE Academic Community"
              fill
              className="object-cover"
              data-ai-hint="academic publishing"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">About SIARE</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">
                Who We Are
              </h3>
              <div className="mt-4 w-20 h-1 bg-accent"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed font-medium italic">
                SIARE is an international research society committed to integrating knowledge across disciplines and fostering high-impact academic collaboration.
              </p>
              <p className="text-base text-foreground/70 leading-relaxed">
                We support universities, researchers, and conference organizers through peer-reviewed proceedings, academic training, and global research partnerships that bridge the gap between innovation and education.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-accent">
              <h4 className="font-bold text-primary text-xl font-headline mb-2">Our Mission</h4>
              <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                To accelerate innovative research, enhance academic visibility, and build globally connected scholarly communities through technology and collaboration.
              </p>
            </div>

            <Button asChild className="bg-primary hover:bg-accent text-white hover:text-primary rounded-xl px-10 h-14 text-sm font-bold uppercase tracking-widest shadow-xl transition-all">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About SIARE <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
