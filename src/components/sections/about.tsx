import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {

  return (
    <section id="about" className="py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 relative aspect-[4/5] rounded-none overflow-hidden shadow-2xl" data-aos="fade-right">
            {(
              <Image
                src="/aboutus.png"
                alt="aboutus.png"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            )}
          </div>
          <div className="lg:col-span-3 space-y-4" data-aos="fade-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">
                About Technical Journals
              </h2>
              <div className="mt-2 w-16 h-1 bg-accent"></div>
            </div>
            <p className="text-sm md:text-base text-foreground/80">
              Technical Journals is a global journal hosting platform exclusively developed for Universities and Academic Institutions. The platform does NOT host journals from private publishers.
            </p>
            <p className="text-sm md:text-base text-foreground/80">
              Our objective is to provide a secure, scalable, and professional OJS Platform based hosting environment where universities can launch, manage, and publish their research journals under their own unique institutional branding.
            </p>
            
            <div className="p-4 bg-secondary/50 rounded-2xl border-l-4 border-accent shadow-sm italic">
              <h3 className="text-lg font-bold text-primary font-headline mb-2">Our Vision</h3>
              <p className="text-xs md:text-sm text-foreground/80 font-medium leading-relaxed">
                "To build the world’s most trusted, university-exclusive journal hosting ecosystem that empowers institutions to publish, preserve, and elevate their scholarly research through secure, scalable, and future-ready technologies."
              </p>
            </div>

            <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-funky">
              <CardHeader className="py-3">
                <CardTitle className="text-primary text-lg">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-xs md:text-sm text-foreground/80">
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