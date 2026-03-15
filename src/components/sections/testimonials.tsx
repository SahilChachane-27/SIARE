
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 'nita',
    name: "Nita Patel",
    role: "Vice President, Engineering at Otis Elevator Co.",
    year: "1993",
    quote: "It changes your life. [SIARE membership] helps you establish relationships that are tighter because you already have a lot of things in common in the way you think, work, and want to change the world around you.",
    bio: "Nita Patel, a 2023 senior leader at the SIARE academic council, holds degrees in mathematics, electrical engineering, and computer engineering from Southern Methodist University. She has also worked at L3Harris Technologies and R.S. Information Systems, Inc.",
    imgId: "testimonial-1"
  },
  {
    id: 'vincent',
    name: "Vincent Kaabunga",
    role: "Director, GR8 Analytix",
    year: "2009",
    quote: "As you get involved in SIARE, you really get a sense that you want to give back and to grow the community that you have.",
    bio: "Engineer, data scientist, digital transformation evangelist, and entrepreneur Vincent Kaabunga is a board member of the Earth 3.0 Foundation. He holds a Ph.D. in philosophy and digital communications from Atlantic International University, HI, USA.",
    imgId: "testimonial-2"
  },
  {
    id: 'john',
    name: "John McDonald",
    role: "Founder and CEO of JDM Associates, LLC",
    year: "1971",
    quote: "I’ve worked full time in power system automation, which we call Smart Grid, for over 50 years. The job switches I’ve made were through industry friends who knew of opportunities and opened up doors for me. Most of these industry friends I met through SIARE.",
    bio: "A SIARE Life Fellow, John McDonald holds a BSEE and MSEE in power engineering from Purdue University, IN, USA, and served as a SIARE volunteer for more than 50 years.",
    imgId: "testimonial-3"
  }
];

export function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);
  const current = testimonials[activeTab];
  const memberImg = PlaceHolderImages.find(img => img.id === current.imgId);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white overflow-hidden font-body">
      <div className="container mx-auto px-4 md:px-16 lg:px-32">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-6">
            Meet Our Members
          </h2>
          <h3 className="text-3xl md:text-6xl font-bold text-primary font-headline italic leading-tight max-w-4xl mx-auto">
            'What SIARE Membership Means to Me'
          </h3>
        </div>

        {/* Member Navigation */}
        <div className="border-b border-primary/20 mb-12 md:mb-16 relative" data-aos="fade-up">
          <div className="flex flex-wrap gap-x-8 md:gap-x-16 gap-y-4">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "pb-4 text-sm md:text-lg transition-all relative uppercase tracking-wider font-bold",
                  activeTab === i 
                    ? "text-primary font-black opacity-100" 
                    : "text-primary opacity-60 hover:opacity-100"
                )}
              >
                {t.name}
                {activeTab === i && (
                  <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-accent"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          <div className="lg:col-span-7 space-y-8 md:space-y-12" data-aos="fade-right" key={`text-${activeTab}`}>
            <div className="space-y-6">
              <p className="text-lg md:text-2xl text-primary/90 italic font-headline leading-relaxed">
                "{current.quote}" <span className="not-italic font-sans text-xs md:text-sm font-black uppercase tracking-tighter opacity-60">—{current.name}, {current.role}. Member since {current.year}.</span>
              </p>
              
              <p className="text-sm md:text-base text-primary/70 leading-relaxed font-medium">
                {current.bio}
              </p>
            </div>

            <div className="pt-4">
              <Button 
                variant="outline" 
                className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white px-8 h-12 text-[10px] font-black uppercase tracking-widest transition-all group"
              >
                More Member Stories <ArrowUpRight className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative" data-aos="fade-left" key={`img-${activeTab}`}>
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-8 border-white/50">
              {memberImg && (
                <Image
                  src={memberImg.imageUrl}
                  alt={memberImg.description}
                  fill
                  className="object-cover transition-all duration-1000"
                  data-ai-hint={memberImg.imageHint}
                />
              )}
            </div>
            {/* Decorative background shape */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-accent/10 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
