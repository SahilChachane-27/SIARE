'use client';

import { Card } from '@/components/ui/card';
import { 
  ShieldCheck, 
  Lock, 
  Hash, 
  IdCard, 
  Database, 
  Network, 
  BookOpen, 
  Users, 
  Megaphone, 
  BarChart, 
  Library, 
  Archive 
} from 'lucide-react';

const badges = [
  {
    title: 'Strong OJS LTS Platform',
    desc: 'Stable Long-Term Support Architecture',
    icon: ShieldCheck,
  },
  {
    title: 'SSL Encrypted',
    desc: 'Bank-Grade Data Security Standards',
    icon: Lock,
  },
  {
    title: 'Crossref DOI Support',
    desc: 'Official DOI Registration & Minting',
    icon: Hash,
  },
  {
    title: 'DIGI Identify Supported',
    desc: 'Make in India based Digital Identifier',
    icon: IdCard,
  },
  {
    title: 'Scopus Compliant',
    desc: 'JATS and XML Metadata Support',
    icon: Database,
  },
  {
    title: 'Web Of Science',
    desc: 'Structure Compliance Verified',
    icon: Network,
  },
  {
    title: 'DOAJ Pages',
    desc: 'Data Check & Compliance Support',
    icon: BookOpen,
  },
  {
    title: 'Reviewer Connect',
    desc: 'Free Search by Researcher Connect',
    icon: Users,
  },
  {
    title: 'Digital Marketing',
    desc: 'Citation Improvisation Support',
    icon: Megaphone,
  },
  {
    title: 'Author Index Ranking',
    desc: 'Institutional Ranking Program',
    icon: BarChart,
  },
  {
    title: 'Digital Library',
    desc: 'Upto 100K Document Support',
    icon: Library,
  },
  {
    title: 'Manuscript Repository',
    desc: 'Professional Archival Services',
    icon: Archive,
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-secondary/40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
              What makes us different?
          </h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <Card 
              key={index} 
              className="p-6 flex flex-col items-center text-center bg-card hover:shadow-xl transition-all duration-300 border-none rounded-funky group"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="mb-4 p-3 bg-primary/5 rounded-full group-hover:bg-accent/20 transition-colors">
                <badge.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">{badge.title}</h3>
              <p className="text-[10px] text-foreground/60 leading-tight">{badge.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}