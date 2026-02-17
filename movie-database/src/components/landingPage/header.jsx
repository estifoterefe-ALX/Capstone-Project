import React, { useState } from "react";
import { Search } from "lucide-react";
import ThemeToggle from "../utils/themeToggle";
import { useNavigate } from "react-router-dom";
import { LogOut, Heart, List, LogIn } from "lucide-react";
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

const Header = ({ isLoggedIn = true }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
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

        <button
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
          onClick={() => navigate("/search")}
        >
          <Search size={20} />
        </button>

        {isLoggedIn ? (
          /* Profile with Dropdown */
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-300 dark:border-gray-600 cursor-pointer hover:ring-2 hover:ring-yellow-500/50 transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100"
                alt="User"
                className="w-full h-full object-cover"
              />
            </button>

            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <>
                {/* Backdrop for closing on click outside */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsProfileMenuOpen(false)}
                />

                {/* Dropdown */}
                <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl border border-gray-200 dark:border-white/10 overflow-hidden z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-white/10">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      john@example.com
                    </p>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <button
                      onClick={() => {
                        navigate("/my-list");
                        setIsProfileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors group"
                    >
                      <List
                        size={18}
                        className="text-gray-500 dark:text-gray-400 group-hover:text-yellow-500 transition-colors"
                      />
                      <span>My List</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/favorites");
                        setIsProfileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors group"
                    >
                      <Heart
                        size={18}
                        className="text-gray-500 dark:text-gray-400 group-hover:text-yellow-500 transition-colors"
                      />
                      <span>My Favorites</span>
                    </button>

                    <div className="border-t border-gray-200 dark:border-white/10 my-2"></div>

                    <button
                      // onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors group"
                    >
                      <LogOut
                        size={18}
                        className="text-red-500 group-hover:text-red-600"
                      />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          /* Login Button */
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-yellow-500/30"
          >
            <LogIn size={18} />
            <span>Login</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
