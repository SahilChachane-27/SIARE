'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser, useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Plus, 
  ArrowLeft, 
  Edit3, 
  CreditCard,
  Star,
  ListChecks,
  ArrowUpDown,
  Trash2
} from 'lucide-react';
import Link from 'next/link';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function PricingManagement() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [priceINR, setPriceINR] = useState('');
  const [priceUSD, setPriceUSD] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [cta, setCta] = useState('Get Started');
  const [highlight, setHighlight] = useState(false);
  const [tag, setTag] = useState('');
  const [order, setOrder] = useState('0');

  const plansQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'pricingPlans'), orderBy('order', 'asc'));
  }, [db]);

  const { data: plans, loading: plansLoading } = useCollection(plansQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  const resetForm = () => {
    setEditingId(null);
    setName(''); 
    setPriceINR('');
    setPriceUSD('');
    setDescription('');
    setFeatures('');
    setCta('Get Started');
    setHighlight(false);
    setTag('');
    setOrder('0');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    const planData = {
      name,
      priceINR,
      priceUSD,
      description,
      features: features.split('\n').map(f => f.trim()).filter(Boolean),
      cta,
      highlight,
      tag,
      order: parseInt(order) || 0,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      const docRef = doc(db, 'pricingPlans', editingId);
      updateDoc(docRef, planData)
        .then(() => {
          toast({ title: "Plan Updated", description: `${name} has been updated successfully.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'update',
            requestResourceData: planData,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    } else {
      const colRef = collection(db, 'pricingPlans');
      const newPlan = {
        ...planData,
        createdAt: serverTimestamp(),
      };
      addDoc(colRef, newPlan)
        .then(() => {
          toast({ title: "Plan Created", description: `${name} is now live.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: colRef.path,
            operation: 'create',
            requestResourceData: newPlan,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    }
    
    resetForm();
  };

  const handleEdit = (plan: any) => {
    setEditingId(plan.id);
    setName(plan.name);
    setPriceINR(plan.priceINR);
    setPriceUSD(plan.priceUSD);
    setDescription(plan.description || '');
    setFeatures(Array.isArray(plan.features) ? plan.features.join('\n') : '');
    setCta(plan.cta || 'Get Started');
    setHighlight(plan.highlight || false);
    setTag(plan.tag || '');
    setOrder(plan.order?.toString() || '0');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string, name: string) => {
    if (!db || !window.confirm(`Are you sure you want to delete "${name}" plan?`)) return;

    const docRef = doc(db, 'pricingPlans', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Plan Deleted", description: `${name} has been removed.` });
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
              {editingId ? 'Edit Pricing Plan' : 'Subscription Plans'}
            </h1>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1" data-aos="fade-up">
              <Card className="rounded-funky border-none shadow-2xl p-6 md:p-8 lg:sticky lg:top-32 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-primary italic">
                    {editingId ? 'Update Tier' : 'Add New Tier'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-primary/40 hover:text-primary">
                      Cancel
                    </Button>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Plan Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Standard Plan" className="rounded-xl h-12" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Price INR</label>
                      <Input value={priceINR} onChange={(e) => setPriceINR(e.target.value)} required placeholder="₹80,000" className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Price USD</label>
                      <Input value={priceUSD} onChange={(e) => setPriceUSD(e.target.value)} required placeholder="$878" className="rounded-xl h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Brief Description</label>
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Optimized for editorial workflows..." className="rounded-xl h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Features (One per line)</label>
                    <Textarea value={features} onChange={(e) => setFeatures(e.target.value)} required placeholder="OJS Installation&#10;DOI Support&#10;Technical Support" className="rounded-xl min-h-[150px]" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Button Text</label>
                      <Input value={cta} onChange={(e) => setCta(e.target.value)} placeholder="Get Started" className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Display Order</label>
                      <Input type="number" value={order} onChange={(e) => setOrder(e.target.value)} className="rounded-xl h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest">Tag (e.g. Recommended)</label>
                    <Input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Recommended" className="rounded-xl h-12" />
                  </div>

                  <div className="flex items-center space-x-3 py-2 bg-secondary/30 p-4 rounded-xl border border-primary/5">
                    <Checkbox 
                      id="highlight" 
                      checked={highlight} 
                      onCheckedChange={(checked) => setHighlight(checked as boolean)}
                      className="border-primary/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <label 
                      htmlFor="highlight" 
                      className="text-[10px] font-bold text-primary uppercase tracking-wider cursor-pointer"
                    >
                      Highlight Plan
                    </label>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground font-bold rounded-funky shadow-lg hover:scale-105 transition-transform text-sm">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Update Plan</> : <><Plus className="mr-2 h-4 w-4" /> Create Plan</>}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-3 space-y-8" data-aos="fade-left">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-primary italic">Active Plans {plans && `(${plans.length})`}</h2>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
                  <ArrowUpDown className="h-3 w-3" /> Sorting by Order
                </div>
              </div>
              
              {plansLoading ? (
                <div className="flex justify-center p-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>
              ) : (plans && plans.length > 0) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                  {plans.map((plan: any) => (
                    <Card key={plan.id} className={`rounded-funky shadow-xl border-none overflow-hidden relative group transition-all duration-500 ${plan.highlight ? 'ring-2 ring-accent ring-offset-2' : 'bg-white'}`}>
                      {plan.tag && (
                        <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-tighter z-10">
                          {plan.tag}
                        </div>
                      )}
                      
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-xl font-bold text-primary font-headline italic">{plan.name}</h3>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1 tracking-widest">{plan.description}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(plan)} className="h-8 w-8 rounded-full bg-slate-50 text-primary hover:bg-accent hover:text-white">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDelete(plan.id, plan.name)} className="h-8 w-8 rounded-full bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                          <div>
                            <div className="text-[8px] font-black text-primary/40 uppercase tracking-widest mb-1">Domestic</div>
                            <div className="text-2xl font-black text-primary italic">{plan.priceINR}</div>
                          </div>
                          <div className="border-l border-slate-200 pl-4">
                            <div className="text-[8px] font-black text-primary/40 uppercase tracking-widest mb-1">Global</div>
                            <div className="text-2xl font-black text-primary italic">{plan.priceUSD}</div>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-xs font-bold text-primary/70">
                              <ListChecks className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                          <span className="text-[10px] font-black text-primary/20 uppercase tracking-[0.2em]">Order: {plan.order}</span>
                          {plan.highlight && (
                            <div className="flex items-center gap-1 text-[10px] font-black text-accent uppercase tracking-widest">
                              <Star className="h-3 w-3 fill-current" /> Highlighted
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="rounded-funky border-dashed border-2 border-primary/10 p-20 text-center">
                  <CreditCard className="h-12 w-12 text-primary/10 mx-auto mb-4" />
                  <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs italic">No dynamic plans found. Add your first subscription tier.</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
