// rafc -> functional component

// 'use client' -> para marcar que se renderiza en el cliente (el navegador)
// 'use server' -> por default los componentes se renderizan en el servidor

import React from "react";

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>

      <div className="flex flex-1"></div>

      <a className="mr-2" href="/about">
        About
      </a>
      <a className="mr-2" href="/pricing">
        Pricing
      </a>
      <a className="mr-2" href="/contact">
        Contacto
      </a>
    </nav>
  );
};
