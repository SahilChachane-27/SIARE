'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function PublicationEthicsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Publication Ethics</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70 italic">SIARE Ethics and Malpractice Statement</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">1. Editorial Responsibilities</h2>
              <p>Editors are responsible for deciding which of the articles submitted to the journal should be published. They are guided by the policies of the journal's editorial board and constrained by such legal requirements as shall then be in force regarding libel, copyright infringement, and plagiarism.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">2. Fair Play</h2>
              <p>An editor at any time evaluates manuscripts for their intellectual content without regard to race, gender, sexual orientation, religious belief, ethnic origin, citizenship, or political philosophy of the authors.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">3. Confidentiality</h2>
              <p>The editor and any editorial staff must not disclose any information about a submitted manuscript to anyone other than the corresponding author, reviewers, potential reviewers, other editorial advisers, and the publisher, as appropriate.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">4. Disclosure and Conflicts of Interest</h2>
              <p>Unpublished materials disclosed in a submitted manuscript must not be used in an editor's own research without the express written consent of the author.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
