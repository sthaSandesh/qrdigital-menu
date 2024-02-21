"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NavLink } from "./nav-link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav
        className={`padx md:px-10 flex justify-between items-center py-2 ${
          open ? "bg-muted" : ""
        } lg:bg-white shadow-sm`}
      >
        <Link href="/" className="font-bold">
          Our Menu
        </Link>

        <div className="space-x-5" >
          <NavLink href="/">Menu</NavLink>
          <NavLink href="/">Cart</NavLink>
        </div>
      </nav>
    </header>
  );
}
