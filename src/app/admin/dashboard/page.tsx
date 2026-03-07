
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
  UserPlus
} from 'lucide-react';
import Link from 'next/link';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import Image from 'next/image';

export default function AdminDashboard() {
  const { user, loading } = useUser();
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();

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
        title: "User Traffic", 
        count: "Active", 
        icon: Activity, 
        color: "bg-purple-500/10 text-purple-600",
        desc: "99.9% Platform Uptime"
      },
    ];
  }, [journals, journalsLoading, conferences, confsLoading]);

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
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Admin Command Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <LayoutDashboard className="h-6 w-6 text-accent" />
                </div>
                <h1 className="text-3xl font-black text-primary font-headline italic">
                  SIARE Admin Portal
                </h1>
              </div>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] ml-1">
                Admin: {user.email}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-xl bg-primary hover:bg-primary/90 text-accent font-bold px-6 shadow-md border border-accent/20">
                <Link href="/admin/events">
                  <Plus className="mr-2 h-4 w-4" /> Manage Conferences
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-primary/10 text-primary bg-white hover:bg-slate-50">
                <Link href="/admin/membership">
                  <UserPlus className="mr-2 h-4 w-4" /> Memberships
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-primary/10 text-primary bg-white hover:bg-slate-50">
                <Link href="/admin/workshops">
                  <GraduationCap className="mr-2 h-4 w-4" /> Workshops
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-primary/10 text-primary bg-white hover:bg-slate-50">
                <Link href="/admin/webinars">
                  <Video className="mr-2 h-4 w-4" /> Webinars
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-primary/10 text-primary bg-white hover:bg-slate-50">
                <Link href="/admin/journals">
                  <BookOpen className="mr-2 h-4 w-4" /> Edit Proceedings
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleLogout} 
                className="rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <Card key={i} className="rounded-2xl border-none shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-black text-primary/20 uppercase tracking-widest">Live Status</span>
                  </div>
                  <div className="text-3xl font-black text-primary mb-1">{stat.count}</div>
                  <div className="text-xs font-bold text-primary/60 italic">{stat.title}</div>
                  <p className="text-[9px] text-muted-foreground mt-3 uppercase tracking-tighter font-medium">{stat.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Activity Monitor */}
            <Card className="lg:col-span-2 rounded-2xl border-none shadow-xl bg-white overflow-hidden">
              <CardHeader className="border-b border-slate-50 bg-white/50 px-8 py-6">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary font-headline italic flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription className="text-[10px] uppercase font-black tracking-widest mt-1 opacity-40">Latest publishing & metadata updates</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-accent font-black text-[10px] uppercase tracking-widest hover:bg-accent/10">
                    <Link href="/admin/journals" className="flex items-center">Open Catalog <ChevronRight className="ml-1 h-3 w-3" /></Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {recentLoading ? (
                  <div className="p-20 text-center flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/20">Synchronizing records...</p>
                  </div>
                ) : (recentJournals && recentJournals.length > 0) ? (
                  <div className="divide-y divide-slate-50">
                    {recentJournals.map((journal: any) => (
                      <div key={journal.id} className="px-8 py-6 flex items-center gap-6 hover:bg-slate-50/50 transition-colors group">
                        <div className="h-12 w-12 rounded-xl bg-secondary/50 flex items-center justify-center shrink-0 overflow-hidden relative shadow-inner">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-contain p-2" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-primary/20" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-primary truncate text-sm mb-0.5">{journal.name}</h4>
                          <p className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter truncate opacity-60">{journal.university}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-[9px] font-black text-primary/30 uppercase tracking-widest mb-2">
                            {journal.createdAt?.seconds ? new Date(journal.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                          </div>
                          <div className="flex items-center justify-end gap-3">
                            <Button asChild size="sm" variant="ghost" className="h-7 px-3 text-[10px] font-black uppercase text-primary/60 hover:text-accent hover:bg-transparent">
                              <Link href={`/admin/journals?edit=${journal.id}`}>Edit</Link>
                            </Button>
                            <Button asChild size="sm" variant="ghost" className="h-7 px-3 text-[10px] font-black uppercase text-accent hover:text-primary hover:bg-transparent">
                              <a href={journal.link} target="_blank">Live <ExternalLink className="ml-1 h-3 w-3" /></a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-32 text-center flex flex-col items-center gap-4">
                    <Activity className="h-12 w-12 text-primary/5" />
                    <p className="text-xs text-muted-foreground italic font-medium">No system records found. Begin by adding your first series.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Admin Quick Actions Sidebar */}
            <div className="space-y-6">
              
              {/* Event Manager Quick Card */}
              <Card className="rounded-2xl border-none shadow-xl bg-primary text-white p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Calendar className="h-24 w-24 -rotate-12" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-headline italic mb-4">Events Manager</h3>
                  <p className="text-white/60 text-[11px] mb-8 leading-relaxed font-medium">
                    Configure upcoming conferences, symposiums, and institutional workshops.
                  </p>
                  <Button asChild className="w-full bg-accent text-primary font-black uppercase text-[10px] tracking-widest rounded-xl hover:scale-[1.02] transition-transform shadow-xl h-12">
                    <Link href="/admin/events" className="flex items-center justify-center">Launch Event Panel <ChevronRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>

              {/* Past Events Quick Card */}
              <Card className="rounded-2xl border-none shadow-xl bg-white p-8 relative overflow-hidden group border border-slate-100">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-primary font-headline italic mb-2 flex items-center gap-2">
                    <History className="h-5 w-5 text-accent" />
                    Past Records
                  </h3>
                  <p className="text-muted-foreground text-[10px] mb-6 leading-relaxed font-medium uppercase tracking-tighter">
                    Manage the history of successfully completed academic activities.
                  </p>
                  <Button asChild variant="outline" className="w-full border-primary/10 text-primary font-black uppercase text-[9px] tracking-widest rounded-xl hover:bg-slate-50 transition-all h-10">
                    <Link href="/admin/past-events">Manage History</Link>
                  </Button>
                </div>
              </Card>

              {/* System Notifications */}
              <Card className="rounded-2xl border-none shadow-xl bg-white p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-primary font-headline italic flex items-center gap-2">
                    <Bell className="h-4 w-4 text-accent" />
                    System Alerts
                  </h3>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    <p className="text-[10px] text-blue-900 font-bold leading-relaxed uppercase tracking-tighter">ICMRI 2025 Metadata successfully verified for Scopus compliance.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex gap-3">
                    <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                    <p className="text-[10px] text-amber-900 font-bold leading-relaxed uppercase tracking-tighter">Membership application pending review for Faculty of Law, VIT.</p>
                  </div>
                </div>
              </Card>

              {/* Utility Tools */}
              <Card className="rounded-2xl border-none shadow-xl bg-white p-8">
                <h3 className="text-sm font-bold text-primary font-headline italic mb-6">Quick Utilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="rounded-xl h-10 text-[10px] font-black uppercase tracking-tighter border-slate-100 hover:bg-slate-50">
                    <Settings className="mr-2 h-3 w-3" /> Config
                  </Button>
                  <Button variant="outline" className="rounded-xl h-10 text-[10px] font-black uppercase tracking-tighter border-slate-100 hover:bg-slate-50" asChild>
                    <Link href="/admin/pricing"><CreditCard className="mr-2 h-3 w-3" /> Pricing</Link>
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
