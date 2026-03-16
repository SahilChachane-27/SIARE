
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
  Users,
  Search,
  Filter,
  Trash2,
  Mail,
  Phone,
  Building2,
  CheckCircle2,
  Clock,
  LayoutGrid,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const tiers = [
  'Individual Researcher',
  'Student Membership',
  'Institutional Membership',
  'Affiliate Membership'
];

export default function MembersManagement() {
  const { user, loading: userLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [tier, setTier] = useState('');
  const [status, setStatus] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');

  const membersQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'members'), orderBy('joinedAt', 'desc'));
  }, [db]);

  const { data: members, loading: membersLoading } = useCollection(membersQuery);

  useEffect(() => {
    if (!userLoading && !user) router.push('/admin/login');
  }, [user, userLoading, router]);

  const resetForm = () => {
    setEditingId(null);
    setName(''); 
    setEmail('');
    setPhone('');
    setInstitution('');
    setTier('');
    setStatus('active');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    const memberData = {
      name,
      email,
      phone,
      institution,
      tier,
      status,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      const docRef = doc(db, 'members', editingId);
      updateDoc(docRef, memberData)
        .then(() => {
          toast({ title: "Member Synchronized", description: `${name}'s record has been updated.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: docRef.path,
            operation: 'update',
            requestResourceData: memberData,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    } else {
      const colRef = collection(db, 'members');
      const newMember = {
        ...memberData,
        joinedAt: serverTimestamp(),
      };
      addDoc(colRef, newMember)
        .then(() => {
          toast({ title: "Scholar Enrolled", description: `New member "${name}" added to the society.` });
        })
        .catch(async (err) => {
          const permissionError = new FirestorePermissionError({
            path: colRef.path,
            operation: 'create',
            requestResourceData: newMember,
          });
          errorEmitter.emit('permission-error', permissionError);
        });
    }
    
    resetForm();
  };

  const handleEdit = (member: any) => {
    setEditingId(member.id);
    setName(member.name);
    setEmail(member.email);
    setPhone(member.phone || '');
    setInstitution(member.institution || '');
    setTier(member.tier || '');
    setStatus(member.status || 'active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string, name: string) => {
    if (!db || !window.confirm(`Are you sure you want to remove ${name} from the society?`)) return;

    const docRef = doc(db, 'members', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Record Expunged", description: `${name} removed from registry.` });
      })
      .catch(async (err) => {
        const permissionError = new FirestorePermissionError({
          path: docRef.path,
          operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  };

  const filteredMembers = useMemo(() => {
    if (!members) return [];
    return members.filter((m: any) => 
      (m.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.institution || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [members, searchTerm]);

  if (userLoading || !user) return null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" asChild className="rounded-2xl bg-white shadow-sm hover:bg-primary hover:text-white transition-all h-14 w-14">
                <Link href="/admin/dashboard"><ArrowLeft className="h-6 w-6" /></Link>
              </Button>
              <div>
                <h1 className="text-4xl font-black text-primary font-headline italic">
                  Member Directory
                </h1>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mt-2 ml-1">SIARE Global Scholarly Registry</p>
              </div>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/30" />
              <Input 
                placeholder="Search scholars by name, email, or university..." 
                className="pl-12 h-14 rounded-2xl bg-white border-none shadow-xl text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* ENROLLMENT CONSOLE */}
            <div className="lg:col-span-4" data-aos="fade-right">
              <Card className="rounded-[2.5rem] border-none shadow-2xl bg-white p-10 lg:sticky lg:top-32">
                <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
                  <h2 className="text-xl font-bold text-primary font-headline flex items-center gap-3 italic">
                    <Plus className="h-6 w-6 text-accent" />
                    {editingId ? 'Update Scholar' : 'Enroll New Member'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 px-4 rounded-xl">
                      Cancel
                    </Button>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest ml-1">Scholar Full Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Dr. Emily Watson" className="rounded-xl h-12 border-slate-100" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest ml-1">Email Address</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="emily@university.edu" className="rounded-xl h-12 border-slate-100" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest ml-1">Mobile Contact</label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 000 000 0000" className="rounded-xl h-12 border-slate-100" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest ml-1">Affiliated Institution</label>
                    <Input value={institution} onChange={(e) => setInstitution(e.target.value)} placeholder="e.g. Stanford University" className="rounded-xl h-12 border-slate-100" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest ml-1">Enrollment Tier</label>
                      <Select value={tier} onValueChange={setTier} required>
                        <SelectTrigger className="rounded-xl h-12 border-slate-100">
                          <SelectValue placeholder="Select Tier" />
                        </SelectTrigger>
                        <SelectContent>
                          {tiers.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-primary/40 tracking-widest ml-1">Account Status</label>
                      <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger className="rounded-xl h-12 border-slate-100">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="expired">Expired</SelectItem>
                          <SelectItem value="pending">Verification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-14 bg-primary text-accent font-black uppercase text-xs tracking-[0.2em] rounded-2xl shadow-xl hover:scale-[1.02] transition-transform mt-4">
                    {editingId ? <><Edit3 className="mr-3 h-5 w-5" /> Sync Record</> : <><Plus className="mr-3 h-5 w-5" /> Enroll Scholar</>}
                  </Button>
                </form>
              </Card>
            </div>

            {/* DIRECTORY VIEW */}
            <div className="lg:col-span-8 space-y-10" data-aos="fade-left">
              <div className="flex justify-between items-center px-6">
                <h2 className="text-xl font-bold text-primary font-headline italic flex items-center gap-4">
                  <LayoutGrid className="h-6 w-6 text-accent" />
                  Registry List {members && <span className="text-xs font-black bg-primary/5 px-3 py-1 rounded-full text-primary/40 ml-2">({members.length})</span>}
                </h2>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 bg-white px-4 py-2 rounded-xl shadow-sm">
                  <Filter className="h-3 w-3" /> Sorting: Joined Desc
                </div>
              </div>
              
              {membersLoading ? (
                <div className="flex flex-col items-center justify-center p-40 bg-white rounded-[2.5rem] shadow-sm gap-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                  <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.4em]">Synchronizing Directory...</p>
                </div>
              ) : filteredMembers.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredMembers.map((member: any) => (
                    <Card key={member.id} className="rounded-[2rem] shadow-xl border-none overflow-hidden bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group">
                      <div className="flex flex-col md:flex-row">
                        <div className={`w-full md:w-3 ${
                          member.status === 'active' ? 'bg-green-500' : 
                          member.status === 'expired' ? 'bg-red-500' : 'bg-amber-500'
                        }`}></div>
                        <div className="p-8 flex-1">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                            <div className="flex-1 min-w-0 space-y-4">
                              <div className="flex flex-wrap items-center gap-4">
                                <h3 className="text-2xl font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors">{member.name}</h3>
                                <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm ${
                                  member.status === 'active' ? 'bg-green-50 text-green-700' : 
                                  member.status === 'expired' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
                                }`}>
                                  {member.status}
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="space-y-1.5">
                                  <p className="text-[9px] font-black uppercase text-primary/20 tracking-widest flex items-center gap-2"><Mail className="h-3 w-3" /> Email Contact</p>
                                  <p className="text-sm font-bold text-primary/70 truncate">{member.email}</p>
                                </div>
                                <div className="space-y-1.5">
                                  <p className="text-[9px] font-black uppercase text-primary/20 tracking-widest flex items-center gap-2"><Building2 className="h-3 w-3" /> Institution</p>
                                  <p className="text-sm font-bold text-primary/70 truncate">{member.institution || '—'}</p>
                                </div>
                                <div className="space-y-1.5">
                                  <p className="text-[9px] font-black uppercase text-primary/20 tracking-widest flex items-center gap-2"><ShieldCheck className="h-3 w-3" /> Membership</p>
                                  <p className="text-[10px] font-black text-accent uppercase tracking-tighter">{member.tier}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-3 md:pt-2">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleEdit(member)} 
                                className="h-12 w-12 rounded-2xl bg-slate-50 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                                title="Edit Record"
                              >
                                <Edit3 className="h-5 w-5" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleDelete(member.id, member.name)} 
                                className="h-12 w-12 rounded-2xl bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                title="Enrollment Termination"
                              >
                                <Trash2 className="h-5 w-5" />
                              </Button>
                            </div>
                          </div>

                          <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                              <span className="text-[8px] font-black text-primary/20 uppercase tracking-[0.2em]">Scholar ID: {member.id.slice(0,12)}</span>
                              {member.phone && (
                                <span className="flex items-center gap-2 text-[9px] font-bold text-primary/40"><Phone className="h-3 w-3 text-accent" /> {member.phone}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-[9px] font-bold text-primary/30 italic">
                              <Clock className="h-3 w-3" /> Joined: {member.joinedAt?.seconds ? new Date(member.joinedAt.seconds * 1000).toLocaleDateString() : 'Pending'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-[3rem] border-2 border-dashed border-primary/5 p-48 text-center flex flex-col items-center gap-8 shadow-sm">
                  <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center text-primary/5">
                    <Users className="h-10 w-10" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary/30 uppercase tracking-[0.3em] italic">The Society Registry is Empty</p>
                    <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-widest font-medium opacity-40">Begin by enrolling your first academic member.</p>
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
