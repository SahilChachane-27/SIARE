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
    title: 'Global Conferences & Summits',
    description: 'Partnered academic events across Engineering, Management, Social Sciences, Education, Agriculture, and emerging technologies.',
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
    title: 'Research Training Hub',
    description: 'Workshops on research methodology, academic writing, AI tools, plagiarism reduction, and peer review training.',
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
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">What We Offer</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary font-headline italic">Key Features</h3>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl flex flex-col p-10 h-full border-none shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-8 h-16 w-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                <service.icon className="h-8 w-8 text-accent group-hover:text-primary" />
              </div>
              
              <h4 className="text-xl font-bold text-primary mb-4 font-headline italic">{service.title}</h4>
              <p className="text-sm text-foreground/60 mb-8 leading-relaxed italic">{service.description}</p>
              
              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs font-bold text-primary/70">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="link" className="p-0 h-auto self-start text-primary font-black uppercase tracking-widest text-[10px] hover:text-accent group">
                <Link href="/services" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
          
          {/* Explore All Services Card */}
          <div className="lg:col-span-1 flex items-center justify-center" data-aos="fade-up" data-aos-delay="500">
            <div className="text-center space-y-6">
              <p className="text-primary/40 font-bold uppercase tracking-widest text-xs italic">Discover our full range of academic solutions</p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-xl px-12 py-8 text-base font-black italic shadow-2xl transition-all hover:scale-105 h-auto">
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
