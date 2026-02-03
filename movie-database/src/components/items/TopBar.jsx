import { ChevronLeft, Share2 } from "lucide-react";
const TopBar = () => (
  <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between">
    <button className="flex items-center gap-2 text-white/80 hover:text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 transition group cursor-pointer">
      <ChevronLeft
        size={20}
        className="group-hover:-translate-x-1 transition"
      />
      <span className="text-xs font-bold tracking-wide uppercase">
        Back to Gallery
      </span>
    </button>
    <button className="text-white/80 hover:text-white bg-black/30 backdrop-blur-md p-2 rounded-full border border-white/10 transition cursor-pointer">
      <Share2 size={20} />
    </button>
  </nav>
);
export default TopBar;
