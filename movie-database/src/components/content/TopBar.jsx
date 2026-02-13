import { ChevronLeft, Share2 } from "lucide-react";
import ThemeToggle from "../utils/themeToggle";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between">
      <button
        className="flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white bg-white/80 dark:bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-gray-300 dark:border-white/10 transition group cursor-pointer shadow-sm"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft
          size={20}
          className="group-hover:-translate-x-1 transition text-gray-600 dark:text-white/80"
        />
        <span className="text-xs font-bold tracking-wide uppercase">Back</span>
      </button>
      <ThemeToggle />
    </nav>
  );
};
export default TopBar;
