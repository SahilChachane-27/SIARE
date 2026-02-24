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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Mail, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters.")
    .max(255, "Name must be less than 255 characters.")
    .regex(/^[a-zA-Z\s\-\.]+$/, "Name can only contain letters, spaces, hyphens, and dots"),
  email: z.string()
    .email("Please enter a valid email address.")
    .max(255, "Email must be less than 255 characters."),
  mobile: z.string()
    .min(10, "Mobile number must be at least 10 digits.")
    .max(20, "Mobile number must be less than 20 digits.")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please provide a valid phone number"),
  hasIssn: z.enum(["yes", "no"], {
    required_error: "Please select an option.",
  }),
  message: z.string().max(2000, "Message must be less than 2000 characters.").optional(),
});

export default function StartJournalPage() {
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", mobile: "", hasIssn: undefined, message: "" },
  });

  const watchValues = form.watch();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Submitted!",
      description: "Our technical team will contact you shortly to guide you through the process.",
    });
    form.reset();
  }

  if (!isClient) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-primary pt-24 pb-16 md:pt-32 md:pb-24 text-center px-4">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white font-headline">
                Start Your Journal with Technical Journals
              </h1>
              <p className="max-w-5xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-medium italic">
                Empowering your institution with Technical Journals.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/90">
                <a 
                  href="mailto:support@technicaljournals.org" 
                  className="flex items-center gap-2 hover:text-white transition-colors sm:border-r sm:border-white/20 sm:pr-8 last:border-0"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span className="font-bold text-sm sm:text-base">Email:</span> 
                  <span className="text-xs sm:text-base break-all">support@technicaljournals.org</span>
                </a>
                <a 
                  href="tel:0000000000" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span className="font-bold text-sm sm:text-base">Mobile:</span> 
                  <span className="text-xs sm:text-base">0000000000</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white p-6 md:p-12 rounded-funky shadow-2xl border border-border/50">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary font-headline italic">Institutional Inquiry Form</h2>
                <div className="mt-2 w-16 h-1 bg-accent mx-auto"></div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold text-primary">Full Name <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                        </FormControl>
                        <p className="text-xs text-muted-foreground mt-1">{(watchValues.name || "").length}/255 characters</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold text-primary">Email Address <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                          </FormControl>
                          <p className="text-xs text-muted-foreground mt-1">{(watchValues.email || "").length}/255 characters</p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold text-primary">Mobile Number <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your mobile number" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                          </FormControl>
                          <p className="text-xs text-muted-foreground mt-1">{(watchValues.mobile || "").length}/20 characters</p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="hasIssn"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-bold text-primary">Do you have ISSN for your journal? <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid md:grid-cols-2 gap-4"
                          >
                            <div className="flex items-center space-x-3 border rounded-xl p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                              <RadioGroupItem value="yes" id="issn-yes" className="text-primary focus:ring-primary" />
                              <FormLabel htmlFor="issn-yes" className="font-normal cursor-pointer flex-1 text-primary/80">
                                Yes, I have ISSN
                              </FormLabel>
                            </div>
                            <div className="flex items-center space-x-3 border rounded-xl p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                              <RadioGroupItem value="no" id="issn-no" className="text-primary focus:ring-primary" />
                              <FormLabel htmlFor="issn-no" className="font-normal cursor-pointer flex-1 text-primary/80">
                                No, I want to start a new journal
                              </FormLabel>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-bold text-primary">Additional Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your requirements..." 
                            className="rounded-xl min-h-[120px] border-input focus:ring-primary/50" 
                            {...field} 
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground mt-1">{(watchValues.message || "").length}/2000 characters</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-accent rounded-funky py-3 sm:py-4 md:py-6 text-sm sm:text-lg md:text-xl font-bold shadow-xl transition-all hover:scale-[1.01]"
                  >
                    Submit Inquiry
                  </Button>
                  
                  <p className="text-xs sm:text-sm text-center text-muted-foreground mt-4">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                    We respect your privacy and will never share your information.
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
