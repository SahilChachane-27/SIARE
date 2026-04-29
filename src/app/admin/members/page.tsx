'use client';

import { useState, useEffect, useMemo } from 'react';
import { getMembers, createMember, updateMember, deleteMember } from '@/actions/members';
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


const tiers = [
  'Individual Researcher',
  'Student Membership',
  'Institutional Membership',
  'Affiliate Membership'
];

export default function MembersManagement() {
  const { toast } = useToast();

  const [members, setMembers] = useState<any[]>([]);
  const [membersLoading, setMembersLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [tier, setTier] = useState('');
  const [status, setStatus] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');

  const loadData = async () => {
    try {
      setMembersLoading(true);
      const data = await getMembers();
      setMembers(data);
    } catch (e) {
      console.error(e);
      toast({ variant: 'destructive', title: 'Failed to load members' });
    } finally {
      setMembersLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setName(''); 
    setEmail('');
    setPhone('');
    setInstitution('');
    setTier('');
    setStatus('active');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const memberData = {
      name,
      email,
      phone,
      institution,
      tier,
      status,
    };

    try {
      if (editingId) {
        await updateMember(Number(editingId), memberData);
        toast({ title: "Member Synchronized", description: `${name}'s record has been updated.` });
      } else {
        await createMember(memberData);
        toast({ title: "Scholar Enrolled", description: `New member "${name}" added to the society.` });
      }
      resetForm();
      loadData();
    } catch (err) {
      console.error(err);
      toast({ variant: 'destructive', title: "Error", description: "Failed to save member." });
    }
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

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to remove ${name} from the society?`)) return;

    try {
      await deleteMember(Number(id));
      toast({ title: "Record Expunged", description: `${name} removed from registry.` });
      loadData();
    } catch (err) {
      toast({ variant: 'destructive', title: "Error", description: "Failed to delete member." });
    }
  };

  const filteredMembers = useMemo(() => {
    if (!members) return [];
    return members.filter((m: any) => 
      (m.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.institution || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [members, searchTerm]);



  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild className="rounded-xl bg-white shadow-sm hover:bg-primary hover:text-white transition-all h-12 w-12">
                <Link href="/admin/dashboard"><ArrowLeft className="h-5 w-5" /></Link>
              </Button>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-primary font-headline italic">
                  Member Directory
                </h1>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/40 mt-1 ml-1">SIARE Global Scholarly Registry</p>
              </div>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30" />
              <Input 
                placeholder="Search scholars..." 
                className="pl-11 h-12 rounded-xl bg-white border-none shadow-lg text-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* ENROLLMENT CONSOLE */}
            <div className="lg:col-span-4" data-aos="fade-right">
              <Card className="rounded-[1.5rem] border-none shadow-2xl bg-white p-8 lg:sticky lg:top-32">
                <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
                  <h2 className="text-lg font-bold text-primary font-headline flex items-center gap-2 italic">
                    <Plus className="h-5 w-5 text-accent" />
                    {editingId ? 'Update Scholar' : 'Enroll New Member'}
                  </h2>
                  {editingId && (
                    <Button variant="ghost" size="sm" onClick={resetForm} className="text-[9px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 px-3 rounded-lg">
                      Cancel
                    </Button>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Scholar Full Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Dr. Emily Watson" className="rounded-xl h-11 border-slate-100 text-xs" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Email Address</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="emily@university.edu" className="rounded-xl h-11 border-slate-100 text-xs" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Mobile Contact</label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 000 000 0000" className="rounded-xl h-11 border-slate-100 text-xs" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Affiliated Institution</label>
                    <Input value={institution} onChange={(e) => setInstitution(e.target.value)} placeholder="e.g. Stanford University" className="rounded-xl h-11 border-slate-100 text-xs" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Enrollment Tier</label>
                      <Select value={tier} onValueChange={setTier} required>
                        <SelectTrigger className="rounded-xl h-11 border-slate-100 text-xs">
                          <SelectValue placeholder="Select Tier" />
                        </SelectTrigger>
                        <SelectContent>
                          {tiers.map((t) => (
                            <SelectItem key={t} value={t} className="text-xs">{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-primary/40 tracking-widest ml-1">Account Status</label>
                      <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger className="rounded-xl h-11 border-slate-100 text-xs">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active" className="text-xs">Active</SelectItem>
                          <SelectItem value="expired" className="text-xs">Expired</SelectItem>
                          <SelectItem value="pending" className="text-xs">Verification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-primary text-accent font-black uppercase text-[10px] tracking-[0.2em] rounded-xl shadow-xl hover:scale-[1.02] transition-transform mt-4">
                    {editingId ? <><Edit3 className="mr-2 h-4 w-4" /> Sync Record</> : <><Plus className="mr-2 h-4 w-4" /> Enroll Scholar</>}
                  </Button>
                </form>
              </Card>
            </div>

            {/* DIRECTORY VIEW */}
            <div className="lg:col-span-8 space-y-8" data-aos="fade-left">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-bold text-primary font-headline italic flex items-center gap-3">
                  <LayoutGrid className="h-5 w-5 text-accent" />
                  Registry List {members && <span className="text-xs font-black bg-primary/5 px-2 py-0.5 rounded-full text-primary/40 ml-1">({members.length})</span>}
                </h2>
                <div className="flex items-center gap-3 text-[8px] font-black uppercase tracking-[0.2em] text-primary/30 bg-white px-3 py-1.5 rounded-lg shadow-sm">
                  <Filter className="h-2.5 w-2.5" /> Sorting: Joined Desc
                </div>
              </div>
              
              {membersLoading ? (
                <div className="flex flex-col items-center justify-center p-32 bg-white rounded-[1.5rem] shadow-sm gap-6">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                  <p className="text-[9px] font-black text-primary/20 uppercase tracking-[0.4em]">Synchronizing Directory...</p>
                </div>
              ) : filteredMembers.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {filteredMembers.map((member: any) => (
                    <Card key={member.id} className="rounded-[1.5rem] shadow-xl border-none overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 group">
                      <div className="flex flex-col md:flex-row">
                        <div className={`w-full md:w-2 ${
                          member.status === 'active' ? 'bg-green-500' : 
                          member.status === 'expired' ? 'bg-red-500' : 'bg-amber-500'
                        }`}></div>
                        <div className="p-6 md:p-8 flex-1">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                            <div className="flex-1 min-w-0 space-y-3">
                              <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-xl font-bold text-primary font-headline italic leading-tight group-hover:text-accent transition-colors">{member.name}</h3>
                                <div className={`px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest shadow-sm ${
                                  member.status === 'active' ? 'bg-green-50 text-green-700' : 
                                  member.status === 'expired' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
                                }`}>
                                  {member.status}
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                <div className="space-y-1">
                                  <p className="text-[8px] font-black uppercase text-primary/20 tracking-widest flex items-center gap-1.5"><Mail className="h-2.5 w-2.5" /> Email</p>
                                  <p className="text-xs font-bold text-primary/70 truncate">{member.email}</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-[8px] font-black uppercase text-primary/20 tracking-widest flex items-center gap-1.5"><Building2 className="h-2.5 w-2.5" /> Institution</p>
                                  <p className="text-xs font-bold text-primary/70 truncate">{member.institution || '—'}</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-[8px] font-black uppercase text-primary/20 tracking-widest flex items-center gap-1.5"><ShieldCheck className="h-2.5 w-2.5" /> Membership</p>
                                  <p className="text-[9px] font-black text-accent uppercase tracking-tighter truncate">{member.tier}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleEdit(member)} 
                                className="h-10 w-10 rounded-xl bg-slate-50 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                                title="Edit Record"
                              >
                                <Edit3 className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleDelete(member.id, member.name)} 
                                className="h-10 w-10 rounded-xl bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                title="Enrollment Termination"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="text-[7px] font-black text-primary/20 uppercase tracking-[0.2em]">ID: {member.id}</span>
                              {member.phone && (
                                <span className="flex items-center gap-1.5 text-[8px] font-bold text-primary/40"><Phone className="h-2.5 w-2.5 text-accent" /> {member.phone}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 text-[8px] font-bold text-primary/30 italic">
                              <Clock className="h-2.5 w-2.5" /> {member.joinedAt ? new Date(member.joinedAt).toLocaleDateString() : 'Pending'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-[2rem] border-2 border-dashed border-primary/5 p-32 text-center flex flex-col items-center gap-6 shadow-sm">
                  <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center text-primary/5">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/30 uppercase tracking-[0.3em] italic">The Society Registry is Empty</p>
                    <p className="text-[9px] text-muted-foreground mt-2 uppercase tracking-widest font-medium opacity-40">Begin by enrolling your first academic member.</p>
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
