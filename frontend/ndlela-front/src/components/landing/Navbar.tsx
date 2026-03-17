"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, X, Github } from "lucide-react";

import Button from "../ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-35 h-35 md:w-45 md:h-45">
            <Image
              src="/logo.png"
              alt="Ndlela logo"
              fill
              className="object-contain"
            />
          </div>

          {/* <span className="font-semibold text-lg tracking-tight">
            NDLELA
          </span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#sobre" className="nav-link">
            Sobre
          </a>

          <a href="#problema" className="nav-link">
            Problema
          </a>

          <a href="#solucao" className="nav-link">
            Solução
          </a>

          <a href="#roadmap" className="nav-link">
            Roadmap
          </a>
        </nav>

        <div className="hidden md:flex">
         <Button href="https://github.com">
           <Github size={16} />
            Contribuir
         </Button>
        </div>

        <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-primary"
        >
          {menuOpen ? <X size={26}/> : <Menu size={26}/>}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6  pt-2 flex flex-col gap-4 bg-white border-t">
          <a href="#sobre" className="nav-link">
            Sobre
          </a>

          <a href="#problema" className="nav-link">
            Problema
          </a>

          <a href="#solucao" className="nav-link">
            Solução
          </a>

           <a href="#roadmap" className="nav-link">
            Roadmap
          </a>

          <Button href="https://github.com">
            <Github size={16} />
            Contribuir
          </Button>
          
        </div>
      )}
    </header>
  );
}
