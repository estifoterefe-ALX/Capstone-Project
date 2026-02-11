import React from "react";
import {
  ChevronLeft,
  Heart,
  Bookmark,
  Info,
  Star,
  ChevronRight,
} from "lucide-react";
import RecommendationCard from "./recommendations";
import TopBar from "./TopBar";
import MetadataItem from "./metaData";

// --- Data Placeholders ---
const MOVIE_DATA = {
  title: "INTERSTELLAR",
  year: "2014",
  rating: "PG-13",
  runtime: "2H 49M",
  score: "8.7",
  tagline: "A Cinematic Masterpiece",
  synopsis_short:
    "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  synopsis_long:
    "In a future where Earth's ecosystem is failing, former NASA pilot Cooper leads a mission through a wormhole to find a new home for humanity. As the crew travels across space and time, they face unimaginable challenges and make profound sacrifices to ensure the survival of the human race.",
  release_date: "Nov 07, 2014",
  budget: "$165M",
  genres: ["Sci-Fi", "Adventure", "Drama"],
  director: "Christopher Nolan",
  background_img:
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2500&auto=format&fit=crop",
};

const RECOMMENDATIONS = [
  {
    id: 1,
    title: "Inception",
    year: "2010",
    director: "Christopher Nolan",
    img: "https://imasfsdges.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=300&h=450",
  },
  {
    id: 2,
    title: "The Martian",
    year: "2015",
    director: "Ridley Scott",
    img: "https://imagegsdfsdfs.unsplash.com/photo-1614726365723-49cfae9278b7?auto=format&fit=crop&q=80&w=300&h=450",
  },
  {
    id: 3,
    title: "Gravity",
    year: "2013",
    director: "Alfonso Cuarón",
    img: "https://images.unssdfsadplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=300&h=450",
  },
  {
    id: 4,
    title: "Arrival",
    year: "2016",
    director: "Denis Villeneuve",
    img: "https://images.unssdafplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300&h=450",
  },
];

const CAST_AVATARS = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
];

// --- Components ---

// --- Main Page Component ---

export default function Detail() {
  return (
    <div className="bg-white dark:bg-[#0b0d14] min-h-screen text-gray-900 dark:text-white font-sans selection:bg-yellow-500 selection:text-black transition-colors duration-200">
      <TopBar />

      {/* Hero Section */}
      <div className="relative w-full h-screen md:h-[85vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={MOVIE_DATA.background_img}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Complex Gradient to fade into body color */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/30 dark:from-[#0b0d14]/30 dark:via-[#0b0d14]/60 dark:to-[#0b0d14]" />
          <div className="absolute inset-0 bg-linear-to-r from-white/20 via-transparent to-transparent dark:from-[#0b0d14]/90 dark:via-[#0b0d14]/40 dark:to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-yellow-500 dark:bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
              Featured
            </span>
            <span className="text-yellow-500 dark:text-yellow-400 text-xs font-bold tracking-widest uppercase">
              {MOVIE_DATA.tagline}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-gray-900 dark:text-white mb-4 uppercase">
            {MOVIE_DATA.title}
          </h1>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">
            <span>{MOVIE_DATA.year}</span>
            <span className="w-1 h-1 bg-yellow-500 dark:bg-yellow-400 rounded-full" />
            <span className="border border-gray-400 dark:border-gray-500 px-1 rounded text-xs">
              {MOVIE_DATA.rating}
            </span>
            <span className="w-1 h-1 bg-yellow-500 dark:bg-yellow-400 rounded-full" />
            <span>{MOVIE_DATA.runtime}</span>
            <span className="w-1 h-1 bg-yellow-500 dark:bg-yellow-400 rounded-full" />
            <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400">
              <Star size={14} fill="currentColor" />
              <span>{MOVIE_DATA.score}</span>
            </div>
          </div>

          <p className="text-gray-800 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mb-10 relative pl-4">
            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-500/50 dark:bg-yellow-400/50"></span>
            {MOVIE_DATA.synopsis_short}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-300 text-black px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer">
              <Heart size={16} fill="black" /> Add to Favorite
            </button>
            <button className="bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-gray-300 dark:border-white/10 transition-colors cursor-pointer">
              <Bookmark size={16} /> Add to Watchlist
            </button>
            <button className="bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-gray-300 dark:border-white/10 transition-colors cursor-pointer">
              <Info size={16} /> View Detail
            </button>
          </div>
        </div>
      </div>

      {/* Details Grid Section */}
      <div className="px-8 md:px-16 py-12 bg-white dark:bg-[#0b0d14]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-300 dark:border-gray-800 pb-16">
          {/* Left Column: Stats - 6 columns */}
          <div className="md:col-span-6">
            <h3 className="text-yellow-500 dark:text-yellow-400 text-xs font-black uppercase tracking-widest mb-8">
              Metadata
            </h3>

            {/* Row 1: First 2 MetadataItems */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <MetadataItem label="Release" value={MOVIE_DATA.release_date} />
              <MetadataItem label="Runtime" value="169 Minutes" />
            </div>

            {/* Row 2: Last 2 MetadataItems */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <MetadataItem label="Rating" value={MOVIE_DATA.rating} />
              <MetadataItem
                label="Budget"
                value={MOVIE_DATA.budget}
                isHighlight
              />
            </div>

            {/* Row 3: Genres */}
            <div>
              <div className="mt-8 flex flex-wrap gap-2">
                {MOVIE_DATA.genres.map((genre) => (
                  <span
                    key={genre}
                    className="text-[10px] font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 dark:bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full uppercase hover:bg-yellow-500/20 hover:border-yellow-500/50 dark:hover:bg-yellow-500/20 dark:hover:border-yellow-500/50 transition-colors cursor-default"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Description & Director - 6 columns */}
          <div className="md:col-span-6">
            <h3 className="text-yellow-500 dark:text-yellow-400 text-xs font-black uppercase tracking-widest mb-8">
              Description
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-loose text-sm md:text-base mb-12">
              {MOVIE_DATA.synopsis_long}
            </p>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {CAST_AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0b0d14]"
                    alt="Cast"
                  />
                ))}
              </div>
              <div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold mb-1">
                  Directed By
                </p>
                <p className="text-gray-900 dark:text-white font-bold uppercase tracking-wide">
                  {MOVIE_DATA.director}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="px-8 md:px-16 py-8 bg-gray-50 dark:bg-[#0b0d14]">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
              Continue Exploring
            </p>
            <h2 className="text-3xl font-black italic text-gray-900 dark:text-white uppercase tracking-tight">
              Recommendations
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide">
          {RECOMMENDATIONS.map((movie) => (
            <RecommendationCard key={movie.id} item={movie} />
          ))}
        </div>
      </div>

      {/* Hide scrollbar style */}
      <style>{`
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
    </div>
  );
}
