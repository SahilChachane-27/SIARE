
'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Building2, Tag, Globe, ExternalLink, ArrowLeft, Image as ImageIcon, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ManageJournals() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [issn, setIssn] = useState('');
  const [domain, setDomain] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const journalsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'), orderBy('createdAt', 'desc'));
  }, [db]);

  const { data: journals, loading: journalsLoading } = useCollection(journalsQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) { // 1MB limit for base64 storage
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

  const handleAddJournal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    try {
      await addDoc(collection(db, 'journals'), {
        name,
        university,
        issn,
        domain,
        link,
        imageUrl,
        createdAt: serverTimestamp(),
      });
      
      setName(''); 
      setUniversity(''); 
      setIssn(''); 
      setDomain(''); 
      setLink('');
      setImageUrl(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      
      toast({ title: "Journal Added", description: `${name} has been published successfully.` });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    }
  };

  const handleDelete = async (id: string) => {
    if (!db) return;
    try {
      await deleteDoc(doc(db, 'journals', id));
      toast({ title: "Journal Removed", description: "The journal has been deleted." });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    }
  };

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
            <h1 className="text-4xl font-bold text-primary font-headline italic">Manage Journals</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1" data-aos="fade-up">
              <Card className="rounded-funky border-none shadow-2xl p-8 sticky top-32">
                <h2 className="text-xl font-bold text-primary mb-6 italic">Add New Source</h2>
                <form onSubmit={handleAddJournal} className="space-y-6">
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

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">ISSN</label>
                    <Input value={issn} onChange={(e) => setIssn(e.target.value)} required placeholder="2345-6789" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Domain</label>
                    <Input value={domain} onChange={(e) => setDomain(e.target.value)} required placeholder="Engineering" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Public URL</label>
                    <Input value={link} onChange={(e) => setLink(e.target.value)} required type="url" placeholder="https://..." className="rounded-xl h-12" />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground font-bold rounded-funky shadow-lg hover:scale-105 transition-transform">
                    <Plus className="mr-2 h-5 w-5" /> Publish Journal
                  </Button>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8" data-aos="fade-left">
              <h2 className="text-xl font-bold text-primary italic">Live Catalog {journals && `(${journals.length})`}</h2>
              
              {journalsLoading ? (
                <div className="flex justify-center p-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>
              ) : journals && journals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {journals.map((journal: any) => (
                    <Card key={journal.id} className="rounded-funky border-none shadow-xl group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      <div className="relative aspect-video w-full bg-secondary">
                        {journal.imageUrl ? (
                          <Image src={journal.imageUrl} alt={journal.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Building2 className="h-12 w-12 text-primary/10" />
                          </div>
                        )}
                        <Button variant="destructive" size="icon" onClick={() => handleDelete(journal.id)} className="absolute top-4 right-4 rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
              ) : (
                <Card className="rounded-funky border-dashed border-2 border-primary/10 p-20 text-center">
                  <p className="text-foreground/40 font-bold uppercase tracking-widest">No journals added yet</p>
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
