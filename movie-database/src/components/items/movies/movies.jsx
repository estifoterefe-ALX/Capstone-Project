import React from "react";
import {
  ArrowLeft,
  Play,
  Plus,
  Star,
  Building2,
  Clapperboard,
} from "lucide-react";
import TopBar from "../TopBar";

const MovieDetails = () => {
  const PRODUCTION_COMPANIES = [
    {
      image: "path/to/logo1.png",
      title: "WARNER BROS",
    },
    {
      image: "path/to/logo2.png",
      title: "LEGENDARY",
    },
    {
      image: null, // or empty string
      title: "VILLENEUVE FILMS",
    },
    {
      image: "path/to/logo4.png",
      title: "UNIVERSAL",
    },
  ];
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans p-6 md:p-10">
      {/* Navigation */}
      <TopBar />
      {/* Hero Section */}
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12 group">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2560&auto=format&fit=crop"
            alt="Hallway Background"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient Overlay for Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/90 via-[#0c0c0c]/30 to-transparent" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 h-full flex items-end md:items-center p-8 md:p-12 gap-10">
          {/* Poster Card - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block w-64 h-96 flex-shrink-0 rounded-lg overflow-hidden border-4 border-gray-800/50 shadow-2xl relative transform translate-y-8">
            <img
              src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1000&auto=format&fit=crop"
              alt="Midnight Echoes Poster"
              className="w-full h-full object-cover"
            />
            {/* Poster Overlay Text imitating the design */}
            <div className="absolute bottom-0 w-full p-4 text-center bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-yellow-500 font-serif text-xl tracking-widest">
                THE GILDED AGE
              </h3>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start pb-4">
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-yellow-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase">
                Ultra HD
              </span>
              <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                <Star size={14} fill="currentColor" />
                <span>8.4 Rating</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Midnight Echoes
            </h1>

            <div className="flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                <Play size={20} fill="currentColor" /> Watch Movie
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all border border-white/10">
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
          <InfoItem label="Release Date" value="November 14, 2023" />
          <InfoItem label="Runtime" value="2h 14m" />
          <InfoItem
            label="Rating"
            value={
              <span>
                8.4 / 10{" "}
                <span className="text-gray-500 text-xs font-normal ml-1">
                  (2,451 votes)
                </span>
              </span>
            }
          />
          <InfoItem label="Language" value="English (Dolby Atmos)" />

          <div>
            <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">
              Box Office Revenue
            </h4>
            <p className="text-yellow-500 font-bold text-xl">$428,500,000</p>
          </div>
        </div>

        {/* Right Column: Overview & Production */}
        <div className="lg:col-span-9">
          {/* Genre Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Thriller", "Mystery", "Crime", "Drama"].map((genre) => (
              <span
                key={genre}
                className="bg-[#1a1a1a] border border-white/5 px-4 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:border-yellow-500/50 transition cursor-default"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Overview Section */}
          <div className="border-l-4 border-yellow-500 pl-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Overview</h3>
          </div>

          <div className="text-gray-400 leading-relaxed space-y-6 max-w-4xl text-sm md:text-base">
            <p>
              In a world where every sound can be tracked, a disgraced former
              intelligence officer must navigate the shadows of a neo-noir
              metropolis to uncover a conspiracy that threatens to erase history
              itself. "Midnight Echoes" blends high-stakes corporate espionage
              with a deeply personal journey of redemption.
            </p>
            <p>
              As the silence deepens, the secrets speak louder. Every alleyway
              hides a predator, and every face is a mask. In this game of
              architectural chess, the only way to survive is to stop playing by
              the rules.
            </p>
          </div>

          {/* Production Companies */}
          <div className="mt-12">
            <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
              Production Companies
            </h4>
            <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
              {PRODUCTION_COMPANIES.map((company, index) => (
                <div
                  key={index}
                  className="flex-none w-80 h-48 relative rounded-xl overflow-hidden group cursor-pointer border border-white/10 hover:border-yellow-500/50 transition-all duration-500"
                >
                  {/* Background Image with carousel effect */}
                  <img
                    src={company.image}
                    alt={company.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay (like hero section) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>

                  {/* Content positioned like hero */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-3 py-1 rounded mb-3">
                      <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">
                        PRODUCTION
                      </span>
                    </div>
                    <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">
                      {company.title}
                    </h3>
                    <p className="text-gray-300 text-sm">Studio Partner</p>
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
    <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1 opacity-90">
      {label}
    </h4>
    <p className="text-white font-medium text-lg">{value}</p>
  </div>
);

export default MovieDetails;
