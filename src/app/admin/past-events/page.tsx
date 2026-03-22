'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * This page is deprecated as Past Events are now automatically 
 * handled by the date logic on the public events page.
 */
export default function DeprecatedPastEventsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/dashboard');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );
}
