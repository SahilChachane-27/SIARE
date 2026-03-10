'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, Edit3, ClipboardList, PenTool, BookOpen, Layers, ArrowRight } from 'lucide-react';

const resources = [
  { title: "Research writing guides", icon: PenTool },
  { title: "Plagiarism reduction", icon: Edit3 },
  { title: "Review templates", icon: ClipboardList },
  { title: "Submission templates", icon: FileText },
  { title: "Academic tools", icon: Layers },
  { title: "Learning modules", icon: BookOpen },
];

export function LearningHub() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3">Knowledge Center</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-headline italic leading-tight">Resources & Learning</h3>
          <div className="mt-4 w-16 md:w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {resources.map((res, i) => (
            <Card key={i} className="border border-slate-100 shadow-xl rounded-2xl group hover:border-accent hover:bg-slate-50 transition-all duration-500" data-aos="zoom-in" data-aos-delay={i * 50}>
              <CardContent className="p-5 sm:p-8 text-center flex flex-col items-center justify-center min-h-[140px] sm:min-h-0">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent transition-colors">
                  <res.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-white" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-bold text-primary group-hover:text-accent transition-colors italic leading-tight text-center">
                  {res.title}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center" data-aos="fade-up">
          <Button asChild className="bg-primary hover:bg-accent text-white hover:text-primary rounded-xl px-8 md:px-10 h-10 md:h-12 text-[10px] md:text-xs font-black italic shadow-2xl transition-all hover:scale-105 w-full sm:w-auto">
            <Link href="/resources" className="flex items-center justify-center gap-2">
              Visit Hub <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}