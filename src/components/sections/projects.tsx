'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Star, RefreshCw } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { useMemo } from 'react';

export function Projects() {
  const db = useFirestore();
  
  const conferencesQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'conferences'), orderBy('order', 'asc'), limit(3));
  }, [db]);

  const { data: conferences, loading } = useCollection(conferencesQuery);

  return (
    <section id="conferences" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Academic Gatherings</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary font-headline italic">Upcoming Conferences</h3>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {loading ? (
          <div className="flex justify-center p-12">
            <RefreshCw className="h-10 w-10 text-accent animate-spin" />
          </div>
        ) : (conferences && conferences.length > 0) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conferences.map((conf: any, index: number) => (
              <Card key={index} className="overflow-hidden border-none shadow-2xl rounded-2xl group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`h-2 ${conf.color || 'bg-primary'}`}></div>
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    {conf.status && (
                      <div className="bg-accent/10 text-accent text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" /> {conf.status}
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors min-h-[3.5rem]">
                    {conf.title}
                  </h4>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs font-bold text-primary/60">
                      <Calendar className="h-4 w-4 text-accent" /> {conf.date}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-primary/60">
                      <MapPin className="h-4 w-4 text-accent" /> {conf.location}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full bg-primary hover:bg-accent text-white hover:text-primary rounded-xl h-12 text-[10px] font-bold uppercase tracking-widest transition-all">
                      <Link href="/events">View Details & Participate</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 italic text-muted-foreground">
            No upcoming conferences listed at this time.
          </div>
        )}

        <div className="mt-16 text-center" data-aos="fade-up">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-xl px-10 h-12 text-xs font-black italic shadow-2xl transition-all hover:scale-105">
            <Link href="/events" className="flex items-center gap-2">
              View All Events <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
