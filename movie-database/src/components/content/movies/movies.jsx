import React from "react";
import { Play, Plus, Star } from "lucide-react";
import TopBar from "../TopBar";
import { useParams } from "react-router-dom";
import useMovies from "../../../hooks/useMovies";
import {
  FullDateDisplay,
  FormatNumberWithComma,
  FormatMinutesToTime,
  RoundToOneDecimal,
} from "../../utils/dateFormater";
import { FullScreenLoader } from "../../utils/Loader";
import { FullScreenError } from "../../utils/Error";
const MovieDetails = () => {
  const id = useParams();
  const {
    movieDetailData,
    movieDetailLoading,
    movieDetailError,
    movieDetailRefresh,
  } = useMovies(id.id, "movie");
  if (movieDetailLoading) {
    <FullScreenLoader />;
  }
  if (movieDetailError) {
    <FullScreenError
      message={"Failed to load movie information."}
      onRetry={movieDetailRefresh}
    />;
  }
  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0c0c] text-gray-900 dark:text-white font-sans p-6 md:p-10 transition-colors duration-200">
      {/* Navigation */}
      <TopBar />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl dark:shadow-none border border-gray-200 dark:border-gray-800 mb-12 group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetailData?.backdrop_path}`}
            alt={movieDetailData?.name}
            className="w-full h-full object-cover opacity-60 dark:opacity-60"
            loading="lazy"
          />
          {/* Gradient Overlay for Fade Effect */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-100/30 via-transparent to-transparent dark:from-[#0c0c0c] dark:via-[#0c0c0c]/40 dark:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-gray-100/20 via-transparent to-transparent dark:from-[#0c0c0c]/90 dark:via-[#0c0c0c]/30 dark:to-transparent" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 h-full flex items-end md:items-center p-8 md:p-12 gap-10">
          {/* Poster Card - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block w-64 h-96 shrink-0 rounded-lg overflow-hidden border-4 border-gray-300 dark:border-gray-800/50 shadow-2xl relative transform translate-y-8">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetailData?.poster_path}`}
              alt={movieDetailData?.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Poster Overlay Text imitating the design */}
            <div className="absolute bottom-0 w-full p-4 text-center bg-linear-to-t from-black/90 to-transparent">
              <h3 className="text-yellow-500 font-serif text-xl tracking-widest">
                {movieDetailData?.tagline}
              </h3>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start pb-4">
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-yellow-500 dark:bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase">
                Ultra HD
              </span>
              <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 text-sm font-bold">
                <Star size={14} fill="currentColor" />
                <span>{movieDetailData?.vote_average} Rating</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              {movieDetailData?.title}
            </h1>

            <div className="flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-300 text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20 dark:shadow-yellow-400/20">
                <Play size={20} fill="currentColor" /> Watch Movie
              </button>
              <button className="bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md text-gray-800 dark:text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all border border-gray-300 dark:border-white/10">
                <Plus size={20} /> My List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-2 md:px-4">
        {/* Left Column: Metadata */}
        <div className="lg:col-span-3 space-y-8">
          <InfoItem
            label="Release Date"
            value={FullDateDisplay(movieDetailData?.release_date)}
          />
          <InfoItem
            label="Budget"
            value={
              movieDetailData?.budget
                ? "$" + FormatNumberWithComma(movieDetailData?.budget)
                : "No Budget Info"
            }
          />
          <InfoItem
            label="Runtime"
            value={
              movieDetailData?.budget
                ? FormatMinutesToTime(movieDetailData?.runtime)
                : "No Run Time Info"
            }
          />
          <InfoItem
            label="Rating"
            value={
              <span>
                {RoundToOneDecimal(movieDetailData?.vote_average)} / 10{" "}
                <span className="text-gray-500 dark:text-gray-400 text-xs font-normal ml-1">
                  {movieDetailData?.vote_count + " votes"}
                </span>
              </span>
            }
          />
          <InfoItem
            label="Country"
            value={movieDetailData?.origin_country.map((country) => country)}
          />
          <InfoItem
            label="Language"
            value={movieDetailData?.spoken_languages.map(
              (lang) => lang.english_name,
            )}
          />

          <div>
            <h4 className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
              Box Office Revenue
            </h4>
            <p className="text-yellow-500 dark:text-yellow-400 font-bold text-xl">
              {"$" + FormatNumberWithComma(movieDetailData?.revenue)}
            </p>
          </div>
        </div>

        {/* Right Column: Overview & Production */}
        <div className="lg:col-span-9">
          {/* Genre Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {movieDetailData?.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-white/5 px-4 py-1.5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-yellow-500/50 transition cursor-default"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview Section */}
          <div className="border-l-4 border-yellow-500 dark:border-yellow-400 pl-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Overview
            </h3>
          </div>

          <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-6 max-w-4xl text-sm md:text-base">
            <p>{movieDetailData?.overview}</p>
            <p>
              As the silence deepens, the secrets speak louder. Every alleyway
              hides a predator, and every face is a mask. In this game of
              architectural chess, the only way to survive is to stop playing by
              the rules.
            </p>
          </div>

          {/* Production Companies */}
          <div className="mt-12">
            <h4 className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
              Production Companies
            </h4>
            <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
              {movieDetailData?.production_companies.map((company) => (
                <div
                  key={company.id}
                  className="flex-none w-80 h-48 relative rounded-xl overflow-hidden group cursor-pointer border border-gray-300 dark:border-white/10 hover:border-yellow-500/50 transition-all duration-500 bg-gray-300 hover:scale-105"
                >
                  {/* Image - clearly visible */}
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${company?.logo_path}`}
                    alt={company.name}
                    className="w-full h-full object-contain p-6"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/500x281?text=No+Logo";
                    }}
                  />

                  {/* Light overlay for both modes - no dark gradients */}
                  <div className="absolute inset-0 bg-white/80 dark:bg-[#0a0f1c]/90 backdrop-blur-[2px] opacity-0 transition-opacity duration-300" />

                  {/* Content - always visible, no dark background behind it */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="inline-block bg-yellow-500/10 backdrop-blur-sm px-3 py-1 rounded mb-2">
                      <span className="text-yellow-800 text-xs font-black uppercase tracking-widest">
                        PRODUCTION
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">Studio Partner</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Metadata rows
const InfoItem = ({ label, value }) => (
  <div>
    <h4 className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1 opacity-90">
      {label}
    </h4>
    <p className="text-gray-900 dark:text-white font-medium text-lg">{value}</p>
  </div>
);

export default MovieDetails;
