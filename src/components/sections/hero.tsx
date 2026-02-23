import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden bg-primary pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
        <div className="relative z-10 max-w-4xl" data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-2xl font-headline text-white leading-tight">
            Secure and Reliable Journal Hosting for Universities Only
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl drop-shadow-lg leading-relaxed">
            Technical Journals provides secure, scalable, and ethical journal hosting exclusively for University-owned journals. Own your research output with professional institutional branding.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 ease-in-out hover:scale-105 rounded-funky px-8 py-7 text-lg font-bold shadow-xl">
              <Link href="/contact">Start Your University Journal</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out hover:scale-105 rounded-funky px-8 py-7 text-lg font-bold shadow-xl">
              <Link href="/journals">Explore Journals</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
