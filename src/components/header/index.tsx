"use client";
import { Button, useTheme } from "@edge-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { setTheme, theme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="padx bg-gray-200 py-2 flex justify-between items-center font-bold">
      <Link href="/">
        <h1>
          <span className="text-green-500">Digital-</span>
          <span className="text-blue-800">Menu</span>
        </h1>
      </Link>

      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={handleThemeChange}>
          {theme === "dark" ? <FaMoon /> : <FaSun />}
        </Button>
        <Link href="https://github.com/sthaSandesh/qrdigital-menu" target="_">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}
