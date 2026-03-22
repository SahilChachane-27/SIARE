'use client';

import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 overflow-hidden bg-white font-body">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1" data-aos="fade-right">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="SIARE Academic Community"
              fill
              className="object-cover"
              data-ai-hint="academic publishing"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          
          <div className="space-y-6 md:space-y-10 order-1 lg:order-2" data-aos="fade-left">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3 font-sans">About SIARE</h2>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">
                Advancing Scholarly Global Collaboration
              </h3>
              <div className="mt-4 w-16 md:w-20 h-1 bg-accent"></div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                The Society of Integrated Academic Research and Education (SIARE) is an international scholarly organization dedicated to advancing cross-disciplinary research, promoting academic excellence, and supporting global collaboration.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                SIARE connects leading scholars, emerging researchers, universities, and research organizations through conferences, proceedings publications, and collaborative projects that accelerate knowledge creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
