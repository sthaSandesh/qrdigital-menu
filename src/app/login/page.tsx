'use client';
import { client } from '@/lib/client';
import React from 'react';
import { useState, useEffect } from 'react';
import { cn, Button, Input, Label, useToast } from '@edge-ui/react';
import { Spinner } from '@/components/icons/icons';
import {UserAuthForm} from '@/components/authentication/Authentication';

import { useUser } from '@/lib/context/UserContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { toast } = useToast();
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const { data, error } = await client .auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to sign in to the account.',
        variant: 'destructive',
      });

      setIsLoading(false);
      return;
    }

    if (!data.user) {
      toast({
        title: 'Error',
        description: 'Account with that email does not exist.',
        variant: 'destructive',
      });

      setIsLoading(false);
      return;
    }

    setUser(data.user);
  }

  return (
    <UserAuthForm>
      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Password
              </Label>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                minLength={8}
              />
            </div>
            <Button disabled={isLoading} className="mt-4">
              {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </UserAuthForm>
  );
}