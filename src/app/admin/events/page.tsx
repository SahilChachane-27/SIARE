'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  Trash2, 
  ArrowLeft, 
  Edit3, 
  Calendar,
  Star,
  ArrowUpDown,
  MapPin
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
          toast({ title: "Event Updated", description: `${title} has been updated successfully.` });
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
          toast({ title: "Event Created", description: `${title} is now listed.` });
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

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!db || !id) return;
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    
    const docRef = doc(db, 'conferences', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Event Deleted", description: "The event has been removed from the catalog." });
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
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="/admin/dashboard"><ArrowLeft className="h-6 w-6" /></Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">
              {editingId ? 'Edit Event' : 'Conference Management'}
            </h1>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1" data-aos="fade-up">
              <Card className="rounded-funky border-none shadow-2xl p-6 md:p-8 lg:sticky lg:top-32">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-primary italic">
                    {editingId ? 'Update Event' : 'Add New Event'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-primary/40 hover:text-primary">
                      Cancel
                    </Button>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Event Title</label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. ICMRI 2025" className="rounded-xl h-12" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Date</label>
                      <Input value={date} onChange={(e) => setDate(e.target.value)} required placeholder="12–13 April 2025" className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Location</label>
                      <Input value={location} onChange={(e) => setLocation(e.target.value)} required placeholder="Pune, India" className="rounded-xl h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Status</label>
                    <Input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Call for Papers Open" className="rounded-xl h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Tracks</label>
                    <Input value={tracks} onChange={(e) => setTracks(e.target.value)} placeholder="Engineering, AI, Management..." className="rounded-xl h-12" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Color (Tailwind)</label>
                      <Input value={color} onChange={(e) => setColor(e.target.value)} placeholder="bg-blue-500" className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Order</label>
                      <Input type="number" value={order} onChange={(e) => setOrder(e.target.value)} className="rounded-xl h-12" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground font-bold rounded-funky shadow-lg hover:scale-105 transition-transform text-sm">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Update Event</> : <><Plus className="mr-2 h-4 w-4" /> Create Event</>}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-3 space-y-8" data-aos="fade-left">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-primary italic">Live Events {events && `(${events.length})`}</h2>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
                  <ArrowUpDown className="h-3 w-3" /> Sorting by Order
                </div>
              </div>
              
              {eventsLoading ? (
                <div className="flex justify-center p-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>
              ) : (events && events.length > 0) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {events.map((event: any) => (
                    <Card key={event.id} className="rounded-2xl shadow-xl border-none overflow-hidden relative group bg-white">
                      <div className={`h-2 ${event.color || 'bg-primary'}`}></div>
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-xl font-bold text-primary font-headline italic">{event.title}</h3>
                            <p className="text-[10px] text-accent uppercase font-black mt-1 tracking-widest">{event.status}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(event)} className="h-8 w-8 rounded-full bg-slate-50 text-primary hover:bg-accent hover:text-white">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={(e) => handleDelete(e, event.id)} className="h-8 w-8 rounded-full bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm font-bold text-primary/60">
                            <Calendar className="h-4 w-4 text-accent" /> {event.date}
                          </div>
                          <div className="flex items-center gap-3 text-sm font-bold text-primary/60">
                            <MapPin className="h-4 w-4 text-accent" /> {event.location}
                          </div>
                        </div>

                        {event.tracks && (
                          <p className="text-xs text-foreground/60 italic border-t pt-4">
                            <strong>Tracks:</strong> {event.tracks}
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                          <span className="text-[10px] font-black text-primary/20 uppercase tracking-[0.2em]">Order: {event.order}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="rounded-funky border-dashed border-2 border-primary/10 p-20 text-center">
                  <Calendar className="h-12 w-12 text-primary/10 mx-auto mb-4" />
                  <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs italic">No dynamic events found. Add your first conference.</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
