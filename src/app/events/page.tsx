
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
  ExternalLink,
  Presentation,
  History
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useMemo, useEffect, useState } from 'react';

export default function EventsPage() {
  const db = useFirestore();
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setToday(new Date()), 1000 * 60 * 60); // Refresh every hour
    return () => clearInterval(timer);
  }, []);

  const isPast = (dateStr: string) => {
    if (!dateStr) return false;
    const eventDate = new Date(dateStr);
    const now = new Date(today);
    now.setHours(0, 0, 0, 0);
    return eventDate < now;
  };

  // Dynamic Data Fetching
  const confQuery = useMemo(() => db ? query(collection(db, 'conferences'), orderBy('order', 'asc')) : null, [db]);
  const workQuery = useMemo(() => db ? query(collection(db, 'workshops'), orderBy('order', 'asc')) : null, [db]);
  const webQuery = useMemo(() => db ? query(collection(db, 'webinars'), orderBy('order', 'asc')) : null, [db]);
  const pastQuery = useMemo(() => db ? query(collection(db, 'pastEvents'), orderBy('order', 'asc')) : null, [db]);

  const { data: allConfs, loading: confLoading } = useCollection(confQuery);
  const { data: allWorks, loading: workLoading } = useCollection(workQuery);
  const { data: allWebs, loading: webLoading } = useCollection(webQuery);
  const { data: manualPast, loading: pastLoading } = useCollection(pastQuery);

  // Filter Upcoming
  const upcomingConfs = useMemo(() => allConfs?.filter(c => !isPast(c.startDate || c.date)), [allConfs, today]);
  const upcomingWorks = useMemo(() => allWorks?.filter(w => !isPast(w.date)), [allWorks, today]);
  const upcomingWebs = useMemo(() => allWebs?.filter(w => !isPast(w.date)), [allWebs, today]);

  // Combine Past
  const combinedPast = useMemo(() => {
    const pastFromConfs = allConfs?.filter(c => isPast(c.startDate || c.date)).map(c => ({ ...c, type: 'Conference', icon: Presentation }));
    const pastFromWorks = allWorks?.filter(w => isPast(w.date)).map(w => ({ ...w, type: 'Workshop', icon: GraduationCap }));
    const pastFromWebs = allWebs?.filter(w => isPast(w.date)).map(w => ({ ...w, type: 'Webinar', icon: Video }));
    const manual = manualPast?.map(m => ({ ...m, type: 'History', icon: History }));

    return [...(pastFromConfs || []), ...(pastFromWorks || []), ...(pastFromWebs || []), ...(manual || [])]
      .sort((a, b) => (b.order || 0) - (a.order || 0));
  }, [allConfs, allWorks, allWebs, manualPast, today]);

  const loading = confLoading || workLoading || webLoading || pastLoading;

  const EventCard = ({ event, isPastCard = false }: { event: any, isPastCard?: boolean }) => (
    <Card className={`flex flex-col border-0 border-l-4 overflow-hidden ${event.color || 'border-primary'} shadow-xl rounded-2xl bg-slate-50 hover:bg-white transition-all duration-300 group`}>
      {event.imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image src={event.imageUrl} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          {isPastCard && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><span className="bg-white/90 text-primary text-[8px] font-black uppercase px-2 py-1 rounded-full">Completed</span></div>}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          {event.icon && <event.icon className="h-3.5 w-3.5 text-accent" />}
          <span className="text-[8px] font-black uppercase text-primary/40 tracking-widest">{event.type || 'Event'}</span>
        </div>
        <h3 className="text-base font-bold text-primary mb-4 italic group-hover:text-accent transition-colors line-clamp-2 leading-tight">{event.title}</h3>
        
        {event.type !== 'History' && (
          <div className="space-y-2 mb-6 flex-1 text-[11px]">
            {event.date && <div className="flex items-center gap-2 text-foreground/70 font-medium"><Calendar className="h-3 w-3 text-accent shrink-0" /> {event.date}</div>}
            {(event.location || event.venue) && <div className="flex items-center gap-2 text-foreground/70 font-medium"><MapPin className="h-3 w-3 text-accent shrink-0" /> {event.location || event.venue}</div>}
            {event.speaker && <div className="flex items-center gap-2 text-foreground/70 font-medium"><User className="h-3 w-3 text-accent shrink-0" /> {event.speaker}</div>}
          </div>
        )}

        {event.type === 'History' && <p className="text-[10px] text-foreground/60 italic mb-6 line-clamp-3">{event.description}</p>}

        {!isPastCard ? (
          <Button asChild size="sm" className="w-full bg-primary hover:bg-accent text-white rounded-xl text-[10px] uppercase font-bold tracking-widest mt-auto">
            <Link href="/contact">Register Now</Link>
          </Button>
        ) : (
          <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-2 text-[8px] font-black uppercase text-green-600">
            <CheckCircle2 className="h-3 w-3" /> Successfully Completed
          </div>
        )}
      </div>
    </Card>
  );

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
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium italic font-headline">
                SIARE organizes and partners with universities worldwide to host impactful academic gatherings and training programs.
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

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <RefreshCw className="h-10 w-10 text-accent animate-spin" />
            <p className="text-xs font-bold uppercase tracking-widest text-primary/40">Synchronizing Global Registry...</p>
          </div>
        ) : (
          <>
            {/* Upcoming Conferences */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic mb-4" data-aos="fade-up">Upcoming Conferences</h2>
                  <div className="w-16 h-1 bg-accent mx-auto"></div>
                </div>
                {upcomingConfs && upcomingConfs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {upcomingConfs.map(e => <EventCard key={e.id} event={{...e, type: 'Conference', icon: Presentation}} />)}
                  </div>
                ) : (
                  <div className="text-center py-12 italic text-primary/30 text-sm">No upcoming conferences currently scheduled.</div>
                )}
              </div>
            </section>

            {/* Upcoming Workshops */}
            <section className="py-20 bg-slate-50/50">
              <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic mb-4" data-aos="fade-up">Upcoming Workshops</h2>
                  <div className="w-16 h-1 bg-accent mx-auto"></div>
                </div>
                {upcomingWorks && upcomingWorks.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {upcomingWorks.map(e => <EventCard key={e.id} event={{...e, type: 'Workshop', icon: GraduationCap}} />)}
                  </div>
                ) : (
                  <div className="text-center py-12 italic text-primary/30 text-sm">No workshops listed at this time.</div>
                )}
              </div>
            </section>

            {/* Upcoming Webinars */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic mb-4" data-aos="fade-up">Upcoming Webinars</h2>
                  <div className="w-16 h-1 bg-accent mx-auto"></div>
                </div>
                {upcomingWebs && upcomingWebs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {upcomingWebs.map(e => <EventCard key={e.id} event={{...e, type: 'Webinar', icon: Video}} />)}
                  </div>
                ) : (
                  <div className="text-center py-12 italic text-primary/30 text-sm">No online sessions scheduled for the near future.</div>
                )}
              </div>
            </section>

            {/* Past Events Section */}
            <section className="py-20 bg-slate-50">
              <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic mb-4" data-aos="fade-up">Past Events & Completed Activities</h2>
                  <div className="w-16 h-1 bg-accent mx-auto"></div>
                  <p className="text-foreground/60 mt-6 max-w-2xl mx-auto text-xs font-medium italic">Building credibility through a global academic footprint.</p>
                </div>
                {combinedPast.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {combinedPast.map((e, idx) => <EventCard key={e.id || idx} event={e} isPastCard={true} />)}
                  </div>
                ) : (
                  <div className="text-center py-12 italic text-primary/30 text-sm">Historical archive is currently empty.</div>
                )}
              </div>
            </section>
          </>
        )}

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h2 className="text-2xl md:text-4xl font-bold font-headline mb-6 italic text-accent">Ready to Partner?</h2>
              <p className="text-sm md:text-lg text-white/70 mb-10 font-medium italic">Connect with our academic committee to establish a conference partnership or propose a workshop.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-white text-accent-foreground hover:text-primary font-extrabold rounded-xl px-10 h-14 text-sm shadow-xl transition-all hover:scale-105 italic">
                  <Link href="/contact">Inquire Now</Link>
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
