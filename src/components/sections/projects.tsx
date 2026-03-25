
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Star, RefreshCw, Video, GraduationCap, Presentation, User } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, limit, where } from 'firebase/firestore';
import { useMemo } from 'react';
import Image from 'next/image';

export function Projects() {
  const db = useFirestore();
  
  // Fetch featured items from each category without server-side ordering to avoid index errors
  const conferencesQuery = useMemo(() => {
    if (!db) return null;
    return query(
      collection(db, 'conferences'), 
      where('isFeatured', '==', true),
      limit(5)
    );
  }, [db]);

  const workshopsQuery = useMemo(() => {
    if (!db) return null;
    return query(
      collection(db, 'workshops'), 
      where('isFeatured', '==', true),
      limit(5)
    );
  }, [db]);

  const webinarsQuery = useMemo(() => {
    if (!db) return null;
    return query(
      collection(db, 'webinars'), 
      where('isFeatured', '==', true),
      limit(5)
    );
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
    // Sort by order across types in JavaScript memory
    return combined.sort((a, b) => (a.order || 0) - (b.order || 0)).slice(0, 6);
  }, [conferences, workshops, webinars]);

  const isLoading = confLoading || workLoading || webLoading;

  return (
    <section id="upcoming-events" className="py-16 md:py-24 bg-white overflow-hidden font-body">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 mb-8 md:mb-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1 font-sans">Academic Opportunities</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">Upcoming Events</h3>
            <div className="mt-4 w-16 md:w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-24 gap-4">
            <RefreshCw className="h-10 w-10 text-accent animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-widest text-primary/30">Synchronizing Registry...</p>
          </div>
        ) : allEvents.length > 0 ? (
          <div className="relative w-full group" data-aos="fade-up">
             {/* Edge Gradient Masks for smooth entrance/exit */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-marquee whitespace-nowrap py-4 items-stretch w-max group-hover:[animation-play-state:paused]">
              {/* Double the array for a seamless infinite loop */}
              {[...allEvents, ...allEvents].map((event: any, index: number) => (
                <div key={`${event.type}-${event.id}-${index}`} className="px-4 shrink-0 w-[280px] md:w-[350px]">
                  <Card className="h-full overflow-hidden border-none shadow-2xl rounded-2xl relative group bg-white hover:shadow-primary/5 transition-all duration-500">
                    
                    {/* Image Layer */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50 shrink-0">
                      {event.imageUrl ? (
                        <Image 
                          src={event.imageUrl} 
                          alt={event.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-10">
                          <event.icon className="h-16 w-16" />
                        </div>
                      )}
                      
                      {/* Floating Status Tag - Always visible on image */}
                      {event.status && (
                        <div className="absolute top-4 left-4 z-30 group-hover:opacity-0 transition-opacity duration-300">
                          <div className="bg-accent text-accent-foreground text-[8px] md:text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter flex items-center gap-1 font-headline italic shadow-xl">
                            <Star className="h-2.5 w-2.5 fill-current" /> {event.status}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Absolute Overlay (Details revealed on hover) */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out whitespace-normal">
                        
                        <div className="mb-2">
                           <div className="bg-accent/20 text-accent text-[8px] font-black px-2 py-0.5 rounded-full uppercase inline-block italic mb-2">
                             {event.type}
                           </div>
                        </div>

                        <h4 className="text-lg md:text-xl font-bold text-white font-headline italic leading-tight mb-4 line-clamp-3">
                          {event.title}
                        </h4>
                        
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white/80 italic">
                            <Calendar className="h-3.5 w-3.5 text-accent shrink-0" /> {event.date}
                          </div>
                          {event.location ? (
                            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white/80 italic">
                              <MapPin className="h-3.5 w-3.5 text-accent shrink-0" /> {event.location}
                            </div>
                          ) : event.speaker ? (
                            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white/80 italic">
                              <User className="h-3.5 w-3.5 text-accent shrink-0" /> {event.speaker}
                            </div>
                          ) : null}
                        </div>

                        <Button asChild className="w-full bg-accent hover:bg-white text-primary font-black uppercase text-[10px] tracking-widest h-10 md:h-12 rounded-xl transition-all">
                          <Link href="/events">Register / Details</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 md:px-12 lg:px-24">
            <div className="text-center py-12 italic text-muted-foreground bg-slate-50 rounded-2xl border-2 border-dashed border-slate-100">
              No upcoming events listed at this time.
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 mt-8 md:mt-8 text-center" data-aos="fade-up">
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
