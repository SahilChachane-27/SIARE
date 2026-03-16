'use client';

import { useUser, useAuth, useFirestore, useCollection } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  BookOpen, 
  Plus, 
  LogOut, 
  Activity, 
  ChevronRight,
  Clock,
  Globe,
  CreditCard,
  Presentation,
  CheckCircle2,
  Bell,
  History,
  UserPlus,
  Trash2,
  Mail,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { collection, query, orderBy, limit, doc, deleteDoc } from 'firebase/firestore';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function AdminDashboard() {
  const { user, loading } = useUser();
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  // Fetch all journals for stats
  const journalsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'), orderBy('createdAt', 'desc'));
  }, [db]);

  const { data: journals, loading: journalsLoading } = useCollection(journalsQuery);

  // Fetch all conferences for stats
  const confsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'conferences'));
  }, [db]);

  const { data: conferences, loading: confsLoading } = useCollection(confsQuery);

  // Fetch all members for stats
  const membersQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'members'));
  }, [db]);
  const { data: members, loading: membersLoading } = useCollection(membersQuery);

  // Fetch recent 5 journals for activity list
  const recentQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'), orderBy('createdAt', 'desc'), limit(5));
  }, [db]);

  const { data: recentJournals, loading: recentLoading } = useCollection(recentQuery);

  // Fetch count of pending inquiries
  const inquiriesQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'inquiries'));
  }, [db]);
  const { data: inquiries } = useCollection(inquiriesQuery);
  const pendingInquiriesCount = inquiries?.filter((i: any) => i.status === 'pending').length || 0;

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  const handleLogout = () => {
    if (auth) {
      auth.signOut();
      router.push('/admin/login');
    }
  };

  const handleDeleteJournal = (id: string, name: string) => {
    if (!db || !window.confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) return;

    const docRef = doc(db, 'journals', id);
    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Journal Deleted", description: `"${name}" has been removed from the system.` });
      })
      .catch(async (err) => {
        const permissionError = new FirestorePermissionError({
          path: docRef.path,
          operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  };

  const stats = useMemo(() => {
    const hostedCount = journals?.length || 0;
    const confCount = conferences?.length || 0;
    const memberCount = members?.length || 0;

    return [
      { 
        title: "Active Events", 
        count: confsLoading ? "..." : confCount.toString(), 
        icon: Presentation, 
        color: "bg-amber-500/10 text-amber-600",
        desc: "Upcoming gatherings"
      },
      { 
        title: "Proceedings", 
        count: journalsLoading ? "..." : hostedCount.toString(), 
        icon: BookOpen, 
        color: "bg-blue-500/10 text-blue-600",
        desc: "Published series"
      },
      { 
        title: "Total Members", 
        count: membersLoading ? "..." : memberCount.toString(), 
        icon: Users, 
        color: "bg-green-500/10 text-green-600",
        desc: "Enrolled scholars"
      },
      { 
        title: "Inquiries", 
        count: pendingInquiriesCount.toString(), 
        icon: Mail, 
        color: "bg-purple-500/10 text-purple-600",
        desc: "Pending review"
      },
    ];
  }, [journals, journalsLoading, conferences, confsLoading, members, membersLoading, pendingInquiriesCount]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Admin Command Header - BALANCED SIZE */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 md:mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 md:h-16 md:w-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                  <LayoutDashboard className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-primary font-headline italic tracking-tight">
                  SIARE Admin Portal
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em]">
                  Master System Console: {user.email}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <Button asChild size="lg" className="flex-1 lg:flex-none rounded-xl bg-primary hover:bg-primary/90 text-accent font-bold px-6 h-12 shadow-xl border border-accent/20 transition-all">
                <Link href="/admin/inquiries">
                  <Mail className="mr-3 h-4 w-4" /> Inquiries {pendingInquiriesCount > 0 && `(${pendingInquiriesCount})`}
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleLogout} 
                className="h-12 w-12 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-all"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* QUICK MANAGEMENT */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <Button asChild variant="outline" className="h-24 md:h-28 rounded-2xl border-2 border-primary/5 bg-white shadow-sm hover:shadow-xl hover:border-accent/20 flex flex-col gap-2 transition-all">
              <Link href="/admin/events">
                <Presentation className="h-6 w-6 text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Conferences</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 md:h-28 rounded-2xl border-2 border-primary/5 bg-white shadow-sm hover:shadow-xl hover:border-accent/20 flex flex-col gap-2 transition-all">
              <Link href="/admin/members">
                <Users className="h-6 w-6 text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Manage Members</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 md:h-28 rounded-2xl border-2 border-primary/5 bg-white shadow-sm hover:shadow-xl hover:border-accent/20 flex flex-col gap-2 transition-all">
              <Link href="/admin/membership">
                <UserPlus className="h-6 w-6 text-purple-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Tiers & Plans</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 md:h-28 rounded-2xl border-2 border-primary/5 bg-white shadow-sm hover:shadow-xl hover:border-accent/20 flex flex-col gap-2 transition-all">
              <Link href="/admin/journals">
                <BookOpen className="h-6 w-6 text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Proceedings</span>
              </Link>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {stats.map((stat, i) => (
              <Card key={i} className="rounded-2xl border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white group">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className={`p-3 md:p-4 rounded-xl ${stat.color} group-hover:scale-110 transition-transform shadow-inner`}>
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <span className="text-[9px] font-black text-primary/20 uppercase tracking-[0.2em]">Live Registry</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-primary mb-1 tracking-tighter">{stat.count}</div>
                  <div className="text-xs font-bold text-primary/60 italic">{stat.title}</div>
                  <p className="text-[9px] text-muted-foreground mt-4 uppercase tracking-widest font-medium opacity-40">{stat.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Main Activity Monitor */}
            <Card className="lg:col-span-2 rounded-[1.5rem] border-none shadow-2xl bg-white overflow-hidden">
              <CardHeader className="border-b border-slate-50 bg-white/50 px-6 md:px-8 py-6 md:py-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-primary font-headline italic flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription className="text-[9px] uppercase font-black tracking-widest mt-2 opacity-40">Live synchronization from global proceedings series</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-accent font-black text-[9px] uppercase tracking-[0.2em] hover:bg-accent/10 h-10 px-4 rounded-xl">
                    <Link href="/admin/journals" className="flex items-center">Open Full Catalog <ChevronRight className="ml-2 h-3.5 w-3.5" /></Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {recentLoading ? (
                  <div className="p-20 text-center flex flex-col items-center gap-6">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/20">Accessing Records...</p>
                  </div>
                ) : (recentJournals && recentJournals.length > 0) ? (
                  <div className="divide-y divide-slate-50">
                    {recentJournals.map((journal: any) => (
                      <div key={journal.id} className="px-6 md:px-8 py-6 md:py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 hover:bg-slate-50/50 transition-colors group">
                        <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 overflow-hidden relative shadow-inner">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-contain p-2" />
                          ) : (
                            <BookOpen className="h-6 w-6 text-primary/10" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-primary truncate text-base md:text-lg italic mb-0.5">{journal.name}</h4>
                          <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest truncate opacity-40">ISSN: {journal.issn}</p>
                        </div>
                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:gap-2 shrink-0">
                          <div className="text-[9px] font-black text-primary/30 uppercase tracking-widest order-2 sm:order-1 bg-slate-100 px-2 py-0.5 rounded-full">
                            {journal.createdAt?.seconds ? new Date(journal.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                          </div>
                          <div className="flex items-center gap-2 order-1 sm:order-2">
                            <Button asChild size="sm" variant="ghost" className="h-8 px-3 text-[9px] font-black uppercase text-primary/60 hover:text-accent hover:bg-accent/5 rounded-lg transition-all">
                              <Link href={`/admin/journals?edit=${journal.id}`}>Edit</Link>
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all"
                              onClick={() => handleDeleteJournal(journal.id, journal.name)}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-32 text-center flex flex-col items-center gap-6">
                    <Activity className="h-16 w-16 text-primary/5" />
                    <p className="text-xs text-muted-foreground italic font-medium">System registers are currently empty.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Admin Quick Actions Sidebar */}
            <div className="space-y-8 md:space-y-10">
              
              {/* Members Manager Quick Card */}
              <Card className="rounded-[2rem] border-none shadow-2xl bg-primary text-white p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users className="h-24 w-24 md:h-32 md:w-32 -rotate-12" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold font-headline italic mb-4">Society Members</h3>
                  <p className="text-white/60 text-xs mb-8 leading-relaxed font-medium italic">
                    Manage the global directory of scholars, students, and institutional partners enrolled in SIARE.
                  </p>
                  <Button asChild className="w-full bg-accent text-primary font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:scale-[1.02] transition-transform shadow-2xl h-12 md:h-14">
                    <Link href="/admin/members" className="flex items-center justify-center">Manage Directory <ChevronRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>

              {/* System Alerts */}
              <Card className="rounded-[1.5rem] border-none shadow-2xl bg-white p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-bold text-primary font-headline italic flex items-center gap-3">
                    <Bell className="h-5 w-5 text-accent" />
                    System Status
                  </h3>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  {pendingInquiriesCount > 0 ? (
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex gap-4">
                      <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                      <p className="text-[10px] text-amber-900 font-bold leading-relaxed uppercase tracking-tight">You have {pendingInquiriesCount} unresolved membership inquiries awaiting response.</p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex gap-4">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                      <p className="text-[10px] text-blue-900 font-bold leading-relaxed uppercase tracking-tight">All academic inquiries have been successfully processed.</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Utility Tools */}
              <Card className="rounded-[1.5rem] border-none shadow-2xl bg-white p-8">
                <h3 className="text-base font-bold text-primary font-headline italic mb-6">System Utilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="rounded-xl h-12 text-[9px] font-black uppercase tracking-widest border-slate-100 hover:bg-slate-50 transition-all" asChild>
                    <Link href="/admin/pricing"><CreditCard className="mr-2 h-4 w-4" /> Plans</Link>
                  </Button>
                  <Button variant="outline" className="rounded-xl h-12 text-[9px] font-black uppercase tracking-widest border-slate-100 hover:bg-slate-50 transition-all" asChild>
                    <Link href="/admin/past-events"><History className="mr-2 h-4 w-4" /> Archive</Link>
                  </Button>
                </div>
              </Card>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
