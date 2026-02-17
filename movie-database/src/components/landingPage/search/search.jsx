import React from "react";
import {
  ArrowLeft,
  ChevronUp,
  SlidersHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ResultCard from "./result";
import TopBar from "../../content/TopBar";
import { useState } from "react";
import useSearch from "../../../hooks/useSearch";
import { Loader } from "../../utils/Loader";
import { Error } from "../../utils/Error";
import { YearDisplay, RoundToOneDecimal } from "../../utils/dateFormater";
import { Link } from "react-router-dom";

function SearchPage() {
  const seachItems = [
    {
      id: "all",
      name: "All",
    },
    { id: "movie", name: "Movies" },
    { id: "series", name: "TV Shows" },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [submittedQuery, setSubmittedQuery] = useState({
    item: "",
    searchBy: "all",
  });
  const { searchResult, searchLoading, searchError, searchCount } = useSearch({
    item: submittedQuery.item,
    searchBy: submittedQuery.searchBy,
    page,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery((prev) => ({
      ...prev,
      item: searchInput,
    }));
  };

  if (searchLoading) {
    return <Loader />;
  }
  if (searchError) {
    return <Error message="Search Failed" />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white font-sans p-8 md:p-12 transition-colors duration-200">
      {/* Top Nav */}
      <div className="mb-10">
        <TopBar />
      </div>

      {/* Search Section */}
      <div className="w-full bg-gray-100 dark:bg-[#161616] rounded-lg flex items-center h-14 overflow-hidden mb-12 border border-gray-300 dark:border-white/5 shadow-sm">
        {/* Filter Dropdown */}
        <div className="relative h-full border-r border-gray-300 dark:border-white/10 group hover:border-yellow-500/50 transition-colors">
          <select
            className="h-full px-6 pr-10 bg-white dark:bg-[#1c1c1c] cursor-pointer text-sm font-medium outline-none w-full appearance-none text-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent"
            value={submittedQuery.searchBy}
            onChange={(e) =>
              setSubmittedQuery((prev) => ({
                ...prev,
                item: "",
                searchBy: e.target.value,
              }))
            }
          >
            {seachItems.map((item) => (
              <option
                value={item.id}
                className="bg-white dark:bg-[#1c1c1c] text-gray-800 dark:text-gray-300"
                key={item.id}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Input Field */}
        <div className="flex-1 flex items-center px-4 h-full">
          <Search size={20} className="text-gray-600 dark:text-gray-500 mr-4" />
          <input
            type="text"
            className="bg-transparent w-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none text-lg"
            placeholder="Search for movies, series, episodes..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <button
          className="h-full px-10 bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-300 text-black font-bold uppercase tracking-wider text-sm transition-colors font-sans cursor-pointer"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </div>

      {/* Results Header */}
      {searchResult && (
        <>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Search Results
              </h1>
              <p className="text-yellow-500 dark:text-yellow-400 text-sm font-medium">
                {searchCount + " results found for " + searchInput}
              </p>
            </div>

            <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#161616] border border-gray-300 dark:border-white/10 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-gray-200 dark:hover:bg-[#202020] transition-colors text-gray-800 dark:text-white">
              <SlidersHorizontal size={14} />
              Sort By: Popularity
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {searchResult?.map((item) => (
              <Link
                key={item.id}
                to={`/detailCaller/${item.id}?type=${item.media_type || submittedQuery.searchBy}`}
              >
                <ResultCard
                  variant="active"
                  data={{
                    title: item.title || item.name,
                    year: YearDisplay(item.release_date || item.first_air_date),
                    rating: RoundToOneDecimal(item.vote_average),
                    duration: "",
                    type: item.media_type || submittedQuery.searchBy,
                    img: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
                  }}
                />
              </Link>
            ))}
          </div>
        </>
      )}
      {searchResult && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${
            page <= 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-yellow-600 text-white hover:bg-yellow-700 active:scale-95 shadow-md hover:shadow-lg"
          }
        `}
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
            <span>Prev</span>
          </button>

          {/* Page indicator */}
          <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
            Page {page} of {Math.ceil(searchCount / 10) || 1}
          </span>

          <button
            disabled={page >= Math.ceil(searchCount / 10)}
            onClick={() => setPage(page + 1)}
            className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${
            page >= Math.ceil(searchCount / 10)
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-yellow-600 text-white hover:bg-yellow-700 active:scale-95 shadow-md hover:shadow-lg"
          }
        `}
            aria-label="Next page"
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
export default SearchPage;
