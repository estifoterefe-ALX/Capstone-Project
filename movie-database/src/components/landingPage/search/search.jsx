import React from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import ResultCard from "./result";
import TopBar from "../../content/TopBar";
import { useState } from "react";
import useSearch from "../../../hooks/useSearch";
import { Loader } from "../../utils/Loader";
import { Error } from "../../utils/Error";
import { YearDisplay, RoundToOneDecimal } from "../../utils/DataFormater";
import { Link } from "react-router-dom";
import Pagination from "../../utils/pagination";

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
      <div
        className="
  w-full 
  bg-gray-100 dark:bg-[#161616] 
  rounded-lg 
  flex flex-col sm:flex-row 
  sm:items-center
  overflow-hidden 
  border border-gray-300 dark:border-white/5 
  shadow-sm
"
      >
        {/* Filter Dropdown */}
        <div
          className="
    relative 
    w-full sm:w-auto
    border-b sm:border-b-0 sm:border-r 
    border-gray-300 dark:border-white/10 
    group hover:border-yellow-500/50 
    transition-colors
  "
        >
          <select
            className="
        w-full h-12 sm:h-14
        px-4 sm:px-6 pr-10
        bg-white dark:bg-[#1c1c1c] 
        cursor-pointer 
        text-sm font-medium 
        outline-none 
        appearance-none 
        text-gray-800 dark:text-gray-300 
        focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 
        focus:border-transparent
      "
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
                key={item.id}
                value={item.id}
                className="bg-white dark:bg-[#1c1c1c] text-gray-800 dark:text-gray-300"
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Input Field */}
        <div
          className="
    flex-1 
    flex items-center 
    px-4 
    h-12 sm:h-14
  "
        >
          <Search
            size={20}
            className="text-gray-600 dark:text-gray-500 mr-3 sm:mr-4 shrink-0"
          />

          <input
            type="text"
            className="
        bg-transparent 
        w-full 
        text-gray-900 dark:text-white 
        placeholder-gray-500 dark:placeholder-gray-600 
        focus:outline-none 
        text-sm sm:text-base lg:text-lg
      "
            placeholder="Search for movies, series, episodes..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <button
          className="
      w-full sm:w-auto
      h-12 sm:h-14
      px-6 sm:px-8 lg:px-10
      bg-yellow-500 hover:bg-yellow-400 
      dark:bg-yellow-400 dark:hover:bg-yellow-300 
      text-black 
      font-bold uppercase tracking-wider 
      text-sm 
      transition-colors 
      cursor-pointer
    "
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      {/* Results Header */}
      {searchLoading ? (
        <Loader />
      ) : (
        searchResult && (
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
                  to={`/detailCaller/${item.id}?type=${(item.media_type === "movie" ? "movie" : "series") || submittedQuery.searchBy}`}
                >
                  <ResultCard
                    variant="active"
                    data={{
                      title: item.title || item.name,
                      year: YearDisplay(
                        item.release_date || item.first_air_date,
                      ),
                      rating: RoundToOneDecimal(item.vote_average),
                      duration: "",
                      type: item.media_type || submittedQuery.searchBy,
                      img: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </>
        )
      )}

      {searchResult && (
        <Pagination page={page} setPage={setPage} count={searchCount / 10} />
      )}
    </div>
  );
}
export default SearchPage;
