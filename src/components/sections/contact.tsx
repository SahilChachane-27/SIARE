
'use client';

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
import { Upload } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Mobile number must be at least 10 digits."),
  institution: z.string().optional(),
  purpose: z.string({
    required_error: "Please select an inquiry type.",
  }),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", institution: "", purpose: undefined, message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      ...values,
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
        throw new Error(result?.error || 'Unable to submit your inquiry');
      }

      toast({
        title: "Inquiry Submitted!",
        description: "Our technical team will contact you within 24 hours.",
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

  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-border/50" data-aos="fade-up">
        {isClient && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
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
                        <Input placeholder="john.doe@university.edu" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Mobile Number *</FormLabel>
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
                      <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Institution/Organization (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. VIT PUNE" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Purpose of Inquiry *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl h-12 border-input focus:ring-primary/50">
                          <SelectValue placeholder="Select a purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Membership">Membership</SelectItem>
                        <SelectItem value="Proceedings Publication">Proceedings Publication</SelectItem>
                        <SelectItem value="Conference Partnership">Conference Partnership</SelectItem>
                        <SelectItem value="Workshop/Training">Workshop/Training</SelectItem>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-black uppercase text-primary/60 tracking-widest">Message *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide details about your inquiry..." 
                        className="rounded-xl min-h-[150px] border-input focus:ring-primary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-primary/60 tracking-widest">Upload Document (Optional)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors">
                  <Upload className="h-6 w-6 text-primary/20" />
                  <span className="text-[10px] font-bold text-primary/40 uppercase">Click to upload or drag & drop</span>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-accent rounded-xl py-6 text-base font-black italic shadow-xl transition-all hover:scale-[1.01]"
              >
                Send Message
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
