'use client';

import { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
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
  Trash2, 
  Building2, 
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
  Flag,
  ListChecks
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
  const [university, setUniversity] = useState('');
  const [description, setDescription] = useState('');
  const [issn, setIssn] = useState('');
  const [domain, setDomain] = useState('');
  const [country, setCountry] = useState('India');
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

  // Handle direct edit from dashboard
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
    setUniversity(''); 
    setDescription('');
    setIssn(''); 
    setDomain(''); 
    setCountry('India');
    setIndexing('');
    setLink('');
    setImageUrl(null);
    setIsFeatured(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    // Clear query param
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
      university,
      description,
      issn,
      domain,
      country,
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
    setUniversity(journal.university);
    setDescription(journal.description || '');
    setIssn(journal.issn);
    setDomain(journal.domain);
    setCountry(journal.country || 'India');
    setIndexing(Array.isArray(journal.indexing) ? journal.indexing.join(', ') : '');
    setLink(journal.link);
    setImageUrl(journal.imageUrl || null);
    setIsFeatured(journal.isFeatured || false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (e: React.MouseEvent, id: string, title: string) => {
    e.stopPropagation();
    if (!db || !id) return;
    if (!window.confirm(`Are you sure you want to permanently delete "${title}" record?`)) return;
    
    const docRef = doc(db, 'journals', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Journal Removed", description: "The journal has been successfully deleted from the catalog." });
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
      (j.university || '').toLowerCase().includes(searchFilter.toLowerCase()) ||
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
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="/admin/dashboard"><ArrowLeft className="h-6 w-6" /></Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">
              {editingId ? 'Edit Journal' : 'Manage Journals'}
            </h1>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1" data-aos="fade-up">
              <Card className="rounded-funky border-none shadow-2xl p-6 md:p-8 lg:sticky lg:top-32 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-primary italic">
                    {editingId ? 'Update Entry' : 'Add New Source'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-primary/40 hover:text-primary">
                      Cancel
                    </Button>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Journal Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Journal of Tech" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">University</label>
                    <Input value={university} onChange={(e) => setUniversity(e.target.value)} required placeholder="e.g. VIT PUNE" className="rounded-xl h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Description</label>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Brief summary of the journal's focus..." className="rounded-xl min-h-[100px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Journal Cover Image</label>
                    <div className="flex flex-col gap-4">
                      {imageUrl ? (
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group shadow-lg bg-secondary/30 flex items-center justify-center p-2">
                          <Image src={imageUrl} alt="Preview" fill className="object-contain" />
                          <button 
                            type="button" 
                            onClick={() => setImageUrl(null)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full aspect-[3/4] border-2 border-dashed border-primary/10 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-secondary/50 transition-colors"
                        >
                          <ImageIcon className="h-8 w-8 text-primary/20" />
                          <span className="text-xs font-bold text-primary/40 uppercase">Upload Cover</span>
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
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">ISSN</label>
                      <Input value={issn} onChange={(e) => setIssn(e.target.value)} required placeholder="2345-6789" className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Domain</label>
                      <Select value={domain} onValueChange={setDomain} required>
                        <SelectTrigger className="rounded-xl h-12 border-input">
                          <SelectValue placeholder="Select" />
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
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Country</label>
                    <Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. India" className="rounded-xl h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Indexing (Comma separated)</label>
                    <Input value={indexing} onChange={(e) => setIndexing(e.target.value)} placeholder="e.g. Scopus, UGC CARE, Google Scholar" className="rounded-xl h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Public URL</label>
                    <Input value={link} onChange={(e) => setLink(e.target.value)} required type="url" placeholder="https://..." className="rounded-xl h-12" />
                  </div>

                  <div className="flex items-center space-x-3 py-2 bg-secondary/30 p-4 rounded-xl border border-primary/5">
                    <Checkbox 
                      id="isFeatured" 
                      checked={isFeatured} 
                      onCheckedChange={(checked) => setIsFeatured(checked as boolean)}
                      className="border-primary/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <label 
                      htmlFor="isFeatured" 
                      className="text-[10px] font-bold text-primary uppercase tracking-wider cursor-pointer"
                    >
                      Featured (Home Page)
                    </label>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground font-bold rounded-funky shadow-lg hover:scale-105 transition-transform text-sm">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Update</> : <><Plus className="mr-2 h-4 w-4" /> Publish</>}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-3 space-y-8" data-aos="fade-left">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <h2 className="text-xl font-bold text-primary italic">Live Catalog {journals && `(${journals.length})`}</h2>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                   <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40" />
                    <Input 
                      placeholder="Search..." 
                      className="pl-9 h-10 rounded-xl"
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                    />
                  </div>
                  <Select value={sortOrder} onValueChange={(v: any) => setSortOrder(v)}>
                    <SelectTrigger className="w-full sm:w-40 h-10 rounded-xl">
                      <ArrowUpDown className="mr-2 h-4 w-4 text-primary/40" />
                      <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="az">Name A-Z</SelectItem>
                      <SelectItem value="za">Name Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {journalsLoading ? (
                <div className="flex justify-center p-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>
              ) : paginatedJournals.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedJournals.map((journal: any) => (
                      <Card key={journal.id} className="overflow-hidden group relative rounded-none shadow-lg border-none flex flex-col h-full bg-white transition-all duration-500">
                        <div className="relative aspect-[3/4] w-full bg-secondary/5 flex items-center justify-center p-2 shrink-0">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-contain p-1" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Building2 className="h-10 w-10 text-primary/10" />
                            </div>
                          )}
                          
                          {journal.isFeatured && (
                            <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1 z-30">
                              <Star className="h-2 w-2 fill-current" /> Featured
                            </div>
                          )}

                          <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                            <Button 
                              type="button"
                              variant="secondary" 
                              size="icon" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(journal);
                              }} 
                              className="rounded-full h-7 w-7 bg-white shadow-md hover:bg-slate-100"
                              title="Edit Journal"
                            >
                              <Edit3 className="h-3.5 w-3.5 text-primary" />
                            </Button>
                            <Button 
                              type="button"
                              variant="destructive" 
                              size="sm" 
                              onClick={(e) => handleDelete(e, journal.id, journal.name)} 
                              className="rounded-lg h-7 px-2 shadow-md flex items-center gap-1"
                              title="Delete Journal"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              <span className="text-[8px] font-black uppercase hidden lg:inline">Delete</span>
                            </Button>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                            <h3 className="text-sm font-bold text-white font-headline leading-tight italic mb-1 line-clamp-2">{journal.name}</h3>
                            <p className="text-accent font-black uppercase text-[8px] tracking-widest truncate mb-2">{journal.university}</p>
                            
                            <div className="space-y-1 mb-3">
                              <div className="flex items-center gap-2 text-[8px] text-white/80"><Tag className="h-2 w-2 text-accent" /> {journal.issn}</div>
                              <div className="flex items-center gap-2 text-[8px] text-white/80"><Globe className="h-2 w-2 text-accent" /> {journal.domain}</div>
                              {journal.country && (
                                <div className="flex items-center gap-2 text-[8px] text-white/80"><Flag className="h-2 w-2 text-accent" /> {journal.country}</div>
                              )}
                            </div>

                            <div className="pt-2 border-t border-white/10">
                              <Button variant="link" asChild className="p-0 h-auto text-accent font-black italic text-[8px] hover:text-white">
                                <a href={journal.link} target="_blank" className="flex items-center gap-1.5 uppercase tracking-[0.2em]">
                                  View Journal <ExternalLink className="h-2 w-2" />
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
                        className="rounded-full border-primary/10 h-8 w-8"
                      >
                        <ChevronLeft className="h-3 w-3" />
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={`w-7 h-7 p-0 rounded-full text-xs font-bold ${currentPage === page ? 'bg-primary text-white shadow-lg' : 'text-primary/60'}`}
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
                        className="rounded-full border-primary/10 h-8 w-8"
                      >
                        <ChevronRight className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <Card className="rounded-funky border-dashed border-2 border-primary/10 p-12 text-center">
                  <Filter className="h-8 w-8 text-primary/10 mx-auto mb-4" />
                  <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs">No matching journals found</p>
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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
      <JournalManagementContent />
    </Suspense>
  );
}
