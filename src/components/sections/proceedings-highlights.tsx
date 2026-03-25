'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, ExternalLink, RefreshCw, ArrowRight } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, limit, where } from 'firebase/firestore';
import { useMemo } from 'react';
import Image from 'next/image';

export function ProceedingsHighlights() {
  const db = useFirestore();
  
  const proceedingsQuery = useMemo(() => {
    if (!db) return null;
    return query(
      collection(db, 'journals'), 
      where('isFeatured', '==', true),
      limit(10) // Fetch slightly more to sort in memory
    );
  }, [db]);

  const { data: journals, loading } = useCollection(proceedingsQuery);

  const featuredJournals = useMemo(() => {
    if (!journals) return [];
    return [...journals]
      .sort((a: any, b: any) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0))
      .slice(0, 3);
  }, [journals]);

  return (
    <section id="proceedings-highlights" className="py-6 md:py-10 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-6 md:mb-8" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1.5 font-sans">Research Repository</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-headline italic leading-tight">Featured Proceedings</h3>
          <div className="mt-2.5 w-12 md:w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {loading ? (
          <div className="flex justify-center p-6">
            <RefreshCw className="h-8 w-8 text-accent animate-spin" />
          </div>
        ) : (featuredJournals && featuredJournals.length > 0) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {featuredJournals.map((journal: any, index: number) => (
              <Card key={index} className="h-full overflow-hidden border-none shadow-xl rounded-xl relative group bg-white hover:shadow-primary/5 transition-all duration-500" data-aos="fade-up" data-aos-delay={index * 100}>
                
                {/* Image Layer - Switched to 4:3 aspect for a shorter card */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 shrink-0 flex items-center justify-center p-4">
                  {journal.imageUrl ? (
                    <Image 
                      src={journal.imageUrl} 
                      alt={journal.name} 
                      fill 
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-10">
                      <BookOpen className="h-10 w-10" />
                    </div>
                  )}
                  
                  {/* Floating Domain Tag */}
                  <div className="absolute top-2.5 left-2.5 z-30 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="bg-primary/90 text-white backdrop-blur-sm px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest shadow-sm font-headline italic">
                      {journal.domain}
                    </div>
                  </div>
                </div>

                {/* Absolute Overlay (Details revealed on hover) */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out whitespace-normal">
                    
                    <div className="mb-1">
                       <div className="bg-accent/20 text-accent text-[7px] font-black px-2 py-0.5 rounded-full uppercase inline-block italic mb-1">
                         Repository Series
                       </div>
                    </div>

                    <h4 className="text-sm md:text-base font-bold text-white font-headline italic leading-tight mb-2 line-clamp-2">
                      {journal.name}
                    </h4>
                    
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center gap-2 text-[8px] md:text-[9px] font-bold text-white/80 italic">
                        <BookOpen className="h-2.5 w-2.5 text-accent shrink-0" /> ISSN: {journal.issn}
                      </div>
                    </div>

                    <Button asChild className="w-full bg-accent hover:bg-white text-primary font-black uppercase text-[8px] tracking-widest h-8 md:h-9 rounded-lg transition-all">
                      <a href={journal.link} target="_blank" className="flex items-center justify-center gap-2">
                        View Repository <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 italic text-muted-foreground bg-white rounded-xl border-2 border-dashed border-slate-100">
            No featured proceedings series found in the catalog.
          </div>
        )}

        <div className="mt-6 md:mt-8 text-center" data-aos="fade-up">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-lg px-5 md:px-7 h-8 md:h-10 text-[8px] md:text-[9px] font-black italic shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
            <Link href="/proceedings" className="flex items-center justify-center gap-2">
              Browse Full Catalog <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
