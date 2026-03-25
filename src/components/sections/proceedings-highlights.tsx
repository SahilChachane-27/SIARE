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
    <section id="proceedings-highlights" className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-8 md:mb-10" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2 font-sans">Research Repository</h2>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary font-headline italic leading-tight">Featured Proceedings</h3>
          <div className="mt-3 w-12 md:w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {loading ? (
          <div className="flex justify-center p-8">
            <RefreshCw className="h-8 w-8 text-accent animate-spin" />
          </div>
        ) : (featuredJournals && featuredJournals.length > 0) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredJournals.map((journal: any, index: number) => (
              <Card key={index} className="h-full overflow-hidden border-none shadow-xl rounded-xl relative group bg-white hover:shadow-primary/5 transition-all duration-500" data-aos="fade-up" data-aos-delay={index * 100}>
                
                {/* Image Layer */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50 shrink-0 flex items-center justify-center p-4">
                  {journal.imageUrl ? (
                    <Image 
                      src={journal.imageUrl} 
                      alt={journal.name} 
                      fill 
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-10">
                      <BookOpen className="h-12 w-12" />
                    </div>
                  )}
                  
                  {/* Floating Domain Tag */}
                  <div className="absolute top-3 left-3 z-30 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="bg-primary/90 text-white backdrop-blur-sm px-2 py-0.5 rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-widest shadow-sm font-headline italic">
                      {journal.domain}
                    </div>
                  </div>
                </div>

                {/* Absolute Overlay (Details revealed on hover) */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out whitespace-normal">
                    
                    <div className="mb-1">
                       <div className="bg-accent/20 text-accent text-[7px] font-black px-2 py-0.5 rounded-full uppercase inline-block italic mb-1">
                         Repository Series
                       </div>
                    </div>

                    <h4 className="text-base md:text-lg font-bold text-white font-headline italic leading-tight mb-3 line-clamp-3">
                      {journal.name}
                    </h4>
                    
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold text-white/80 italic">
                        <BookOpen className="h-3 w-3 text-accent shrink-0" /> ISSN: {journal.issn}
                      </div>
                    </div>

                    <Button asChild className="w-full bg-accent hover:bg-white text-primary font-black uppercase text-[9px] tracking-widest h-9 md:h-10 rounded-lg transition-all">
                      <a href={journal.link} target="_blank" className="flex items-center justify-center gap-2">
                        View Repository <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 italic text-muted-foreground bg-white rounded-xl border-2 border-dashed border-slate-100">
            No featured proceedings series found in the catalog.
          </div>
        )}

        <div className="mt-8 md:mt-10 text-center" data-aos="fade-up">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-lg px-6 md:px-8 h-9 md:h-11 text-[9px] md:text-[10px] font-black italic shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
            <Link href="/proceedings" className="flex items-center justify-center gap-2">
              Browse Full Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
