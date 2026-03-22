'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Globe, 
  BookOpen, 
  School, 
  Users,
  Target,
  Lightbulb,
  ShieldCheck,
  Award,
  Zap,
  CheckCircle2,
  Trophy,
  Scale,
  FileText,
  Calendar,
  GraduationCap
} from 'lucide-react';

export default function AboutPage() {

  const objectives = [
    { icon: Globe, text: "Promote international academic research and scholarly communication" },
    { icon: FileText, text: "Support high-quality, peer-reviewed conference proceedings" },
    { icon: School, text: "Build bridges between universities, researchers, and research societies" },
    { icon: Calendar, text: "Organize conferences, symposiums, and academic training programs" },
    { icon: Lightbulb, text: "Encourage multidisciplinary and cross-domain knowledge creation" },
    { icon: Zap, text: "Enhance research visibility through indexing, DOI assignment, and open scholarly access" }
  ];

  const whatWeDo = [
    {
      icon: BookOpen,
      title: "Conference Proceedings Publication",
      desc: "We publish peer-reviewed proceedings across disciplines such as Engineering, Social Sciences, Management, Agriculture, Biological Sciences, Pharmacy, Humanities, and more."
    },
    {
      icon: Calendar,
      title: "Academic Events & Conferences",
      desc: "SIARE partners with universities and organizations worldwide to host conferences, research summits, and thematic symposiums."
    },
    {
      icon: GraduationCap,
      title: "Training & Capacity Building",
      desc: "Workshops and training modules on research writing, publishing ethics, research analytics, and digital tools."
    },
    {
      icon: Users,
      title: "Research Collaboration Facilitation",
      desc: "Connecting researchers with institutions and global partners for collaborative projects."
    }
  ];

  const values = [
    { icon: ShieldCheck, title: "Integrity", desc: "Ethical, transparent, and reliable academic practices" },
    { icon: Trophy, title: "Quality", desc: "Maintaining rigorous international publishing standards" },
    { icon: Lightbulb, title: "Innovation", desc: "Encouraging digital tools, AI adoption, and new methodologies" },
    { icon: Users, title: "Inclusivity", desc: "Providing equal opportunities for scholars worldwide" },
    { icon: Target, title: "Impact", desc: "Ensuring research contributes to global development goals" }
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
                About SIARE
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium italic font-headline">
                Society of Integrated Academic Research and Education: Accelerating global research impact through multidisciplinary excellence.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e087563ef3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Academic Research"
              fill
              className="object-cover"
              priority
              data-ai-hint="university campus"
            />
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="relative h-full min-h-[400px] rounded-[2rem] overflow-hidden shadow-2xl" data-aos="fade-right">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="SIARE Academic Community"
                  fill
                  className="object-cover"
                  data-ai-hint="academic publishing"
                />
              </div>
              <div className="space-y-8 flex flex-col justify-center" data-aos="fade-left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">
                    Who We Are
                  </h2>
                  <div className="w-20 h-1 bg-accent mt-2"></div>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                  The Society of Integrated Academic Research and Education (SIARE) is an international scholarly organization dedicated to advancing cross-disciplinary research, promoting academic excellence, and supporting global collaboration.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                  SIARE connects leading scholars, emerging researchers, universities, and research organizations through conferences, proceedings publications, and collaborative projects that accelerate knowledge creation.
                </p>
                
                <div className="flex flex-col gap-6">
                  <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-[2rem] overflow-hidden h-full">
                    <CardHeader className="py-4">
                      <CardTitle className="text-primary text-xl font-headline italic">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                        To empower global academic communities by enabling high-quality research dissemination, fostering multidisciplinary collaboration, and building an ecosystem where researchers can exchange ideas, publish outcomes, and contribute to global scientific advancement.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-[2rem] overflow-hidden h-full">
                    <CardHeader className="py-4">
                      <CardTitle className="text-primary text-xl font-headline italic">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                        To become a globally trusted academic society known for shaping impactful research, integrating innovation with education, and providing a unified platform for scholarly exchange across all major disciplines.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic mb-4" data-aos="fade-up">
                Our Core Objectives
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {objectives.map((obj, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 group" data-aos="zoom-in" data-aos-delay={idx * 50}>
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                    <obj.icon className="h-6 w-6 text-accent group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-primary/80 leading-tight">{obj.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic mb-4" data-aos="fade-up">
                What SIARE Does
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
              <p className="text-foreground/60 mt-6 max-w-2xl mx-auto font-medium">SIARE functions as a global academic ecosystem providing specialized services for research growth.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whatWeDo.map((item, idx) => (
                <Card key={idx} className="border-none shadow-xl rounded-[2rem] bg-slate-50 p-8 hover:bg-white hover:-translate-y-1 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 italic font-headline">{item.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-primary text-white overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline italic mb-4" data-aos="fade-up">
                Our Values
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-12" data-aos="fade-up"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {values.map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center space-y-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <val.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{val.title}</h4>
                      <p className="text-[10px] uppercase font-black text-white/40 tracking-widest">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic mb-4" data-aos="fade-up">
                Organizational Structure
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Executive Committee", 
                  desc: "A team of senior scholars and advisors who guide the strategic direction of SIARE." 
                },
                { 
                  title: "Editorial & Proceedings Committee", 
                  desc: "Handles peer review coordination, ethical checks, and proceedings publication." 
                },
                { 
                  title: "Academic Council", 
                  desc: "Experts from multiple disciplines who oversee academic quality, event partnerships, and research programs." 
                }
              ].map((struct, idx) => (
                <Card key={idx} className="rounded-[2rem] border-none bg-slate-50 p-8 text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <h3 className="text-xl font-bold text-primary mb-4 italic font-headline">{struct.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed font-medium">{struct.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Unique & Impact */}
        <section className="py-24 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-16">
              <div data-aos="fade-right">
                <h3 className="text-2xl font-bold text-primary font-headline mb-8 italic">Why SIARE is Unique</h3>
                <ul className="space-y-4">
                  {[
                    "100% dedicated to university-based academic research",
                    "Multidisciplinary approach across major Scopus clusters",
                    "Transparent peer review and rigorous editorial workflows",
                    "Global partnerships with universities and institutions",
                    "Strong focus on integrating Sustainable Development Goals",
                    "Emphasis on academic ethics and responsible publishing"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-left">
                <h3 className="text-2xl font-bold text-primary font-headline mb-8 italic">Global Impact</h3>
                <p className="text-foreground/70 mb-8 font-medium">Through its proceedings, conferences, and collaborations, SIARE contributes to:</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Quality research dissemination",
                    "University research enhancement",
                    "International networking",
                    "Scholarly visibility",
                    "Research citations",
                    "Sustainable growth"
                  ].map((impact, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-primary/5 text-xs font-bold text-primary text-center uppercase tracking-wider">
                      {impact}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
