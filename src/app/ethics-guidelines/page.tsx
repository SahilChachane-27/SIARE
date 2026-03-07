'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  FileText, 
  Trash2, 
  Unlock, 
  Copyright, 
  Database, 
  MessageSquare, 
  Search, 
  UserX,
  AlertTriangle,
  Zap,
  Info,
  Layers,
  ArrowRight,
  Archive,
  Cloud,
  Check
} from 'lucide-react';
import Image from 'next/image';

export default function EthicsGuidelinesPage() {
  const policies = [
    {
      id: "1",
      icon: ShieldCheck,
      title: "Publication Ethics Policy",
      content: (
        <div className="space-y-4">
          <p className="text-xs">SIARE follows international ethical guidelines including COPE. All stakeholders must uphold specific responsibilities:</p>
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest border-b border-primary/10 pb-1">Author Responsibilities</h4>
              <ul className="text-[10px] space-y-1 text-foreground/70 italic">
                <li>• Submit only original, unpublished work</li>
                <li>• Avoid plagiarism, duplication, or data manipulation</li>
                <li>• Provide accurate citations and references</li>
                <li>• Disclose conflicts of interest</li>
                <li>• Ensure all co-authors have approved the manuscript</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest border-b border-primary/10 pb-1">Editor Responsibilities</h4>
              <ul className="text-[10px] space-y-1 text-foreground/70 italic">
                <li>• Make unbiased decisions based on academic merit</li>
                <li>• Maintain confidentiality of submitted manuscripts</li>
                <li>• Prevent conflicts of interest</li>
                <li>• Ensure timely review and communication</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest border-b border-primary/10 pb-1">Reviewer Responsibilities</h4>
              <ul className="text-[10px] space-y-1 text-foreground/70 italic">
                <li>• Provide objective, constructive, and timely feedback</li>
                <li>• Maintain confidentiality of manuscripts</li>
                <li>• Identify ethical concerns (plagiarism, falsification)</li>
                <li>• Avoid biases or conflicts of interest</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "2",
      icon: Search,
      title: "Peer Review Policy",
      content: (
        <div className="space-y-4">
          <p className="text-xs">SIARE uses a <strong>double-blind peer review</strong> system (reviewers and authors do not know each other’s identity).</p>
          <div className="space-y-3">
            <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest">Review Stages:</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Initial screening", "Similarity check", "Reviewer assignment", "Author feedback", "Revision round", "Final approval"].map((step, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg border border-primary/5">
                  <span className="h-4 w-4 rounded-full bg-accent text-primary flex items-center justify-center text-[8px] font-black shrink-0">{i + 1}</span>
                  <span className="text-[9px] font-bold text-primary/70 uppercase">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-primary/5 rounded-xl border border-primary/10">
              <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest mb-2">Evaluation Criteria:</h4>
              <p className="text-[10px] text-foreground/60 italic leading-relaxed">
                Originality, Significance, Methodological clarity, Ethical compliance, Literature relevance, and Strength of conclusions.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "3",
      icon: AlertTriangle,
      title: "Plagiarism Policy",
      content: (
        <div className="space-y-4">
          <p className="text-xs">SIARE enforces strict rules. Self-plagiarism and recycled content are treated as violations.</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 bg-green-50 rounded-xl border border-green-100 text-center">
              <div className="text-sm font-black text-green-600">&lt; 15%</div>
              <div className="text-[8px] font-bold uppercase text-green-800">Acceptable</div>
            </div>
            <div className="p-2 bg-amber-50 rounded-xl border border-amber-100 text-center">
              <div className="text-sm font-black text-amber-600">15–25%</div>
              <div className="text-[8px] font-bold uppercase text-amber-800">REVISE</div>
            </div>
            <div className="p-2 bg-red-50 rounded-xl border border-red-100 text-center">
              <div className="text-sm font-black text-red-600">&gt; 25%</div>
              <div className="text-[8px] font-bold uppercase text-red-800">REJECT</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "4",
      icon: UserX,
      title: "Conflict of Interest Policy",
      content: (
        <div className="space-y-2">
          <p className="text-xs">All contributors must disclose financial relationships, institutional affiliations, personal connections, or reviewer-author relationships. Editors may reject or reassign papers with potential conflicts.</p>
        </div>
      )
    },
    {
      id: "5",
      icon: Trash2,
      title: "Withdrawal & Retraction Policy",
      content: (
        <div className="space-y-4">
          <div className="space-y-1">
            <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest border-b border-primary/10 pb-1">Withdrawal</h4>
            <p className="text-[10px] text-foreground/70 italic">Authors may request withdrawal before review completion. Post-review requires valid justification.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest border-b border-primary/10 pb-1">Retraction</h4>
            <p className="text-[10px] text-foreground/70 italic">Detected plagiarism, data fraud, fabrication, or ethical breaches lead to marked retraction for transparency.</p>
          </div>
        </div>
      )
    },
    {
      id: "6",
      icon: Unlock,
      title: "Open Access Policy",
      content: (
        <div className="space-y-2">
          <p className="text-xs">SIARE follows a <strong>Gold Open Access</strong> model. All proceedings are freely accessible, authors retain copyright, and SIARE holds publishing rights for dissemination, ensuring global visibility.</p>
        </div>
      )
    },
    {
      id: "7",
      icon: Copyright,
      title: "Copyright & Licensing Policy",
      content: (
        <div className="space-y-2">
          <p className="text-xs">Unless specified, SIARE uses the <strong>Creative Commons Attribution (CC BY) License</strong>. Authors can share and reuse work with proper citation. Copyright is shared for distribution purposes.</p>
        </div>
      )
    },
    {
      id: "8",
      icon: Database,
      title: "Data Availability Policy",
      content: (
        <div className="space-y-2">
          <ul className="text-[10px] space-y-1 text-foreground/70 italic">
            <li>• Provide original data upon request</li>
            <li>• Ensure ethical approval for human/animal studies</li>
            <li>• Maintain subject confidentiality and privacy</li>
            <li>• Follow institutional data-sharing rules</li>
          </ul>
        </div>
      )
    },
    {
      id: "9",
      icon: FileText,
      title: "Conference Proceedings Policy",
      content: (
        <div className="space-y-2 text-xs">
          Organizers must ensure proper peer review, ethical standards, transparent communication, and correct metadata transfer. Publication occurs only after all ethical and technical checks are completed.
        </div>
      )
    },
    {
      id: "10",
      icon: MessageSquare,
      title: "Appeals & Complaints Policy",
      content: (
        <div className="space-y-2 text-xs">
          Authors may appeal editorial decisions with scientific justification. Complaints regarding ethical misbehavior or bias are reviewed by the SIARE Academic Committee.
        </div>
      )
    },
    {
      id: "11",
      icon: Cloud,
      title: "Indexing & Archiving Policy",
      content: (
        <div className="space-y-2 text-xs">
          SIARE ensures long-term preservation via DOI-based permanent links, cloud archiving, metadata preservation, and indexing applications for eligible proceedings.
        </div>
      )
    },
    {
      id: "12",
      icon: Scale,
      title: "Anti-Fraud & Misconduct Policy",
      content: (
        <div className="space-y-2">
          <p className="text-xs">SIARE strictly prohibits paper mills, fake reviews, contract cheating, and identity manipulation. Misconduct may lead to permanent blacklisting of authors or organizers.</p>
        </div>
      )
    }
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
                Publishing Policies
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
                SIARE is committed to maintaining the highest standards of academic integrity, ethical publishing, and rigorous peer review.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Academic Integrity"
              fill
              className="object-cover"
              priority
              data-ai-hint="research law"
            />
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-12 bg-white border-b border-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <p className="max-w-4xl mx-auto text-center text-foreground/70 text-sm md:text-base font-medium italic leading-relaxed" data-aos="fade-up">
              All authors, reviewers, editors, and conference partners must adhere to these policies to ensure transparent, credible, and globally acceptable scholarly practices.
            </p>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {policies.map((policy, idx) => (
                <Card 
                  key={policy.id} 
                  className="border border-primary/10 shadow-xl rounded-2xl overflow-hidden bg-white group hover:border-accent/20 transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-slate-50">
                    <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <policy.icon className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-lg text-primary font-bold font-headline italic">
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-foreground/70 text-xs md:text-sm leading-relaxed font-medium">
                      {policy.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Final Note */}
            <div className="mt-20 p-8 md:p-12 bg-primary rounded-3xl text-white text-center shadow-2xl relative overflow-hidden" data-aos="zoom-in">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-headline italic mb-4">Final Note</h3>
                <p className="max-w-3xl mx-auto text-white/80 font-medium italic text-sm">
                  By submitting to SIARE or any SIARE proceedings series, all authors and organizers agree to abide by the above policies. Any misconduct or ethical breach will be handled according to international scholarly publishing norms.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
