import React from "react";
import {
  ArrowLeft,
  ChevronDown,
  Star,
  Languages,
  Clock,
  Film,
  ShieldCheck,
} from "lucide-react";
import { EpisodeCard, MetadataBlock, EpisodeDisplay } from "./epsoides";
import TopBar from "../TopBar";
import { useParams } from "react-router-dom";
import useSeries from "../../../hooks/useSeries";
import { useState, useEffect } from "react";
import { RoundToOneDecimal, FullDateDisplay } from "../../utils/dateFormater";

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
  return (
    <div className="min-h-screen bg-white dark:bg-[#110f08] text-gray-900 dark:text-white font-sans selection:bg-yellow-500 selection:text-black transition-colors duration-200">
      {/* Top Header */}
      <div className="pt-8 px-6 md:px-12 mb-10">
        <div className="mb-10">
          <TopBar />
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase mb-2">
          {seriesDetailData?.name}
        </h1>
        <p className="text-yellow-500 dark:text-yellow-400 text-lg italic font-medium">
          {`${season?.name}`}
        </p>
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
                  Duration
                </h4>
                <div className="text-gray-900 dark:text-white text-xs font-bold">
                  {seriesDetailData?.episode_run_time[0]}
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
        {/* <div className="flex-1 p-6 md:p-12 bg-gray-50 dark:bg-[#0c0c0c]">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase mb-10 tracking-wide">
            Episodes
          </h2>

          <div className="max-w-4xl">
            {EPISODES.map((ep) => (
              <EpisodeCard key={ep.id} ep={ep} />
            ))}
          </div>
        </div> */}
        <EpisodeDisplay id={id} seasonNum={season?.season_number} />
      </div>
    </div>
  );
}
export default SeriesDetail;
