'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  ArrowLeft, 
  Edit3, 
  Calendar,
  Star,
  ArrowUpDown,
  MapPin,
  Presentation,
  Clock,
  LayoutGrid,
  Trash2
} from 'lucide-react';
import Link from 'next/link';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function EventsManagement() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('Call for Papers Open');
  const [tracks, setTracks] = useState('');
  const [highlights, setHighlights] = useState('');
  const [color, setColor] = useState('bg-blue-500');
  const [order, setOrder] = useState('0');

  const eventsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'conferences'), orderBy('order', 'asc'));
  }, [db]);

  const { data: events, loading: eventsLoading } = useCollection(eventsQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  const resetForm = () => {
    setEditingId(null);
    setTitle(''); 
    setDate('');
    setLocation('');
    setStatus('Call for Papers Open');
    setTracks('');
    setHighlights('');
    setColor('bg-blue-500');
    setOrder('0');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    const eventData = {
      title,
      date,
      location,
      status,
      tracks,
      highlights,
      color,
      order: parseInt(order) || 0,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      const docRef = doc(db, 'conferences', editingId);
      updateDoc(docRef, eventData)
        .then(() => {
          toast({ title: "Update Success", description: `Conference "${title}" has been synchronized.` });
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
      const colRef = collection(db, 'conferences');
      const newEvent = {
        ...eventData,
        createdAt: serverTimestamp(),
      };
      addDoc(colRef, newEvent)
        .then(() => {
          toast({ title: "Event Cataloged", description: `New conference "${title}" is now active.` });
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
    setDate(event.date);
    setLocation(event.location);
    setStatus(event.status || '');
    setTracks(event.tracks || '');
    setHighlights(event.highlights || '');
    setColor(event.color || 'bg-blue-500');
    setOrder(event.order?.toString() || '0');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string, title: string) => {
    if (!db || !window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    const docRef = doc(db, 'conferences', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Record Deleted", description: `"${title}" has been removed from the registry.` });
      })
      .catch(async (err) => {
        const permissionError = new FirestorePermissionError({
          path: docRef.path,
          operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  };

  if (userLoading || !user) return null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors">
                <Link href="/admin/dashboard"><ArrowLeft className="h-5 w-5" /></Link>
              </Button>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-primary font-headline italic">
                  Conference Manager
                </h1>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Event Registry & Cataloging</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-[10px] font-black uppercase text-primary/60 tracking-widest">Active Session: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Management Console (Form) */}
            <div className="lg:col-span-4" data-aos="fade-right">
              <Card className="rounded-2xl border-none shadow-2xl bg-white p-6 md:p-8 lg:sticky lg:top-32">
                <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-slate-50 pb-4">
                  <h2 className="text-lg font-bold text-primary font-headline flex items-center gap-2 italic">
                    <Presentation className="h-5 w-5 text-accent" />
                    {editingId ? 'Modify Record' : 'Add Conference'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50">
                      Cancel
                    </Button>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Title of Event</label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. ICMRI 2025" className="rounded-xl border-slate-100 h-11 focus:ring-accent/20" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Schedule</label>
                      <Input value={date} onChange={(e) => setDate(e.target.value)} required placeholder="12–13 April" className="rounded-xl border-slate-100 h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Venue/City</label>
                      <Input value={location} onChange={(e) => setLocation(e.target.value)} required placeholder="Pune, India" className="rounded-xl border-slate-100 h-11" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Status Badge</label>
                    <Input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Call for Papers Open" className="rounded-xl border-slate-100 h-11" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Research Tracks</label>
                    <Input value={tracks} onChange={(e) => setTracks(e.target.value)} placeholder="Engineering, AI, Management..." className="rounded-xl border-slate-100 h-11" />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-primary text-accent font-black uppercase text-xs tracking-widest rounded-xl shadow-xl hover:scale-[1.02] transition-transform mt-4">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Sync Changes</> : <><Plus className="mr-2 h-4 w-4" /> Add to Catalog</>}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Live Registry (List) */}
            <div className="lg:col-span-8 space-y-6" data-aos="fade-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4">
                <h2 className="text-lg font-bold text-primary font-headline italic flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-accent" />
                  Live Registry {events && <span className="text-xs font-black bg-primary/5 px-2 py-0.5 rounded-full text-primary/40 ml-1">({events.length})</span>}
                </h2>
                <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-primary/30">
                  <span className="flex items-center gap-1.5"><ArrowUpDown className="h-3 w-3" /> Sorting: Order Asc</span>
                </div>
              </div>
              
              {eventsLoading ? (
                <div className="flex flex-col items-center justify-center p-24 bg-white rounded-2xl border-none shadow-sm gap-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                  <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.3em]">Updating registry...</p>
                </div>
              ) : (events && events.length > 0) ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {events.map((event: any) => (
                    <Card key={event.id} className="rounded-2xl shadow-lg border-none overflow-hidden relative group bg-white hover:shadow-2xl transition-all duration-500">
                      <div className={`h-1.5 ${event.color || 'bg-primary'}`}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="min-w-0">
                            <div className="text-[8px] font-black text-accent uppercase tracking-widest mb-1 flex items-center gap-1">
                              <Star className="h-2.5 w-2.5 fill-current" /> {event.status || 'Active'}
                            </div>
                            <h3 className="text-base font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors truncate">
                              {event.title}
                            </h3>
                          </div>
                          <div className="flex gap-1.5 shrink-0">
                            <Button 
                              type="button"
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleEdit(event)} 
                              className="h-8 w-8 rounded-lg bg-slate-50 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                              title="Edit Record"
                            >
                              <Edit3 className="h-3.5 w-3.5" />
                            </Button>
                            <Button 
                              type="button"
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleDelete(event.id, event.title)} 
                              className="h-8 w-8 rounded-lg bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                              title="Delete Record"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-6">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60">
                            <Calendar className="h-3.5 w-3.5 text-accent shrink-0" /> {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60">
                            <MapPin className="h-3.5 w-3.5 text-accent shrink-0" /> {event.location}
                          </div>
                        </div>

                        {event.tracks && (
                          <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 mb-4">
                            <p className="text-[9px] text-foreground/60 leading-relaxed italic font-medium line-clamp-2">
                              <strong className="text-primary/40 uppercase tracking-tighter not-italic mr-1">Tracks:</strong> {event.tracks}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-50">
                          <span className="text-[8px] font-black text-primary/20 uppercase tracking-[0.2em]">Registry ID: {event.id.slice(0,8)}</span>
                          <div className="text-[10px] font-black text-primary/40 italic">Order: {event.order}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border-2 border-dashed border-primary/5 p-24 text-center flex flex-col items-center gap-6">
                  <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center text-primary/10">
                    <Presentation className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">No Conferences Registry Found</p>
                    <p className="text-[10px] text-muted-foreground mt-2 italic">Begin by adding an upcoming academic gathering in the console.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
