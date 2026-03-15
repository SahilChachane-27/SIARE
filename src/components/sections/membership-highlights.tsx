'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Users, Award, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
  "Global research community",
  "Priority publishing support",
  "Discounted participation",
  "Exclusive workshops",
  "Member certificates",
  "Eligibility for awards"
];

const types = [
  { name: "Individual", icon: Users },
  { name: "Student", icon: Zap },
  { name: "Institutional", icon: ShieldCheck },
  { name: "Affiliate", icon: Award }
];

export function MembershipHighlights() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-aos="fade-right" className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3 font-sans">Join The Society</h2>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-headline italic leading-tight">Why Become a Member?</h3>
              <div className="mt-4 w-16 md:w-20 h-1 bg-accent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs md:text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity font-headline italic">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-xl px-8 md:px-10 py-5 md:py-6 text-[10px] md:text-sm font-black italic shadow-2xl transition-all hover:scale-105 h-auto w-full sm:w-auto">
                <Link href="/why-us">Become a Member</Link>
              </Button>
            </div>
          </div>

          <div data-aos="fade-left" className="w-full max-w-lg lg:max-w-none mx-auto">
            <Card className="bg-white/10 border border-white/20 p-6 md:p-10 lg:p-12 rounded-[30px] md:rounded-[40px] backdrop-blur-md text-white shadow-2xl">
              <h4 className="text-lg md:text-xl font-bold font-headline italic mb-6 md:mb-8 text-center text-accent uppercase tracking-widest">Membership Tiers</h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {types.map((type, i) => (
                  <div key={i} className="bg-white/5 p-3 sm:p-4 md:p-6 rounded-2xl text-center group hover:bg-accent transition-all duration-500 cursor-default border border-white/5 hover:border-accent/50 flex flex-col items-center justify-center min-h-[100px] sm:min-h-0">
                    <type.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 sm:mb-3 md:mb-4 text-accent group-hover:text-primary transition-colors" />
                    <span className="text-[9px] sm:text-[10px] md:text-sm font-black uppercase tracking-wider md:tracking-widest group-hover:text-primary transition-colors block w-full truncate font-headline italic">
                      {type.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 md:mt-10 text-[10px] md:text-xs text-center opacity-60 font-headline italic font-medium">Join 1500+ scholars worldwide accelerating research impact.</p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl hidden sm:block"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl hidden sm:block"></div>
    </section>
  );
}
