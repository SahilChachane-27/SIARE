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
  Calendar
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

  const { data: conferences } = useCollection(confsQuery);

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

  const dynamicStats = useMemo(() => {
    const hostedCount = journals?.length || 0;
    const confCount = conferences?.length || 0;
    const uniqueUniversities = new Set(journals?.map((j: any) => j.university?.toLowerCase().trim()).filter(Boolean));

    return [
      { 
        title: "Proceedings Series", 
        count: journalsLoading ? "..." : hostedCount.toString(), 
        icon: BookOpen, 
        color: "bg-blue-500/10 text-blue-500",
        desc: "Active series hosted"
      },
      { 
        title: "Global Conferences", 
        count: journalsLoading ? "..." : confCount.toString(), 
        icon: Calendar, 
        color: "bg-purple-500/10 text-purple-500",
        desc: "Upcoming events"
      },
      { 
        title: "Partner Universities", 
        count: journalsLoading ? "..." : uniqueUniversities.size.toString(), 
        icon: Users, 
        color: "bg-green-500/10 text-green-500",
        desc: "Institutions on platform"
      },
      { 
        title: "Platform Status", 
        count: "Active", 
        icon: Activity, 
        color: "bg-amber-500/10 text-amber-500",
        desc: "Server health: 99.9%"
      },
    ];
  }, [journals, journalsLoading, conferences]);

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
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          
          {/* Header Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-black text-primary font-headline flex items-center gap-3">
                <LayoutDashboard className="h-8 w-8 text-accent" />
                SIARE ADMIN
              </h1>
              <p className="text-muted-foreground text-sm font-medium mt-1 uppercase tracking-widest">
                Administrator: {user.email}
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild className="rounded-funky bg-primary hover:bg-primary/90 text-accent font-bold shadow-lg px-6 h-12">
                <Link href="/admin/journals">
                  <Plus className="mr-2 h-5 w-5" /> Add Proceeding
                </Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLogout} 
                className="rounded-funky border-primary/20 text-primary hover:bg-red-50 hover:text-red-500 hover:border-red-200 h-12 px-6"
              >
                <LogOut className="mr-2 h-5 w-5" /> Sign Out
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dynamicStats.map((stat, i) => (
              <Card key={i} className="rounded-funky border-none shadow-sm hover:shadow-md transition-all overflow-hidden bg-white p-2" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-primary/40">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-black text-primary">{stat.count}</div>
                  <p className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-wider">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Recent Activity List */}
            <Card className="lg:col-span-2 rounded-funky border-none shadow-xl bg-white overflow-hidden" data-aos="fade-up" data-aos-delay="400">
              <CardHeader className="border-b border-slate-50 p-8">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary font-headline italic">Recent Publications</CardTitle>
                    <CardDescription className="mt-1">Latest proceedings series added</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-accent font-bold text-xs uppercase tracking-widest hover:text-primary p-0 h-auto">
                    <Link href="/admin/journals" className="flex items-center">View All <ChevronRight className="ml-1 h-3 w-3" /></Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {recentLoading ? (
                  <div className="p-16 text-center"><div className="animate-spin inline-block rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
                ) : (recentJournals && recentJournals.length > 0) ? (
                  <div className="divide-y divide-slate-50">
                    {recentJournals.map((journal: any) => (
                      <div key={journal.id} className="p-8 flex items-center gap-6 hover:bg-slate-50/50 transition-colors group">
                        <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 overflow-hidden relative shadow-sm">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-cover" />
                          ) : (
                            <BookOpen className="h-7 w-7 text-primary/20" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-primary truncate text-base mb-1">{journal.name}</h4>
                          <p className="text-sm text-muted-foreground truncate">{journal.university}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary/40 uppercase tracking-wider mb-2 justify-end">
                            <Clock className="h-3 w-3" />
                            {journal.createdAt?.seconds ? new Date(journal.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                          </div>
                          <div className="flex items-center justify-end gap-4">
                            <Link href={`/admin/journals?edit=${journal.id}`} className="text-[10px] text-primary font-black uppercase tracking-widest flex items-center gap-1 hover:text-accent transition-colors">
                              Edit <Edit3 className="h-3 w-3" />
                            </Link>
                            <Link href={journal.link} target="_blank" className="text-[10px] text-accent font-black uppercase tracking-widest flex items-center gap-1 hover:text-primary transition-colors">
                              Live <ExternalLink className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-20 text-center text-muted-foreground italic text-sm">No proceedings recorded yet.</div>
                )}
              </CardContent>
            </Card>

            {/* Quick Management Section */}
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="600">
              <Card className="rounded-funky border-none shadow-xl bg-primary text-white p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Calendar className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-headline italic mb-6">Events Manager</h3>
                  <p className="text-white/70 text-sm mb-10 leading-relaxed">
                    Update upcoming conferences, workshops, and symposiums. Change dates, status, and tracks for global visibility.
                  </p>
                  <Button asChild className="w-full bg-accent text-accent-foreground font-black italic rounded-funky hover:scale-105 transition-transform shadow-xl h-14">
                    <Link href="/admin/events" className="flex items-center justify-center">Launch Events Manager <ChevronRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </div>
              </Card>

              <Card className="rounded-funky border-none shadow-xl bg-white p-10 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <CreditCard className="h-24 w-24 text-primary" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-primary font-headline italic mb-4">Pricing Plans</h3>
                  <p className="text-muted-foreground text-xs mb-8 leading-relaxed">
                    Configure institutional hosting packages and update membership tier pricing for your partners.
                  </p>
                  <Button asChild variant="outline" className="w-full border-primary/20 text-primary font-black italic rounded-funky hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Link href="/admin/pricing" className="flex items-center justify-center">Manage Pricing <ChevronRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>

              <Card className="rounded-funky border-none shadow-xl bg-white p-10">
                <h3 className="text-xl font-bold text-primary font-headline italic mb-6">System Notifications</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                    <p className="text-xs text-blue-900 leading-relaxed">New membership application pending review for Prof. Amit Sharma.</p>
                  </div>
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-green-50/50 border border-green-100">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                    <p className="text-xs text-green-900 leading-relaxed">Metadata for ICMRI 2025 has been successfully pushed to CrossRef.</p>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
