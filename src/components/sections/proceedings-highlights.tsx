'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, ExternalLink, RefreshCw, ArrowRight } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, limit, where } from 'firebase/firestore';
import { useMemo } from 'react';
import Image from 'next/image';

export function ProceedingsHighlights() {
  const db = useFirestore();
  
  const proceedingsQuery = useMemo(() => {
    if (!db) return null;
    return query(
      collection(db, 'journals'), 
      orderBy('createdAt', 'desc'),
      limit(3)
    );
  }, [db]);

  const { data: journals, loading } = useCollection(proceedingsQuery);

  return (
    <section id="proceedings-highlights" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3 font-sans">Research Repository</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">Featured Proceedings</h3>
          <div className="mt-4 w-16 md:w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {loading ? (
          <div className="flex justify-center p-12">
            <RefreshCw className="h-8 w-8 md:h-10 md:w-10 text-accent animate-spin" />
          </div>
        ) : (journals && journals.length > 0) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {journals.map((journal: any, index: number) => (
              <Card key={index} className="overflow-hidden border-none shadow-2xl rounded-2xl group flex flex-col bg-white" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative aspect-[3/4] w-full shrink-0 flex items-center justify-center p-4 bg-secondary/5">
                  {journal.imageUrl ? (
                    <Image src={journal.imageUrl} alt={journal.name} fill className="object-contain p-4 transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <BookOpen className="h-12 w-12 text-primary/10" />
                  )}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-primary/90 text-white backdrop-blur-sm px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm">{journal.domain}</div>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-primary font-headline italic leading-tight mb-2 line-clamp-2">
                      {journal.name}
                    </h4>
                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">ISSN: {journal.issn}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <Button asChild className="w-full bg-primary hover:bg-accent text-white hover:text-primary rounded-xl h-10 text-[9px] font-bold uppercase tracking-widest transition-all">
                      <a href={journal.link} target="_blank" className="flex items-center justify-center gap-2">
                        View Repository <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 italic text-muted-foreground bg-white rounded-2xl border-2 border-dashed border-slate-100">
            No proceedings series found in the catalog.
          </div>
        )}

        <div className="mt-12 md:mt-16 text-center" data-aos="fade-up">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-xl px-8 md:px-10 h-10 md:h-12 text-[10px] md:text-xs font-black italic shadow-2xl transition-all hover:scale-105 w-full sm:w-auto">
            <Link href="/proceedings" className="flex items-center justify-center gap-2">
              Browse Full Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
