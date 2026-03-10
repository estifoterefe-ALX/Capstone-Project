import React from "react";
import { ChevronDown, Star, Languages, Plus } from "lucide-react";
import { MetadataBlock, EpisodeDisplay } from "./epsoides";
import TopBar from "../TopBar";
import { useParams } from "react-router-dom";
import useSeries from "../../../hooks/useSeries";
import { useState, useEffect } from "react";
import { RoundToOneDecimal, FullDateDisplay } from "../../utils/DataFormater";
import WatchTrailerButton from "../../utils/watchTrailer";
import { Loader } from "../../utils/Loader";
import { Error } from "../../utils/Error";
function SeriesDetail() {
  const { id } = useParams();
  const { seriesDetailData, seriesDetailLoading, seriesDetailError } =
    useSeries(id, "series");
  const [season, setSeason] = useState();
  useEffect(() => {
    if (seriesDetailData?.seasons?.length > 0) {
      setSeason(seriesDetailData.seasons[0]);
    }
  }, [seriesDetailData]);
  if (seriesDetailLoading) {
    return <Loader />;
  }
  if (seriesDetailError) {
    return <Error message="Series Detail Not Found" />;
  }
  console.log(seriesDetailData);
  return (
    <div className="min-h-screen bg-white dark:bg-[#110f08] text-gray-900 dark:text-white font-sans selection:bg-yellow-500 selection:text-black transition-colors duration-200">
      {/* Top Header */}
      <div className="pt-8 px-6 md:px-12 mb-10">
        <div className="mb-10">
          <TopBar />
        </div>

        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl dark:shadow-none border border-gray-200 dark:border-gray-800 mb-8 sm:mb-12 group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`https://image.tmdb.org/t/p/original/${seriesDetailData?.backdrop_path}`}
              />
              <img
                src={`https://image.tmdb.org/t/p/original/${seriesDetailData?.poster_path}`}
                alt={seriesDetailData?.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            {/* Gradient Overlay for Fade Effect */}
            <div className="absolute inset-0 bg-linear-to-t from-gray-100/30 via-transparent to-transparent dark:from-[#0c0c0c] dark:via-[#0c0c0c]/40 dark:to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-gray-100/20 via-transparent to-transparent dark:from-[#0c0c0c]/90 dark:via-[#0c0c0c]/30 dark:to-transparent" />
          </div>

          {/* Hero Content Layer */}
          <div className="relative z-10 h-full flex items-end md:items-center p-4 sm:p-6 md:p-8 lg:p-12 gap-4 sm:gap-6 md:gap-10">
            {/* Poster Card - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block w-32 lg:w-40 xl:w-48 h-48 lg:h-56 xl:h-64 shrink-0 rounded-lg overflow-hidden border-4 border-gray-300 dark:border-gray-800/50 shadow-2xl relative transform translate-y-4 md:translate-y-6 lg:translate-y-8">
              <img
                src={`https://image.tmdb.org/t/p/original/${seriesDetailData?.poster_path}`}
                alt={seriesDetailData?.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start pb-2 sm:pb-3 md:pb-4">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                <span className="bg-yellow-500 dark:bg-yellow-400 text-black text-[8px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded uppercase">
                  Ultra HD
                </span>
                <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 text-xs sm:text-sm font-bold">
                  <Star size={12} sm:size={14} fill="currentColor" />
                  <span>
                    
                    
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 tracking-tight line-clamp-2">
                {seriesDetailData?.title || seriesDetailData?.name}
              </h1>

              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <WatchTrailerButton id={seriesDetailData?.id} type={"series"} />
                <button className="bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md text-gray-800 dark:text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl font-bold flex items-center gap-1 sm:gap-2 transition-all border border-gray-300 dark:border-white/10 text-sm sm:text-base">
                  <Plus size={16} sm:size={20} /> My List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row border-t border-gray-200 dark:border-white/10">
        {/* Left Sidebar: Metadata */}
        <div className="w-full md:w-1/4 p-6 md:p-12 md:border-r border-gray-200 dark:border-white/10 bg-white dark:bg-[#0e0e0a]">
          {/* Season Selector */}
          <div className="mb-10">
            <h4 className="text-gray-600 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">
              Select Season
            </h4>
            <div className="relative">
              <select
                className="w-full bg-gray-50 dark:bg-[#1a1a16] border border-gray-300 dark:border-white/10 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-colors appearance-none text-gray-900 dark:text-white font-bold text-sm pr-10 focus:border-yellow-500 focus:outline-none"
                defaultValue={season?.name}
                onChange={(e) => {
                  const s = seriesDetailData?.seasons?.find(
                    (i) => i.id === Number(e.target.value),
                  );
                  setSeason(s);
                }}
              >
                {seriesDetailData?.seasons?.map((season) => {
                  return (
                    <option
                      key={season.id}
                      value={season.id}
                      className="bg-gray-50 dark:bg-[#1a1a16] text-gray-900 dark:text-white py-2"
                    >
                      {season.name}
                    </option>
                  );
                })}
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown
                  size={16}
                  className="text-yellow-500 dark:text-yellow-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-y-4">
            <div className="flex justify-between items-start pr-4">
              <MetadataBlock
                label="Release Date"
                value={FullDateDisplay(season?.air_date)}
              />
              <div className="mb-6">
                <h4 className="text-gray-600 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">
                  Cinescore
                </h4>
                <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 font-bold text-lg">
                  <span>{RoundToOneDecimal(season?.vote_average)}</span>
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>

            <MetadataBlock
              label="Original Language"
              value={seriesDetailData?.original_language}
              icon={Languages}
            />

            <div className="mb-8">
              <h4 className="text-gray-600 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                Genres
              </h4>
              <div className="flex flex-wrap gap-2">
                {seriesDetailData?.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-100 dark:bg-[#1a1a16] border border-gray-300 dark:border-white/10 text-yellow-600 dark:text-yellow-400/80 text-[10px] font-bold px-3 py-1.5 rounded uppercase hover:text-yellow-700 dark:hover:text-yellow-500 hover:border-yellow-500/50 dark:hover:border-yellow-500/30 cursor-default transition-colors"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
              <div>
                <h4 className="text-gray-600 dark:text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-1">
                  Avg.Duration
                </h4>
                <div className="text-gray-900 dark:text-white text-xs font-bold">
                  {seriesDetailData?.episode_run_time.length !== 0
                    ? seriesDetailData?.episode_run_time[0] + "min/per epsoide"
                    : "-"}
                </div>
              </div>
              <div>
                <h4 className="text-gray-600 dark:text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-1">
                  Episodes
                </h4>
                <div className="text-gray-900 dark:text-white text-xs font-bold">
                  {season?.episode_count + " Total"}
                </div>
              </div>
              {/* <div>
                <h4 className="text-gray-600 dark:text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-1">
                  Certificate
                </h4>
                <div className="text-gray-900 dark:text-white text-xs font-bold">
                  {SHOW_DATA.stats.certificate}
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Right Content: Episodes */}
        <EpisodeDisplay id={id} seasonNum={season?.season_number} />
      </div>
    </div>
  );
}
export default SeriesDetail;
