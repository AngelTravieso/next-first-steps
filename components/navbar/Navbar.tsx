// rafc -> functional component

// 'use client' -> para marcar que se renderiza en el cliente (el navegador)
// 'use server' -> por default los componentes se renderizan en el servidor

// Link hace la navegación sin refrescar la página

const navItems: { path: string; text: string }[] = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/pricing", text: "Pricing" },
];

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center gap-1">
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <Link key={navItem.path} className="mr-2" href={navItem.path}>
          {navItem.text}
        </Link>
      ))}
    </nav>
  );
};
