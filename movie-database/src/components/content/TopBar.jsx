import { ChevronLeft, Share2 } from "lucide-react";
import ThemeToggle from "../utils/themeToggle";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();
  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: "Check this out!",
      url: window.location.href,
    };

    try {
      // Native share (mobile, supported desktop browsers)
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };
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
      <div>
        <button
          className="text-white/80 hover:text-white bg-black/30 backdrop-blur-md p-2 rounded-full border border-white/10 transition cursor-pointer mx-3"
          onClick={handleShare}
        >
          <Share2 size={20} />
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
};
export default TopBar;
