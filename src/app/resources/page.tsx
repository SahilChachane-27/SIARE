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
  Workflow,
  Layers,
  Zap,
  ArrowRight,
  ClipboardList,
  Scale,
  Clock,
  Globe
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ResourcesPage() {
  const steps = [
    "Submit partnership request",
    "Evaluation by SIARE Academic Committee",
    "MoU signing & planning",
    "Conference conducts submissions",
    "Papers undergo SIARE review workflow",
    "Final publication & DOI allocation"
  ];

  const series = [
    "SIARE Proceedings in Engineering & Technology",
    "SIARE Proceedings in Computer Science & AI",
    "SIARE Proceedings in Management & Innovation",
    "SIARE Proceedings in Social Sciences & Humanities",
    "SIARE Proceedings in Education & Learning",
    "SIARE Proceedings in Agriculture & Biological Sciences",
    "SIARE Proceedings in Medical & Health Sciences",
    "SIARE Multidisciplinary Proceedings Series"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline italic leading-tight mb-6">
                Authors & Conferences
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
                Unified academic ecosystem for authors, conference organizers, and institutions.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Academic Authors"
              fill
              className="object-cover"
              priority
              data-ai-hint="scholars meeting"
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white border-b border-border/50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 text-center">
            <p className="max-w-4xl mx-auto text-lg text-foreground/70 leading-relaxed font-medium italic" data-aos="fade-up">
              SIARE provides a unified academic ecosystem for authors, conference organizers, and institutions. This section outlines the complete guidelines, workflows, responsibilities, and support available for all authors and partnered conferences publishing with SIARE.
            </p>
          </div>
        </section>

        {/* Author Guidelines */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div data-aos="fade-right">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary font-headline italic">Author Guidelines</h2>
                </div>
                
                <div className="space-y-8">
                  <Card className="rounded-2xl border-none shadow-xl overflow-hidden">
                    <CardHeader className="bg-primary text-white p-6">
                      <CardTitle className="text-lg">Manuscript Preparation</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-sm font-bold text-primary/60 uppercase tracking-widest">Formatting Standards:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Recommended length: 10–15 pages",
                          "File format: MS Word (.doc/.docx)",
                          "Font: Times New Roman, 12 pt",
                          "Margin: 1 inch on all sides",
                          "Spacing: 1.15",
                          "Referencing: APA / IEEE"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                            <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-none shadow-xl overflow-hidden">
                    <CardHeader className="bg-primary text-white p-6">
                      <CardTitle className="text-lg">Paper Structure</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          "1. Title", "2. Authors", "3. Abstract", "4. Keywords", "5. Intro", 
                          "6. Literature", "7. Method", "8. Findings", "9. Discussion", 
                          "10. Conclusion", "11. Refs", "12. Ack."
                        ].map((step, i) => (
                          <div key={i} className="px-3 py-2 bg-secondary rounded-lg text-[10px] font-bold text-primary/60 uppercase border border-primary/5 text-center">
                            {step}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div data-aos="fade-left" className="space-y-8">
                <Card className="rounded-2xl border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-primary font-headline italic">Submission Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-4">
                      {[
                        "Original, unpublished work only",
                        "Manuscript must pass plagiarism screening",
                        "Complete author details (email, ORCID, affiliations)",
                        "Figures and tables properly numbered",
                        "Ethical approval statements for sensitive studies"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/70 italic">
                          <ArrowRight className="h-4 w-4 text-accent shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="p-8 bg-primary rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                      <Workflow className="h-6 w-6 text-accent" /> Review Process
                    </h3>
                    <p className="text-sm text-white/70 mb-6 italic">Authors undergo a rigorous double-blind peer review.</p>
                    <div className="space-y-3">
                      {["Initial Screening", "Reviewer Assignment", "Evaluation", "Author Revision Round", "Final Editorial Acceptance"].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-bold">
                          <span className="h-5 w-5 rounded-full bg-accent text-primary flex items-center justify-center text-[10px] shrink-0">{i+1}</span>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Partnerships */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4 italic">
                Conference Partnerships
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-foreground/60 font-medium">
                SIARE partners with universities, academic societies, and institutions worldwide to publish high-quality conference proceedings under its official SIARE Proceedings Series.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="rounded-2xl border border-primary/5 shadow-xl bg-slate-50 flex flex-col h-full" data-aos="fade-up">
                <CardHeader className="pb-2">
                  <ClipboardList className="h-10 w-10 text-accent mb-4" />
                  <CardTitle className="text-xl text-primary font-headline italic">Organizer Requirements</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm text-foreground/70 italic">
                    <li>• Provide theme, committee & schedule</li>
                    <li>• Ensure proper peer review</li>
                    <li>• Maintain ethical standards</li>
                    <li>• Submit final files in required format</li>
                    <li>• Follow SIARE templates & guidelines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-primary/5 shadow-xl bg-primary text-white md:scale-110 relative z-10 flex flex-col h-full" data-aos="zoom-in">
                <CardHeader className="pb-2">
                  <Zap className="h-10 w-10 text-accent mb-4" />
                  <CardTitle className="text-xl font-headline italic">SIARE Support</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-xs space-y-4">
                  <div>
                    <p className="font-black text-accent uppercase tracking-widest mb-2">Pre-Conference</p>
                    <p className="opacity-70">Publication MoU, Workflow Planning, Templates, Submission Portal.</p>
                  </div>
                  <div>
                    <p className="font-black text-accent uppercase tracking-widest mb-2">During Conference</p>
                    <p className="opacity-70">Technical support, Paper curation, Guidance for session chairs.</p>
                  </div>
                  <div>
                    <p className="font-black text-accent uppercase tracking-widest mb-2">Post-Conference</p>
                    <p className="opacity-70">Similarity checks, Typesetting, DOI assignment, Indexing support.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-primary/5 shadow-xl bg-slate-50 flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
                <CardHeader className="pb-2">
                  <Layers className="h-10 w-10 text-accent mb-4" />
                  <CardTitle className="text-xl text-primary font-headline italic">Proceedings Series</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-[10px] font-bold text-primary/60 uppercase">
                    {series.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-12">
              <div data-aos="fade-right">
                <h3 className="text-2xl font-bold text-primary font-headline italic mb-8 flex items-center gap-3">
                  <Users className="h-7 w-7 text-accent" /> Responsibilities of Authors
                </h3>
                <div className="grid gap-4">
                  {[
                    "Ensure manuscript originality",
                    "Follow formatting guidelines meticulously",
                    "Respond to reviewer comments promptly",
                    "Provide accurate metadata (ORCID, Affiliation)",
                    "Declare conflicts of interest",
                    "Obtain permissions for copyrighted content"
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-primary/5">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-sm font-medium text-foreground/80">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div data-aos="fade-left">
                <h3 className="text-2xl font-bold text-primary font-headline italic mb-8 flex items-center gap-3">
                  <Globe className="h-7 w-7 text-accent" /> Responsibilities of Organizers
                </h3>
                <div className="grid gap-4">
                  {[
                    "Ensure all papers undergo proper review",
                    "Maintain transparency and academic integrity",
                    "Avoid predatory practices or unverified authorship",
                    "Submit only accepted papers with reviewer comments",
                    "Deliver manuscripts in required timelines",
                    "Pay agreed publication charges (if applicable)"
                  ].map((res, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-primary/5">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-sm font-medium text-foreground/80">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes & Workflow */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right" className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-primary font-headline italic mb-6">Important Notes</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Clock className="h-6 w-6 text-accent shrink-0" />
                      <div>
                        <p className="font-bold text-primary text-sm uppercase mb-1">Publication Timeline</p>
                        <p className="text-xs text-foreground/60 italic">Typically 3–6 weeks after receiving finalized files, based on volume and quality.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Scale className="h-6 w-6 text-accent shrink-0" />
                      <div>
                        <p className="font-bold text-primary text-sm uppercase mb-1">Ethical Compliance</p>
                        <p className="text-xs text-foreground/60 italic">Violation of standards may disqualify proceedings from final publication.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Search className="h-6 w-6 text-accent shrink-0" />
                      <div>
                        <p className="font-bold text-primary text-sm uppercase mb-1">Indexing Eligibility</p>
                        <p className="text-xs text-foreground/60 italic">SIARE facilitates applications but does not guarantee external body acceptance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 border-2 border-dashed border-accent/30 rounded-3xl bg-accent/5">
                  <h3 className="text-xl font-bold text-primary font-headline italic mb-6">How to Partner</h3>
                  <div className="space-y-4">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</span>
                        <p className="text-sm font-medium text-foreground/70">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className="relative">
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1541339907198-e087563ef3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="University Partnership"
                    fill
                    className="object-cover"
                    data-ai-hint="university campus"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -left-10 bg-accent text-primary p-8 rounded-3xl shadow-2xl hidden md:block max-w-[240px]">
                  <p className="text-4xl font-black mb-2">3-6wk</p>
                  <p className="text-xs font-bold uppercase tracking-widest leading-tight">Average Publication Speed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h2 className="text-2xl md:text-4xl font-bold font-headline mb-6 italic">Ready to Publish?</h2>
              <p className="text-lg text-white/70 mb-8 font-medium">
                Connect with our academic committee to begin your publishing journey or establish a conference partnership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-white text-accent-foreground hover:text-primary font-extrabold rounded-xl px-8 py-4 text-xs shadow-xl transition-all hover:scale-105 h-auto">
                  <Link href="/contact">Submit Your Paper</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white/20 text-white rounded-xl px-8 py-4 text-xs font-bold transition-all hover:scale-105 h-auto">
                  <Link href="/contact">Partner Your Conference</Link>
                </Button>
              </div>
              <div className="mt-6">
                <Button variant="link" className="text-white/60 hover:text-white uppercase tracking-widest text-xs font-black italic">
                  <Download className="mr-2 h-4 w-4" /> Download Author Guidelines
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
