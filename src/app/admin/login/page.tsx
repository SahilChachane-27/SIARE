'use client';

import { useState } from 'react';
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Lock } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Successful",
        description: "Welcome to the SIARE Admin Panel.",
      });
      router.push('/admin/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message || "Please check your credentials.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <Card className="w-full max-w-md rounded-funky shadow-2xl border-none">
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
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary/70 uppercase tracking-wider">Email Address</label>
              <Input
                type="email"
                placeholder="admin@academicproceeding.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl h-12"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary/70 uppercase tracking-wider">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl h-12"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-accent font-bold rounded-funky shadow-lg transition-transform hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Login to Dashboard"}
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
