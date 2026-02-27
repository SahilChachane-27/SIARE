'use client';

import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
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
  RefreshCw,
  Flag,
  ListChecks
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
    <div className="flex flex-col min-h-screen bg-slate-50/50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-28 md:pt-36">
        <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="max-w-3xl" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6">
                University Journal Catalog
              </h1>
              <div className="w-20 h-1 bg-accent mb-6"></div>
              <p className="text-xl opacity-90 leading-relaxed font-medium">
                Browse prestigious academic publications hosted on our secure OJS Platform.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/ResearchPsychology.jpg"
              alt="Academic Research"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
              
              <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-32 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto pr-2" data-aos="fade-right">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 flex items-center gap-2">
                    <Filter className="h-3 w-3" /> Filter Catalog
                  </h2>
                  <button 
                    onClick={resetFilters}
                    className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-primary h-auto p-0 transition-colors"
                  >
                    Reset All
                  </button>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {filteredJournals.map((journal: any, index: number) => (
                      <Card key={index} className="overflow-hidden group relative rounded-none shadow-lg border-none flex flex-col h-full bg-white transition-all duration-500">
                        <div className="relative aspect-[3/4] w-full shrink-0 flex items-center justify-center p-2 bg-secondary/5">
                          {journal.imageUrl ? (
                            <Image 
                              src={journal.imageUrl} 
                              alt={journal.name} 
                              fill 
                              className="object-contain p-2 transition-transform duration-700 group-hover:scale-110" 
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                              <Building2 className="h-12 w-12 text-primary/10" />
                            </div>
                          )}
                          
                          {/* Initial Category Tag */}
                          <div className="absolute top-3 left-3 z-10 group-hover:opacity-0 transition-opacity duration-300">
                            <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm text-primary">
                              {journal.domain}
                            </div>
                          </div>
                        </div>

                        {/* Premium Hover Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                            <h3 className="text-base font-bold text-white font-headline leading-tight italic mb-1 line-clamp-2">
                              {journal.name}
                            </h3>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="h-4 w-0.5 bg-accent"></div>
                              <p className="text-accent font-black uppercase text-[9px] tracking-widest truncate">
                                {journal.university}
                              </p>
                            </div>
                            
                            <div className="space-y-1.5 mb-4 opacity-90">
                              <div className="flex items-center gap-2">
                                <Tag className="h-2.5 w-2.5 text-accent" />
                                <p className="text-[9px] font-medium text-white/80">{journal.issn}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="h-2.5 w-2.5 text-accent" />
                                <p className="text-[9px] font-medium text-white/80">{journal.domain}</p>
                              </div>
                              {journal.country && (
                                <div className="flex items-center gap-2">
                                  <Flag className="h-2.5 w-2.5 text-accent" />
                                  <p className="text-[9px] font-medium text-white/80">{journal.country}</p>
                                </div>
                              )}
                              {journal.indexing && journal.indexing.length > 0 && (
                                <div className="flex items-start gap-2">
                                  <ListChecks className="h-2.5 w-2.5 text-accent mt-0.5" />
                                  <p className="text-[9px] font-medium text-white/80 line-clamp-1">
                                    {journal.indexing.join(', ')}
                                  </p>
                                </div>
                              )}
                            </div>

                            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                              {journal.description && (
                                <p className="text-[9px] text-white/60 italic line-clamp-2 leading-relaxed">
                                  {journal.description}
                                </p>
                              )}
                              <Button asChild className="w-full bg-accent hover:bg-white text-primary font-black uppercase text-[10px] tracking-widest h-9 rounded-xl transition-all duration-300">
                                <a href={journal.link} target="_blank">
                                  View Journal <ExternalLink className="ml-1.5 h-3 w-3" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200 px-4 text-center">
                    <RefreshCw className="h-12 w-12 text-slate-200 mb-4 animate-reverse-spin" />
                    <p className="text-lg font-bold text-primary/40 uppercase tracking-widest italic">No matching journals found</p>
                    <button 
                      onClick={resetFilters} 
                      className="text-accent font-bold uppercase text-[10px] tracking-[0.2em] mt-2 hover:text-primary transition-colors"
                    >
                      Clear Search Parameters
                    </button>
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