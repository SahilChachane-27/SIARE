import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-10 md:py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative aspect-[4/5] rounded-funky overflow-hidden shadow-2xl" data-aos="fade-right">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="University Academic Publishing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              data-ai-hint="academic publishing"
            />
          </div>
          <div className="lg:col-span-3 space-y-6" data-aos="fade-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                About Technical Journals
              </h2>
              <div className="mt-2 w-20 h-1 bg-accent"></div>
            </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              Technical Journals is a global journal hosting platform exclusively developed for Universities and Academic Institutions. The platform does NOT host journals from private publishers.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Our objective is to provide a secure, scalable, and professional OJS Platform based hosting environment where universities can launch, manage, and publish their research journals under their own unique institutional branding.
            </p>
            
            <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-funky">
              <CardHeader className="py-4">
                <CardTitle className="text-primary text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-base text-foreground/80 italic">
                  "To build the world’s most trusted, university-exclusive journal hosting ecosystem that empowers institutions to publish, preserve, and elevate their scholarly research through secure, scalable, and future-ready technologies."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-funky">
              <CardHeader className="py-4">
                <CardTitle className="text-primary text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-base text-foreground/80">
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
