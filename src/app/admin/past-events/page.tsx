
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  Trash2, 
  ArrowLeft, 
  Edit3, 
  History,
  CheckCircle2,
  Clock,
  LayoutGrid,
  ArrowUpDown
} from 'lucide-react';
import Link from 'next/link';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function PastEventsManagement() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [order, setOrder] = useState('0');

  const pastEventsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'pastEvents'), orderBy('order', 'asc'));
  }, [db]);

  const { data: events, loading: eventsLoading } = useCollection(pastEventsQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  const resetForm = () => {
    setEditingId(null);
    setTitle(''); 
    setDescription('');
    setOrder('0');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    const eventData = {
      title,
      description,
      order: parseInt(order) || 0,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      const docRef = doc(db, 'pastEvents', editingId);
      updateDoc(docRef, eventData)
        .then(() => {
          toast({ title: "Record Synchronized", description: `"${title}" history has been updated.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'update',
            requestResourceData: eventData,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    } else {
      const colRef = collection(db, 'pastEvents');
      const newEvent = {
        ...eventData,
        createdAt: serverTimestamp(),
      };
      addDoc(colRef, newEvent)
        .then(() => {
          toast({ title: "History Recorded", description: `"${title}" has been added to the past events catalog.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: colRef.path,
            operation: 'create',
            requestResourceData: newEvent,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    }
    
    resetForm();
  };

  const handleEdit = (event: any) => {
    setEditingId(event.id);
    setTitle(event.title);
    setDescription(event.description);
    setOrder(event.order?.toString() || '0');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!db || !id) return;
    
    if (window.confirm("Permanently remove this past event from the historical registry?")) {
      const docRef = doc(db, 'pastEvents', id);
      deleteDoc(docRef)
        .then(() => {
          toast({ title: "Entry Removed", description: "The historical record has been deleted." });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'delete',
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    }
  };

  if (userLoading || !user) return null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors">
                <Link href="/admin/dashboard"><ArrowLeft className="h-5 w-5" /></Link>
              </Button>
              <div>
                <h1 className="text-3xl font-black text-primary font-headline italic">
                  Historical Registry
                </h1>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Past Events & Completed Activities</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-[10px] font-black uppercase text-primary/60 tracking-widest">Session: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* History Entry Console */}
            <div className="lg:col-span-4" data-aos="fade-right">
              <Card className="rounded-2xl border-none shadow-2xl bg-white p-8 lg:sticky lg:top-32">
                <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
                  <h2 className="text-lg font-bold text-primary font-headline flex items-center gap-2 italic">
                    <History className="h-5 w-5 text-accent" />
                    {editingId ? 'Modify Entry' : 'Record Activity'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50">
                      Cancel
                    </Button>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Event Title</label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. SIARE Academic Forum 2024" className="rounded-xl border-slate-100 h-11" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Historical Summary</label>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Describe the outcomes, participants, and achievements..." className="rounded-xl border-slate-100 min-h-[120px]" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Display Priority</label>
                    <Input type="number" value={order} onChange={(e) => setOrder(e.target.value)} className="rounded-xl border-slate-100 h-11" />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-primary text-accent font-black uppercase text-xs tracking-widest rounded-xl shadow-xl hover:scale-[1.02] transition-transform mt-4">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Update Record</> : <><Plus className="mr-2 h-4 w-4" /> Save to History</>}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Historical List */}
            <div className="lg:col-span-8 space-y-6" data-aos="fade-left">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-bold text-primary font-headline italic flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-accent" />
                  Completed Activities {events && <span className="text-xs font-black bg-primary/5 px-2 py-0.5 rounded-full text-primary/40 ml-1">({events.length})</span>}
                </h2>
                <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-primary/30">
                  <span className="flex items-center gap-1.5"><ArrowUpDown className="h-3 w-3" /> Order: Asc</span>
                </div>
              </div>
              
              {eventsLoading ? (
                <div className="flex flex-col items-center justify-center p-32 bg-white rounded-2xl border-none shadow-sm gap-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                  <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.3em]">Loading history...</p>
                </div>
              ) : (events && events.length > 0) ? (
                <div className="grid grid-cols-1 gap-6">
                  {events.map((event: any) => (
                    <Card key={event.id} className="rounded-2xl shadow-lg border-none overflow-hidden relative group bg-white hover:shadow-2xl transition-all duration-500">
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="text-[8px] font-black text-accent uppercase tracking-widest mb-1 flex items-center gap-1">
                              <CheckCircle2 className="h-2.5 w-2.5 fill-current" /> Successfully Completed
                            </div>
                            <h3 className="text-xl font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors">
                              {event.title}
                            </h3>
                          </div>
                          <div className="flex gap-1.5">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(event)} className="h-8 w-8 rounded-lg bg-slate-50 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                              <Edit3 className="h-3.5 w-3.5" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={(e) => handleDelete(e, event.id)} className="h-8 w-8 rounded-lg bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>

                        <p className="text-sm text-foreground/60 leading-relaxed italic font-medium mb-6">
                          "{event.description}"
                        </p>

                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-50">
                          <span className="text-[8px] font-black text-primary/20 uppercase tracking-[0.2em]">Archive ID: {event.id.slice(0,8)}</span>
                          <div className="text-[10px] font-black text-primary/40 italic">Sort Position: {event.order}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border-2 border-dashed border-primary/5 p-32 text-center flex flex-col items-center gap-6">
                  <History className="h-12 w-12 text-primary/5" />
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">The Historical Registry is Empty</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
