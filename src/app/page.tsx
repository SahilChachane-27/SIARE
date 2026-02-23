
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <TrustBadges />
        <WhyUs />
        <Projects />
        <Partners />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
