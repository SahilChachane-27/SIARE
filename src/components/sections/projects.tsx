'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Star, RefreshCw, Video, GraduationCap, Presentation, User } from 'lucide-react';
import { useMemo, useEffect, useState } from 'react';
import Image from 'next/image';

export function Projects() {
  const [conferences, setConferences] = useState<any[]>([]);
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [webinars, setWebinars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomepageEvents = async () => {
      setLoading(true);
      try {
        const [conferencesRes, workshopsRes, webinarsRes] = await Promise.all([
          fetch('/api/conferences'),
          fetch('/api/events?type=workshop'),
          fetch('/api/events?type=webinar'),
        ]);

        setConferences(conferencesRes.ok ? await conferencesRes.json() : []);
        setWorkshops(workshopsRes.ok ? await workshopsRes.json() : []);
        setWebinars(webinarsRes.ok ? await webinarsRes.json() : []);
      } catch (_error) {
        setConferences([]);
        setWorkshops([]);
        setWebinars([]);
      } finally {
        setLoading(false);
      }
    };

    loadHomepageEvents();
  }, []);

  const allEvents = useMemo(() => {
    const combined = [
      ...(conferences || []).map(item => ({
        ...item,
        type: 'Conference',
        icon: Presentation,
        displayDate: item.startDate || item.date || '',
        displayLocation: item.location || item.venue || '',
      })),
      ...(workshops || []).map(item => ({
        ...item,
        type: 'Workshop',
        icon: GraduationCap,
        displayDate: item.date || '',
        displayLocation: item.location || item.venue || '',
      })),
      ...(webinars || []).map(item => ({
        ...item,
        type: 'Webinar',
        icon: Video,
        displayDate: item.date || '',
        displayLocation: item.location || item.venue || '',
      }))
    ];

    return combined.sort((a, b) => (a.order || 0) - (b.order || 0)).slice(0, 6);
  }, [conferences, workshops, webinars]);

  const isLoading = loading;

  return (
    <section id="upcoming-events" className="py-12 md:py-20 bg-white overflow-hidden font-body">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 mb-6 md:mb-10">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1 font-sans">Academic Opportunities</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">Upcoming Events</h3>
            <div className="mt-3 w-12 md:w-16 h-1 bg-accent mx-auto"></div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-20 gap-4">
            <RefreshCw className="h-8 w-8 text-accent animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-widest text-primary/30">Synchronizing Registry...</p>
          </div>
        ) : allEvents.length > 0 ? (
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32" data-aos="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {allEvents.map((event: any) => (
                <Card
                  key={`${event.type}-${event.id}`}
                  className="overflow-hidden border border-slate-200 shadow-sm rounded-2xl bg-white h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
                    {event.imageUrl ? (
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-primary/20">
                        <event.icon className="h-14 w-14" />
                      </div>
                    )}

                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <div className="bg-white/95 text-primary text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm">
                        {event.type}
                      </div>
                      {event.status ? (
                        <div className="bg-accent text-accent-foreground text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-sm">
                          <Star className="h-2.5 w-2.5 fill-current" />
                          {event.status}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-primary font-headline italic leading-tight line-clamp-2 mb-4">
                      {event.title}
                    </h4>

                    <div className="space-y-2 text-xs text-foreground/75 mb-6 flex-1">
                      {event.displayDate ? (
                        <div className="flex items-center gap-2 font-medium">
                          <Calendar className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{event.displayDate}</span>
                        </div>
                      ) : null}

                      {event.displayLocation ? (
                        <div className="flex items-center gap-2 font-medium">
                          <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{event.displayLocation}</span>
                        </div>
                      ) : event.speaker ? (
                        <div className="flex items-center gap-2 font-medium">
                          <User className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{event.speaker}</span>
                        </div>
                      ) : null}
                    </div>

                    <Button asChild className="w-full bg-primary hover:bg-accent text-white font-black uppercase text-[10px] tracking-widest h-10 rounded-xl mt-auto">
                      <Link href="/events">Register / Details</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 md:px-12 lg:px-24">
            <div className="text-center py-10 italic text-muted-foreground bg-slate-50 rounded-2xl border-2 border-dashed border-slate-100">
              No upcoming events listed at this time.
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 mt-6 md:mt-8 text-center" data-aos="fade-up">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-lg px-6 md:px-8 h-9 md:h-11 text-[9px] md:text-xs font-black italic shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
            <Link href="/events" className="flex items-center justify-center gap-2">
              View All Events <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
