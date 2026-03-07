'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bell, 
  Beaker, 
  Presentation, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  Briefcase, 
  ArrowRight,
  FileText,
  Handshake,
  Star,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white pt-32 pb-16 md:pb-24">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 text-left">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4" data-aos="fade-right">
              Society of Integrated Academic Research and Education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline italic mb-6 leading-tight" data-aos="fade-right">
              SIARE <span className="text-accent">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl font-medium" data-aos="fade-up" data-aos-delay="100">
              Stay informed with the latest announcements, academic developments, conference highlights, publication updates, and research opportunities from SIARE. This section provides dynamic insights into the activities, achievements, and global engagements of our society.
            </p>
          </div>
        </section>

        {/* Section 1: Latest Announcements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary shadow-lg">
                <Bell className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary font-headline italic">1. Latest Announcements</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "A. Launch of SIARE Multidisciplinary Proceedings Series (2025 Edition)",
                  desc: "SIARE has introduced its official multidisciplinary proceedings series covering Engineering, Management, Social Sciences, Computer Science, Education, and more. This initiative strengthens global academic collaboration and supports university-hosted conferences."
                },
                {
                  title: "B. New Membership Programs Introduced",
                  desc: "Individual, Student, Institutional, and Affiliate memberships are now open for the academic year 2025–26. Members gain exclusive access to conferences, workshops, and publication benefits."
                },
                {
                  title: "C. SIARE Partners With Global Universities",
                  desc: "New partnerships established with universities in India, Philippines, Malaysia, and UAE for joint conferences and training programs."
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-xl rounded-2xl bg-slate-50 hover:bg-white transition-all group" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary font-bold leading-tight group-hover:text-accent transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 leading-relaxed font-medium italic">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Research Highlights */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                <Beaker className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary font-headline italic">2. Research Highlights</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="rounded-3xl border-none shadow-2xl bg-white p-8 overflow-hidden relative group" data-aos="fade-right">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent fill-current" /> A. Featured Research of the Month
                  </h3>
                  <p className="text-sm text-foreground/70 mb-6 italic">Each month, SIARE highlights outstanding research published in its proceedings, showcasing impactful studies that demonstrate innovation, relevance, and academic excellence.</p>
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-xs font-black uppercase text-primary/40 tracking-widest mb-2">Example Highlight</p>
                    <p className="text-primary font-bold italic">"AI-Based Predictive Modeling for Sustainable Agriculture Practices (Agritech 2025 Proceedings)"</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
              </Card>

              <Card className="rounded-3xl border-none shadow-2xl bg-white p-8" data-aos="fade-left">
                <h3 className="text-xl font-bold text-primary mb-6">B. Emerging Trends & Insights</h3>
                <p className="text-sm text-foreground/70 mb-6">SIARE’s academic council publishes short notes on:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Trends in multidisciplinary research",
                    "Innovations in AI and technology",
                    "Community-focused studies",
                    "Research that aligns with global SDGs"
                  ].map((trend, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      <span className="text-xs font-bold text-primary/80">{trend}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Conference Updates */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary shadow-lg">
                <Presentation className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary font-headline italic">3. Conference Updates</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "A. Call for Papers Open",
                  desc: "Several SIARE-partnered conferences have opened CFPs for various tracks. Authors can now submit papers in Engineering, Management, Social Sciences, and Education.",
                  icon: FileText
                },
                {
                  title: "B. Conference Highlights",
                  desc: "Recent conferences saw participation from 200+ researchers across 10+ countries, with high-quality presentations and keynote sessions.",
                  icon: Users
                },
                {
                  title: "C. Post-Conference Announcements",
                  desc: "Proceedings for completed conferences will be published within the standard timelines, after final checks and DOI assignment.",
                  icon: Bell
                }
              ].map((update, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 bg-slate-50 rounded-[30px] border border-transparent hover:border-accent/20 hover:bg-white transition-all shadow-lg group" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                    <update.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary italic leading-tight">{update.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed font-medium italic">{update.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Workshops & Training Updates */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary font-headline italic">4. Workshops & Training Updates</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="rounded-3xl border-none shadow-2xl bg-white p-10 group" data-aos="fade-up">
                <h3 className="text-xl font-bold text-primary mb-6 italic">A. Research Methodology Workshop (April 2025)</h3>
                <p className="text-sm text-foreground/70 mb-8 italic font-medium">Registration open for the upcoming workshop covering:</p>
                <div className="space-y-4">
                  {["Literature review techniques", "Systematic reviews", "Tools for academic writing"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-[10px] font-black">{i+1}</div>
                      <span className="text-sm font-bold text-primary/80">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="rounded-3xl border-none shadow-2xl bg-white p-10 group" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold text-primary mb-6 italic">B. Training on AI Tools for Researchers</h3>
                <p className="text-sm text-foreground/70 mb-8 italic font-medium">A newly launched workshop series introduces researchers to emerging digital tools for:</p>
                <div className="grid grid-cols-2 gap-4">
                  {["Data analysis", "Visualization", "Writing enhancement", "Similarity avoidance"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl group-hover:bg-accent transition-all duration-500">
                      <ChevronRight className="h-4 w-4 text-accent group-hover:text-primary transition-colors" />
                      <span className="text-xs font-bold text-primary/80 group-hover:text-primary transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 5: Society Announcements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary shadow-lg">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary font-headline italic">5. Society Announcements</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "A. New Editorial Board Members",
                  desc: "SIARE has added several distinguished scholars to its editorial and review committees across various disciplines.",
                  icon: Users
                },
                {
                  title: "B. Awards & Recognitions Announced",
                  desc: "Announcing the next cycle of Best Paper Awards, Young Researcher Awards, and Outstanding Reviewer Awards.",
                  icon: Star
                },
                {
                  title: "C. Partnership Opportunities",
                  desc: "SIARE invites universities to collaborate for conferences and proceedings publication under an official MoU.",
                  icon: Handshake
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-xl p-8 bg-slate-50 hover:bg-white transition-all group" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-accent transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-4 italic">{item.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed font-medium italic">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Policy & Ethical Updates */}
        <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2" data-aos="fade-right">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary shadow-lg">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold font-headline italic">6. Policy & Ethical Updates</h2>
                </div>
                <p className="text-lg text-white/70 mb-8 italic leading-relaxed">
                  SIARE periodically updates its peer review policies, conference partnership guidelines, publication ethics, and data privacy and archiving policies to ensure transparency, ethical integrity, and credibility in academic publishing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Peer review policies", "Conference partnership guidelines", "Publication ethics", "Data privacy and archiving"].map((policy, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                      <ShieldCheck className="h-4 w-4 text-accent" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white/80">{policy}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2" data-aos="fade-left">
                <Card className="bg-white/10 border-none p-10 rounded-[40px] backdrop-blur-md">
                  <p className="text-xl font-bold font-headline italic mb-6 text-accent">Commitment to Excellence</p>
                  <p className="text-sm text-white/60 leading-relaxed italic mb-8">Latest updates ensure that all stakeholders—authors, reviewers, and institutions—operate within a framework of international scholarly standards.</p>
                  <Button asChild variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-primary rounded-xl px-8 italic font-bold">
                    <Link href="/privacy-policy">Review Latest Policies</Link>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </section>

        {/* Section 7: Opportunities for Researchers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary shadow-lg">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-primary font-headline italic">7. Opportunities for Researchers</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "A. Reviewer Recruitment",
                  desc: "Experienced scholars are invited to join the SIARE Reviewer Panel and support the quality of peer review.",
                  tag: "Academic"
                },
                {
                  title: "B. Internship Programs",
                  desc: "Student research ambassadors and academic interns can apply for upcoming cycles.",
                  tag: "Student"
                },
                {
                  title: "C. Call for Editors",
                  desc: "SIARE is inviting senior researchers to join the Editorial Committee for the 2025–26 term.",
                  tag: "Expert"
                }
              ].map((opp, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 relative group hover:shadow-2xl transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="absolute top-6 right-8 text-[10px] font-black uppercase text-accent tracking-widest">{opp.tag}</div>
                  <h4 className="text-xl font-bold text-primary mb-6 italic leading-tight pr-12">{opp.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed font-medium italic mb-8">{opp.desc}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-black uppercase tracking-widest text-[10px] hover:text-accent">
                    <Link href="/contact" className="flex items-center gap-2">Apply Now <ArrowRight className="h-3 w-3" /></Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Buttons */}
        <section className="py-16 bg-slate-50 text-center border-y border-border/50 relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="zoom-in">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-accent hover:text-primary rounded-xl px-10 h-14 text-sm font-black italic shadow-xl transition-all hover:scale-105">
                <Link href="/blog">View All News</Link>
              </Button>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-primary hover:text-white rounded-xl px-10 h-14 text-sm font-black italic shadow-xl transition-all hover:scale-105">
                <Link href="/contact">Submit Your Announcement</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white rounded-xl px-10 h-14 text-sm font-black italic shadow-xl transition-all hover:scale-105">
                <Link href="/contact">Become a Reviewer</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
