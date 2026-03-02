'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Zap, 
  Video, 
  Lightbulb, 
  GraduationCap,
  ClipboardList,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "International Conference on Multidisciplinary Research & Innovation (ICMRI 2025)",
      date: "12–13 April 2025",
      location: "Pune, India (Hybrid)",
      tracks: "Engineering, Social Sciences, AI, Management, Education",
      highlights: "Keynote speakers, Scopus-indexed proceedings options",
      color: "border-blue-500"
    },
    {
      title: "SIARE Global Conference on Sustainable Technologies & Development",
      date: "20–21 May 2025",
      location: "Online",
      focus: "Green energy, environmental sciences, digital sustainability",
      color: "border-green-500"
    },
    {
      title: "International Symposium on AI and Emerging Technologies (AET 2025)",
      date: "15–16 June 2025",
      location: "Bangkok, Thailand",
      tracks: "AI, Robotics, Data Science, Healthcare Technologies",
      color: "border-purple-500"
    }
  ];

  const pastEvents = [
    { title: "SIARE Academic Forum 2024", desc: "Featured 250+ researchers from 30 countries. Proceedings published under SIARE Multidisciplinary Series." },
    { title: "International Conference on Smart Computing & Analytics 2024", desc: "Co-hosted by a partner university. Included keynote lectures from industry-leading experts." },
    { title: "National Workshop on Research Writing & Publishing Ethics", desc: "Conducted for early-stage researchers. Included hands-on sessions on citation, plagiarism, and methodology." }
  ];

  const categories = [
    { icon: Users, title: "Conferences", desc: "Large academic gatherings partnering with universities to publish peer-reviewed proceedings." },
    { icon: Lightbulb, title: "Workshops", desc: "Hands-on training sessions on academic writing, research analytics, AI tools, and ethics." },
    { icon: Video, title: "Webinars", desc: "Short online lectures on trending research topics and methodological advancements." },
    { icon: Trophy, title: "Research Summits", desc: "Elite events bringing together leading experts for high-level discussions and collaborations." },
    { icon: GraduationCap, title: "Symposiums", desc: "Theme-focused academic events across domains like AI, education, sustainability, agriculture, etc." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline italic leading-tight mb-6">
                Events at SIARE
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
                SIARE organizes and partners with universities, research institutions, and academic societies worldwide to host impactful conferences, workshops, symposiums, and training programs.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Academic Events"
              fill
              className="object-cover"
              priority
              data-ai-hint="conference hall"
            />
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                1. Upcoming Events
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
              <p className="text-foreground/60 mt-6 max-w-2xl mx-auto font-medium italic">Dynamically showcasing our latest academic gatherings.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, idx) => (
                <Card key={idx} className={`border-0 border-l-4 ${event.color} shadow-xl rounded-2xl bg-slate-50 p-8 hover:bg-white transition-all duration-300 group`} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-primary mb-4 italic group-hover:text-accent transition-colors">{event.title}</h3>
                    <div className="space-y-3 mb-8 flex-1">
                      <div className="flex items-center gap-2 text-sm text-foreground/70 font-medium"><Calendar className="h-4 w-4 text-accent" /> <strong>Date:</strong> {event.date}</div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70 font-medium"><MapPin className="h-4 w-4 text-accent" /> <strong>Location:</strong> {event.location}</div>
                      {event.tracks && <div className="text-xs text-foreground/60 italic mt-2"><strong>Tracks:</strong> {event.tracks}</div>}
                      {event.highlights && <div className="text-xs text-foreground/60 italic"><strong>Highlights:</strong> {event.highlights}</div>}
                      {event.focus && <div className="text-xs text-foreground/60 italic"><strong>Focus Areas:</strong> {event.focus}</div>}
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                      <Button asChild size="sm" className="bg-primary hover:bg-accent text-white rounded-xl">
                        <Link href="/contact">Register Now</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-xl">
                        <Link href="/contact">Submit Paper</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="border-0 border-l-4 border-accent shadow-xl rounded-2xl bg-primary text-white p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay="300">
                <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold font-headline italic mb-4">Annual SIARE Research Excellence Summit</h3>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-2 text-sm opacity-80 font-medium"><Calendar className="h-4 w-4 text-accent" /> 2025</div>
                  <div className="flex items-center gap-2 text-sm opacity-80 font-medium"><MapPin className="h-4 w-4 text-accent" /> UAE / Singapore (Tentative)</div>
                  <p className="text-xs opacity-70 italic mt-2">Recognizing outstanding research, academic awards, and global networking.</p>
                </div>
                <Button asChild className="bg-accent hover:bg-white text-primary font-bold rounded-xl w-full">
                  <Link href="/contact">Nominate Now</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                2. Past Events
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
              <p className="text-foreground/60 mt-6 max-w-2xl mx-auto font-medium italic">Building credibility through a global academic footprint.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-md transition-all" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <h4 className="font-bold text-primary mb-4 italic leading-tight text-lg">{event.title}</h4>
                  <p className="text-xs text-foreground/60 leading-relaxed font-medium flex-1 italic">"{event.desc}"</p>
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-accent group-hover:text-primary transition-colors">
                    <CheckCircle2 className="h-3 w-3" /> Successfully Completed
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                3. Event Categories
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((cat, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl text-center group hover:bg-primary hover:text-white transition-all duration-500 flex flex-col items-center" data-aos="zoom-in" data-aos-delay={idx * 50}>
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <cat.icon className="h-6 w-6 text-accent group-hover:text-primary" />
                  </div>
                  <h4 className="font-bold text-sm mb-2">{cat.title}</h4>
                  <p className="text-[10px] opacity-70 leading-relaxed font-medium">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner With SIARE */}
        <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 italic text-accent">
                  4. Partner With SIARE for Events
                </h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed font-medium italic">
                  SIARE invites universities and institutions to collaborate on conference hosting, proceedings publication, and research training programs.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Conference hosting",
                    "Proceedings publication",
                    "Technical workshops",
                    "Faculty development",
                    "Student research training",
                    "Academic collaborations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm opacity-80 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-accent" /> {item}
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="font-bold text-accent mb-4 uppercase tracking-widest text-[10px]">Benefits for Partner Institutions</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] opacity-70 font-medium italic">
                    <li>• Global visibility</li>
                    <li>• High-quality proceedings</li>
                    <li>• Academic credibility</li>
                    <li>• Expert Support</li>
                    <li>• Access to network</li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl" data-aos="fade-left">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Academic Networking"
                  fill
                  className="object-cover"
                  data-ai-hint="scholars meeting"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines & Awards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl bg-slate-50/50" data-aos="fade-up">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white">
                    <ClipboardList className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary font-headline italic">5. Event Proposal Guidelines</h3>
                </div>
                <p className="text-sm text-foreground/60 mb-6 italic font-medium">Institutions seeking to collaborate must provide:</p>
                <div className="space-y-4">
                  {[
                    "Conference theme & objectives",
                    "Organizing committee details",
                    "Paper submission timeline",
                    "Review process framework",
                    "Expected number of submissions",
                    "Venue (physical/online/hybrid)",
                    "Technical partners (if any)"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start group">
                      <span className="h-5 w-5 rounded-full bg-accent text-primary flex items-center justify-center text-[10px] font-black shrink-0 shadow-sm">{i+1}</span>
                      <p className="text-sm font-medium text-foreground/70 italic">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest italic leading-relaxed">Upon approval, SIARE will sign a publishing MoU and initiate workflows.</p>
                </div>
              </Card>

              <Card className="p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl bg-slate-50/50" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-white">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary font-headline italic">6. Awards & Recognitions</h3>
                </div>
                <p className="text-sm text-foreground/60 mb-8 leading-relaxed italic font-medium">SIARE recognizes contributions to boost academic profiles and enhance visibility.</p>
                <div className="grid gap-4">
                  {[
                    "Best Paper Award",
                    "Young Researcher Award",
                    "Outstanding Reviewer Award",
                    "Excellence in Academic Contribution Award",
                    "Distinguished Educator Award"
                  ].map((award, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-primary/5 group hover:border-accent transition-all">
                      <Zap className="h-5 w-5 text-accent" />
                      <span className="text-sm font-bold text-primary/80 italic">{award}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration & Participation */}
        <section className="py-20 bg-slate-50 border-y border-border/50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
                7. Registration & Participation
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8" data-aos="fade-right">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2 italic"><ArrowRight className="h-4 w-4 text-accent" /> How to Participate</h4>
                  <ul className="text-sm text-foreground/70 space-y-3 italic font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-accent" /> Online registration portal access</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-accent" /> Institutional nomination slots</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-accent" /> Targeted conference invitations</li>
                  </ul>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2 italic"><ArrowRight className="h-4 w-4 text-accent" /> Author Benefits</h4>
                  <ul className="text-sm text-foreground/70 space-y-3 italic font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-accent" /> Presentation slots (physical/hybrid)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-accent" /> Official academic E-certificates</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-accent" /> Proceedings publication eligibility</li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl" data-aos="fade-left">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Participation"
                  fill
                  className="object-cover"
                  data-ai-hint="scholars discussing"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6 italic">Empowering Global Research</h2>
              <p className="text-xl text-white/70 mb-12 font-medium italic">
                Connect with SIARE today to host your conference or join our upcoming academic events.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-white text-accent-foreground hover:text-primary font-black italic rounded-xl px-14 py-8 text-lg shadow-xl transition-all hover:scale-105 h-auto">
                  <Link href="/contact">View All Events</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white rounded-xl px-14 py-8 text-lg font-bold transition-all hover:scale-105 h-auto italic">
                  <Link href="/contact">Submit Event Proposal</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white rounded-xl px-14 py-8 text-lg font-bold transition-all hover:scale-105 h-auto italic">
                  <Link href="/contact">Become a Partner</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
