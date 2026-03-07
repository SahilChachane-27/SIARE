
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
  UserPlus,
  Star,
  ListChecks,
  ArrowUpDown,
  LayoutGrid
} from 'lucide-react';
import Link from 'next/link';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function MembershipManagement() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('Users');
  const [priceINR, setPriceINR] = useState('');
  const [priceUSD, setPriceUSD] = useState('');
  const [description, setDescription] = useState('');
  const [benefits, setBenefits] = useState('');
  const [order, setOrder] = useState('0');

  const tiersQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'membershipTiers'), orderBy('order', 'asc'));
  }, [db]);

  const { data: tiers, loading: tiersLoading } = useCollection(tiersQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  const resetForm = () => {
    setEditingId(null);
    setName(''); 
    setIcon('Users');
    setPriceINR('');
    setPriceUSD('');
    setDescription('');
    setBenefits('');
    setOrder('0');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    const tierData = {
      name,
      icon,
      priceINR,
      priceUSD,
      description,
      benefits: benefits.split('\n').map(b => b.trim()).filter(Boolean),
      order: parseInt(order) || 0,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      const docRef = doc(db, 'membershipTiers', editingId);
      updateDoc(docRef, tierData)
        .then(() => {
          toast({ title: "Tier Updated", description: `${name} has been synchronized.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'update',
            requestResourceData: tierData,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    } else {
      const colRef = collection(db, 'membershipTiers');
      const newTier = {
        ...tierData,
        createdAt: serverTimestamp(),
      };
      addDoc(colRef, newTier)
        .then(() => {
          toast({ title: "Tier Cataloged", description: `New membership tier "${name}" is now live.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: colRef.path,
            operation: 'create',
            requestResourceData: newTier,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    }
    
    resetForm();
  };

  const handleEdit = (tier: any) => {
    setEditingId(tier.id);
    setName(tier.name);
    setIcon(tier.icon || 'Users');
    setPriceINR(tier.priceINR);
    setPriceUSD(tier.priceUSD);
    setDescription(tier.description || '');
    setBenefits(Array.isArray(tier.benefits) ? tier.benefits.join('\n') : '');
    setOrder(tier.order?.toString() || '0');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!db || !id) return;
    
    if (window.confirm("Are you sure you want to permanently remove this membership tier?")) {
      const docRef = doc(db, 'membershipTiers', id);
      deleteDoc(docRef)
        .then(() => {
          toast({ title: "Tier Removed", description: "The membership record has been deleted." });
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
          
          <div className="flex items-center gap-4 mb-12">
            <Button variant="ghost" size="icon" asChild className="rounded-full bg-white shadow-sm">
              <Link href="/admin/dashboard"><ArrowLeft className="h-5 w-5" /></Link>
            </Button>
            <div>
              <h1 className="text-3xl font-black text-primary font-headline italic">
                Membership Tier Manager
              </h1>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Dynamic Membership Catalog</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Management Console */}
            <div className="lg:col-span-4" data-aos="fade-right">
              <Card className="rounded-2xl border-none shadow-2xl bg-white p-8 lg:sticky lg:top-32">
                <h2 className="text-lg font-bold text-primary font-headline flex items-center gap-2 italic mb-8">
                  <UserPlus className="h-5 w-5 text-accent" />
                  {editingId ? 'Modify Tier' : 'Add Tier'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Tier Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Student Membership" className="rounded-xl" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Lucide Icon Name</label>
                    <Input value={icon} onChange={(e) => setIcon(e.target.value)} placeholder="e.g. GraduationCap, Users, Landmark" className="rounded-xl" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Price INR</label>
                      <Input value={priceINR} onChange={(e) => setPriceINR(e.target.value)} required placeholder="₹700" className="rounded-xl" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Price USD</label>
                      <Input value={priceUSD} onChange={(e) => setPriceUSD(e.target.value)} required placeholder="$15" className="rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Description</label>
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short tagline..." className="rounded-xl" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Benefits (One per line)</label>
                    <Textarea value={benefits} onChange={(e) => setBenefits(e.target.value)} required placeholder="Discounted fees&#10;Certificate" className="rounded-xl min-h-[120px]" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-[0.2em] ml-1">Display Order</label>
                    <Input type="number" value={order} onChange={(e) => setOrder(e.target.value)} className="rounded-xl" />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-primary text-accent font-black uppercase text-xs tracking-widest rounded-xl shadow-xl hover:scale-[1.02] transition-transform">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Sync Changes</> : <><Plus className="mr-2 h-4 w-4" /> Create Tier</>}
                  </Button>
                  {editingId && (
                    <Button type="button" variant="ghost" onClick={resetForm} className="w-full text-xs font-bold text-red-500 hover:bg-red-50">
                      Cancel Edit
                    </Button>
                  )}
                </form>
              </Card>
            </div>

            {/* List View */}
            <div className="lg:col-span-8 space-y-6" data-aos="fade-left">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-bold text-primary font-headline italic flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-accent" />
                  Active Tiers {tiers && <span className="text-xs font-black bg-primary/5 px-2 py-0.5 rounded-full text-primary/40 ml-1">({tiers.length})</span>}
                </h2>
              </div>
              
              {tiersLoading ? (
                <div className="flex justify-center p-32 bg-white rounded-2xl">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                </div>
              ) : (tiers && tiers.length > 0) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tiers.map((tier: any) => (
                    <Card key={tier.id} className="rounded-2xl shadow-lg border-none overflow-hidden bg-white hover:shadow-2xl transition-all p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-lg font-bold text-primary font-headline italic leading-tight">{tier.name}</h3>
                          <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1 tracking-widest">{tier.description}</p>
                        </div>
                        <div className="flex gap-1.5">
                          <Button variant="ghost" size="icon" onClick={() => handleEdit(tier)} className="h-8 w-8 rounded-lg bg-slate-50 text-primary">
                            <Edit3 className="h-3.5 w-3.5" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={(e) => handleDelete(e, tier.id)} className="h-8 w-8 rounded-lg bg-slate-50 text-red-500">
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                        <div className="text-center">
                          <div className="text-[8px] font-black text-primary/40 uppercase tracking-widest">INR</div>
                          <div className="text-xl font-black text-primary italic">{tier.priceINR}</div>
                        </div>
                        <div className="text-center border-l border-slate-200">
                          <div className="text-[8px] font-black text-primary/40 uppercase tracking-widest">USD</div>
                          <div className="text-xl font-black text-primary italic">{tier.priceUSD}</div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {tier.benefits?.slice(0, 3).map((benefit: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-primary/70">
                            <ListChecks className="h-3 w-3 text-accent shrink-0" />
                            <span className="truncate">{benefit}</span>
                          </li>
                        ))}
                        {tier.benefits?.length > 3 && <li className="text-[8px] text-primary/30 font-black italic">+{tier.benefits.length - 3} more benefits</li>}
                      </ul>

                      <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                        <span className="text-[8px] font-black text-primary/20 uppercase tracking-[0.2em]">Order: {tier.order}</span>
                        <div className="text-[10px] font-black text-accent flex items-center gap-1 uppercase tracking-tighter">
                          <Star className="h-3 w-3 fill-current" /> {tier.icon}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border-2 border-dashed border-primary/5 p-32 text-center">
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">No Membership Tiers Found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
