'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function PlagiarismPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Plagiarism Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70 italic">Zero Tolerance for Plagiarism</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">1. Definition of Plagiarism</h2>
              <p>Plagiarism includes, but is not limited to, copying text, ideas, or data from another source without proper attribution, as well as self-plagiarism (duplicate publication of one's own work).</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">2. Screening Process</h2>
              <p>All submitted manuscripts are screened for similarity using industry-standard tools like Turnitin and iThenticate. A similarity index of more than 15% (excluding references) is generally flagged for further investigation.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">3. Consequences</h2>
              <p>If plagiarism is detected during the review process, the manuscript will be rejected immediately. If detected after publication, the article may be retracted, and the author's institution may be informed.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
