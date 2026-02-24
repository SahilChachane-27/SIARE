
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Building2, 
  Hash, 
  Globe,
  BookOpen, 
  ExternalLink, 
  Tag, 
  Cpu,
  Landmark,
  Stethoscope,
  Sprout,
  Scale,
  Leaf
} from 'lucide-react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import Image from 'next/image';

const categories = [
  { name: 'Engineering', icon: Cpu },
  { name: 'Technology', icon: Globe },
  { name: 'Management', icon: Landmark },
  { name: 'Medical & Paramedical', icon: Stethoscope },
  { name: 'Agriculture', icon: Sprout },
  { name: 'Humanities & Social Sciences', icon: BookOpen },
  { name: 'Law', icon: Scale },
  { name: 'Environment & Sustainability', icon: Leaf },
];

export default function JournalsPage() {
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [universityQuery, setUniversityQuery] = useState('');
  const [issnQuery, setIssnQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const db = useFirestore();
  
  const journalsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'), orderBy('createdAt', 'desc'));
  }, [db]);

  const { data: journals, loading } = useCollection(journalsQuery);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredJournals = useMemo(() => {
    if (!journals) return [];
    return journals.filter((j: any) => {
      const matchesName = (j.name || '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesUniversity = (j.university || '').toLowerCase().includes(universityQuery.toLowerCase());
      const matchesISSN = (j.issn || '').includes(issnQuery);
      const matchesCategory = selectedCategory === 'All' || j.domain === selectedCategory;

      return matchesName && matchesUniversity && matchesISSN && matchesCategory;
    });
  }, [journals, searchQuery, universityQuery, issnQuery, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4" data-aos="fade-up">
              University Journal Catalog
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Browse prestigious academic publications hosted on our secure ScholarJMS platform.
            </p>
          </div>
        </section>

        <section className="py-10 bg-secondary/30 relative">
          <div className="container ml-0 mr-auto px-8 md:px-16 lg:px-32 max-w-5xl">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-primary/5 relative z-20" data-aos="fade-up">
              {isClient ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search Journal Name" className="pl-10 h-10 border-primary/10 rounded-xl bg-secondary/5" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="University" className="pl-10 h-10 border-primary/10 rounded-xl bg-secondary/5" value={universityQuery} onChange={(e) => setUniversityQuery(e.target.value)} />
                    </div>
                    <div className="relative">
                      <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="ISSN" className="pl-10 h-10 border-primary/10 rounded-xl bg-secondary/5" value={issnQuery} onChange={(e) => setIssnQuery(e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="h-10 border-primary/10 rounded-xl bg-secondary/5"><SelectValue placeholder="Field of Study" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Fields</SelectItem>
                        {categories.map(cat => <SelectItem key={cat.name} value={cat.name}>{cat.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Button className="h-10 bg-primary text-white rounded-xl font-bold shadow-xl md:col-span-1 md:w-max px-10 uppercase tracking-widest text-[10px]">Search Catalog</Button>
                  </div>
                </div>
              ) : <div className="h-32 flex items-center justify-center font-bold text-primary/40 tracking-widest uppercase">Initializing Sources...</div>}
            </div>
          </div>
        </section>

        <section className="py-16 min-h-[400px]">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            {loading ? (
              <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>
            ) : filteredJournals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredJournals.map((journal: any, index: number) => (
                  <Card key={index} className="overflow-hidden bg-card border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl group" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="relative aspect-video w-full bg-secondary">
                      {journal.imageUrl ? (
                        <Image src={journal.imageUrl} alt={journal.name} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                          <Building2 className="h-16 w-16 text-primary/10" />
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-8">
                      <CardTitle className="text-xl font-bold text-primary font-headline leading-tight italic">{journal.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 space-y-4">
                      <div className="flex items-center gap-3"><Building2 className="h-4 w-4 text-accent" /><p className="text-sm font-bold text-primary/80">{journal.university}</p></div>
                      <div className="flex items-center gap-3"><Tag className="h-4 w-4 text-accent" /><p className="text-sm font-medium">{journal.issn}</p></div>
                      <div className="pt-6 border-t border-secondary">
                        <Button asChild className="w-full bg-primary hover:bg-accent text-white hover:text-primary transition-all rounded-funky h-12">
                          <a href={journal.link} target="_blank">View Public Portal <ExternalLink className="ml-2 h-4 w-4" /></a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-secondary/20 rounded-[40px] border-2 border-dashed border-primary/5">
                <p className="text-xl font-bold text-primary/40 uppercase tracking-widest italic">No matching journals found</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
