import { buttonVariants, cn } from '@edge-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function UserAuthForm({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:hidden">
        <div className="bg-destructive h-screen max-h-screen" />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gray-200 items-center justify-start flex pl-10">
            <Image
              src="/education.svg"
              height={400}
              width={400}
              alt="art"
              draggable="false"
              className="select-none"
            />
          </div>

          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src="/swastiklogo.png"
              height={60}
              width={120}
              draggable="false"
              alt="logo"
              className="select-none"
            />
          </div>

          <div className="relative z-20 mt-auto text-black">
            <blockquote className="space-y-2">
              <p className="text-lg font-semibold">College Management System</p>
              <footer className="text-sm">
                Created by <span className="font-medium">Kunjan Dhungana</span>{' '}
                & <span className="font-medium">Apil Basnet</span>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to log into your account
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}