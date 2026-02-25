import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-img');

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative aspect-[4/5] rounded-none overflow-hidden shadow-2xl" data-aos="fade-right">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="lg:col-span-3 space-y-6" data-aos="fade-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                About Technical Journals
              </h2>
              <div className="mt-4 w-24 h-1 bg-accent"></div>
            </div>
            <p className="text-base md:text-lg text-foreground/80">
              Technical Journals is being developed as a global journal hosting platform exclusively for Universities and Academic Institutions. The platform will NOT host journals from private publishers.
            </p>
            <p className="text-base md:text-lg text-foreground/80">
              The main objective is to provide a secure, scalable, and professional OJS Platform based hosting environment where universities can launch, manage, and publish their research journals under their own institutional branding.
            </p>
            <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-funky">
              <CardHeader>
                <CardTitle className="text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  To empower academic institutions with sovereign publishing tools that ensure their research remains accessible, professional, and firmly under institutional control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
