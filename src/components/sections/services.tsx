'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  BookOpen, 
  Globe, 
  Users, 
  GraduationCap, 
  School, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    title: 'Proceedings Publication',
    description: 'High-quality, peer-reviewed publication for university conferences with DOI assignment, structured workflows, and ethical compliance.',
    icon: BookOpen,
    features: ['DOI Assignment', 'Structured Workflows', 'Ethical Compliance']
  },
  {
    title: 'Global Conferences',
    description: 'Partnered academic events across Engineering, Management, Social Sciences, Education, and emerging technologies.',
    icon: Globe,
    features: ['International Reach', 'Multidisciplinary', 'Networking Hubs']
  },
  {
    title: 'Membership Programs',
    description: 'Individual, student, institutional, and affiliate memberships with benefits like training access and conference discounts.',
    icon: Users,
    features: ['Scholar Community', 'Priority Support', 'Fee Discounts']
  },
  {
    title: 'Research Training',
    description: 'Workshops on research methodology, academic writing, AI tools, and peer review training.',
    icon: GraduationCap,
    features: ['Writing Workshops', 'AI Tool Training', 'Ethics Education']
  },
  {
    title: 'University Partnerships',
    description: 'Support for hosting conferences, publishing proceedings, and academic collaboration under official institutional MoUs.',
    icon: School,
    features: ['Official MoUs', 'Event Hosting', 'Academic Growth']
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3">What We Offer</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">Key Platform Features</h3>
          <div className="mt-4 w-16 md:w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl flex flex-col p-6 md:p-10 h-full border-none shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6 md:mb-8 h-12 w-12 md:h-16 md:w-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                <service.icon className="h-6 w-6 md:h-8 md:w-8 text-accent group-hover:text-primary" />
              </div>
              
              <h4 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 font-headline italic leading-tight">{service.title}</h4>
              <p className="text-xs md:text-sm text-foreground/60 mb-6 md:mb-8 leading-relaxed italic">{service.description}</p>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-1">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-[11px] md:text-xs font-bold text-primary/70">
                    <CheckCircle2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="link" className="p-0 h-auto self-start text-primary font-black uppercase tracking-widest text-[9px] md:text-[10px] hover:text-accent group">
                <Link href="/services" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
          
          {/* Explore All Services Card */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex items-center justify-center p-6" data-aos="fade-up" data-aos-delay="500">
            <div className="text-center space-y-4 md:space-y-6 max-w-xs">
              <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px] md:text-xs italic">Discover our full range of academic solutions</p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-xl px-8 md:px-10 h-10 md:h-12 text-[10px] md:text-xs font-black italic shadow-2xl transition-all hover:scale-105 w-full sm:w-auto">
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}