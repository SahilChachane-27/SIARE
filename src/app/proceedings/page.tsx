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
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Check
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function ProceedingsPage() {
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [issnQuery, setIssnQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [journals, setJournals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJournals = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/journals');
        if (response.ok) {
          setJournals(await response.json());
        } else {
          setJournals([]);
        }
      } catch (_error) {
        setJournals([]);
      } finally {
        setLoading(false);
      }
    };

    loadJournals();
    setIsClient(true);
  }, []);

  const filteredJournals = useMemo(() => {
    if (!journals) return [];
    return journals.filter((j: any) => {
      const matchesName = (j.name || '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIssn = (j.issn || '').toLowerCase().includes(issnQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || j.domain === selectedCategory;

      return matchesName && matchesIssn && matchesCategory;
    });
  }, [journals, searchQuery, issnQuery, selectedCategory]);

  const resetFilters = () => {
    setSearchQuery('');
    setIssnQuery('');
    setSelectedCategory('All');
  };

  if (!isClient) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline italic leading-tight mb-6">
                SIARE Conference Proceedings
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
                SIARE publishes high-quality, peer-reviewed conference proceedings across major academic domains.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl h-12 px-8 shadow-xl transition-all">
                  <Link href="/contact">Partner for Proceedings</Link>
                </Button>
                <Button variant="outline" asChild className="bg-transparent border-white/20 text-white hover:bg-white hover:text-primary rounded-xl h-12 px-8 shadow-xl transition-all">
                  <Link href="/submit-your-paper">Submit Conference Proposal</Link>
                </Button>
              </div>
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

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-6 italic">
                  What Are SIARE Proceedings?
                </h2>
                <div className="w-20 h-1 bg-accent mb-8"></div>
                <div className="space-y-6 text-foreground/70 leading-relaxed font-medium">
                  <p>
                    SIARE Proceedings are structured collections of conference papers reviewed, edited, and published under the Society of Integrated Academic Research and Education’s official series.
                  </p>
                  <p>
                    Each proceeding serves as an academic record of the research presented at partnered conferences. Proceedings are accessible to global researchers, institutions, and indexing bodies, enabling authors to gain international visibility.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
                {[
                  { icon: ShieldCheck, title: "Rigorous Peer Review", desc: "Structured screening process" },
                  { icon: Tag, title: "DOI Assignment", desc: "Persistent accessibility" },
                  { icon: BookOpen, title: "Ethical Standards", desc: "Ensuring integrity" },
                  { icon: Globe, title: "Global Visibility", desc: "International indexing" }
                ].map((item, i) => (
                  <Card key={i} className="p-6 border-none shadow-xl bg-slate-50 rounded-2xl group hover:bg-white transition-all">
                    <item.icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-primary text-sm mb-1">{item.title}</h4>
                    <p className="text-[10px] text-foreground/50 uppercase font-black">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why SIARE Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                Why Publish Your Proceedings With SIARE?
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Rigorous Editorial & Peer Review",
                  desc: "Every manuscript undergoes a structured screening process including similarity checks, reviewer assignment, reviewer evaluation, and final editorial approval.",
                  icon: ShieldCheck
                },
                {
                  title: "DOI Assignment",
                  desc: "Each paper receives a persistent Digital Object Identifier to ensure long-term accessibility and citation tracking.",
                  icon: Tag
                },
                {
                  title: "Ethical Publishing Standards",
                  desc: "All proceedings follow SIARE's publishing ethics, ensuring transparency and integrity.",
                  icon: BookOpen
                },
                {
                  title: "Multidisciplinary Scope",
                  desc: "We publish across a wide range of disciplines ensuring global academic reach.",
                  icon: Layers
                },
                {
                  title: "University-Focused",
                  desc: "SIARE works only with universities, institutes, and academic societies—not private publishers—ensuring academic credibility.",
                  icon: Landmark
                },
                {
                  title: "Fast Turnaround",
                  desc: "Proceedings are produced within an agreed timeline after the conference, maintaining high-quality controlled standards.",
                  icon: Zap
                }
              ].map((item, i) => (
                <Card key={i} className="p-5 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col group hover:shadow-xl transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="h-10 w-10 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <item.icon className="h-5 w-5 text-accent group-hover:text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2 italic leading-tight">{item.title}</h3>
                  <p className="text-[11px] text-foreground/60 leading-relaxed font-medium mb-2">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-16">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-6 italic">
                  How Conferences Partner With SIARE
                </h2>
                <div className="w-20 h-1 bg-accent mb-8"></div>
                <ul className="space-y-4 mb-10">
                  {[
                    "Full proceedings publication",
                    "Select paper publication",
                    "Thematic proceedings series",
                    "Annual conference publishing support"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-accent" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-left">
                <h3 className="text-xl font-bold text-primary font-headline mb-8 italic">Process for Partnership</h3>
                <div className="space-y-6">
                  {[
                    "Submit a Request for Proceedings Partnership",
                    "SIARE evaluates scope, committee, and standards",
                    "Publication MoU is signed",
                    "Submission portal is created for the event",
                    "Peer review and editorial workflows completed",
                    "Proceedings published on official platform"
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-black text-xs group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-sm font-medium text-foreground/70 pt-1.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Series Catalog Section */}
        <section id="series-catalog" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-16 lg:px-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                SIARE Proceedings Series
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
              <p className="text-foreground/60 mt-6 max-w-2xl mx-auto font-medium">Each series maintains its own editorial standards under SIARE’s central guidelines.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-32" data-aos="fade-up">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 flex items-center gap-2">
                      <Filter className="h-3 w-3" /> Filters
                    </h2>
                    <button onClick={resetFilters} className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors">Reset</button>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/60 tracking-widest">Series Name</label>
                      <Input placeholder="Search name..." className="h-10 border-slate-200 rounded-xl bg-slate-50 focus:bg-white" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/60 tracking-widest">ISSN</label>
                      <Input placeholder="Search ISSN..." className="h-10 border-slate-200 rounded-xl bg-slate-50 focus:bg-white" value={issnQuery} onChange={(e) => setIssnQuery(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/60 tracking-widest">Academic Domain</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="h-10 border-slate-200 rounded-xl bg-slate-50 focus:bg-white"><SelectValue placeholder="All Domains" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All">All Domains</SelectItem>
                          {categories.map(cat => <SelectItem key={cat.name} value={cat.name}>{cat.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-3 min-h-[400px]">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20"><RefreshCw className="h-10 w-10 text-accent animate-spin mb-4" /><p className="text-xs font-black uppercase text-primary/40">Synchronizing...</p></div>
                ) : filteredJournals.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredJournals.map((journal: any, index: number) => (
                      <Card key={index} className="overflow-hidden group relative rounded-none shadow-lg border-none flex flex-col h-full bg-white transition-all duration-500">
                        <div className="relative aspect-[3/4] w-full shrink-0 flex items-center justify-center p-4 bg-secondary/5">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-contain p-4 transition-transform duration-700 group-hover:scale-110" />
                          ) : (
                            <Building2 className="h-12 w-12 text-primary/10" />
                          )}
                          <div className="absolute top-3 left-3 z-10 group-hover:opacity-0 transition-opacity duration-300">
                            <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest text-primary shadow-sm">{journal.domain}</div>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                            <h3 className="text-base font-bold text-white font-headline leading-tight italic mb-1">{journal.name}</h3>
                            <p className="text-accent font-black uppercase text-[9px] tracking-widest mb-3">ISSN: {journal.issn || 'Pending'}</p>
                            <Button asChild className="w-full bg-accent hover:bg-white text-primary font-black uppercase text-[10px] tracking-widest h-9 rounded-xl transition-all">
                              <a href={journal.link} target="_blank">View Series <ExternalLink className="ml-1.5 h-3 w-3" /></a>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                    <p className="text-base font-bold text-primary/40 uppercase tracking-widest italic">No series found matching your criteria</p>
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
