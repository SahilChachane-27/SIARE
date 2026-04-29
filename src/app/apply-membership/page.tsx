'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { ShieldCheck, Users, GraduationCap, Landmark, Briefcase } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  institution: z.string().min(2, "Please provide your institutional affiliation."),
  tier: z.string({
    required_error: "Please select a membership tier.",
  }),
  statement: z.string().min(10, "Please provide a brief statement of interest."),
});

const tiers = [
  { value: "Individual Researcher", label: "Individual Researcher", icon: Users },
  { value: "Student Membership", label: "Student Membership", icon: GraduationCap },
  { value: "Institutional Membership", label: "Institutional Membership", icon: Landmark },
  { value: "Affiliate Membership", label: "Affiliate Membership", icon: Briefcase },
];

export default function ApplyMembershipPage() {
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", institution: "", tier: undefined, statement: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      institution: values.institution,
      purpose: 'Membership Application',
      tier: values.tier,
      message: values.statement,
      status: 'pending',
    };

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result?.error || 'Unable to submit your application');
      }

      toast({
        title: "Application Submitted!",
        description: "Our membership committee will review your application and contact you shortly.",
      });
      form.reset();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: error?.message || 'Please try again later.',
      });
    }
  }

  if (!isClient) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-primary text-primary-foreground overflow-hidden text-center">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline italic leading-tight mb-6">
                Become a Member
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium italic">
                Join our global academic community and start accelerating your research impact today.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <ShieldCheck className="absolute top-1/4 left-1/4 w-64 h-64 -rotate-12" />
            <Users className="absolute bottom-1/4 right-1/4 w-64 h-64 rotate-12" />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-border/50" data-aos="fade-up">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary font-headline italic">Membership Application Form</h2>
                <p className="text-sm text-foreground/50 mt-2">Please fill in your details accurately for review.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. Jane Smith" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="jane.smith@university.edu" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 000 000 0000" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Institution / University *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Stanford University" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="tier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Membership Tier *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl h-12 border-input focus:ring-primary/50">
                              <SelectValue placeholder="Select your tier" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tiers.map((tier) => (
                              <SelectItem key={tier.value} value={tier.value} className="py-3">
                                <div className="flex items-center gap-3">
                                  <tier.icon className="h-4 w-4 text-accent" />
                                  <span className="font-medium">{tier.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="statement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Statement of Interest *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Briefly explain your research background and why you wish to join SIARE..." 
                            className="rounded-xl min-h-[150px] border-input focus:ring-primary/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-accent rounded-xl py-8 text-lg font-black italic shadow-xl transition-all hover:scale-[1.01]"
                    >
                      Submit Membership Application
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-muted-foreground italic font-medium">
                    By clicking submit, you agree to abide by the SIARE Code of Conduct and Research Ethics.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
