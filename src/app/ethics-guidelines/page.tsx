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
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';

export default function EthicsGuidelinesPage() {
  const policies = [
    {
      id: "1",
      icon: ShieldCheck,
      title: "1. Publication Ethics Policy",
      content: (
        <div className="space-y-4">
          <p>SIARE follows international ethical guidelines including COPE (Committee on Publication Ethics).</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-primary flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Author</h4>
              <ul className="text-xs space-y-1 text-foreground/70">
                <li>• Submit original, unpublished work</li>
                <li>• Avoid plagiarism or data manipulation</li>
                <li>• Disclose conflicts of interest</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-primary flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Editor</h4>
              <ul className="text-xs space-y-1 text-foreground/70">
                <li>• Unbiased decision making</li>
                <li>• Maintain confidentiality</li>
                <li>• Prevent conflicts of interest</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-primary flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Reviewer</h4>
              <ul className="text-xs space-y-1 text-foreground/70">
                <li>• Objective & timely feedback</li>
                <li>• Identify ethical concerns</li>
                <li>• Maintain confidentiality</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "2",
      icon: Search,
      title: "2. Peer Review Policy",
      content: (
        <div className="space-y-4">
          <p>SIARE uses a <strong>double-blind peer review</strong> system. Reviewers and authors do not know each other’s identity.</p>
          <div className="flex flex-wrap gap-2">
            {["Initial Screening", "Similarity Check", "Reviewer Assignment", "Comments Sharing", "Revision", "Final Approval"].map((step, i) => (
              <span key={i} className="px-3 py-1 bg-secondary rounded-full text-[10px] font-bold text-primary/60 uppercase tracking-widest border border-primary/5">
                {i + 1}. {step}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "3",
      icon: AlertCircle,
      title: "3. Plagiarism Policy",
      content: (
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
            <div className="text-xl font-black text-green-600 mb-1">&lt; 15%</div>
            <div className="text-[10px] font-bold uppercase text-green-800">Acceptable</div>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-center">
            <div className="text-xl font-black text-amber-600 mb-1">15–25%</div>
            <div className="text-[10px] font-bold uppercase text-amber-800">Requires Revision</div>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100 text-center">
            <div className="text-xl font-black text-red-600 mb-1">&gt; 25%</div>
            <div className="text-[10px] font-bold uppercase text-red-800">Immediate Rejection</div>
          </div>
        </div>
      )
    },
    {
      id: "4",
      icon: UserX,
      title: "4. Conflict of Interest Policy",
      content: "All contributors must disclose financial relationships, institutional affiliations, personal connections, or reviewer-author relationships that could influence the work."
    },
    {
      id: "5",
      icon: Trash2,
      title: "5. Withdrawal & Retraction Policy",
      content: "Authors may request withdrawal before peer review is complete. Papers may be retracted if plagiarism, data fraud, or ethical violations are proven after publication."
    },
    {
      id: "6",
      icon: Unlock,
      title: "6. Open Access Policy",
      content: "SIARE follows a Gold Open Access model. All proceedings are freely accessible, ensuring global visibility and research impact while authors retain copyright."
    },
    {
      id: "7",
      icon: Copyright,
      title: "7. Copyright & Licensing Policy",
      content: "SIARE uses the Creative Commons Attribution (CC BY) License. Authors can share, distribute, or reuse their work provided proper attribution is given."
    },
    {
      id: "8",
      icon: Database,
      title: "8. Data Availability Policy",
      content: "Authors must provide original data upon request and ensure ethical approval for studies involving human or animal subjects."
    },
    {
      id: "9",
      icon: FileText,
      title: "9. Conference Proceedings Policy",
      content: "Partners must ensure proper peer review, ethical standards, and accurate metadata transfer. Proceedings are published only after technical checks."
    },
    {
      id: "10",
      icon: MessageSquare,
      title: "10. Appeals & Complaints Policy",
      content: "Authors may appeal decisions with scientific justification. Complaints regarding ethics or bias are reviewed by the SIARE Academic Committee."
    },
    {
      id: "11",
      icon: Search,
      title: "11. Indexing & Archiving Policy",
      content: "SIARE ensures long-term preservation via DOI-based permanent links, cloud archiving, and university repository metadata preservation."
    },
    {
      id: "12",
      icon: Scale,
      title: "12. Anti-Fraud & Misconduct Policy",
      content: "SIARE strictly prohibits paper mills, fake reviews, contract cheating, and purchased authorship. Violations lead to permanent blacklisting."
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
              src="/ResearchPsychology.jpg"
              alt="Academic Integrity"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Policies Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid gap-8">
              {policies.map((policy, idx) => (
                <Card 
                  key={policy.id} 
                  className="border-none shadow-xl rounded-[30px] overflow-hidden bg-secondary/30 group hover:bg-white transition-all duration-500 border border-transparent hover:border-accent/10"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <policy.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-primary font-bold font-headline italic">
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-4">
                    <div className="text-foreground/70 text-sm md:text-base leading-relaxed font-medium">
                      {typeof policy.content === 'string' ? <p>{policy.content}</p> : policy.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Final Note */}
            <div className="mt-20 p-8 md:p-12 bg-primary rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden" data-aos="zoom-in">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-headline italic mb-4">Final Note</h3>
                <p className="max-w-3xl mx-auto text-white/80 font-medium">
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
