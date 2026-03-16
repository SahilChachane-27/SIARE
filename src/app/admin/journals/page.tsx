'use client';

import { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Plus, 
  Tag, 
  Globe, 
  ExternalLink, 
  ArrowLeft, 
  Image as ImageIcon, 
  X, 
  Edit3, 
  Search, 
  ArrowUpDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  Star,
  Trash2,
  BookOpen,
  LayoutGrid
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const ITEMS_PER_PAGE = 9;

const domains = [
  'Engineering',
  'Technology',
  'Management',
  'Medical & Paramedical',
  'Agriculture',
  'Humanities & Social Sciences',
  'Law',
  'Environment & Sustainability',
];

function JournalManagementContent() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [issn, setIssn] = useState('');
  const [domain, setDomain] = useState('');
  const [indexing, setIndexing] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [searchFilter, setSearchFilter] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'az' | 'za'>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const journalsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'), orderBy('createdAt', 'desc'));
  }, [db]);

  const { data: journals, loading: journalsLoading } = useCollection(journalsQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchFilter, sortOrder]);

  useEffect(() => {
    const editId = searchParams.get('edit');
    if (editId && journals && journals.length > 0) {
      const journalToEdit = journals.find((j: any) => j.id === editId);
      if (journalToEdit) {
        handleEdit(journalToEdit);
      }
    }
  }, [searchParams, journals]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) { 
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Please upload an image smaller than 1MB."
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setName(''); 
    setDescription('');
    setIssn(''); 
    setDomain(''); 
    setIndexing('');
    setLink('');
    setImageUrl(null);
    setIsFeatured(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    router.replace('/admin/journals');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    if (!domain) {
      toast({
        variant: "destructive",
        title: "Missing Field",
        description: "Please select an academic domain."
      });
      return;
    }

    const journalData = {
      name,
      description,
      issn,
      domain,
      indexing: indexing.split(',').map(i => i.trim()).filter(Boolean),
      link,
      imageUrl,
      isFeatured,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      const docRef = doc(db, 'journals', editingId);
      updateDoc(docRef, journalData)
        .then(() => {
          toast({ title: "Journal Updated", description: `${name} has been updated successfully.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'update',
            requestResourceData: journalData,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    } else {
      const colRef = collection(db, 'journals');
      const newJournal = {
        ...journalData,
        createdAt: serverTimestamp(),
      };
      addDoc(colRef, newJournal)
        .then(() => {
          toast({ title: "Journal Added", description: `${name} has been published successfully.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: colRef.path,
            operation: 'create',
            requestResourceData: newJournal,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    }
    
    resetForm();
  };

  const handleEdit = (journal: any) => {
    setEditingId(journal.id);
    setName(journal.name);
    setDescription(journal.description || '');
    setIssn(journal.issn);
    setDomain(journal.domain);
    setIndexing(Array.isArray(journal.indexing) ? journal.indexing.join(', ') : '');
    setLink(journal.link);
    setImageUrl(journal.imageUrl || null);
    setIsFeatured(journal.isFeatured || false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string, name: string) => {
    if (!db || !window.confirm(`Are you sure you want to delete "${name}"?`)) return;

    const docRef = doc(db, 'journals', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Journal Deleted", description: `${name} has been removed from the catalog.` });
      })
      .catch(async (err) => {
        const permissionError = new FirestorePermissionError({
          path: docRef.path,
          operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  };

  const filteredAndSortedJournals = useMemo(() => {
    if (!journals) return [];
    
    let result = [...journals].filter((j: any) => 
      (j.name || '').toLowerCase().includes(searchFilter.toLowerCase()) ||
      (j.issn || '').includes(searchFilter)
    );

    result.sort((a: any, b: any) => {
      switch (sortOrder) {
        case 'newest': return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0);
        case 'oldest': return (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0);
        case 'az': return (a.name || '').localeCompare(b.name || '');
        case 'za': return (b.name || '').localeCompare(a.name || '');
        default: return 0;
      }
    });

    return result;
  }, [journals, searchFilter, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedJournals.length / ITEMS_PER_PAGE);
  const paginatedJournals = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedJournals.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSortedJournals, currentPage]);

  if (userLoading || !user) return null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-10" data-aos="fade-right">
            <Button variant="ghost" size="icon" asChild className="rounded-xl bg-white shadow-sm hover:bg-primary hover:text-white transition-all h-12 w-12">
              <Link href="/admin/dashboard"><ArrowLeft className="h-5 w-5" /></Link>
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary font-headline italic">
                Proceedings Management
              </h1>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40 mt-1">SIARE Series Catalog Registry</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 md:gap-12">
            {/* FORM CONSOLE */}
            <div className="lg:col-span-1" data-aos="fade-up">
              <Card className="rounded-[1.5rem] border-none shadow-2xl p-6 md:p-8 lg:sticky lg:top-32 bg-white">
                <div className="flex justify-between items-center mb-6 border-b border-slate-50 pb-4">
                  <h2 className="text-base font-bold text-primary italic flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    {editingId ? 'Update Record' : 'Catalog New Series'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-[8px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50">
                      Cancel
                    </Button>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Series/Journal Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. SIARE Proceedings in AI" className="rounded-xl h-11 border-slate-100 text-xs" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Academic Description</label>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Summary of scope..." className="rounded-xl min-h-[80px] border-slate-100 text-xs" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Visual Cover (Max 1MB)</label>
                    <div className="flex flex-col gap-3">
                      {imageUrl ? (
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group shadow-md bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                          <Image src={imageUrl} alt="Preview" fill className="object-contain" />
                          <button 
                            type="button" 
                            onClick={() => setImageUrl(null)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30 shadow-lg"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full aspect-[3/4] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-all group"
                        >
                          <ImageIcon className="h-8 w-8 text-primary/10 group-hover:text-accent/40 transition-colors" />
                          <span className="text-[8px] font-black text-primary/30 uppercase tracking-widest">Select Image</span>
                        </div>
                      )}
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        accept="image/*" 
                        className="hidden" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">ISSN</label>
                      <Input value={issn} onChange={(e) => setIssn(e.target.value)} required placeholder="2345-6789" className="rounded-xl h-11 border-slate-100 text-xs" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Domain</label>
                      <Select value={domain} onValueChange={setDomain} required>
                        <SelectTrigger className="rounded-xl h-11 border-slate-100 text-xs">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {domains.map((d) => (
                            <SelectItem key={d} value={d} className="text-xs">{d}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Indexing Metadata</label>
                    <Input value={indexing} onChange={(e) => setIndexing(e.target.value)} placeholder="Scopus, UGC CARE..." className="rounded-xl h-11 border-slate-100 text-xs" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Public URL</label>
                    <Input value={link} onChange={(e) => setLink(e.target.value)} required type="url" placeholder="https://..." className="rounded-xl h-11 border-slate-100 text-xs" />
                  </div>

                  <div className="flex items-center space-x-3 py-3 px-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Checkbox 
                      id="isFeatured" 
                      checked={isFeatured} 
                      onCheckedChange={(checked) => setIsFeatured(checked as boolean)}
                      className="h-3.5 w-3.5"
                    />
                    <label 
                      htmlFor="isFeatured" 
                      className="text-[8px] font-black text-primary/60 uppercase tracking-[0.2em] cursor-pointer"
                    >
                      Featured on Home
                    </label>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-primary text-accent font-black uppercase text-[10px] tracking-widest rounded-xl shadow-xl hover:scale-[1.02] transition-transform">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Sync Record</> : <><Plus className="mr-2 h-4 w-4" /> Catalog Series</>}
                  </Button>
                </form>
              </Card>
            </div>

            {/* LIVE CATALOG DISPLAY */}
            <div className="lg:col-span-3 space-y-8" data-aos="fade-left">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4">
                <h2 className="text-lg font-bold text-primary font-headline italic flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-accent" />
                  Live Registry {journals && <span className="text-xs font-black bg-primary/5 px-2 py-0.5 rounded-full text-primary/40 ml-1">({journals.length})</span>}
                </h2>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                   <div className="relative flex-1 md:w-60">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-primary/30" />
                    <Input 
                      placeholder="Filter records..." 
                      className="pl-9 h-10 rounded-xl bg-white border-none shadow-sm text-xs"
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                    />
                  </div>
                  <Select value={sortOrder} onValueChange={(v: any) => setSortOrder(v)}>
                    <SelectTrigger className="w-full sm:w-36 h-10 rounded-xl bg-white border-none shadow-sm text-[10px]">
                      <ArrowUpDown className="mr-1.5 h-3 w-3 text-primary/30" />
                      <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest" className="text-xs">Newest</SelectItem>
                      <SelectItem value="oldest" className="text-xs">Oldest</SelectItem>
                      <SelectItem value="az" className="text-xs">A-Z</SelectItem>
                      <SelectItem value="za" className="text-xs">Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {journalsLoading ? (
                <div className="flex flex-col items-center justify-center p-24 bg-white rounded-[1.5rem] shadow-sm gap-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/20">Indexing Records...</p>
                </div>
              ) : paginatedJournals.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {paginatedJournals.map((journal: any) => (
                      <Card key={journal.id} className="overflow-hidden group relative rounded-none shadow-xl border-none flex flex-col h-full bg-white transition-all duration-500 hover:shadow-2xl">
                        <div className="relative aspect-[3/4] w-full bg-slate-50 flex items-center justify-center p-4 shrink-0 shadow-inner">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-700" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <BookOpen className="h-12 w-12 text-primary/5" />
                            </div>
                          )}
                          
                          {journal.isFeatured && (
                            <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1 z-30">
                              <Star className="h-2 w-2 fill-current" /> Featured
                            </div>
                          )}

                          <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                            <Button 
                              type="button"
                              variant="secondary" 
                              size="icon" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(journal);
                              }} 
                              className="rounded-lg h-8 w-8 bg-white shadow-lg hover:bg-accent transition-all"
                            >
                              <Edit3 className="h-3.5 w-3.5" />
                            </Button>
                            <Button 
                              type="button"
                              variant="secondary" 
                              size="icon" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(journal.id, journal.name);
                              }} 
                              className="rounded-lg h-8 w-8 bg-white shadow-lg hover:bg-red-500 hover:text-white transition-all text-red-500"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>

                        {/* HOVER OVERLAY */}
                        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <h3 className="text-sm font-bold text-white font-headline leading-tight italic mb-1.5 line-clamp-2">{journal.name}</h3>
                            <div className="flex flex-col gap-1.5 mb-4">
                              <div className="flex items-center gap-2 text-[8px] font-bold text-white/70 uppercase tracking-widest"><Tag className="h-2.5 w-2.5 text-accent" /> ISSN: {journal.issn}</div>
                              <div className="flex items-center gap-2 text-[8px] font-bold text-white/70 uppercase tracking-widest"><Globe className="h-2.5 w-2.5 text-accent" /> {journal.domain}</div>
                            </div>

                            <div className="pt-3 border-t border-white/10">
                              <Button variant="link" asChild className="p-0 h-auto text-accent font-black italic text-[8px] hover:text-white tracking-[0.2em] uppercase">
                                <a href={journal.link} target="_blank" className="flex items-center gap-1.5">
                                  Access Repository <ExternalLink className="h-2.5 w-2.5" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-12 flex-wrap">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="rounded-lg border-slate-200 h-8 w-8 bg-white shadow-sm"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 p-0 rounded-lg text-[10px] font-black ${currentPage === page ? 'bg-primary text-white shadow-lg' : 'text-primary/40 hover:bg-white hover:shadow-sm'}`}
                          >
                            {page}
                          </Button>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="rounded-lg border-slate-200 h-8 w-8 bg-white shadow-sm"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <Card className="rounded-[1.5rem] border-dashed border-2 border-primary/5 p-24 text-center bg-white shadow-sm">
                  <Filter className="h-10 w-10 text-primary/5 mx-auto mb-4" />
                  <p className="text-primary/30 font-black uppercase tracking-[0.3em] text-[10px] italic">No matching series found in registry</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ManageJournals() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div></div>}>
      <JournalManagementContent />
    </Suspense>
  );
}
