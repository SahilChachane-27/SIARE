
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
  BookOpen
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
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <Button variant="ghost" size="icon" asChild className="rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-all">
              <Link href="/admin/dashboard"><ArrowLeft className="h-6 w-6" /></Link>
            </Button>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">
                {editingId ? 'Edit Proceedings Record' : 'Proceedings Management'}
              </h1>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 mt-1">SIARE Series & Catalog Registry</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* FORM CONSOLE */}
            <div className="lg:col-span-1" data-aos="fade-up">
              <Card className="rounded-[2rem] border-none shadow-2xl p-8 lg:sticky lg:top-32 bg-white">
                <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
                  <h2 className="text-lg font-bold text-primary italic flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    {editingId ? 'Update Record' : 'Catalog New Series'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50">
                      Cancel
                    </Button>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Series/Journal Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. SIARE Proceedings in AI" className="rounded-xl h-12 border-slate-100" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Academic Description</label>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Summary of scope..." className="rounded-xl min-h-[100px] border-slate-100" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Visual Cover (Max 1MB)</label>
                    <div className="flex flex-col gap-4">
                      {imageUrl ? (
                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                          <Image src={imageUrl} alt="Preview" fill className="object-contain" />
                          <button 
                            type="button" 
                            onClick={() => setImageUrl(null)}
                            className="absolute top-3 right-3 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30 shadow-xl"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full aspect-[3/4] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-slate-50 hover:border-accent/30 transition-all group"
                        >
                          <ImageIcon className="h-10 w-10 text-primary/10 group-hover:text-accent/40 transition-colors" />
                          <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Select Cover Image</span>
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
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">ISSN</label>
                      <Input value={issn} onChange={(e) => setIssn(e.target.value)} required placeholder="2345-6789" className="rounded-xl h-12 border-slate-100" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Primary Domain</label>
                      <Select value={domain} onValueChange={setDomain} required>
                        <SelectTrigger className="rounded-xl h-12 border-slate-100">
                          <SelectValue placeholder="Domain" />
                        </SelectTrigger>
                        <SelectContent>
                          {domains.map((d) => (
                            <SelectItem key={d} value={d}>{d}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Indexing Metadata (Comma separated)</label>
                    <Input value={indexing} onChange={(e) => setIndexing(e.target.value)} placeholder="Scopus, UGC CARE, Google Scholar" className="rounded-xl h-12 border-slate-100" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Public Series URL</label>
                    <Input value={link} onChange={(e) => setLink(e.target.value)} required type="url" placeholder="https://academicproceeding.org/..." className="rounded-xl h-12 border-slate-100" />
                  </div>

                  <div className="flex items-center space-x-3 py-4 px-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <Checkbox 
                      id="isFeatured" 
                      checked={isFeatured} 
                      onCheckedChange={(checked) => setIsFeatured(checked as boolean)}
                      className="border-primary/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <label 
                      htmlFor="isFeatured" 
                      className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em] cursor-pointer"
                    >
                      Featured on Homepage
                    </label>
                  </div>

                  <Button type="submit" className="w-full h-14 bg-primary text-accent font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
                    {editingId ? <><Edit3 className="mr-3 h-5 w-5" /> Synchronize Update</> : <><Plus className="mr-3 h-5 w-5" /> Catalog Series</>}
                  </Button>
                </form>
              </Card>
            </div>

            {/* LIVE CATALOG DISPLAY */}
            <div className="lg:col-span-3 space-y-10" data-aos="fade-left">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4">
                <h2 className="text-xl font-bold text-primary font-headline italic flex items-center gap-3">
                  Live Registry {journals && <span className="text-xs font-black bg-primary/5 px-3 py-1 rounded-full text-primary/40 ml-2">({journals.length})</span>}
                </h2>
                <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                   <div className="relative flex-1 md:w-72">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30" />
                    <Input 
                      placeholder="Filter records..." 
                      className="pl-11 h-12 rounded-2xl bg-white border-none shadow-sm"
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                    />
                  </div>
                  <Select value={sortOrder} onValueChange={(v: any) => setSortOrder(v)}>
                    <SelectTrigger className="w-full sm:w-44 h-12 rounded-2xl bg-white border-none shadow-sm">
                      <ArrowUpDown className="mr-2 h-4 w-4 text-primary/30" />
                      <SelectValue placeholder="Sort Order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest Records</SelectItem>
                      <SelectItem value="oldest">Oldest Records</SelectItem>
                      <SelectItem value="az">Title A-Z</SelectItem>
                      <SelectItem value="za">Title Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {journalsLoading ? (
                <div className="flex flex-col items-center justify-center p-32 bg-white rounded-[2rem] shadow-sm gap-6">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/20">Indexing Records...</p>
                </div>
              ) : paginatedJournals.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {paginatedJournals.map((journal: any) => (
                      <Card key={journal.id} className="overflow-hidden group relative rounded-none shadow-2xl border-none flex flex-col h-full bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        <div className="relative aspect-[3/4] w-full bg-slate-50 flex items-center justify-center p-6 shrink-0 shadow-inner">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <BookOpen className="h-16 w-16 text-primary/5" />
                            </div>
                          )}
                          
                          {journal.isFeatured && (
                            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-xl flex items-center gap-1.5 z-30">
                              <Star className="h-2.5 w-2.5 fill-current" /> Home Featured
                            </div>
                          )}

                          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                            <Button 
                              type="button"
                              variant="secondary" 
                              size="icon" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(journal);
                              }} 
                              className="rounded-xl h-10 w-10 bg-white shadow-xl hover:bg-accent hover:text-primary transition-all"
                              title="Edit Series"
                            >
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button 
                              type="button"
                              variant="secondary" 
                              size="icon" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(journal.id, journal.name);
                              }} 
                              className="rounded-xl h-10 w-10 bg-white shadow-xl hover:bg-red-500 hover:text-white transition-all text-red-500"
                              title="Delete Series"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* HOVER OVERLAY */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20">
                          <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <h3 className="text-base font-bold text-white font-headline leading-tight italic mb-2 line-clamp-2">{journal.name}</h3>
                            <div className="flex flex-col gap-2 mb-6">
                              <div className="flex items-center gap-3 text-[9px] font-bold text-white/70 uppercase tracking-widest"><Tag className="h-3 w-3 text-accent" /> ISSN: {journal.issn}</div>
                              <div className="flex items-center gap-3 text-[9px] font-bold text-white/70 uppercase tracking-widest"><Globe className="h-3 w-3 text-accent" /> {journal.domain}</div>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                              <Button variant="link" asChild className="p-0 h-auto text-accent font-black italic text-[9px] hover:text-white tracking-[0.2em] uppercase">
                                <a href={journal.link} target="_blank" className="flex items-center gap-2">
                                  Access Repository <ExternalLink className="h-3 w-3" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-6 mt-16 flex-wrap">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="rounded-xl border-slate-200 h-10 w-10 bg-white shadow-sm"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex items-center gap-3">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 p-0 rounded-xl text-xs font-black ${currentPage === page ? 'bg-primary text-white shadow-xl' : 'text-primary/40 hover:bg-white hover:shadow-sm'}`}
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
                        className="rounded-xl border-slate-200 h-10 w-10 bg-white shadow-sm"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <Card className="rounded-[2rem] border-dashed border-2 border-primary/5 p-32 text-center bg-white shadow-sm">
                  <Filter className="h-12 w-12 text-primary/5 mx-auto mb-6" />
                  <p className="text-primary/30 font-black uppercase tracking-[0.3em] text-xs italic">No matching series found in registry</p>
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
