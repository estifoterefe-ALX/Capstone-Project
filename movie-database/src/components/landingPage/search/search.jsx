import React from "react";
import { ArrowLeft, ChevronUp, SlidersHorizontal } from "lucide-react";
import ResultCard from "./result";
import Pagination from "./pagination";
import SearchBar from "./searchBar";

// --- Main Page ---

function SearchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-8 md:p-12">
      {/* Top Nav */}
      <div className="mb-8">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm font-medium">
          <ArrowLeft size={16} />
          Return to Home
        </button>
      </div>

      {/* Search Section */}
      <SearchBar />

      {/* Results Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Search Results</h1>
          <p className="text-yellow-500 text-sm font-medium">
            124 results found for "Interstellar"
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#161616] border border-white/10 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#202020] transition">
          <SlidersHorizontal size={14} />
          Sort By: Popularity
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* 1. Active Card */}
        <ResultCard
          variant="active"
          data={{
            title: "Interstellar",
            year: "2014",
            duration: "2h 49m",
            rating: "8.7",
            type: "Movie",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
          }}
        />

        {/* 2. Standard Card */}
        <ResultCard
          data={{
            title: "The Martian",
            year: "2015",
            duration: "2h 24m",
            rating: "8.0",
            type: "Movie",
            img: "https://images.unsplash.com/photo-1614726365723-49cfae9278b7?q=80&w=600&auto=format&fit=crop",
          }}
        />

        {/* 3. Series Card */}
        <ResultCard
          data={{
            title: "The Expanse",
            year: "2015",
            duration: "6 Seasons",
            rating: "8.5",
            type: "Series",
            img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop",
          }}
        />

        {/* 4. Loading State */}
        <ResultCard variant="loading" />

        {/* 5. Error State */}
        <ResultCard variant="error" />

        {/* 6. Empty State (Added for demo to fill row if needed, typically hidden) */}
        <ResultCard variant="empty" />
      </div>

      {/* Pagination */}
      <Pagination />

      {/* Back to Top */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition">
          Back to Top <ChevronUp size={12} />
        </button>
      </div>
    </div>
  );
}
export default SearchPage;
