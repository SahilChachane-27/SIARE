
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Star, RefreshCw, Video, GraduationCap, Presentation, User } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { useMemo } from 'react';
import Image from 'next/image';

export function Projects() {
  const db = useFirestore();
  
  // Fetch top items from each category
  const conferencesQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'conferences'), orderBy('order', 'asc'), limit(2));
  }, [db]);

  const workshopsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'workshops'), orderBy('order', 'asc'), limit(2));
  }, [db]);

  const webinarsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'webinars'), orderBy('order', 'asc'), limit(2));
  }, [db]);

  const { data: conferences, loading: confLoading } = useCollection(conferencesQuery);
  const { data: workshops, loading: workLoading } = useCollection(workshopsQuery);
  const { data: webinars, loading: webLoading } = useCollection(webinarsQuery);

  const allEvents = useMemo(() => {
    const combined = [
      ...(conferences || []).map(item => ({ ...item, type: 'Conference', icon: Presentation, tagColor: 'bg-blue-500' })),
      ...(workshops || []).map(item => ({ ...item, type: 'Workshop', icon: GraduationCap, tagColor: 'bg-amber-500' })),
      ...(webinars || []).map(item => ({ ...item, type: 'Webinar', icon: Video, tagColor: 'bg-purple-500' }))
    ];
    // Sort by order across types if order exists, or just keep them grouped
    return combined.sort((a, b) => (a.order || 0) - (b.order || 0)).slice(0, 6);
  }, [conferences, workshops, webinars]);

  const isLoading = confLoading || workLoading || webLoading;

  return (
    <section id="upcoming-events" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3 font-sans">Academic Opportunities</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">Upcoming Events</h3>
          <div className="mt-4 w-16 md:w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-24 gap-4">
            <RefreshCw className="h-10 w-10 text-accent animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-widest text-primary/30">Synchronizing Registry...</p>
          </div>
        ) : allEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allEvents.map((event: any, index: number) => (
              <Card key={`${event.type}-${event.id}`} className="overflow-hidden border-none shadow-2xl rounded-2xl group flex flex-col bg-white hover:shadow-primary/5 transition-all duration-500" data-aos="fade-up" data-aos-delay={index * 100}>
                
                <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
                  {event.imageUrl ? (
                    <Image 
                      src={event.imageUrl} 
                      alt={event.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-10">
                      <event.icon className="h-12 w-12" />
                    </div>
                  )}
                  {/* Category Tag */}
                  <div className={`absolute top-4 left-4 ${event.tagColor} text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-lg z-10 flex items-center gap-1.5`}>
                    <event.icon className="h-3 w-3" />
                    {event.type}
                  </div>
                </div>

                <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    {event.status && (
                      <div className="bg-accent/10 text-accent text-[9px] md:text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter flex items-center gap-1 font-headline italic">
                        <Star className="h-2.5 w-2.5 md:h-3 md:w-3 fill-current" /> {event.status}
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors min-h-[3rem] md:min-h-[3.5rem] line-clamp-2">
                    {event.title}
                  </h4>
                  
                  <div className="space-y-2 md:space-y-3 pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-2 md:gap-3 text-[11px] md:text-xs font-bold text-primary/60 font-headline italic">
                      <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0" /> {event.date}
                    </div>
                    {event.location ? (
                      <div className="flex items-center gap-2 md:gap-3 text-[11px] md:text-xs font-bold text-primary/60 font-headline italic">
                        <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0" /> {event.location}
                      </div>
                    ) : event.speaker ? (
                      <div className="flex items-center gap-2 md:gap-3 text-[11px] md:text-xs font-bold text-primary/60 font-headline italic">
                        <User className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0" /> {event.speaker}
                      </div>
                    ) : null}
                  </div>

                  <div className="pt-2 md:pt-4">
                    <Button asChild className="w-full bg-primary hover:bg-accent text-white hover:text-primary rounded-xl h-10 md:h-12 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all">
                      <Link href="/events">Register / Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 italic text-muted-foreground bg-slate-50 rounded-2xl border-2 border-dashed border-slate-100">
            No upcoming events listed at this time.
          </div>
        )}

        <div className="mt-12 md:mt-16 text-center" data-aos="fade-up">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-xl px-8 md:px-10 h-10 md:h-12 text-[10px] md:text-xs font-black italic shadow-2xl transition-all hover:scale-105 w-full sm:w-auto">
            <Link href="/events" className="flex items-center justify-center gap-2">
              View All Events <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
