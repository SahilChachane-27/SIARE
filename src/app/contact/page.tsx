'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  MessageSquare, 
  Handshake, 
  ShieldCheck, 
  Laptop,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import { ScrollToTop } from '@/components/layout/scroll-to-top';

const contactEmails = [
  { 
    icon: Mail, 
    title: "General Inquiries", 
    email: "info@academicproceeding.org",
    link: "mailto:info@academicproceeding.org"
  },
  { 
    icon: ShieldCheck, 
    title: "Proceedings Support", 
    email: "proceedings@academicproceeding.org",
    link: "mailto:proceedings@academicproceeding.org"
  },
  { 
    icon: Users, 
    title: "Membership & Training", 
    email: "membership@academicproceeding.org",
    link: "mailto:membership@academicproceeding.org"
  },
  { 
    icon: MessageSquare, 
    title: "Editorial Queries", 
    email: "editorial@academicproceeding.org",
    link: "mailto:editorial@academicproceeding.org"
  }
];

const helpdesks = [
  {
    title: "Membership Helpdesk",
    desc: "For renewals, digital certificates, and member portal login issues.",
    icon: Users
  },
  {
    title: "Conference Support",
    desc: "For MoU formalities, event planning, and proceedings workflow coordination.",
    icon: Handshake
  },
  {
    title: "Technical Assistance",
    desc: "For submission portal issues, template downloads, and access problems.",
    icon: Laptop
  }
];

const responseTimes = [
  { label: "General Queries", time: "Within 24 Hours" },
  { label: "Conference Queries", time: "48–72 Hours" },
  { label: "Partnership Proposals", time: "3–5 Business Days" }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-28 bg-primary text-primary-foreground overflow-hidden text-center">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline italic leading-tight mb-6">
                Connect With SIARE
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium italic">
                We welcome inquiries from researchers, universities, and institutions interested in advancing global academic excellence.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <Mail className="absolute top-1/4 left-1/4 w-64 h-64 -rotate-12" />
            <Handshake className="absolute bottom-1/4 right-1/4 w-64 h-64 rotate-12" />
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            
            {/* General Contact Info */}
            <div className="mb-16 md:mb-20">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic" data-aos="fade-up">General Contact Information</h2>
                <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {contactEmails.map((item, i) => (
                  <Card key={i} className="rounded-2xl border border-primary/5 shadow-xl bg-slate-50 hover:bg-white transition-all group" data-aos="fade-up" data-aos-delay={i * 100}>
                    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <h4 className="font-bold text-primary mb-3 text-sm">{item.title}</h4>
                      <a href={item.link} className="text-[10px] sm:text-xs text-accent font-black break-all hover:text-primary transition-colors underline decoration-accent/20 underline-offset-4">
                        {item.email}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
              {/* Office Address */}
              <div data-aos="fade-right">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic mb-6 md:mb-8">Office Address</h2>
                <Card className="rounded-2xl border-none shadow-2xl bg-primary text-white overflow-hidden p-6 sm:p-10 relative">
                  <MapPin className="absolute top-4 right-4 h-24 w-24 opacity-5" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-headline italic text-accent mb-4">SIARE Administrative Office</h3>
                    <p className="text-lg opacity-80 leading-relaxed italic mb-2">Society of Integrated Academic Research and Education</p>
                    <p className="text-sm opacity-60 font-bold uppercase tracking-widest">[City, State, Country]</p>
                    <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-white/10">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Registered Scholarly Organization</p>
                    </div>
                  </div>
                </Card>

                {/* Support Response Time */}
                <div className="mt-12 md:mt-16" data-aos="fade-up">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic mb-6 md:mb-8">Support Response Time</h2>
                  <div className="space-y-4">
                    {responseTimes.map((rt, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-sm font-bold text-primary/70">{rt.label}</span>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-black text-accent uppercase tracking-widest">
                          <Clock className="h-3 w-3" /> {rt.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div data-aos="fade-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic mb-6 md:mb-8">Quick Contact Form</h2>
                <Contact />
              </div>
            </div>

            {/* Helpdesk & Assistance */}
            <div className="mb-16 md:mb-20">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic" data-aos="fade-up">Helpdesk & Assistance</h2>
                <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {helpdesks.map((help, i) => (
                  <Card key={i} className="rounded-2xl border border-primary/5 shadow-lg p-6 md:p-8 bg-white hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <help.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-primary italic">{help.title}</h3>
                    </div>
                    <p className="text-xs text-foreground/60 leading-relaxed font-medium">{help.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Collaboration & Feedback */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="rounded-2xl border-none shadow-2xl bg-slate-50 p-6 sm:p-10" data-aos="fade-up">
                <h2 className="text-xl md:text-2xl font-bold text-primary font-headline italic mb-4 md:mb-6">Collaboration Enquiries</h2>
                <p className="text-sm text-foreground/70 mb-6 md:mb-8 font-medium">Universities and research centers can reach out for Joint Conferences, Academic MoUs, and Faculty Development Programs.</p>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <a href="mailto:collaborations@academicproceeding.org" className="text-sm font-black text-primary hover:text-accent transition-colors break-all">collaborations@academicproceeding.org</a>
                </div>
              </Card>

              <Card className="rounded-2xl border-none shadow-2xl bg-slate-50 p-6 sm:p-10" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-xl md:text-2xl font-bold text-primary font-headline italic mb-4 md:mb-6">Feedback & Suggestions</h2>
                <p className="text-sm text-foreground/70 mb-6 md:mb-8 font-medium">Share your improvement suggestions, policy concerns, or website feedback with our quality assurance team.</p>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <a href="mailto:feedback@academicproceeding.org" className="text-sm font-black text-primary hover:text-accent transition-colors break-all">feedback@academicproceeding.org</a>
                </div>
              </Card>
            </div>

            {/* Social Media Links */}
            <div className="mt-16 md:mt-20 text-center" data-aos="zoom-in">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline italic mb-8">Connect With Us Online</h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  { icon: Linkedin, name: "LinkedIn" },
                  { icon: Facebook, name: "Facebook" },
                  { icon: Youtube, name: "YouTube" },
                  { icon: Twitter, name: "X (Twitter)" },
                  { icon: Instagram, name: "Instagram" }
                ].map((social, i) => (
                  <button key={i} className="group flex flex-col items-center gap-2">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                      <social.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-primary">{social.name}</span>
                  </button>
                ))}
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
