"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NavLink } from "./nav-link";
import { useStore } from "@/lib/store";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useStore(); // access the cart from the store

  return (
    <header>
      <nav
        className={`padx md:px-10 flex justify-between items-center py-2 ${
          open ? "bg-muted" : ""
        } lg:bg-white shadow-sm`}
      >
        <Link href="/" className="font-bold text-orange-500">
          Our Menu
        </Link>

        <div className="space-x-5">
          <NavLink href="/">Menu</NavLink>
          <NavLink href="/cart">Cart ({cart.length})</NavLink>{" "}
          {/* display the number of items in the cart */}
        </div>
      </nav>
    </header>
  );
}
