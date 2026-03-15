'use client';

import { Card } from '@/components/ui/card';
import { 
  ShieldCheck, 
  School, 
  Layers, 
  Globe
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Academic Integrity',
    description: 'Every publication follows strict ethical and peer-review standards established by SIARE.',
  },
  {
    icon: School,
    title: 'University-Focused',
    description: 'SIARE works exclusively with universities and academic institutions—not private publishers.',
  },
  {
    icon: Layers,
    title: 'Multidisciplinary Excellence',
    description: 'Coverage across major Scopus subject clusters and diverse emerging research domains.',
  },
  {
    icon: Globe,
    title: 'Global Academic Network',
    description: 'Researchers from over 15+ countries participate in SIARE events and publications.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">The SIARE Advantage</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary font-headline italic">
            Why Choose SIARE?
          </h3>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="text-center p-8 bg-slate-50 shadow-xl rounded-2xl border-none transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-primary mb-4 font-headline italic">
                {reason.title}
              </h4>
              <p className="text-foreground/60 text-xs leading-relaxed italic font-headline">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
