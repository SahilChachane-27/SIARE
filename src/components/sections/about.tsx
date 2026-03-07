
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

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-accent shadow-sm">
                <h4 className="font-bold text-primary text-lg font-headline mb-2">Our Mission</h4>
                <p className="text-xs text-foreground/70 leading-relaxed font-medium">
                  To empower global academic communities by enabling high-quality research dissemination and multidisciplinary collaboration.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-accent shadow-sm">
                <h4 className="font-bold text-primary text-lg font-headline mb-2">Our Vision</h4>
                <p className="text-xs text-foreground/70 leading-relaxed font-medium">
                  To become a globally trusted academic society known for shaping impactful research and a unified platform for scholarly exchange.
                </p>
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-accent text-white hover:text-primary rounded-lg px-6 h-11 text-xs font-bold uppercase tracking-widest shadow-lg transition-all w-fit">
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
