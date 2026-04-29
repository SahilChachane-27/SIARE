'use client';

import { useEffect, useState } from 'react';

type AdminUser = {
  id: number;
  email: string;
};

export function useAdminSession() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch('/api/admin/session')
      .then(async (response) => {
        if (!isMounted) return;

        if (!response.ok) {
          setUser(null);
          return;
        }

        const result = await response.json();
        setUser(result?.user ?? null);
      })
      .catch(() => {
        if (isMounted) {
          setUser(null);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { user, loading };
}
