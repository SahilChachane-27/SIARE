'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function EthicsGuidelinesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Ethics & Guidelines</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70">Publication Ethics & Malpractice Statement</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">1. Editorial Standards</h2>
              <p>Technical Journals encourages all hosted journals to follow the guidelines established by the Committee on Publication Ethics (COPE). Editors are responsible for ensuring the integrity of the peer-review process.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">2. Plagiarism Policy</h2>
              <p>We provide integrated access to iThenticate and other plagiarism detection tools. Journals are required to screen all submissions for originality before proceeding with peer review.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">3. Peer Review Process</h2>
              <p>All research articles must undergo a rigorous, double-blind peer-review process conducted by qualified international academic panels. Transparency in the review process is a core requirement of our platform.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">4. Conflicts of Interest</h2>
              <p>Authors, reviewers, and editors must disclose any potential conflicts of interest that could influence the research or the decision-making process.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
