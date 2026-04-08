"use client";

import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="hidden md:flex absolute top-4 left-48 z-[1000] W-full max-w-md">
      <div className="relative group">
        <input
          type="text"
          placeholder="Para onde vais ?"
          className="w-full h-12 pl-12 pr-12 text-primary italic bg-white/95 backdrop-blur-md shadow-lg rounded-xl border-gray-200
           focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm transition-all"
        />

        <Search className="absolute left-4 top-3.5 size-5 text-accent font-bold roup-focus-within:text-emerald-600 transition-colors" />
      </div>
    </div>
  );
}
