
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Partners } from '@/components/sections/partners';
import { Projects } from '@/components/sections/projects';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { MembershipHighlights } from '@/components/sections/membership-highlights';
import { Testimonials } from '@/components/sections/testimonials';
import { About } from '@/components/sections/about';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <About />
        <MembershipHighlights />
        <Projects />
        {/* <Services /> */}
        <Testimonials />
        <Partners />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
