"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link
      className={cn(
        "font-medium uppercase",
        active ? "text-primary" : "hover:text-primary"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

export function MobileNavLink({
  href,
  children,
  onClose,
}: {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const goto = useCallback(() => {
    onClose();
    router.push(href);
  }, [href, router, onClose]);

  useEffect(() => {
    setActive(pathname === href);
  }, [pathname, href]);

  return (
    <h3
      className={cn(
        "font-medium uppercase text-primary hover:text-white hover:bg-primary p-4 w-full rounded-md",
        active ? "bg-primary text-white" : ""
      )}
      onClick={goto}
    >
      {children}
    </h3>
  );
}
