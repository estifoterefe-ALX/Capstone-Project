import React from "react";
import {
  ChevronLeft,
  Heart,
  Bookmark,
  Info,
  Star,
  ChevronRight,
} from "lucide-react";
import { RecommendationCard, NoRecommendations } from "./recommendations";
import TopBar from "./TopBar";
import MetadataItem from "./metaData";
import {
  FullDateDisplay,
  YearDisplay,
  FormatNumberWithComma,
} from "../utils/DataFormater";
import { FullScreenLoader } from "../utils/Loader";
import { Link } from "react-router-dom";
import { Error } from "../utils/Error";
import { useRef } from "react";
export default function Detail({
  items,
  error,
  loading,
  recommendation,
  credits,
  type,
  id,
}) {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };
  if (loading) {
    return <FullScreenLoader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="bg-white dark:bg-[#0b0d14] min-h-screen text-gray-900 dark:text-white font-sans selection:bg-yellow-500 selection:text-black transition-colors duration-200">
      <TopBar />

      {/* Hero Section */}
      <div className="relative w-full h-screen md:h-[85vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
            alt="Background"
            className="w-full h-full object-cover"
            loading="lazy"
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
              {items?.tagline}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-gray-900 dark:text-white mb-4 uppercase">
            {items?.title}
          </h1>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-900 dark:text-gray-300 mb-6">
            <span className="text-gray-900 dark:text-gray-300">
              {items?.release_date
                ? YearDisplay(items?.release_date)
                : YearDisplay(items?.first_air_date)}
            </span>
            <span className="w-1 h-1 bg-yellow-500 dark:bg-yellow-400 rounded-full" />
            <span className="border border-gray-400 dark:border-gray-900 px-1 rounded text-xs">
              {items?.popularity}
            </span>
            <span className="w-1 h-1 bg-yellow-900 dark:bg-yellow-400 rounded-full" />
            <span>
              {items?.runtime ? items?.runtime : items?.number_of_seasons}
            </span>
            <span className="w-1 h-1 bg-yellow-900 dark:bg-yellow-400 rounded-full" />
            <div className="flex items-center gap-1 text-yellow-900 dark:text-yellow-400">
              <Star size={14} fill="currentColor" />
              <span>{items?.vote_average?.toFixed(1)}</span>
            </div>
          </div>

          <p className="text-gray-900 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mb-10 relative pl-4">
            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-500/50 dark:bg-yellow-400/50"></span>
            {items?.overview}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-300 text-black px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer">
              <Heart size={16} fill="black" /> Add to Favorite
            </button>
            <button className="bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-gray-300 dark:border-white/10 transition-colors cursor-pointer">
              <Bookmark size={16} /> Add to Watchlist
            </button>
            <Link to={type === "movie" ? `/movies/${id}` : `/series/${id}`}>
              <button className="bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-gray-300 dark:border-white/10 transition-colors cursor-pointer">
                <Info size={16} /> View Detail
              </button>
            </Link>
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
              <MetadataItem
                label="Release"
                value={
                  items?.release_date
                    ? FullDateDisplay(items?.release_date)
                    : FullDateDisplay(items?.first_air_date)
                }
              />
              <MetadataItem label="Runtime" value="169 Minutes" />
            </div>

            {/* Row 2: Last 2 MetadataItems */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <MetadataItem
                label="Rating"
                value={items?.vote_average?.toFixed(1)}
              />
              <MetadataItem
                label="Budget"
                value={
                  items?.budget
                    ? "$" + FormatNumberWithComma(items?.budget)
                    : "No Budget Info"
                }
                isHighlight
              />
            </div>

            {/* Row 3: Genres */}
            <div>
              <div className="mt-8 flex flex-wrap gap-2">
                {items?.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-[10px] font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 dark:bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full uppercase hover:bg-yellow-500/20 hover:border-yellow-500/50 dark:hover:bg-yellow-500/20 dark:hover:border-yellow-500/50 transition-colors cursor-default"
                  >
                    {genre.name}
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
              {items?.overview}
            </p>

            <div className="flex items-center gap-6">
              {/* Cast avatar stack */}
              <div className="flex -space-x-4">
                {credits?.cast?.slice(0, 5).map((cast, i) => (
                  <div key={i} className="relative group/cast">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${cast?.profile_path}`}
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0b0d14] 
    group-hover/cast:scale-120 group-hover/cast:z-20 group-hover/cast:border-yellow-500 
    dark:group-hover/cast:border-yellow-400 transition-all duration-300 
    group-hover/cast:shadow-xl cursor-pointer
    group-hover/cast:relative"
                      alt={cast.name}
                      loading="lazy"
                    />

                    {/* Tooltip on hover */}
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 
          bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium 
          rounded-md opacity-0 group-hover/cast:opacity-100 transition-opacity duration-200 
          whitespace-nowrap pointer-events-none shadow-lg z-20"
                    >
                      {cast.name}
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 
            border-4 border-transparent border-t-gray-900 dark:border-t-white"
                      />
                    </div>
                  </div>
                ))}

                {/* Show remaining count if more than 5 cast members */}
                {credits?.cast?.length > 5 && (
                  <div
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 
        border-2 border-white dark:border-[#0b0d14] flex items-center justify-center
        text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 
        dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    +{credits.cast.length - 5}
                  </div>
                )}
              </div>

              {/* Director info */}
              <div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold mb-1">
                  Directed By
                </p>
                <p className="text-gray-900 dark:text-white font-bold uppercase tracking-wide">
                  {credits?.crew?.find((person) => person.job === "Director")
                    ?.name ||
                    credits?.crew?.find(
                      (person) => person.known_for_department === "Writing",
                    )?.name}
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
            <button
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              onClick={scrollLeft}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              onClick={scrollRight}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div
          className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide"
          ref={scrollRef}
        >
          {recommendation?.list?.results ? (
            recommendation?.list?.results?.map((movie) => (
              <Link
                key={movie.id}
                to={`/detailCaller/${movie.id}?type=${type}`}
              >
                <RecommendationCard key={movie.id} item={movie} />
              </Link>
            ))
          ) : (
            <NoRecommendations />
          )}
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
