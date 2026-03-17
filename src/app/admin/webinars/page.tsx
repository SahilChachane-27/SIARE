
'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  ArrowLeft, 
  Edit3, 
  Calendar,
  Star,
  Video,
  Clock,
  User,
  ExternalLink,
  LayoutGrid,
  Trash2,
  Image as ImageIcon,
  X
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function WebinarsManagement() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [joinLink, setJoinLink] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Registration Open');
  const [color, setColor] = useState('bg-purple-500');
  const [order, setOrder] = useState('0');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);

  const webinarsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'webinars'), orderBy('order', 'asc'));
  }, [db]);

  const { data: webinars, loading: webinarsLoading } = useCollection(webinarsQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

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
    setTitle(''); 
    setDate('');
    setTime('');
    setSpeaker('');
    setJoinLink('');
    setDescription('');
    setStatus('Registration Open');
    setColor('bg-purple-500');
    setOrder('0');
    setImageUrl(null);
    setIsFeatured(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    const webinarData = {
      title,
      date,
      time,
      speaker,
      joinLink,
      description,
      status,
      color,
      order: parseInt(order) || 0,
      imageUrl,
      isFeatured,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      const docRef = doc(db, 'webinars', editingId);
      updateDoc(docRef, webinarData)
        .then(() => {
          toast({ title: "Update Success", description: `Webinar "${title}" has been updated.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'update',
            requestResourceData: webinarData,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    } else {
      const colRef = collection(db, 'webinars');
      const newWebinar = {
        ...webinarData,
        createdAt: serverTimestamp(),
      };
      addDoc(colRef, newWebinar)
        .then(() => {
          toast({ title: "Webinar Cataloged", description: `New webinar "${title}" is now active.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: colRef.path,
            operation: 'create',
            requestResourceData: newWebinar,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    }
    
    resetForm();
  };

  const handleEdit = (webinar: any) => {
    setEditingId(webinar.id);
    setTitle(webinar.title);
    setDate(webinar.date);
    setTime(webinar.time || '');
    setSpeaker(webinar.speaker || '');
    setJoinLink(webinar.joinLink || '');
    setDescription(webinar.description || '');
    setStatus(webinar.status || 'Registration Open');
    setColor(webinar.color || 'bg-purple-500');
    setOrder(webinar.order?.toString() || '0');
    setImageUrl(webinar.imageUrl || null);
    setIsFeatured(webinar.isFeatured || false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string, title: string) => {
    if (!db || !window.confirm(`Are you sure you want to delete webinar "${title}"?`)) return;

    const docRef = doc(db, 'webinars', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Webinar Deleted", description: `"${title}" has been removed.` });
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
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors">
                <Link href="/admin/dashboard"><ArrowLeft className="h-5 w-5" /></Link>
              </Button>
              <div>
                <h1 className="text-3xl font-black text-primary font-headline italic">
                  Webinar Manager
                </h1>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Online Lectures & Webinars</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Management Console (Form) */}
            <div className="lg:col-span-4" data-aos="fade-right">
              <Card className="rounded-2xl border-none shadow-2xl bg-white p-8 lg:sticky lg:top-32">
                <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
                  <h2 className="text-lg font-bold text-primary font-headline flex items-center gap-2 italic">
                    <Video className="h-5 w-5 text-accent" />
                    {editingId ? 'Modify Session' : 'Add Webinar'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50">
                      Cancel
                    </Button>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Webinar Title</label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. Future of AI in Research" className="rounded-xl border-slate-100 h-11 focus:ring-accent/20" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Cover Image (Max 1MB)</label>
                    <div className="flex flex-col gap-3">
                      {imageUrl ? (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden group shadow-md bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                          <Image src={imageUrl} alt="Preview" fill className="object-cover" />
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
                          className="w-full aspect-video border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-all group"
                        >
                          <ImageIcon className="h-8 w-8 text-primary/10 group-hover:text-accent/40 transition-colors" />
                          <span className="text-[8px] font-black text-primary/30 uppercase tracking-widest">Select Cover Image</span>
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
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Date</label>
                      <Input value={date} onChange={(e) => setDate(e.target.value)} required placeholder="20 June 2025" className="rounded-xl border-slate-100 h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Time</label>
                      <Input value={time} onChange={(e) => setTime(e.target.value)} placeholder="4:00 PM IST" className="rounded-xl border-slate-100 h-11" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Key Speaker</label>
                    <Input value={speaker} onChange={(e) => setSpeaker(e.target.value)} required placeholder="Prof. Jane Doe" className="rounded-xl border-slate-100 h-11" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Joining/Registration Link</label>
                    <Input type="url" value={joinLink} onChange={(e) => setJoinLink(e.target.value)} placeholder="https://zoom.us/..." className="rounded-xl border-slate-100 h-11" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Short Description</label>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Brief summary of the session..." className="rounded-xl border-slate-100 min-h-[100px]" />
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

                  <Button type="submit" className="w-full h-12 bg-primary text-accent font-black uppercase text-xs tracking-widest rounded-xl shadow-xl hover:scale-[1.02] transition-transform mt-4">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Sync Changes</> : <><Plus className="mr-2 h-4 w-4" /> Schedule Webinar</>}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Live List */}
            <div className="lg:col-span-8 space-y-6" data-aos="fade-left">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-bold text-primary font-headline italic flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-accent" />
                  Active Webinars {webinars && <span className="text-xs font-black bg-primary/5 px-2 py-0.5 rounded-full text-primary/40 ml-1">({webinars.length})</span>}
                </h2>
              </div>
              
              {webinarsLoading ? (
                <div className="flex flex-col items-center justify-center p-32 bg-white rounded-2xl border-none shadow-sm gap-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                  <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.3em]">Updating session list...</p>
                </div>
              ) : (webinars && webinars.length > 0) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {webinars.map((webinar: any) => (
                    <Card key={webinar.id} className="rounded-2xl shadow-lg border-none overflow-hidden relative group bg-white hover:shadow-2xl transition-all duration-500">
                      <div className={`h-1.5 ${webinar.color || 'bg-purple-500'}`}></div>
                      
                      {webinar.imageUrl && (
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image src={webinar.imageUrl} alt={webinar.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                          <div className="min-w-0 flex-1">
                            <div className="text-[8px] font-black text-accent uppercase tracking-widest mb-1 flex items-center gap-1">
                              <Star className="h-2.5 w-2.5 fill-current" /> {webinar.status || 'Active'}
                            </div>
                            <h3 className="text-base font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors break-words">
                              {webinar.title}
                            </h3>
                          </div>
                          <div className="flex gap-1.5 shrink-0">
                            <Button 
                              type="button"
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleEdit(webinar)} 
                              className="h-8 w-8 rounded-lg bg-slate-50 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                              title="Edit Session"
                            >
                              <Edit3 className="h-3.5 w-3.5" />
                            </Button>
                            <Button 
                              type="button" 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleDelete(webinar.id, webinar.title)} 
                              className="h-8 w-8 rounded-lg bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                              title="Delete Session"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60">
                            <Calendar className="h-3.5 w-3.5 text-accent" /> {webinar.date}
                          </div>
                          {webinar.time && (
                            <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60">
                              <Clock className="h-3.5 w-3.5 text-accent" /> {webinar.time}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-bold text-primary/60 mb-4">
                          <User className="h-3.5 w-3.5 text-accent" /> {webinar.speaker}
                        </div>

                        {webinar.joinLink && (
                          <div className="mb-4">
                            <Button variant="link" asChild className="p-0 h-auto text-[10px] font-black uppercase text-accent hover:text-primary">
                              <a href={webinar.joinLink} target="_blank" className="flex items-center gap-1.5">
                                Join/Reg URL <ExternalLink className="h-2.5 w-2.5" />
                              </a>
                            </Button>
                          </div>
                        )}

                        <p className="text-[9px] text-foreground/60 leading-relaxed italic line-clamp-2 mb-4">
                          {webinar.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 mt-2 border-t border-slate-50 gap-2">
                          <span className="text-[8px] font-black text-primary/20 uppercase tracking-[0.2em]">Session ID: {webinar.id.slice(0,8)}</span>
                          <div className="text-[10px] font-black text-primary/40 italic">Order: {webinar.order}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border-2 border-dashed border-primary/5 p-32 text-center flex flex-col items-center gap-6">
                  <Video className="h-12 w-12 text-primary/5" />
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">No Webinars Found</p>
                    <p className="text-[10px] text-muted-foreground mt-2 italic">Begin by scheduling an online session in the console.</p>
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
