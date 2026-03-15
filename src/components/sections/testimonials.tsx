
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: "Nita Patel",
    role: "Vice President, Engineering at Otis Elevator Co.",
    year: "1993",
    quote: "It changes your life. [SIARE membership] helps you establish relationships that are tighter because you already have a lot of things in common in the way you think, work, and want to change the world around you.",
    bio: "Nita Patel, a 2023 senior leader at the SIARE academic council, holds degrees in mathematics, electrical engineering, and computer engineering from Southern Methodist University. She has also worked at L3Harris Technologies and R.S. Information Systems, Inc.",
    imgId: "testimonial-1"
  },
  {
    name: "Vincent Kaabunga",
    role: "Director, GR8 Analytix",
    year: "2009",
    quote: "As you get involved in SIARE, you really get a sense that you want to give back and to grow the community that you have.",
    bio: "Engineer, data scientist, digital transformation evangelist, and entrepreneur Vincent Kaabunga is a board member of the Earth 3.0 Foundation. He holds a Ph.D. in philosophy and digital communications from Atlantic International University, HI, USA.",
    imgId: "testimonial-2"
  },
  {
    name: "John McDonald",
    role: "Founder and CEO of JDM Associates, LLC",
    year: "1971",
    quote: "I’ve worked full time in power system automation, which we call Smart Grid, for over 50 years. The job switches I’ve made were through industry friends who knew of opportunities and opened up doors for me. Most of these industry friends I met through SIARE.",
    bio: "A SIARE Life Fellow, John McDonald holds a BSEE and MSEE in power engineering from Purdue University, IN, USA, and served as a SIARE volunteer for more than 50 years.",
    imgId: "testimonial-3"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 overflow-hidden font-body">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Meet Our Members</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic">
            'What SIARE Membership Means to Me'
          </h3>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => {
            const memberImg = PlaceHolderImages.find(img => img.id === t.imgId);
            return (
              <Card key={i} className="border-none shadow-2xl rounded-[2.5rem] bg-white overflow-hidden group flex flex-col h-full" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="relative aspect-square w-full">
                  {memberImg && (
                    <Image
                      src={memberImg.imageUrl}
                      alt={memberImg.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={memberImg.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-8 right-6">
                    <h4 className="text-2xl font-bold text-white font-headline italic">{t.name}</h4>
                    <p className="text-xs font-black text-accent uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
                
                <CardContent className="p-8 pt-10 flex-1 flex flex-col">
                  <div className="mb-6 relative">
                    <Quote className="h-8 w-8 text-accent/20 absolute -top-4 -left-4" />
                    <p className="text-base text-primary/80 italic font-headline leading-relaxed relative z-10 pl-2">
                      {t.quote}
                    </p>
                    <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mt-4 ml-2">
                      Member since {t.year}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <p className="text-xs text-foreground/60 leading-relaxed font-medium italic">
                      {t.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
