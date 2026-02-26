import { Card } from '@/components/ui/card';
import { 
  Zap, 
  Wand2, 
  Settings,
  ShieldCheck, 
  BarChart,
  Layers, 
  Workflow,
  BookOpen,
  Globe, 
  Maximize,
  Cpu,
  Lightbulb
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Quick Journal Setup',
    description: 'Launch your journal in no time with our optimized, ready-to-use publishing framework.',
  },
  {
    icon: Wand2,
    title: 'No Technical Experience Needed',
    description: 'Concentrate fully on scholarship while we manage the servers, updates, and backend complexity.',
  },
  {
    icon: Settings,
    title: 'Tech-Free Management',
    description: 'You handle the research—we handle all configuration, security, and maintenance.',
  },
  {
    icon: ShieldCheck,
    title: 'Future-Ready Infrastructure',
    description: 'Engineered with robust security and automatic scalability to support growing academic ecosystems.',
  },
  {
    icon: BarChart,
    title: 'Enterprise-Grade Performance',
    description: 'A dependable and secure platform built to expand seamlessly with your institution’s publishing needs.',
  },
  {
    icon: Layers,
    title: 'Complete Publishing Ecosystem',
    description: 'From submission to publication—everything you need is under one integrated system.',
  },
  {
    icon: Workflow,
    title: 'Unified Workflow Hub',
    description: 'Manage manuscripts, peer review, DOIs, issues, and archives through one connected platform.',
  },
  {
    icon: BookOpen,
    title: 'End-to-End Journal Management',
    description: 'All editorial, review, and publishing functions in a single, streamlined environment.',
  },
  {
    icon: Globe,
    title: 'Works for Individuals to Universities',
    description: 'Whether managing one title or an entire university portfolio, our system adapts to your scale.',
  },
  {
    icon: Maximize,
    title: 'Flexible & Expandable',
    description: 'Designed to support independent editors, departments, and full institutional publishing houses.',
  },
  {
    icon: Cpu,
    title: 'Powered by Advanced Technology',
    description: 'Harness next-generation tools, automation, and security trusted by global academic publishers.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven Platform',
    description: 'High-performance architecture and encrypted systems built for the future of research publishing.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Why Choose Technical Journals?
          </h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Empowering universities with professional, secure, and institutionally-owned publishing solutions on the OJS Platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center p-8 bg-card shadow-lg rounded-funky transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/50"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}