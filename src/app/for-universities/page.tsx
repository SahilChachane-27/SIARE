'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle2, 
  TrendingUp,
  School,
  FileText,
  Globe,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ForUniversitiesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  const benefits = [
    {
      icon: TrendingUp,
      text: "Enhances research output and institutional impact"
    },
    {
      icon: School,
      text: "Supports NAAC/NBA/NIRF ranking improvements"
    },
    {
      icon: FileText,
      text: "Dedicated platform for faculty & student publications"
    },
    {
      icon: Globe,
      text: "Strengthens global visibility & institutional brand"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "University Approval",
      desc: "Obtain necessary administrative authorizations for the institutional journal."
    },
    {
      num: "02",
      title: "Setup & Scope",
      desc: "Define focus, specific academic scope, and ethical peer-review policies."
    },
    {
      num: "03",
      title: "Workflow Setup",
      desc: "Configuration of Journal Website & end-to-end ScholarJMS workflow."
    },
    {
      num: "04",
      title: "Editorial Board",
      desc: "Formation of qualified international academic review panels and boards."
    },
    {
      num: "05",
      title: "Test Issue",
      desc: "Conducting a full trial run of the publication lifecycle and production."
    },
    {
      num: "06",
      title: "Official Launch",
      desc: "Public release, call for papers, and strategic indexing submissions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-20">
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6">
                For Universities
              </h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-12">
                Empowering academic institutions to own their research output and enhance global scholarly standing through professional journal management.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                    <benefit.icon className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-lg font-medium leading-tight">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt="Background"
                fill
                className="object-cover"
              />
            )}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline" data-aos="fade-up">
                Steps to Start Your Journal
              </h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <Card 
                  key={idx} 
                  className="border-none shadow-xl rounded-[30px] overflow-hidden bg-secondary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group hover:bg-white border border-transparent hover:border-accent/10" 
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                >
                  <CardHeader className="flex flex-col items-start gap-2 pb-2">
                    <span className="text-6xl font-black text-accent/10 font-headline select-none group-hover:text-accent transition-colors duration-500">
                      {step.num}
                    </span>
                    <CardTitle className="text-xl text-primary font-bold leading-tight group-hover:text-accent transition-colors duration-500">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary border-y border-border/50 relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 text-center relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline mb-6">
                Start Your Research Journal Today
              </h2>
              <p className="text-xl text-foreground/70 mb-12 font-medium">
                Contact our institutional partnership team to discuss MoU formalities and technical demo setup for your university.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-funky px-14 py-8 text-lg shadow-xl shadow-accent/20 transition-all hover:scale-105">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-funky px-14 py-8 text-lg font-bold transition-all hover:scale-105">
                  <Link href="/pricing">View Packages</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-10">
                {[
                  { label: "OJS Migration", icon: Rocket },
                  { label: "Institutional Ownership", icon: ShieldCheck },
                  { label: "Compliance Setup", icon: CheckCircle2 }
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-black text-primary/40 uppercase tracking-[0.2em]">
                    <tag.icon className="h-5 w-5 text-accent" />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
