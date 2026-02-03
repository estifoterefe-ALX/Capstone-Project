import { Search, ChevronDown } from "lucide-react";
const SearchBar = () => (
  <div className="w-full bg-[#161616] rounded-lg flex items-center h-14 overflow-hidden mb-12 border border-white/5">
    {/* Filter Dropdown */}
    <div className="relative h-full border-r border-white/10 group hover:border-yellow-500/30 transition">
      <select
        className="h-full px-6 pr-10 bg-[#1c1c1c] cursor-pointer text-sm font-medium outline-none w-full appearance-none text-gray-300"
        defaultValue="all"
      >
        <option value="all" className="bg-[#1c1c1c] text-gray-300">
          <span className="text-yellow-500">Search By:</span> All Content
        </option>
        <option value="movies" className="bg-[#1c1c1c] text-gray-300">
          <span className="text-yellow-500">Search By:</span> Movies
        </option>
        <option value="tv" className="bg-[#1c1c1c] text-gray-300">
          <span className="text-yellow-500">Search By:</span> TV Shows
        </option>
        <option value="people" className="bg-[#1c1c1c] text-gray-300">
          <span className="text-yellow-500">Search By:</span> People
        </option>
      </select>

      {/* Custom dropdown arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown
          size={14}
          className="text-gray-500 group-hover:text-yellow-500 transition"
        />
      </div>
    </div>

    {/* Input Field */}
    <div className="flex-1 flex items-center px-4 h-full">
      <Search size={20} className="text-gray-500 mr-4" />
      <input
        type="text"
        defaultValue="Interstellar"
        className="bg-transparent w-full text-white placeholder-gray-600 focus:outline-none text-lg"
        placeholder="Search for movies, series, episodes..."
      />
    </div>

    {/* Search Button */}
    <button className="h-full px-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold uppercase tracking-wider text-sm transition font-sans cursor-pointer">
      Search
    </button>
  </div>
);
export default SearchBar;
