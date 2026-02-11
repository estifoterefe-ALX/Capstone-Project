import { ChevronLeft, Share2 } from "lucide-react";
import ThemeToggle from "../landingPage/themeToggle";
const TopBar = () => (
  <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between">
    <button className="flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white bg-white/80 dark:bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-gray-300 dark:border-white/10 transition group cursor-pointer shadow-sm">
      <ChevronLeft
        size={20}
        className="group-hover:-translate-x-1 transition text-gray-600 dark:text-white/80"
      />
      <span className="text-xs font-bold tracking-wide uppercase">
        Back to Gallery
      </span>
    </button>
    <button className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white bg-white/80 dark:bg-black/30 backdrop-blur-md p-2 rounded-full border border-gray-300 dark:border-white/10 transition cursor-pointer shadow-sm">
      <ThemeToggle />
    </button>
  </nav>
);
export default TopBar;
