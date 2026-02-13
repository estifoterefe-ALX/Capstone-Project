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
import { EpisodeCard, MetadataBlock } from "./epsoides";
import TopBar from "../TopBar";

// --- Data ---
const SHOW_DATA = {
  title: "THE MIDNIGHT ODYSSEY",
  season_subtitle: "Season 1: The Titan Protocol",
  release_date: "Oct 12, 2023",
  cinescore: "4.8",
  language: "English (EN-US)",
  genres: ["Sci-Fi", "Drama", "Techno-Thriller"],
  stats: {
    duration: "~55m / ep",
    episodes: "12 Total",
    certificate: "TV-MA",
  },
};
const SEASONS_DATA = [
  { id: "season1", title: "Season 01", year: "2023" },
  { id: "season2", title: "Season 02", year: "2024" },
  { id: "season3", title: "Season 03", year: "2025" },
];
const EPISODES = [
  {
    id: 1,
    number: "01",
    title: "Arrival at Titan",
    date: "Oct 12, 2023",
    desc: "The crew of the Odyssey receives a distress signal from a forgotten outpost on Titan. Commander Aris leads a reconnaissance team to investigate the source.",
    duration: "58:12",
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
    progress: 100,
    status: "Watched",
  },
  {
    id: 2,
    number: "02",
    title: "Echoes in the Void",
    date: "Oct 19, 2023",
    desc: "Communication systems fail as the ship enters a dense nebula. Tensions rise among the crew when strange auditory hallucinations begin to plague the bridge.",
    duration: "52:45",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop",
    progress: 45,
    status: "45% Progress",
  },
  {
    id: 3,
    number: "03",
    title: "Fractured Reality",
    date: "Oct 26, 2023",
    desc: "The Odyssey encounters a temporal anomaly. Dr. Vane discovers that the ship might be existing in two timelines simultaneously, threatening the structural integrity.",
    duration: "55:00",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    progress: 0,
    status: null,
  },
];

function SeriesDetail({ item }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0e0e0a] text-gray-900 dark:text-white font-sans selection:bg-yellow-500 selection:text-black transition-colors duration-200">
      {/* Top Header */}
      <div className="pt-8 px-6 md:px-12 mb-10">
        <div className="mb-10">
          <TopBar />
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase mb-2">
          {SHOW_DATA.title}
        </h1>
        <p className="text-yellow-500 dark:text-yellow-400 text-lg italic font-medium">
          {SHOW_DATA.season_subtitle}
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
                defaultValue="season1"
                onChange={(e) =>
                  console.log("Selected season:", e.target.value)
                }
              >
                {SEASONS_DATA.map((season) => (
                  <option
                    key={season.id}
                    value={season.id}
                    className="bg-gray-50 dark:bg-[#1a1a16] text-gray-900 dark:text-white py-2"
                  >
                    {season.title} ({season.year})
                  </option>
                ))}
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
                value={SHOW_DATA.release_date}
              />
              <div className="mb-6">
                <h4 className="text-gray-600 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">
                  Cinescore
                </h4>
                <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 font-bold text-lg">
                  <span>{SHOW_DATA.cinescore}</span>
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>

            <MetadataBlock
              label="Original Language"
              value={SHOW_DATA.language}
              icon={Languages}
            />

            <div className="mb-8">
              <h4 className="text-gray-600 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                Genres
              </h4>
              <div className="flex flex-wrap gap-2">
                {SHOW_DATA.genres.map((genre) => (
                  <span
                    key={genre}
                    className="bg-gray-100 dark:bg-[#1a1a16] border border-gray-300 dark:border-white/10 text-yellow-600 dark:text-yellow-400/80 text-[10px] font-bold px-3 py-1.5 rounded uppercase hover:text-yellow-700 dark:hover:text-yellow-500 hover:border-yellow-500/50 dark:hover:border-yellow-500/30 cursor-default transition-colors"
                  >
                    {genre}
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
                  {SHOW_DATA.stats.duration}
                </div>
              </div>
              <div>
                <h4 className="text-gray-600 dark:text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-1">
                  Episodes
                </h4>
                <div className="text-gray-900 dark:text-white text-xs font-bold">
                  {SHOW_DATA.stats.episodes}
                </div>
              </div>
              <div>
                <h4 className="text-gray-600 dark:text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-1">
                  Certificate
                </h4>
                <div className="text-gray-900 dark:text-white text-xs font-bold">
                  {SHOW_DATA.stats.certificate}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Episodes */}
        <div className="flex-1 p-6 md:p-12 bg-gray-50 dark:bg-[#0c0c0c]">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase mb-10 tracking-wide">
            Episodes
          </h2>

          <div className="max-w-4xl">
            {EPISODES.map((ep) => (
              <EpisodeCard key={ep.id} ep={ep} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SeriesDetail;
