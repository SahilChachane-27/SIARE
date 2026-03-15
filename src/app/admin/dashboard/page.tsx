
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
  Settings, 
  LogOut, 
  ExternalLink, 
  Activity, 
  Users,
  ChevronRight,
  Clock,
  Globe,
  Edit3,
  CreditCard,
  Calendar,
  Presentation,
  CheckCircle2,
  Bell,
  History,
  GraduationCap,
  Video,
  UserPlus,
  Trash2,
  Mail
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
    const uniqueUniversities = new Set(journals?.map((j: any) => j.university?.toLowerCase().trim()).filter(Boolean));

    return [
      { 
        title: "Active Events", 
        count: confsLoading ? "..." : confCount.toString(), 
        icon: Presentation, 
        color: "bg-amber-500/10 text-amber-600",
        desc: "Upcoming gatherings"
      },
      { 
        title: "Published Series", 
        count: journalsLoading ? "..." : hostedCount.toString(), 
        icon: BookOpen, 
        color: "bg-blue-500/10 text-blue-600",
        desc: "Proceedings online"
      },
      { 
        title: "Global Partners", 
        count: journalsLoading ? "..." : uniqueUniversities.size.toString(), 
        icon: Globe, 
        color: "bg-green-500/10 text-green-600",
        desc: "Partner institutions"
      },
      { 
        title: "Pending Inquiries", 
        count: pendingInquiriesCount.toString(), 
        icon: Mail, 
        color: "bg-purple-500/10 text-purple-600",
        desc: "Action required"
      },
    ];
  }, [journals, journalsLoading, conferences, confsLoading, pendingInquiriesCount]);

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
          
          {/* Admin Command Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 md:mb-16">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <LayoutDashboard className="h-6 w-6 md:h-7 md:w-7 text-accent" />
                </div>
                <h1 className="text-2xl md:text-4xl font-black text-primary font-headline italic">
                  SIARE Admin Portal
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em]">
                  Active Session: {user.email}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-4 w-full lg:w-auto">
              <Button asChild size="sm" className="flex-1 lg:flex-none rounded-xl bg-primary hover:bg-primary/90 text-accent font-bold px-4 h-10 shadow-md border border-accent/20 transition-all hover:scale-105 active:scale-95">
                <Link href="/admin/inquiries">
                  <Mail className="mr-2 h-4 w-4" /> Inquiries {pendingInquiriesCount > 0 && `(${pendingInquiriesCount})`}
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="flex-1 lg:flex-none rounded-xl border-primary/10 text-primary bg-white hover:bg-slate-50 px-4 h-10 shadow-sm transition-all hover:scale-105 active:scale-95">
                <Link href="/admin/events">
                  <Plus className="mr-2 h-4 w-4" /> Conferences
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="flex-1 lg:flex-none rounded-xl border-primary/10 text-primary bg-white hover:bg-slate-50 px-4 h-10 shadow-sm transition-all hover:scale-105 active:scale-95">
                <Link href="/admin/membership">
                  <UserPlus className="mr-2 h-4 w-4" /> Membership Tiers
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="flex-1 lg:flex-none rounded-xl border-primary/10 text-primary bg-white hover:bg-slate-50 px-4 h-10 shadow-sm transition-all hover:scale-105 active:scale-95">
                <Link href="/admin/journals">
                  <BookOpen className="mr-2 h-4 w-4" /> Proceedings
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleLogout} 
                className="flex-1 lg:flex-none rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 px-4 h-10 transition-all hover:scale-105 active:scale-95"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {stats.map((stat, i) => (
              <Card key={i} className="rounded-2xl border-none shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white group">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className={`p-3 md:p-4 rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}>
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <span className="text-[10px] font-black text-primary/20 uppercase tracking-widest">Live Status</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-primary mb-1">{stat.count}</div>
                  <div className="text-xs font-bold text-primary/60 italic">{stat.title}</div>
                  <p className="text-[9px] text-muted-foreground mt-4 uppercase tracking-tighter font-medium">{stat.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            
            {/* Main Activity Monitor */}
            <Card className="lg:col-span-2 rounded-2xl border-none shadow-xl bg-white overflow-hidden">
              <CardHeader className="border-b border-slate-50 bg-white/50 px-6 md:px-8 py-6 md:py-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-primary font-headline italic flex items-center gap-3">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                      Recent Proceedings
                    </CardTitle>
                    <CardDescription className="text-[10px] uppercase font-black tracking-widest mt-2 opacity-40">Latest publishing & metadata updates</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-accent font-black text-[10px] uppercase tracking-widest hover:bg-accent/10 h-10 px-4">
                    <Link href="/admin/journals" className="flex items-center">Open Catalog <ChevronRight className="ml-1 h-3 w-3" /></Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {recentLoading ? (
                  <div className="p-24 text-center flex flex-col items-center gap-6">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent"></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/20">Synchronizing records...</p>
                  </div>
                ) : (recentJournals && recentJournals.length > 0) ? (
                  <div className="divide-y divide-slate-50">
                    {recentJournals.map((journal: any) => (
                      <div key={journal.id} className="px-6 md:px-8 py-6 md:py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 hover:bg-slate-50/50 transition-colors group">
                        <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl bg-secondary/50 flex items-center justify-center shrink-0 overflow-hidden relative shadow-inner">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-contain p-2" />
                          ) : (
                            <BookOpen className="h-6 w-6 text-primary/20" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-primary truncate text-base mb-1">{journal.name}</h4>
                          <p className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter truncate opacity-60">{journal.university}</p>
                        </div>
                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:gap-2 shrink-0">
                          <div className="text-[10px] font-black text-primary/30 uppercase tracking-widest order-2 sm:order-1">
                            {journal.createdAt?.seconds ? new Date(journal.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                          </div>
                          <div className="flex items-center gap-2 md:gap-4 order-1 sm:order-2">
                            <Button asChild size="sm" variant="ghost" className="h-8 px-3 md:px-4 text-[10px] font-black uppercase text-primary/60 hover:text-accent hover:bg-transparent">
                              <Link href={`/admin/journals?edit=${journal.id}`}>Edit</Link>
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-8 px-3 md:px-4 text-[10px] font-black uppercase text-red-500 hover:text-red-600 hover:bg-red-50"
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
                  <div className="p-40 text-center flex flex-col items-center gap-6">
                    <Activity className="h-16 w-16 text-primary/5" />
                    <p className="text-sm text-muted-foreground italic font-medium">No system records found.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Admin Quick Actions Sidebar */}
            <div className="space-y-8 md:space-y-10">
              
              {/* Inquiries Manager Quick Card */}
              <Card className="rounded-2xl border-none shadow-xl bg-primary text-white p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Mail className="h-24 w-24 md:h-32 md:w-32 -rotate-12" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold font-headline italic mb-4 md:mb-6">Membership & Inquiries</h3>
                  <p className="text-white/60 text-xs mb-8 md:mb-10 leading-relaxed font-medium italic">
                    Review and manage membership applications, conference proposals, and general inquiries.
                  </p>
                  <Button asChild className="w-full bg-accent text-primary font-black uppercase text-[11px] tracking-widest rounded-xl hover:scale-[1.02] transition-transform shadow-xl h-12 md:h-14">
                    <Link href="/admin/inquiries" className="flex items-center justify-center">Manage Applications <ChevronRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>

              {/* System Notifications */}
              <Card className="rounded-2xl border-none shadow-xl bg-white p-8 md:p-10">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <h3 className="text-base font-bold text-primary font-headline italic flex items-center gap-3">
                    <Bell className="h-5 w-5 text-accent" />
                    System Alerts
                  </h3>
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {pendingInquiriesCount > 0 ? (
                    <div className="p-4 md:p-5 rounded-xl bg-amber-50 border border-amber-100 flex gap-4">
                      <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                      <p className="text-[11px] text-amber-900 font-bold leading-relaxed uppercase tracking-tighter">You have {pendingInquiriesCount} pending membership inquiries.</p>
                    </div>
                  ) : (
                    <div className="p-4 md:p-5 rounded-xl bg-blue-50 border border-blue-100 flex gap-4">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                      <p className="text-[11px] text-blue-900 font-bold leading-relaxed uppercase tracking-tighter">All system inquiries have been reviewed.</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Utility Tools */}
              <Card className="rounded-2xl border-none shadow-xl bg-white p-8 md:p-10">
                <h3 className="text-base font-bold text-primary font-headline italic mb-6 md:mb-8">Quick Utilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="rounded-xl h-12 text-[10px] font-black uppercase tracking-tighter border-slate-100 hover:bg-slate-50" asChild>
                    <Link href="/admin/pricing"><CreditCard className="mr-2 h-4 w-4" /> Pricing</Link>
                  </Button>
                  <Button variant="outline" className="rounded-xl h-12 text-[10px] font-black uppercase tracking-tighter border-slate-100 hover:bg-slate-50" asChild>
                    <Link href="/admin/past-events"><History className="mr-2 h-4 w-4" /> History</Link>
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
