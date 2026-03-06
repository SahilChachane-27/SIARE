'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function AccessibilityStatementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Accessibility Statement</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70">Commitment to Inclusive Research</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">Our Commitment</h2>
              <p>SIARE is committed to ensuring that our platform and the research it hosts are accessible to everyone, including individuals with disabilities. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>High-contrast text and semantic HTML structure.</li>
                <li>Screen reader compatibility for all public-facing journal pages.</li>
                <li>Keyboard navigation support throughout the publication portal.</li>
                <li>Alt-text for figures and illustrative data within research papers.</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">Feedback</h2>
              <p>If you encounter any accessibility barriers on our platform, please contact our support team at support@academicproceeding.org. We value your feedback and will work to resolve any issues promptly.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
