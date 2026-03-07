
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
  Calendar,
  Star,
  ArrowUpDown,
  Clock,
  LayoutGrid,
  GraduationCap,
  User
} from 'lucide-react';
import Link from 'next/link';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function WorkshopsManagement() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [instructor, setInstructor] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Registration Open');
  const [color, setColor] = useState('bg-amber-500');
  const [order, setOrder] = useState('0');

  const workshopsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'workshops'), orderBy('order', 'asc'));
  }, [db]);

  const { data: workshops, loading: workshopsLoading } = useCollection(workshopsQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  const resetForm = () => {
    setEditingId(null);
    setTitle(''); 
    setDate('');
    setTime('');
    setInstructor('');
    setDescription('');
    setStatus('Registration Open');
    setColor('bg-amber-500');
    setOrder('0');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    const workshopData = {
      title,
      date,
      time,
      instructor,
      description,
      status,
      color,
      order: parseInt(order) || 0,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      const docRef = doc(db, 'workshops', editingId);
      updateDoc(docRef, workshopData)
        .then(() => {
          toast({ title: "Update Success", description: `Workshop "${title}" has been updated.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'update',
            requestResourceData: workshopData,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    } else {
      const colRef = collection(db, 'workshops');
      const newWorkshop = {
        ...workshopData,
        createdAt: serverTimestamp(),
      };
      addDoc(colRef, newWorkshop)
        .then(() => {
          toast({ title: "Workshop Cataloged", description: `New workshop "${title}" is now active.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: colRef.path,
            operation: 'create',
            requestResourceData: newWorkshop,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    }
    
    resetForm();
  };

  const handleEdit = (workshop: any) => {
    setEditingId(workshop.id);
    setTitle(workshop.title);
    setDate(workshop.date);
    setTime(workshop.time || '');
    setInstructor(workshop.instructor || '');
    setDescription(workshop.description || '');
    setStatus(workshop.status || 'Registration Open');
    setColor(workshop.color || 'bg-amber-500');
    setOrder(workshop.order?.toString() || '0');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!db || !id) return;
    
    if (window.confirm("Are you sure you want to permanently remove this workshop?")) {
      const docRef = doc(db, 'workshops', id);
      deleteDoc(docRef)
        .then(() => {
          toast({ title: "Entry Removed", description: "The workshop record has been deleted." });
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
                  Workshop Manager
                </h1>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Training & Skills Catalog</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Management Console (Form) */}
            <div className="lg:col-span-4" data-aos="fade-right">
              <Card className="rounded-2xl border-none shadow-2xl bg-white p-8 lg:sticky lg:top-32">
                <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
                  <h2 className="text-lg font-bold text-primary font-headline flex items-center gap-2 italic">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    {editingId ? 'Modify Record' : 'Add Workshop'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50">
                      Cancel
                    </Button>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Workshop Title</label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. Research Ethics Workshop" className="rounded-xl border-slate-100 h-11 focus:ring-accent/20" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Date</label>
                      <Input value={date} onChange={(e) => setDate(e.target.value)} required placeholder="15 May 2025" className="rounded-xl border-slate-100 h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Time</label>
                      <Input value={time} onChange={(e) => setTime(e.target.value)} placeholder="10:00 AM" className="rounded-xl border-slate-100 h-11" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Lead Instructor</label>
                    <Input value={instructor} onChange={(e) => setInstructor(e.target.value)} placeholder="Dr. Sarah Johnson" className="rounded-xl border-slate-100 h-11" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Description</label>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Hands-on training on citation tools..." className="rounded-xl border-slate-100 min-h-[100px]" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Status</label>
                      <Input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Registration Open" className="rounded-xl border-slate-100 h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Priority Order</label>
                      <Input type="number" value={order} onChange={(e) => setOrder(e.target.value)} className="rounded-xl border-slate-100 h-11" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-primary text-accent font-black uppercase text-xs tracking-widest rounded-xl shadow-xl hover:scale-[1.02] transition-transform mt-4">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Sync Changes</> : <><Plus className="mr-2 h-4 w-4" /> Add Workshop</>}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Live List */}
            <div className="lg:col-span-8 space-y-6" data-aos="fade-left">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-bold text-primary font-headline italic flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-accent" />
                  Active Workshops {workshops && <span className="text-xs font-black bg-primary/5 px-2 py-0.5 rounded-full text-primary/40 ml-1">({workshops.length})</span>}
                </h2>
              </div>
              
              {workshopsLoading ? (
                <div className="flex flex-col items-center justify-center p-32 bg-white rounded-2xl border-none shadow-sm gap-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                  <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.3em]">Updating list...</p>
                </div>
              ) : (workshops && workshops.length > 0) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workshops.map((workshop: any) => (
                    <Card key={workshop.id} className="rounded-2xl shadow-lg border-none overflow-hidden relative group bg-white hover:shadow-2xl transition-all duration-500">
                      <div className={`h-1.5 ${workshop.color || 'bg-amber-500'}`}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="text-[8px] font-black text-accent uppercase tracking-widest mb-1 flex items-center gap-1">
                              <Star className="h-2.5 w-2.5 fill-current" /> {workshop.status || 'Active'}
                            </div>
                            <h3 className="text-base font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors">
                              {workshop.title}
                            </h3>
                          </div>
                          <div className="flex gap-1.5">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(workshop)} className="h-8 w-8 rounded-lg bg-slate-50 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                              <Edit3 className="h-3.5 w-3.5" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={(e) => handleDelete(e, workshop.id)} className="h-8 w-8 rounded-lg bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60">
                            <Calendar className="h-3.5 w-3.5 text-accent" /> {workshop.date}
                          </div>
                          {workshop.time && (
                            <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60">
                              <Clock className="h-3.5 w-3.5 text-accent" /> {workshop.time}
                            </div>
                          )}
                        </div>

                        {workshop.instructor && (
                          <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60 mb-4">
                            <User className="h-3.5 w-3.5 text-accent" /> {workshop.instructor}
                          </div>
                        )}

                        <p className="text-[9px] text-foreground/60 leading-relaxed italic line-clamp-2 mb-4">
                          {workshop.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-50">
                          <span className="text-[8px] font-black text-primary/20 uppercase tracking-[0.2em]">ID: {workshop.id.slice(0,8)}</span>
                          <div className="text-[10px] font-black text-primary/40 italic">Order: {workshop.order}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border-2 border-dashed border-primary/5 p-32 text-center flex flex-col items-center gap-6">
                  <GraduationCap className="h-12 w-12 text-primary/5" />
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">No Workshops Found</p>
                    <p className="text-[10px] text-muted-foreground mt-2 italic">Begin by adding an upcoming training session in the console.</p>
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
