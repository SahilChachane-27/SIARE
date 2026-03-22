'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function ConflictsOfInterestPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Conflicts of Interest</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70 italic">Disclosure and Transparency</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">1. Author Disclosure</h2>
              <p>Authors must disclose any financial or personal relationships with other people or organizations that could inappropriately influence (bias) their work. Examples include employment, consultancies, stock ownership, or paid expert testimony.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">2. Reviewer Disclosure</h2>
              <p>Reviewers must disclose any conflicts of interest that could bias their evaluation of a manuscript. If a conflict exists, the reviewer should recuse themselves from the review process.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">3. Editorial Transparency</h2>
              <p>Editors who have a conflict of interest regarding a particular manuscript will delegate the decision-making process to another member of the editorial board.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
