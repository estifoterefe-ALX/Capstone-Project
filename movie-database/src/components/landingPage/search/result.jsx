import { Star, Loader2, AlertCircle, Film } from "lucide-react";

const ResultCard = ({ variant = "default", data }) => {
  // --- Loading State ---
  if (variant === "loading") {
    return (
      <div className="aspect-2/3 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#111] flex flex-col items-center justify-center p-4 text-center">
        <Loader2
          size={48}
          className="text-yellow-500 dark:text-yellow-400 mb-4 animate-spin"
        />
        <h4 className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">
          Loading
        </h4>
        <p className="text-gray-500 dark:text-gray-600 text-[10px] uppercase tracking-wide">
          Deep Space Search...
        </p>
      </div>
    );
  }

  // --- Error State ---
  if (variant === "error") {
    return (
      <div className="aspect-2/3 rounded-lg border border-red-300 dark:border-red-900/30 bg-red-50 dark:bg-[#1a0f0f] flex flex-col items-center justify-center p-4 text-center group cursor-not-allowed">
        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/30 transition-colors">
          <AlertCircle size={24} className="text-red-500" />
        </div>
        <h4 className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1">
          Link Broken
        </h4>
        <p className="text-gray-600 dark:text-gray-500 text-[10px] uppercase tracking-wide">
          Metadata Unavailable
        </p>
      </div>
    );
  }

  // --- Empty / Placeholder State ---
  if (variant === "empty") {
    return (
      <div className="aspect-2/3 rounded-lg bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-white/5 flex items-center justify-center">
        <Film size={32} className="text-gray-400 dark:text-gray-800" />
      </div>
    );
  }

  // --- Standard / Active Movie Card ---
  const isActive = variant === "active";

  return (
    <div
      className={`relative aspect-2/3 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 border border-gray-300 dark:border-gray-800 ${
        isActive
          ? "ring-2 ring-yellow-500 dark:ring-white shadow-[0_0_20px_rgba(234,179,8,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-105 z-10 mb-3"
          : "hover:ring-1 hover:ring-yellow-500/50 dark:hover:ring-gray-600"
      }`}
    >
      <img
        src={data.img}
        alt={data.title}
        className={`w-full h-full object-cover transition duration-500 ${
          isActive
            ? "opacity-100"
            : "opacity-90 dark:opacity-70 group-hover:opacity-100"
        }`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80 dark:opacity-90" />

      {/* Top Badges */}
      <div className="absolute top-3 left-3 flex justify-between w-[calc(100%-24px)]">
        <span className="bg-yellow-500 dark:bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide">
          {data.type}
        </span>
        <div className="flex items-center gap-1 bg-black/40 dark:bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
          <Star
            size={10}
            className="text-yellow-500 dark:text-yellow-400"
            fill="currentColor"
          />
          <span className="text-white text-[10px] font-bold">
            {data.rating}
          </span>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3
          className={`font-bold text-white mb-1 leading-tight ${
            isActive ? "text-lg" : "text-base"
          }`}
        >
          {data.title}
        </h3>
        <p className="text-gray-300 dark:text-gray-400 text-xs font-medium">
          {data.year} • {data.duration}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
