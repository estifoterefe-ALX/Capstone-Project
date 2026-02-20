import { YearDisplay } from "../utils/DataFormater";
export const RecommendationCard = ({ item }) => (
  <div className="group cursor-pointer min-w-[150px] md:min-w-[180px]">
    <div className="relative aspect-2/3 overflow-hidden rounded-lg mb-3 shadow-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.name}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 dark:opacity-80 group-hover:opacity-100"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
        <span className="bg-yellow-500 dark:bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
          View
        </span>
      </div>
    </div>
    <h3 className="text-gray-900 dark:text-white font-bold text-sm leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
      {item?.name || item?.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-500 text-xs uppercase tracking-wide mt-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
      {item.first_air_date
        ? YearDisplay(item.first_air_date)
        : YearDisplay(item.release_date)}{" "}
    </p>
  </div>
);
export const NoRecommendations = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4 w-full min-h-[300px] bg-gray-50 dark:bg-gray-900/30 rounded-lg border border-gray-200 dark:border-gray-800">
    <div className="relative mb-4">
      {/* Decorative film reel icon */}
      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      </div>
    </div>
    <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">
      No Recommendations Yet
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm text-center max-w-md">
      We couldn't find any recommendations based on your selection. Try
      exploring different titles or check back later!
    </p>
  </div>
);
