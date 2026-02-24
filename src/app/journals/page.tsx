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
  Leaf,
  Filter,
  RefreshCw
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

  const resetFilters = () => {
    setSearchQuery('');
    setUniversityQuery('');
    setIssnQuery('');
    setSelectedCategory('All');
  };

  const handleSearch = () => {
    const resultsElement = document.getElementById('catalog-results');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden px-4 md:px-0">
          <div className="container mx-auto px-4 md:px-16 lg:px-32 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-2" data-aos="fade-right">
              University Journal Catalog
            </h1>
            <p className="text-base opacity-80 max-w-xl" data-aos="fade-right" data-aos-delay="100">
              Browse prestigious academic publications hosted on our secure ScholarJMS platform.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-16 lg:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
              
              <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-32 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto pr-2" data-aos="fade-right">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 flex items-center gap-2">
                    <Filter className="h-3 w-3" /> Filter Catalog
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-primary h-auto p-0"
                  >
                    Reset All
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/60 tracking-widest">Journal Name</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input 
                        placeholder="e.g. Technology Review" 
                        className="pl-9 h-10 border-slate-200 rounded-xl bg-white shadow-sm focus:ring-accent/50" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/60 tracking-widest">University</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input 
                        placeholder="University name..." 
                        className="pl-9 h-10 border-slate-200 rounded-xl bg-white shadow-sm focus:ring-accent/50" 
                        value={universityQuery} 
                        onChange={(e) => setUniversityQuery(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/60 tracking-widest">ISSN</label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                      <Input 
                        placeholder="2345-6789" 
                        className="pl-9 h-10 border-slate-200 rounded-xl bg-white shadow-sm focus:ring-accent/50" 
                        value={issnQuery} 
                        onChange={(e) => setIssnQuery(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/60 tracking-widest">Field of Study</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="h-10 border-slate-200 rounded-xl bg-white shadow-sm">
                        <SelectValue placeholder="All Fields" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Fields</SelectItem>
                        {categories.map(cat => <SelectItem key={cat.name} value={cat.name}>{cat.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={handleSearch}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-black uppercase text-[10px] tracking-widest h-10 rounded-xl shadow-lg mt-4"
                  >
                    <Search className="mr-2 h-3.5 w-3.5" /> Search Catalog
                  </Button>
                </div>
              </aside>

              <div id="catalog-results" className="lg:col-span-3 min-h-[600px]" data-aos="fade-left">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                  <h3 className="text-sm font-bold text-primary/60">
                    Showing {filteredJournals.length} Results
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Sort:</span>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">Latest First</span>
                  </div>
                </div>

                {loading ? (
                  <div className="flex flex-col items-center justify-center py-32 space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-[0.2em]">Synchronizing Repository...</p>
                  </div>
                ) : filteredJournals.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {filteredJournals.map((journal: any, index: number) => (
                      <Card key={index} className="overflow-hidden bg-white border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl group flex flex-col h-full border border-slate-100">
                        <div className="relative aspect-video w-full bg-secondary shrink-0">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                              <Building2 className="h-12 w-12 text-primary/10" />
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm text-primary">
                              {journal.domain}
                            </div>
                          </div>
                        </div>
                        <CardHeader className="p-6 md:p-8 flex-grow">
                          <CardTitle className="text-xl font-bold text-primary font-headline leading-tight italic group-hover:text-accent transition-colors duration-300">
                            {journal.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 pt-0 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                                <Building2 className="h-4 w-4 text-accent" />
                              </div>
                              <p className="text-sm font-bold text-primary/80 truncate">{journal.university}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                                <Tag className="h-4 w-4 text-accent" />
                              </div>
                              <p className="text-sm font-medium text-slate-500">{journal.issn}</p>
                            </div>
                          </div>
                          <div className="pt-6 border-t border-slate-50">
                            <Button asChild className="w-full bg-primary hover:bg-accent text-white hover:text-primary transition-all duration-300 rounded-xl h-12 font-bold shadow-lg shadow-primary/5">
                              <a href={journal.link} target="_blank">
                                Open Journal Portal <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200 px-4 text-center">
                    <RefreshCw className="h-12 w-12 text-slate-200 mb-4 animate-reverse-spin" />
                    <p className="text-lg font-bold text-primary/40 uppercase tracking-widest italic">No matching journals found</p>
                    <Button variant="link" onClick={resetFilters} className="text-accent font-bold uppercase text-[10px] tracking-[0.2em] mt-2">
                      Clear Search Parameters
                    </Button>
                  </div>
                )}
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
