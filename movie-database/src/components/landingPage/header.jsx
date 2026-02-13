import React, { useState } from "react";
import { Moon, Search } from "lucide-react";
import ThemeToggle from "../utils/themeToggle";
const items = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "trending",
    name: "Trending",
  },
  {
    id: "movies",
    name: "Movies",
  },
  {
    id: "series",
    name: "Series",
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handleClick = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <header className="sticky top-0 z-50 w-full px-8 py-6 flex items-center justify-between bg-white/95 dark:bg-[#0a0f1c]/95 backdrop-blur-sm shadow-sm dark:shadow-gray-900/20 text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-12">
        <h1 className="text-yellow-500 dark:text-yellow-400 font-black text-2xl tracking-tighter">
          MOVIEDB
        </h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {items.map((item) => {
            return (
              <span
                key={item.id}
                className={`${
                  activeTab === item.id
                    ? "text-gray-900 dark:text-gray-100 border-b-3 border-yellow-500 dark:border-yellow-400 pb-1 cursor-pointer"
                    : "transition cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </span>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
          <Search size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-300 dark:border-gray-600 cursor-pointer">
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
