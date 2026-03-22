
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  MapPin, 
  Video, 
  GraduationCap,
  CheckCircle2,
  RefreshCw,
  User,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useMemo } from 'react';

export default function EventsPage() {
  const db = useFirestore();
  
  // Dynamic Conferences
  const eventsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'conferences'), orderBy('order', 'asc'));
  }, [db]);

  const { data: dynamicEvents, loading } = useCollection(eventsQuery);

  // Dynamic Workshops
  const workshopsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'workshops'), orderBy('order', 'asc'));
  }, [db]);

  const { data: workshops, loading: workshopsLoading } = useCollection(workshopsQuery);

  // Dynamic Webinars
  const webinarsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'webinars'), orderBy('order', 'asc'));
  }, [db]);

  const { data: webinars, loading: webinarsLoading } = useCollection(webinarsQuery);

  // Dynamic Past Events
  const pastEventsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'pastEvents'), orderBy('order', 'asc'));
  }, [db]);

  const { data: pastEvents, loading: pastLoading } = useCollection(pastEventsQuery);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline italic leading-tight mb-6">
                Events at SIARE
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
                SIARE organizes and partners with universities, research institutions, and academic societies worldwide to host impactful conferences, workshops, symposiums, and training programs.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Academic Events"
              fill
              className="object-cover"
              priority
              data-ai-hint="conference hall"
            />
          </div>
        </section>

        {/* Upcoming Conferences */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                Upcoming Conferences
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
              <p className="text-foreground/60 mt-6 max-w-2xl mx-auto font-medium italic">Showcasing our latest academic gatherings.</p>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <RefreshCw className="h-8 w-8 text-accent animate-spin" />
                <p className="text-xs font-bold uppercase tracking-widest text-primary/40">Updating Catalog...</p>
              </div>
            ) : (dynamicEvents && dynamicEvents.length > 0) ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {dynamicEvents.map((event: any, idx: number) => (
                  <Card key={idx} className={`flex flex-col border-0 border-l-4 overflow-hidden ${event.color || 'border-primary'} shadow-xl rounded-2xl bg-slate-50 hover:bg-white transition-all duration-300 group`} data-aos="fade-up" data-aos-delay={idx * 100}>
                    {event.imageUrl && (
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image src={event.imageUrl} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-primary mb-4 italic group-hover:text-accent transition-colors line-clamp-2">{event.title}</h3>
                      <div className="space-y-3 mb-6 flex-1 text-xs">
                        <div className="flex items-center gap-2 text-foreground/70 font-medium"><Calendar className="h-3.5 w-3.5 text-accent shrink-0" /> <strong>Date:</strong> {event.date}</div>
                        <div className="flex items-center gap-2 text-foreground/70 font-medium"><MapPin className="h-3.5 w-3.5 text-accent shrink-0" /> <strong>Location:</strong> {event.location}</div>
                      </div>
                      <div className="flex flex-col gap-2 pt-4 border-t border-slate-200">
                        <Button asChild size="sm" className="w-full bg-primary hover:bg-accent text-white rounded-xl text-[10px] uppercase font-bold tracking-widest">
                          <Link href="/contact">Register Now</Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white rounded-xl text-[10px] uppercase font-bold tracking-widest">
                          <Link href="/contact">Submit Paper</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 italic text-muted-foreground bg-slate-50 rounded-2xl border border-dashed border-primary/10">
                No upcoming conferences listed at this time.
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Workshops Section */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                Upcoming Workshops
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
              <p className="text-foreground/60 mt-6 max-w-2xl mx-auto font-medium italic">Hands-on training and capacity building sessions.</p>
            </div>

            {workshopsLoading ? (
              <div className="flex justify-center py-12">
                <RefreshCw className="h-8 w-8 text-accent animate-spin" />
              </div>
            ) : (workshops && workshops.length > 0) ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {workshops.map((workshop: any, idx: number) => (
                  <Card key={idx} className="flex flex-col border-none shadow-xl rounded-2xl bg-white overflow-hidden group hover:-translate-y-1 transition-all duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
                    {workshop.imageUrl && (
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image src={workshop.imageUrl} alt={workshop.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                        <span className="text-[8px] font-black uppercase text-primary/40 tracking-widest">{workshop.status}</span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-4 italic leading-tight line-clamp-2">{workshop.title}</h3>
                      <div className="space-y-2 mb-6 text-[11px] text-foreground/70 flex-1">
                        <div className="flex items-center gap-2"><Calendar className="h-3 w-3 text-accent shrink-0" /> {workshop.date}</div>
                        {workshop.instructor && <div className="flex items-center gap-2"><User className="h-3 w-3 text-accent shrink-0" /> {workshop.instructor}</div>}
                      </div>
                      <Button asChild className="w-full bg-primary hover:bg-accent text-white rounded-xl text-[10px] uppercase font-bold tracking-widest mt-auto">
                        <Link href="/contact">Register Workshop</Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 italic text-muted-foreground bg-white/50 rounded-2xl border border-dashed border-primary/5">
                No workshops scheduled currently.
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Webinars Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                Upcoming Webinars
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
              <p className="text-foreground/60 mt-6 max-w-2xl mx-auto font-medium italic">Join our online lectures and academic webinars.</p>
            </div>

            {webinarsLoading ? (
              <div className="flex justify-center py-12">
                <RefreshCw className="h-8 w-8 text-accent animate-spin" />
              </div>
            ) : (webinars && webinars.length > 0) ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {webinars.map((webinar: any, idx: number) => (
                  <Card key={idx} className="flex flex-col border-none shadow-xl rounded-2xl bg-slate-50 overflow-hidden group hover:bg-white transition-all duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
                    {webinar.imageUrl && (
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image src={webinar.imageUrl} alt={webinar.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent transition-colors">
                          <Video className="h-4 w-4" />
                        </div>
                        <span className="text-[8px] font-black uppercase text-accent tracking-widest">{webinar.status}</span>
                      </div>
                      <h3 className="text-base font-bold text-primary mb-4 italic leading-tight line-clamp-2">{webinar.title}</h3>
                      <div className="space-y-2 mb-6 text-[11px] text-foreground/70 flex-1">
                        <div className="flex items-center gap-2"><Calendar className="h-3 w-3 text-accent shrink-0" /> {webinar.date}</div>
                        <div className="flex items-center gap-2"><User className="h-3 w-3 text-accent shrink-0" /> Speaker: {webinar.speaker}</div>
                      </div>
                      <Button asChild className="w-full bg-primary hover:bg-accent text-white rounded-xl text-[10px] uppercase font-bold tracking-widest mt-auto">
                        <a href={webinar.joinLink || '/contact'} target={webinar.joinLink ? "_blank" : "_self"} className="flex items-center justify-center gap-2">
                          {webinar.joinLink ? 'Join Webinar' : 'Register Soon'} <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 italic text-muted-foreground bg-slate-50 rounded-2xl border border-dashed border-primary/10">
                No online sessions scheduled at the moment.
              </div>
            )}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                Past Events
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
              <p className="text-foreground/60 mt-6 max-w-2xl mx-auto font-medium italic">Building credibility through a global academic footprint.</p>
            </div>

            {pastLoading ? (
              <div className="flex justify-center py-12">
                <RefreshCw className="h-8 w-8 text-accent animate-spin" />
              </div>
            ) : (pastEvents && pastEvents.length > 0) ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pastEvents.map((event: any, idx: number) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-md transition-all" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <h4 className="font-bold text-primary mb-4 italic leading-tight text-base line-clamp-2">{event.title}</h4>
                    <p className="text-[10px] text-foreground/60 leading-relaxed font-medium flex-1 italic line-clamp-4">"{event.description}"</p>
                    <div className="mt-6 flex items-center gap-2 text-[8px] font-black uppercase text-accent group-hover:text-primary transition-colors">
                      <CheckCircle2 className="h-3 w-3" /> Successfully Completed
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 italic text-muted-foreground bg-white/50 rounded-2xl border border-dashed border-primary/5">
                History records are currently being archived.
              </div>
            )}
          </div>
        </section>

        {/* Partner With SIARE */}
        <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 italic text-accent">
                  Partner With SIARE for Events
                </h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed font-medium italic">
                  SIARE invites universities and institutions to collaborate on conference hosting, proceedings publication, and research training programs.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Conference hosting",
                    "Proceedings publication",
                    "Technical workshops",
                    "Faculty development programs",
                    "Student research training",
                    "International academic collaborations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm opacity-80 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-accent" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl" data-aos="fade-left">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Academic Networking"
                  fill
                  className="object-cover"
                  data-ai-hint="scholars meeting"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-slate-50 border-t border-slate-200 text-center relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h2 className="text-2xl md:text-4xl font-bold font-headline mb-6 italic text-primary">Empowering Global Research</h2>
              <p className="text-lg text-foreground/60 mb-12 font-medium italic">
                Connect with SIARE today to host your conference or join our upcoming academic events.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild className="bg-primary hover:bg-accent text-white font-black italic rounded-xl px-10 h-14 text-sm shadow-xl transition-all hover:scale-105">
                  <Link href="/contact">Submit Conference Proposal</Link>
                </Button>
                <Button asChild variant="outline" className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white rounded-xl px-10 h-14 text-sm font-bold transition-all hover:scale-105 italic">
                  <Link href="/contact">Become a Partner</Link>
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
