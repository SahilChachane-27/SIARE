'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  Download, 
  Search,
  CheckCircle2,
  ExternalLink,
  LifeBuoy
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "For Authors",
      icon: FileText,
      items: [
        "Manuscript Preparation Guidelines",
        "Author Agreement Form",
        "Article Processing Charge (APC) Info",
        "Submission Checklist"
      ]
    },
    {
      title: "For Reviewers",
      icon: Users,
      items: [
        "Peer Review Policy",
        "Reviewer Evaluation Form",
        "Ethical Guidelines for Reviewers",
        "Recognition & Certificates"
      ]
    },
    {
      title: "Editorial Standards",
      icon: ShieldCheck,
      items: [
        "COPE Compliance Guidelines",
        "Plagiarism Policy (iThenticate)",
        "Conflict of Interest Policy",
        "Retraction & Correction Policy"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-28 md:pt-36">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="max-w-3xl" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6">
                Academic Resources & Guidelines
              </h1>
              <div className="w-20 h-1 bg-accent mb-6"></div>
              <p className="text-xl opacity-90 leading-relaxed font-medium">
                Empowering authors, reviewers, and editors with the tools and information needed for high-quality academic publishing.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/ResearchPsychology.jpg"
              alt="Academic Research"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Main Resource Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid md:grid-cols-3 gap-8">
              {resourceCategories.map((cat, idx) => (
                <Card key={idx} className="border-none shadow-xl rounded-[30px] overflow-hidden bg-secondary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group hover:bg-white border border-transparent hover:border-accent/10" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <CardHeader className="flex flex-col items-center pb-2">
                    <div className="p-4 bg-primary/5 rounded-full mb-4 group-hover:bg-accent/10 transition-colors">
                      <cat.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <CardTitle className="text-2xl text-primary font-bold group-hover:text-accent transition-colors">{cat.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group cursor-pointer">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-foreground/70 text-sm font-medium hover:text-primary transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Templates Section */}
        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline" data-aos="fade-up">
                Downloadable Templates
              </h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Word Template", type: "DOCX", size: "1.2 MB" },
                { title: "LaTeX Template", type: "ZIP", size: "4.5 MB" },
                { title: "Reviewer Guide", type: "PDF", size: "0.8 MB" },
                { title: "Ethics Policy", type: "PDF", size: "1.5 MB" }
              ].map((template, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-border/50 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={idx * 50}>
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-1">{template.title}</h3>
                  <p className="text-[10px] text-foreground/40 font-black mb-4 uppercase tracking-widest">{template.type} • {template.size}</p>
                  <Button variant="outline" size="sm" className="w-full border-primary/20 text-primary font-bold hover:bg-primary hover:text-white rounded-xl">
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OJS Platform Documentation Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-16 lg:px-32">
            <Card className="bg-primary text-primary-foreground p-6 md:p-12 lg:p-16 rounded-[30px] md:rounded-[40px] overflow-hidden relative shadow-2xl border-none" data-aos="fade-up">
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-accent font-bold text-xs uppercase tracking-widest">
                    <LifeBuoy className="h-4 w-4" />
                    Support Documentation
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold font-headline leading-tight">
                    Technical Guide for OJS Platform
                  </h2>
                  <p className="text-base md:text-lg opacity-80 leading-relaxed font-medium">
                    Need help navigating our Journal Management System? Access comprehensive guides on manuscript tracking, reviewer assignment, and production workflows.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-funky px-8 md:px-14 py-4 md:py-8 text-sm md:text-lg shadow-xl shadow-accent/20 transition-all hover:scale-105 h-auto">
                      Access Documentation
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white rounded-funky px-8 md:px-14 py-4 md:py-8 text-sm md:text-lg font-bold transition-all h-auto">
                      Video Tutorials
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border-4 md:border-8 border-white/5 shadow-2xl">
                  <Image
                    src="/ResearchPsychology.jpg"
                    alt="Technical Support"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-primary border-b-[8px] md:border-b-[12px] border-b-transparent ml-1 md:ml-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48 blur-2xl md:blur-3xl"></div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
