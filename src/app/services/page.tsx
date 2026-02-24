'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Laptop, Users, Workflow, Database, ShieldCheck, Zap, Globe, BarChart } from 'lucide-react';
import Link from 'next/link';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

const categories = [
  {
    title: "Journal Hosting Services",
    icon: Laptop,
    description: "Robust, secure infrastructure tailored for academic journals.",
    features: [
      "ScholarJMS complete installation & setup",
      "Enterprise server maintenance & monitoring",
      "DOI registration (DigiIdentify/CrossRef)",
      "Article-level indexing metadata management",
      "Anti-plagiarism system integration"
    ]
  },
  {
    title: "University Partnership Program",
    icon: Users,
    description: "Long-term collaboration for institutional research growth.",
    features: [
      "Institutional branded publishing portals",
      "Co-branded publication workflows",
      "Dedicated institutional account manager",
      "Annual journal analytics & visibility reports",
      "Assistance with institutional ranking metrics"
    ]
  },
  {
    title: "Editorial Workflow Management",
    icon: Workflow,
    description: "End-to-end editorial system for maximum efficiency.",
    features: [
      "Manuscript submission & tracking portal",
      "Automated reviewer panel creation",
      "Systematic automated reminders for peers",
      "Professional copyediting production tools",
      "Version control & archival management"
    ]
  },
  {
    title: "Migration & Legacy Services",
    icon: Database,
    description: "Transitioning legacy research to modern standards.",
    features: [
      "Migration from OJS 2.x / other legacy systems",
      "Full retention of back issues & metadata",
      "Preservation of Persistent URLs (PIDs)",
      "Data integrity auditing & historical cleanup",
      "Seamless redirection for legacy citation links"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <div className="text-center mb-20" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary font-headline">Academic Solutions</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto italic font-medium">
              Empowering universities with end-to-end publishing technology and strategic indexing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {categories.map((cat, i) => (
              <Card key={i} className="rounded-funky shadow-2xl border-none bg-slate-50 group hover:bg-white transition-all duration-500 relative overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <cat.icon className="w-32 h-32" />
                </div>
                <CardHeader className="p-8 pb-0">
                  <div className="flex items-center gap-5">
                    <div className="h-16 w-16 bg-primary rounded-funky flex items-center justify-center shadow-xl group-hover:bg-accent transition-colors duration-500 relative">
                      <cat.icon className="h-8 w-8 text-white group-hover:text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary font-headline italic tracking-tight">{cat.title}</CardTitle>
                      <p className="text-xs text-foreground/50 font-bold uppercase tracking-wider mt-1">{cat.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-5">
                    {cat.features.map((feat, fi) => (
                      <li key={fi} className="flex gap-4 items-start text-foreground/80 group-hover:text-foreground">
                        <div className="mt-1 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                          <Check className="h-3 w-3 text-primary group-hover:text-white" />
                        </div>
                        <span className="text-sm font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-24 p-8 md:p-16 bg-primary rounded-funky shadow-2xl relative overflow-hidden text-center text-white" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32" />
            
            <h2 className="text-2xl md:text-4xl font-bold font-headline mb-6">Scalable Hosting for Academic Excellence</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 font-medium text-sm md:text-base">
              Technical Journals provides more than just hosting; we provide a complete ecosystem for institutional research visibility and global dissemination.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-60">
              <div className="flex flex-col items-center gap-2"><Globe className="h-6 w-6 md:h-8 md:w-8" /><span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Global Indexing</span></div>
              <div className="flex flex-col items-center gap-2"><ShieldCheck className="h-6 w-6 md:h-8 md:w-8" /><span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Secure Servers</span></div>
              <div className="flex flex-col items-center gap-2"><BarChart className="h-6 w-6 md:h-8 md:w-8" /><span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Growth Analytics</span></div>
            </div>
            <Button asChild className="mt-8 md:mt-12 bg-accent hover:bg-white hover:text-primary text-accent-foreground px-6 md:px-12 py-3 md:py-6 text-sm md:text-lg font-bold rounded-funky shadow-2xl w-full sm:w-auto h-auto transition-all">
              <Link href="/contact">Inquire About Services</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
