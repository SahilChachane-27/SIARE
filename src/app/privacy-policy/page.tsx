'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-primary font-headline italic mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg font-medium text-primary/70">Last Updated: October 2024</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">1. Introduction</h2>
              <p>Technical Journals is committed to protecting the privacy of the academic institutions and individuals who use our hosting services. This policy outlines how we collect, use, and safeguard your data.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">2. Data Collection</h2>
              <p>We collect information necessary to provide professional journal hosting, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Institutional details (University name, department, official contact info).</li>
                <li>User account information for editors, reviewers, and authors.</li>
                <li>Manuscript metadata and submission history.</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">3. Data Security</h2>
              <p>All data is hosted on secure, bank-grade encrypted servers. We utilize industry-standard protocols to ensure that research data and personal information are protected from unauthorized access.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary italic">4. Third-Party Sharing</h2>
              <p>We do not sell or trade institutional or personal data. Data is shared with third-party services (like Crossref for DOIs) only when explicitly required for the publication and indexing process.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
