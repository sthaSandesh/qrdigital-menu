'use client';

import { createContext, use, useCallback, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import {client} from '../client';
import { Spinner } from '@/components/icons/icons';
import { useRouter } from 'next/navigation';

interface IUser {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
}

const UserContext = createContext<IUser | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    client.auth
      .getUser()
      .then((user) => {
        if (user.error) throw new Error('User not found');
        setUser(user.data.user);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    } else {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const logout = useCallback(async () => {
    await client.auth.signOut();
    setUser(null);
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner className="animate-spin text-destructive h-12 w-12" />
      </div>
    );

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = use(UserContext);
  if (!ctx) throw new Error('useUser must be used within a UserProvider');

  return ctx;
}