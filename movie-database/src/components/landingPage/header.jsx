import React from "react";
import { Moon, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-8 py-6 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-12">
        <h1 className="text-yellow-400 font-black text-2xl tracking-tighter">
          MOVIEDB
        </h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="text-white border-b-2 border-yellow-400 pb-1">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Trending
          </a>
          <a href="#" className="hover:text-white transition">
            Movies
          </a>
          <a href="#" className="hover:text-white transition">
            Series
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-6 text-gray-300">
        <button className="hover:text-white cursor-pointer">
          <Moon size={20} />
        </button>
        <button className="hover:text-white cursor-pointer">
          <Search size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden border border-gray-500 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
