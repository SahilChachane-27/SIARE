'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SIARE provided exceptional editorial support and helped our university host a successful international conference with high-quality proceedings.",
    author: "Academic Partner University",
    role: "Dean of Research"
  },
  {
    quote: "The multidisciplinary approach of SIARE is refreshing. It allows us to explore cross-domain innovations with reliable peer-review oversight.",
    author: "Faculty Researcher",
    role: "Department of Engineering"
  },
  {
    quote: "Joining as an institutional member significantly improved our global visibility and indexed citation metrics within just one academic year.",
    author: "Regional Institute Director",
    role: "Academic Affairs"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Academic Community Feedback</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary font-headline italic">Testimonials</h3>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-xl rounded-2xl bg-white p-10 relative group" data-aos="fade-up" data-aos-delay={i * 100}>
              <Quote className="h-10 w-10 text-accent/20 absolute top-6 right-6 group-hover:text-accent transition-colors" />
              <CardContent className="p-0">
                <p className="text-lg text-primary/80 italic font-headline leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="font-bold text-primary font-headline">{t.author}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-accent mt-1">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
