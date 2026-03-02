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
  AlertCircle,
  AlertTriangle
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
          <p className="text-xs">SIARE follows international ethical guidelines including COPE. All stakeholders must uphold responsibilities:</p>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest border-b border-primary/10 pb-1">Author</h4>
              <ul className="text-[10px] space-y-0.5 text-foreground/70 italic">
                <li>• Original, unpublished work</li>
                <li>• No plagiarism/manipulation</li>
                <li>• Disclose conflicts</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest border-b border-primary/10 pb-1">Editor & Reviewer</h4>
              <ul className="text-[10px] space-y-0.5 text-foreground/70 italic">
                <li>• Unbiased decision making</li>
                <li>• Maintain confidentiality</li>
                <li>• Constructive feedback</li>
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
          <p className="text-xs">SIARE uses a <strong>double-blind peer review</strong> system. Reviewers and authors do not know each other’s identity.</p>
          <div className="flex flex-wrap gap-1.5">
            {["Screening", "Similarity", "Reviewer Assignment", "Feedback", "Revision", "Approval"].map((step, i) => (
              <span key={i} className="px-2 py-0.5 bg-secondary rounded-none text-[9px] font-bold text-primary/60 uppercase border border-primary/5">
                {i + 1}. {step}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "3",
      icon: AlertTriangle,
      title: "3. Plagiarism Policy",
      content: (
        <div className="space-y-4">
          <p className="text-xs">SIARE enforces strict rules. Similarity threshold limits:</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 bg-green-50 rounded-none border border-green-100 text-center">
              <div className="text-sm font-black text-green-600">&lt; 15%</div>
              <div className="text-[8px] font-bold uppercase text-green-800">OK</div>
            </div>
            <div className="p-2 bg-amber-50 rounded-none border border-amber-100 text-center">
              <div className="text-sm font-black text-amber-600">15–25%</div>
              <div className="text-[8px] font-bold uppercase text-amber-800">REVISE</div>
            </div>
            <div className="p-2 bg-red-50 rounded-none border border-red-100 text-center">
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
      title: "4. Conflict of Interest",
      content: "All contributors must disclose financial relationships, institutional affiliations, personal connections, or reviewer-author relationships that could influence the work. Editors may reject papers with potential conflicts."
    },
    {
      id: "5",
      icon: Trash2,
      title: "5. Withdrawal & Retraction",
      content: "Authors may request withdrawal before peer review is complete. Papers may be retracted if plagiarism, data fraud, or ethical violations are proven after publication. Retracted articles are clearly marked."
    },
    {
      id: "6",
      icon: Unlock,
      title: "6. Open Access Policy",
      content: "SIARE follows a Gold Open Access model. All proceedings are freely accessible, ensuring global visibility and research impact while authors retain copyright and SIARE holds publishing rights."
    },
    {
      id: "7",
      icon: Copyright,
      title: "7. Copyright & Licensing",
      content: "Unless specified, SIARE uses the Creative Commons Attribution (CC BY) License. Authors can share, distribute, or reuse their work provided proper citation and attribution is given to the original publication."
    },
    {
      id: "8",
      icon: Database,
      title: "8. Data Availability",
      content: "Authors must provide original data upon request and ensure ethical approval for studies involving human or animal subjects. Data cannot be fabricated, falsified, or manipulated in any way."
    },
    {
      id: "9",
      icon: FileText,
      title: "9. Conference Proceedings",
      content: "Conference organizers must ensure proper peer review, ethical standards, and accurate metadata transfer. Proceedings are published only after all ethical and technical checks are successfully completed."
    },
    {
      id: "10",
      icon: MessageSquare,
      title: "10. Appeals & Complaints",
      content: "Authors may appeal editorial decisions by providing a clear scientific justification. Complaints regarding ethical misbehavior or bias are reviewed by the SIARE Academic Committee."
    },
    {
      id: "11",
      icon: Search,
      title: "11. Indexing & Archiving",
      content: "SIARE ensures long-term preservation via DOI-based permanent links, cloud archiving, and university repository metadata preservation. We apply for indexing for eligible proceedings."
    },
    {
      id: "12",
      icon: Scale,
      title: "12. Anti-Fraud Policy",
      content: "SIARE strictly prohibits paper mills, fake reviews, contract cheating, and purchased authorship. Violations lead to permanent blacklisting of authors or conference organizers from the society."
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

        {/* Policies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {policies.map((policy, idx) => (
                <Card 
                  key={policy.id} 
                  className="border border-primary/10 shadow-xl rounded-none overflow-hidden bg-white group hover:border-accent/20 transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-slate-50">
                    <div className="h-10 w-10 rounded-none bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <policy.icon className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-lg text-primary font-bold font-headline italic">
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-foreground/70 text-xs md:text-sm leading-relaxed font-medium italic">
                      {typeof policy.content === 'string' ? <p>{policy.content}</p> : policy.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Final Note */}
            <div className="mt-20 p-8 md:p-12 bg-primary rounded-none text-white text-center shadow-2xl relative overflow-hidden" data-aos="zoom-in">
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
