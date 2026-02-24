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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  projectType: z.string({
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
    defaultValues: { name: "", email: "", phone: "", projectType: undefined, message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Submitted!",
      description: "Our technical team will contact you within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 md:p-12 rounded-funky shadow-2xl border border-border/50" data-aos="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary font-headline italic">Institutional Inquiry</h2>
          <div className="mt-2 w-16 h-1 bg-accent mx-auto"></div>
          <p className="text-sm text-foreground/60 mt-4">Tell us about your requirements and our experts will get back to you with a tailored consultation.</p>
        </div>
        
        {isClient && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold text-primary">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
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
                      <FormLabel className="text-base font-bold text-primary">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email address" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
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
                      <FormLabel className="text-base font-bold text-primary">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold text-primary">Service Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl h-12 border-input focus:ring-primary/50">
                            <SelectValue placeholder="Select a service type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hosting">Journal Hosting Services</SelectItem>
                          <SelectItem value="partnership">University Partnership</SelectItem>
                          <SelectItem value="workflow">Editorial Workflow Management</SelectItem>
                          <SelectItem value="migration">Migration & Legacy Services</SelectItem>
                          <SelectItem value="indexing">Indexing & DOI Support</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-bold text-primary">Additional Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your institutional requirements, journal scope, or migration needs..." 
                        className="rounded-xl min-h-[150px] border-input focus:ring-primary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-accent rounded-funky py-3 md:py-6 text-base md:text-xl font-bold shadow-xl transition-all hover:scale-[1.01]"
              >
                Request Technical Consultation
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
