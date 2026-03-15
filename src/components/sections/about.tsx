'use client';

import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1" data-aos="fade-right">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="SIARE Academic Community"
              fill
              className="object-cover"
              data-ai-hint="academic publishing"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2" data-aos="fade-left">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3">About SIARE</h2>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">
                Advancing Scholarly Global Collaboration
              </h3>
              <div className="mt-4 w-16 md:w-20 h-1 bg-accent"></div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                SIARE is an international research society committed to integrating knowledge across disciplines and fostering high-impact academic collaboration.
              </p>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                We support universities and researchers through peer-reviewed proceedings, academic training, and global research partnerships that bridge the gap between innovation and education.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border-l-4 border-accent shadow-sm">
                <h4 className="font-bold text-primary text-base md:text-lg font-headline mb-2">Our Mission</h4>
                <p className="text-[11px] md:text-xs text-foreground/70 leading-relaxed font-medium">
                  To empower global academic communities by enabling high-quality research dissemination and building an ecosystem where researchers can contribute to scientific advancement.
                </p>
              </div>
              <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border-l-4 border-accent shadow-sm">
                <h4 className="font-bold text-primary text-base md:text-lg font-headline mb-2">Our Vision</h4>
                <p className="text-[11px] md:text-xs text-foreground/70 leading-relaxed font-medium">
                  To become a globally trusted academic society known for shaping impactful research and providing a unified platform for scholarly exchange across all major disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
