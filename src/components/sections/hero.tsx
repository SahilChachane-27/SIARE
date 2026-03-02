'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] md:min-h-screen flex flex-col items-start justify-center overflow-hidden bg-primary pt-20 md:pt-32">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/laptop.jpeg"
          alt="Hero Background"
          fill
          className="object-cover max-[750px]:object-contain object-center md:object-right-top"
          priority
          data-ai-hint="university research"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10">
        <div className="relative z-10 max-w-4xl" data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 drop-shadow-2xl font-headline text-white leading-tight hero-title-responsive">
            Welcome to the Society of Integrated Academic Research and Education (SIARE)
          </h1>
          <p className="text-sm md:text-base lg:text-xl text-white/90 mb-10 max-w-3xl drop-shadow-lg leading-relaxed font-medium hero-text-responsive">
            Integrating Knowledge. Empowering Scholars. Accelerating Global Research Impact. (SIARE Conference Proceedings)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 ease-in-out hover:scale-105 rounded-funky px-8 py-6 text-sm md:text-base font-bold shadow-xl w-full sm:w-auto btn-responsive">
              <Link href="/contact">Join Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out hover:scale-105 rounded-funky px-8 py-6 text-sm md:text-base font-bold shadow-xl w-full sm:w-auto btn-responsive">
              <Link href="/journals">Submit Your Conference Proceedings</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
