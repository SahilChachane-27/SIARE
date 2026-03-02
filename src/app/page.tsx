'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Partners } from '@/components/sections/partners';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { WhyUs } from '@/components/sections/why-us';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { TrustBadges } from '@/components/sections/trust-badges';
import { MembershipHighlights } from '@/components/sections/membership-highlights';
import { LearningHub } from '@/components/sections/learning-hub';
import { Blog } from '@/components/sections/blog';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <WhyUs />
        <About />
        <Services />
        <Projects />
        <MembershipHighlights />
        <LearningHub />
        <Blog />
        <Testimonials />
        <TrustBadges />
        <Partners />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
