
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Users, Settings, RefreshCw, CheckCircle2 } from 'lucide-react';

const services = [
  {
    href: '#contact',
    title: 'Journal Hosting Services',
    description: 'Complete OJS Platform setup, secure server maintenance, DOI registration, Digiidentify, and article-level metadata indexing with anti-plagiarism integration.',
    icon: BookOpen,
    features: ['OJS Platform Setup', 'DOI Registration', 'Plagiarism Checks']
  },
  {
    href: '#contact',
    title: 'University Partnership Program',
    description: 'Strategic co-branded publishing and institutional branding solutions with a dedicated account manager and comprehensive annual analytics reporting.',
    icon: Users,
    features: ['Institutional Branding', 'Analytics Reporting', 'Dedicated Support']
  },
  {
    href: '#contact',
    title: 'Editorial Workflow Management',
    description: 'Streamlined manuscript submission, reviewer panel creation, automated reminders, and a complete copyediting and production workflow.',
    icon: Settings,
    features: ['Manuscript Submission', 'Reviewer Panel', 'Production Workflow']
  },
  {
    href: '#contact',
    title: 'Migration Services',
    description: 'Expert migration of journals from OJS 2.x or other platforms while ensuring all back issues and persistent URLs are fully preserved.',
    icon: RefreshCw,
    features: ['OJS 2.x Migration', 'Back Issue Retention', 'URL Preservation']
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Services</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Empowering academic institutions with professional journal hosting and management solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card
                className="
                  text-center bg-card rounded-funky flex flex-col py-10 px-8 h-full
                  border border-border/50
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                "
              >
                <div className="flex-grow flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-headline mt-2 mb-4 h-14 flex items-center">{service.title}</h3>
                  <p className="text-sm text-foreground/70 mb-6 flex-grow">{service.description}</p>
                  
                  <ul className="w-full text-left space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-foreground/60">
                        <CheckCircle2 className="h-3 w-3 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="mt-auto bg-accent hover:bg-accent/90 text-accent-foreground w-full transition-transform duration-300 ease-in-out hover:scale-105 rounded-funky">
                  <Link href={service.href}>Inquire Now</Link>
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
