'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function HostingAgreementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Hosting Agreement</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70">Standard Institutional Terms</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">1. Scope of Service</h2>
              <p>Technical Journals provides a specialized ScholarJMS based hosting environment exclusively for University-owned academic journals. Our services include server maintenance, technical support, and indexing assistance.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">2. Institutional Ownership</h2>
              <p>All content, including manuscripts, reviews, and published articles, remains the sole property of the hosting University or Institution. Technical Journals acts as a service provider and claims no rights over the intellectual property hosted on our platform.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">3. Service Availability</h2>
              <p>We strive for 99.9% uptime. Maintenance windows are scheduled during low-traffic periods and communicated to institutional administrators in advance.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">4. Termination</h2>
              <p>Institutions may terminate the hosting agreement with a 90-day notice. In such cases, Technical Journals will provide a full backup of all journal data and assist in the migration process.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
