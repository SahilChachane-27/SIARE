'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Check, 
  ShieldCheck, 
  Globe, 
  Database, 
  Mail,
  FileText,
  PlayCircle,
  PhoneCall,
  RefreshCw,
  CreditCard
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

export default function PricingPage() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isClient, setIsClient] = useState(false);
  const db = useFirestore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const plansQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'pricingPlans'), orderBy('order', 'asc'));
  }, [db]);

  const { data: plans, loading } = useCollection(plansQuery);

  if (!isClient) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary text-white pt-32 pb-24 md:pt-44 md:pb-28">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <Globe className="absolute top-1/4 left-[10%] w-64 h-64 animate-pulse" />
            <Database className="absolute bottom-1/4 right-[10%] w-64 h-64 animate-pulse" />
          </div>
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 font-headline italic leading-tight">
              Institutional Hosting Plans
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-12 px-4">
              Scalable annual plans designed exclusively for University research ownership.
            </p>
            
            <div data-aos="fade-up" data-aos-delay="200" className="inline-flex bg-white/10 p-1 rounded-funky border border-white/20 shadow-2xl">
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-6 sm:px-10 py-3 rounded-funky transition-all font-black text-[10px] sm:text-sm tracking-widest ${currency === 'USD' ? 'bg-accent text-accent-foreground shadow-lg' : 'text-white/70 hover:text-white'}`}
              >
                $ USD
              </button>
              <button 
                onClick={() => setCurrency('INR')}
                className={`px-6 sm:px-10 py-3 rounded-funky transition-all font-black text-[10px] sm:text-sm tracking-widest ${currency === 'INR' ? 'bg-accent text-accent-foreground shadow-lg' : 'text-white/70 hover:text-white'}`}
              >
                ₹ INR
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 -mt-8 md:-mt-16 bg-white rounded-t-[40px] md:rounded-t-[60px] shadow-2xl relative z-20 overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32">
            
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <RefreshCw className="h-10 w-10 text-accent animate-spin" />
                <p className="text-xs font-black uppercase text-primary/40 tracking-[0.2em]">Retrieving Plans...</p>
              </div>
            ) : (plans && plans.length > 0) ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan: any, idx: number) => (
                  <Card 
                    key={idx} 
                    className={`flex flex-col rounded-funky shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden group ${plan.highlight ? 'ring-2 ring-accent border-accent/20 bg-white' : 'bg-slate-50 hover:bg-white border-accent/10'}`}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    {plan.tag && (
                      <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-tighter z-30">
                        {plan.tag}
                      </div>
                    )}
                    <CardHeader className="flex flex-col space-y-1.5 text-center border-b border-accent/5 p-6 md:p-8">
                      <CardTitle className="text-lg md:text-xl font-bold text-primary font-headline italic">{plan.name}</CardTitle>
                      <div className="mt-6">
                        <span className="text-3xl md:text-4xl font-black text-primary italic">
                          {currency === 'INR' ? plan.priceINR : plan.priceUSD}
                        </span>
                        <div className="text-[10px] text-primary/40 uppercase font-black tracking-widest mt-1">/ Journal/Year</div>
                      </div>
                      <p className="text-[10px] text-foreground/50 font-bold mt-4 leading-relaxed uppercase">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="flex-1 p-6 md:p-8">
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-xs font-bold text-primary/70">
                            <div className="mt-0.5 h-4 w-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                              <Check className="h-2.5 w-2.5 text-accent" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className={`w-full rounded-funky h-12 md:h-14 text-sm font-black italic tracking-tighter shadow-lg group-hover:scale-105 transition-transform duration-300 ${plan.highlight ? 'bg-accent text-accent-foreground hover:bg-primary hover:text-white' : 'bg-primary text-white hover:bg-accent hover:text-primary'}`}>
                        <Link href="/contact">{plan.cta || 'Get Started'}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-secondary/30 rounded-[30px] border-2 border-dashed border-primary/5">
                <CreditCard className="h-12 w-12 text-primary/10 mx-auto mb-4" />
                <p className="text-sm font-bold text-primary/40 uppercase tracking-widest italic">Plans are currently being updated.</p>
              </div>
            )}

            <div className="mt-20 md:mt-24">
              <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-2xl md:text-4xl font-bold text-primary font-headline italic">Next Steps & Support</h2>
                <div className="mt-4 w-20 h-1 bg-accent mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                  { title: "Contact Form", desc: "Submit requirements through our official channel.", icon: Mail },
                  { title: "University MoU", desc: "Formalize institutional partnership agreements.", icon: FileText },
                  { title: "Hosting Demo", desc: "Experience our professional OJS setup live.", icon: PlayCircle },
                  { title: "Direct Support", desc: "Connect with our technical team directly.", icon: PhoneCall },
                ].map((item, i) => (
                  <Card 
                    key={i} 
                    className="p-6 md:p-8 text-center rounded-funky border-none shadow-xl bg-slate-50 hover:bg-white transition-all duration-300 group hover:-translate-y-2"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="mb-6 flex justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 md:h-10 md:w-10" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3 font-headline italic">{item.title}</h3>
                    <p className="text-[10px] text-foreground/60 mb-6 leading-relaxed uppercase font-bold tracking-tight">{item.desc}</p>
                    <Button variant="link" asChild className="text-accent font-black uppercase text-[10px] tracking-widest p-0 h-auto">
                      <Link href="/contact">Inquire Now &rarr;</Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-20 md:mt-24">
              <div data-aos="fade-up" className="relative p-[2px] rounded-funky overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent animate-pulse"></div>
                <div className="relative bg-white rounded-funky p-6 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 md:gap-12">
                  <div className="h-16 w-16 md:h-24 md:w-24 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-8 w-8 md:h-12 md:w-12 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-headline italic">30-Day Research Guarantee</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm font-medium max-w-xl">
                      Try our institutional hosting portal risk-free. If your editorial team isn't completely satisfied within 30 days, we'll provide a full refund.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-primary/40 tracking-[0.2em]">
                      <Check className="h-4 w-4 text-accent" /> Verified Setup
                    </div>
                    <Button asChild className="bg-primary text-white hover:bg-accent rounded-funky h-12 px-10 text-xs font-bold uppercase tracking-widest italic transition-all">
                      <Link href="/contact">Get Protection</Link>
                    </Button>
                  </div>
                </div>
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