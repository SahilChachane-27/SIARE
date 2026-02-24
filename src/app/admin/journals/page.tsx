'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
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
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const ITEMS_PER_PAGE = 6;

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

export default function ManageJournals() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [issn, setIssn] = useState('');
  const [domain, setDomain] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter & Sort State
  const [searchFilter, setSearchFilter] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'az' | 'za'>('newest');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  const journalsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'), orderBy('createdAt', 'desc'));
  }, [db]);

  const { data: journals, loading: journalsLoading } = useCollection(journalsQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchFilter, sortOrder]);

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
    setIssn(''); 
    setDomain(''); 
    setLink('');
    setImageUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
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
      issn,
      domain,
      link,
      imageUrl,
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
    setIssn(journal.issn);
    setDomain(journal.domain);
    setLink(journal.link);
    setImageUrl(journal.imageUrl || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (!db || !id) return;
    if (!window.confirm("Are you sure you want to permanently delete this journal record?")) return;
    
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
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="/admin/dashboard"><ArrowLeft className="h-6 w-6" /></Link>
            </Button>
            <h1 className="text-4xl font-bold text-primary font-headline italic">
              {editingId ? 'Edit Journal' : 'Manage Journals'}
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1" data-aos="fade-up">
              <Card className="rounded-funky border-none shadow-2xl p-8 sticky top-32">
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
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Journal Cover Image</label>
                    <div className="flex flex-col gap-4">
                      {imageUrl ? (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden group shadow-lg">
                          <Image src={imageUrl} alt="Preview" fill className="object-cover" />
                          <button 
                            type="button" 
                            onClick={() => setImageUrl(null)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full aspect-video border-2 border-dashed border-primary/10 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-secondary/50 transition-colors"
                        >
                          <ImageIcon className="h-8 w-8 text-primary/20" />
                          <span className="text-xs font-bold text-primary/40 uppercase">Click to Upload Cover</span>
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">ISSN</label>
                      <Input value={issn} onChange={(e) => setIssn(e.target.value)} required placeholder="2345-6789" className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Domain</label>
                      <Select value={domain} onValueChange={setDomain} required>
                        <SelectTrigger className="rounded-xl h-12 border-input">
                          <SelectValue placeholder="Select domain" />
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
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Public URL</label>
                    <Input value={link} onChange={(e) => setLink(e.target.value)} required type="url" placeholder="https://..." className="rounded-xl h-12" />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground font-bold rounded-funky shadow-lg hover:scale-105 transition-transform">
                    {editingId ? <><Edit3 className="mr-2 h-5 w-5" /> Update Journal</> : <><Plus className="mr-2 h-5 w-5" /> Publish Journal</>}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8" data-aos="fade-left">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <h2 className="text-xl font-bold text-primary italic">Live Catalog {journals && `(${journals.length})`}</h2>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                   <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40" />
                    <Input 
                      placeholder="Search name, uni, issn..." 
                      className="pl-9 h-10 rounded-xl"
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                    />
                  </div>
                  <Select value={sortOrder} onValueChange={(v: any) => setSortOrder(v)}>
                    <SelectTrigger className="w-40 h-10 rounded-xl">
                      <ArrowUpDown className="mr-2 h-4 w-4 text-primary/40" />
                      <SelectValue placeholder="Sort by" />
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {paginatedJournals.map((journal: any) => (
                      <Card key={journal.id} className="rounded-funky border-none shadow-xl group hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                        <div className="relative aspect-video w-full bg-secondary">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Building2 className="h-12 w-12 text-primary/10" />
                            </div>
                          )}
                          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <Button 
                              type="button"
                              variant="secondary" 
                              size="icon" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(journal);
                              }} 
                              className="rounded-full h-8 w-8 bg-white shadow-md hover:bg-slate-100"
                            >
                              <Edit3 className="h-4 w-4 text-primary" />
                            </Button>
                            <Button 
                              type="button"
                              variant="destructive" 
                              size="icon" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(journal.id);
                              }} 
                              className="rounded-full h-8 w-8 shadow-md"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-8">
                          <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-bold text-primary font-headline leading-tight">{journal.name}</h3>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm font-bold text-primary/60"><Building2 className="h-4 w-4 text-accent" /> {journal.university}</div>
                            <div className="flex items-center gap-3 text-sm text-foreground/70"><Tag className="h-4 w-4 text-accent" /> {journal.issn}</div>
                            <div className="flex items-center gap-3 text-sm text-foreground/70"><Globe className="h-4 w-4 text-accent" /> {journal.domain}</div>
                          </div>
                          <div className="mt-8 pt-6 border-t border-secondary">
                            <Button variant="link" asChild className="p-0 h-auto text-primary font-black italic text-sm group-hover:text-accent">
                              <a href={journal.link} target="_blank" className="flex items-center gap-2 uppercase tracking-widest">
                                Public Portal <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-12">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="rounded-full border-primary/10"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 p-0 rounded-full font-bold ${currentPage === page ? 'bg-primary text-white shadow-lg' : 'text-primary/60'}`}
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
                        className="rounded-full border-primary/10"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <Card className="rounded-funky border-dashed border-2 border-primary/10 p-20 text-center">
                  <Filter className="h-12 w-12 text-primary/10 mx-auto mb-4" />
                  <p className="text-foreground/40 font-bold uppercase tracking-widest">No matching journals found</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
