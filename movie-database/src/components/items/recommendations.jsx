import { YearDisplay } from "../utils/dateFormater";
const RecommendationCard = ({ item }) => (
  <div className="group cursor-pointer min-w-[150px] md:min-w-[180px]">
    <div className="relative aspect-2/3 overflow-hidden rounded-lg mb-3 shadow-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.name}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 dark:opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
        <span className="bg-yellow-500 dark:bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
          View
        </span>
      </div>
    </div>
    <h3 className="text-gray-900 dark:text-white font-bold text-sm leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
      {item?.name}
    </h3>
    <p className="text-gray-600 dark:text-gray-500 text-xs uppercase tracking-wide mt-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
      {item.first_air_date
        ? YearDisplay(item.first_air_date)
        : YearDisplay(item.release_date)}{" "}
    </p>
  </div>
);
export default RecommendationCard;
