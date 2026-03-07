'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Users, Award, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
  "Access to global research community",
  "Priority publishing support",
  "Discounted conference participation",
  "Exclusive workshops & training",
  "Certificate of membership",
  "Eligibility for awards & committees"
];

const types = [
  { name: "Individual", icon: Users },
  { name: "Student", icon: Zap },
  { name: "Institutional", icon: ShieldCheck },
  { name: "Affiliate", icon: Award }
];

export function MembershipHighlights() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Join The Society</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-headline italic mb-8">Why Become a Member?</h3>
            <div className="mt-4 w-20 h-1 bg-accent mb-10"></div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity italic">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-xl px-10 py-6 text-sm font-black italic shadow-2xl transition-all hover:scale-105 h-auto">
                <Link href="/why-us">Become a Member</Link>
              </Button>
            </div>
          </div>

          <div data-aos="fade-left">
            <Card className="bg-white/10 border border-white/20 p-8 md:p-12 rounded-[40px] backdrop-blur-md text-white shadow-2xl">
              <h4 className="text-xl font-bold font-headline italic mb-8 text-center text-accent uppercase tracking-widest">Membership Tiers</h4>
              <div className="grid grid-cols-2 gap-6">
                {types.map((type, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl text-center group hover:bg-accent transition-all duration-500 cursor-default border border-white/5 hover:border-accent/50">
                    <type.icon className="h-8 w-8 mx-auto mb-4 text-accent group-hover:text-primary transition-colors" />
                    <span className="text-sm font-black uppercase tracking-widest group-hover:text-primary transition-colors">{type.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-xs text-center opacity-60 italic font-medium">Join 1500+ scholars worldwide accelerating global research impact.</p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
    </section>
  );
}
