'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Globe, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Zap, 
  ShieldCheck, 
  RefreshCw, 
  Trophy, 
  Landmark, 
  Briefcase 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useMemo } from 'react';

const whyJoinPoints = [
  {
    icon: Globe,
    title: "Global Research Community",
    desc: "Engage with researchers across engineering, management, humanities, education, agriculture, medicine, biological sciences, and emerging technologies."
  },
  {
    icon: Trophy,
    title: "Priority Access to Conferences",
    desc: "Members receive early access, discounted fees, and special invitations to SIARE-partnered conferences and events."
  },
  {
    icon: BookOpen,
    title: "Proceedings Publication Benefits",
    desc: "Members can submit their conference papers to SIARE’s proceedings series with faster review, dedicated editorial support, and DOI assistance."
  },
  {
    icon: Zap,
    title: "Training & Development",
    desc: "Exclusive workshops on research writing, systematic reviews, publishing ethics, and research analytics."
  },
  {
    icon: Users,
    title: "Networking & Collaboration",
    desc: "Access collaborative groups, thematic clusters, and inter-university partnership opportunities."
  },
  {
    icon: Award,
    title: "Academic Recognition",
    desc: "Eligibility for prestigious SIARE awards including Best Paper, Young Researcher, and Outstanding Reviewer awards."
  }
];

const defaultCategories = [
  {
    name: "Individual Researcher",
    icon: "Users",
    priceINR: "₹1,500",
    priceUSD: "$35",
    description: "Suitable for faculty, research scholars, and independent researchers.",
    benefits: [
      "Access to all society resources",
      "Discounted conference rates",
      "Eligibility to publish in proceedings",
      "Certificate of membership",
      "Participation in academic committees"
    ]
  },
  {
    name: "Student Membership",
    icon: "GraduationCap",
    priceINR: "₹700",
    priceUSD: "$15",
    description: "For undergraduate, postgraduate, and doctoral researchers.",
    benefits: [
      "Low-cost yearly membership",
      "Mentoring & research guidance",
      "Access to workshops & training",
      "Paper presentation opportunities",
      "Travel support eligibility"
    ]
  },
  {
    name: "Institutional Membership",
    icon: "Landmark",
    priceINR: "₹15,000",
    priceUSD: "$250",
    description: "Designed for universities, colleges, and research centers.",
    benefits: [
      "Opportunity to host conferences",
      "Proceedings publication partnership",
      "Faculty & student training modules",
      "Research analytics consultation",
      "Institutional branding on portal"
    ]
  },
  {
    name: "Affiliate Membership",
    icon: "Briefcase",
    priceINR: "₹5,000",
    priceUSD: "$95",
    description: "For industry partners and NGOs in education & technology.",
    benefits: [
      "Collaboration opportunities",
      "Research-industry integration",
      "Access to expert advisory panels",
      "Joint technology workshops",
      "Joint venture projects"
    ]
  }
];

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const icons: Record<string, any> = { Users, GraduationCap, Landmark, Briefcase, Award, Zap, Globe, Trophy, BookOpen, ShieldCheck };
  const Icon = icons[name] || Users;
  return <Icon className={className} />;
};

export default function MembershipPage() {
  const db = useFirestore();
  const tiersQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'membershipTiers'), orderBy('order', 'asc'));
  }, [db]);

  const { data: dynamicTiers, loading } = useCollection(tiersQuery);
  const tiers = dynamicTiers && dynamicTiers.length > 0 ? dynamicTiers : defaultCategories;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline italic leading-tight mb-6">
                Membership at SIARE
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Academic Networking"
              fill
              className="object-cover"
              priority
              data-ai-hint="scholars networking"
            />
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4 italic" data-aos="fade-up">
                Why Join SIARE?
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyJoinPoints.map((point, idx) => (
                <Card key={idx} className="border-none shadow-lg rounded-2xl bg-white p-6 group hover:-translate-y-1 transition-all" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                    <point.icon className="h-6 w-6 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 font-headline italic">{point.title}</h3>
                  <p className="text-foreground/60 text-xs leading-relaxed font-headline italic">{point.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4 italic" data-aos="fade-up">
                Membership Categories
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <RefreshCw className="h-8 w-8 text-accent animate-spin" />
                <p className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Synchronizing Tiers...</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {tiers.map((cat: any, idx: number) => (
                  <Card key={idx} className="flex flex-col rounded-funky shadow-xl border-accent/10 overflow-hidden group hover:shadow-2xl transition-all" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <CardHeader className="bg-primary text-white p-8 text-center">
                      <IconComponent name={cat.icon} className="h-10 w-10 mx-auto mb-4 text-accent" />
                      <CardTitle className="text-lg font-headline italic">{cat.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-2xl font-black">{cat.priceINR}</span>
                        <span className="text-white/40 text-xs ml-2">/ {cat.priceUSD}</span>
                      </div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-white/60 mt-2">Yearly Membership</p>
                    </CardHeader>
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <p className="text-xs text-foreground/60 font-bold mb-6 font-headline italic">{cat.description}</p>
                      <ul className="space-y-3 mb-8 flex-1">
                        {cat.benefits?.map((benefit: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-[11px] font-medium text-foreground/80 font-headline italic">
                            <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full bg-accent hover:bg-primary text-accent-foreground hover:text-white rounded-xl font-bold text-xs uppercase tracking-widest">
                        <Link href="/apply-membership">Apply Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* How to Become a Member */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-6 italic">
                  How to Become a Member
                </h2>
                <div className="w-20 h-1 bg-accent mb-10"></div>
                <div className="space-y-6">
                  {[
                    { num: "01", text: "Fill the online membership application" },
                    { num: "02", text: "Upload academic profile (for individual & student)" },
                    { num: "03", text: "Complete secure online payment" },
                    { num: "04", text: "Receive digital membership certificate and portal login" }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="h-6 w-6 rounded-full border-2 border-accent/20 flex items-center justify-center text-accent text-[8px] font-black group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                        {step.num}
                      </div>
                      <p className="text-xs md:text-sm font-medium text-foreground/80 pt-1 font-headline italic">{step.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-black italic rounded-xl px-10 h-14 text-sm shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
                    <Link href="/apply-membership">Apply for Membership Now</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-funky overflow-hidden shadow-2xl" data-aos="fade-left">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Application Process"
                  fill
                  className="object-cover"
                  data-ai-hint="researcher writing"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities & Renewal */}
        <section className="py-20 bg-primary overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white p-10 rounded-3xl border-none shadow-2xl" data-aos="fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-bold text-primary font-headline italic">Member Responsibilities</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Maintain highest levels of academic integrity",
                    "Follow SIARE publication ethics guidelines",
                    "Contribute to research discussions and activities",
                    "Promote responsible and impactful research"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/70 font-headline italic">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="bg-white p-10 rounded-3xl border-none shadow-2xl" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-4 mb-6">
                  <RefreshCw className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-bold text-primary font-headline italic">Membership Renewal</h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6 font-headline italic">
                  Renewal reminders are sent 30 days before expiry. Members who renew on time retain:
                </p>
                <ul className="space-y-4">
                  {[
                    "Continuity in all society privileges",
                    "Active listing on member directories",
                    "Priority access to upcoming global events"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/70 font-headline italic">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-white text-center">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline mb-6 italic">
                Become a Member Today
              </h2>
              <p className="text-xl text-foreground/70 mb-12 font-medium font-headline italic">
                Join a global research movement and accelerate your academic journey with SIARE.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-funky px-8 h-10 text-sm shadow-xl shadow-accent/20 transition-all hover:scale-105">
                  <Link href="/apply-membership">Apply for Membership</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
