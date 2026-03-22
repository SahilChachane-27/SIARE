'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function OpenAccessPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Open Access Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70 italic">Universal Accessibility to Research</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">1. Immediate Open Access</h2>
              <p>SIARE provides immediate open access to its content on the principle that making research freely available to the public supports a greater global exchange of knowledge.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">2. Licensing</h2>
              <p>Articles are typically published under a Creative Commons Attribution (CC BY) license, which allows others to distribute, remix, tweak, and build upon the work, even commercially, as long as they credit the original creation.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">3. Archiving</h2>
              <p>SIARE encourages self-archiving by authors. Authors are permitted to deposit the published version of their articles in institutional or thematic repositories immediately after publication.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
