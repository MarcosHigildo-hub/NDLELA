"use client";

import { Menu } from "lucide-react";

export default function SideBar() {
  return (
    <aside
      className="hidden md:flex flex-col items-center absolute top-4 left-4 z-[1000] w-20 h-[calc(100vh-32px)]
        bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl
        border border-gray-200 p-4 transition-all "
    >
      <div className="">
        <Menu
          size={40}
          className="hover:bg-gray-100 p-2 rounded-full cursor-pointer transition-colors text-zinc-700"
        />
      </div>

      <div className="mt-8 space-y-6">
        <div></div>
      </div>
    </aside>
  );
}
