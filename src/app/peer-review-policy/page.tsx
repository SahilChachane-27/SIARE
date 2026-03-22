'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function PeerReviewPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Peer Review Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70 italic">Commitment to Academic Rigor</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">1. Double-Blind Review</h2>
              <p>All proceedings published by SIARE undergo a rigorous double-blind peer review process. This means that both the reviewer and author identities are concealed from the reviewers, and vice versa, throughout the review process.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">2. Reviewer Selection</h2>
              <p>Reviewers are selected based on their expertise in the relevant research domain. SIARE maintains a global database of expert reviewers across various disciplines to ensure high-quality evaluation.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">3. Evaluation Criteria</h2>
              <p>Reviewers assess manuscripts based on originality, methodology, clarity of presentation, and contribution to the field. Recommendations may include acceptance, minor revisions, major revisions, or rejection.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">4. Final Decision</h2>
              <p>The final decision regarding publication lies with the Series Editor or Guest Editor, based on the reports provided by the peer reviewers.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
