'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, PhoneCall, MapPin, Building } from "lucide-react";
import { ScrollToTop } from '@/components/layout/scroll-to-top';

const contactOptions = [
  { 
    icon: Mail, 
    title: "Email Inquiry", 
    text: "support@technicaljournals.org",
    link: "mailto:support@technicaljournals.org"
  },
  { 
    icon: PhoneCall, 
    title: "Project Hotline", 
    text: "0000000000",
    link: "tel:0000000000"
  },
  { 
    icon: MapPin, 
    title: "Our Headquarters", 
    text: "Global Research Hub, India",
    link: null
  },
  { 
    icon: Building, 
    title: "Project Consult", 
    text: "Schedule a virtual meeting",
    link: "#contact-form"
  }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-primary pt-32 pb-16 md:pt-44 md:pb-24 text-center px-4">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="space-y-6 md:space-y-8" data-aos="fade-up">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight text-white font-headline">
                Start Your Journal with Technical Journals
              </h1>
              <p className="max-w-5xl mx-auto text-sm sm:text-lg md:text-xl text-white/90 font-medium italic">
                Empowering your institution with secure and sovereign publishing tools.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/90">
                <a 
                  href="mailto:support@technicaljournals.org" 
                  className="flex items-center gap-2 hover:text-accent transition-colors sm:border-r sm:border-white/20 sm:pr-8 last:border-0"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span className="font-bold text-xs sm:text-base">Email:</span> 
                  <span className="text-[10px] sm:text-base break-all">support@technicaljournals.org</span>
                </a>
                <a 
                  href="tel:0000000000" 
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span className="font-bold text-xs sm:text-base">Mobile:</span> 
                  <span className="text-[10px] sm:text-base">0000000000</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactOptions.map((opt, i) => (
                <Card key={i} className="rounded-funky text-center border-none bg-secondary/50 shadow-md hover:shadow-xl transition-all group hover:-translate-y-1" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-8 flex flex-col items-center h-full">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-accent transition-colors">
                      <opt.icon className="h-6 w-6 text-accent group-hover:text-white" />
                    </div>
                    <h4 className="font-bold text-primary mb-2 font-headline">{opt.title}</h4>
                    {opt.link ? (
                      <a 
                        href={opt.link} 
                        className="text-sm text-foreground/70 font-medium hover:text-accent transition-colors break-all"
                      >
                        {opt.text}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground/70 font-medium break-words">
                        {opt.text}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Contact />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}