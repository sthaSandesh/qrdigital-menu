import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div className="padx bg-gray-200 py-2 flex justify-between items-center font-bold">
      <h1>
        <span className="text-green-500">Digital-</span>
        <span className="text-blue-800">Menu</span>
      </h1>

      <Link href="https://github.com/sthaSandesh/qrdigital-menu" target="_">
        <FaGithub />
      </Link>
    </div>
  );
}
