'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { loginAction } from '@/actions/auth';

const initialState: any = {
  error: null,
  success: false,
};

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: state.error,
      });
    } else if (state?.success) {
      toast({
        title: "Login Successful",
        description: "Welcome to the SIARE Admin Panel.",
      });
      router.push('/admin/dashboard');
    }
  }, [state, toast, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <Card className="w-full max-w-md rounded-[2rem] shadow-2xl border-none">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-primary h-16 w-16 rounded-full flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-accent" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold font-headline italic text-primary">SIARE Admin Access</CardTitle>
            <CardDescription>Enter your credentials to manage the platform</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary/70 uppercase tracking-wider">Email Address</label>
              <Input
                type="email"
                name="email"
                placeholder="admin@academicproceeding.org"
                required
                className="rounded-xl h-12"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary/70 uppercase tracking-wider">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="rounded-xl h-12"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-accent font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
              disabled={isPending}
            >
              {isPending ? "Authenticating..." : "Login to Dashboard"}
            </Button>
          </form>
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-primary/60 hover:text-primary transition-colors font-medium">
              &larr; Back to Public Site
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
