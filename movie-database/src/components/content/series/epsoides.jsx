import { Star } from "lucide-react";
import useSeries from "../../../hooks/useSeries";
import { FullDateDisplay } from "../../utils/DataFormater";
import { Error } from "../../utils/Error";
import { Loader } from "../../utils/Loader";
export const EpisodeDisplay = ({ id, seasonNum }) => {
  const { seriesSeasonData, seriesSeasonError, seriesSeasonLoading } =
    useSeries(id, "series", seasonNum);
  if (seriesSeasonLoading) {
    return <Loader />;
  }
  if (seriesSeasonError) {
    return <Error message="Episode Detail Information is Not Found" />;
  }
  return (
    <div className="flex-1 p-6 md:p-12 bg-gray-50 dark:bg-[#0c0c0c]">
      <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase mb-10 tracking-wide">
        Episodes
      </h2>

      <div className="max-w-4xl">
        {seriesSeasonData?.episodes.length ? (
          seriesSeasonData?.episodes?.map((ep) => (
            <EpisodeCard key={ep.id} ep={ep} />
          ))
        ) : (
          <Error message="No Episode Found For The Selected Season" />
        )}
      </div>
    </div>
  );
};
export const EpisodeCard = ({ ep }) => (
  <div className="flex flex-col md:flex-row gap-6 mb-10 group cursor-pointer border-b border-gray-200 dark:border-gray-800 pb-10 last:border-0 transition-colors duration-200">
    {/* Thumbnail Container */}
    <div className="relative w-full md:w-64 h-36 shrink-0">
      <div className="w-full h-full rounded-lg overflow-hidden border border-gray-300 dark:border-white/5 shadow-sm">
        <img
          src={`https://image.tmdb.org/t/p/w500/${ep?.still_path}`}
          alt={ep.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-black/0 transition" />
      </div>
      {/* Duration Badge */}
      <span className="absolute bottom-2 right-2 bg-black/80 dark:bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
        {ep.duration}
      </span>
    </div>

    {/* Content Container */}
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-1">
          <span className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">
            Episode {ep.episode_number}
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">
            {FullDateDisplay(ep.air_date)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
          {ep.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3 max-h-24 overflow-y-auto no-scrollbar">
          {ep.overview}
        </p>

        {/* Rating Stars */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
              <Star
                className={`w-4 h-4 ${
                  star <= Math.floor(ep.vote_average)
                    ? "text-yellow-400"
                    : star - ep.vote_average < 1 && star - ep.vote_average > 0
                      ? "text-yellow-400/50" // Half star effect
                      : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {ep.vote_average.toFixed(1)} / 10.0
          </span>
        </div>
      </div>
    </div>
  </div>
);

export const MetadataBlock = ({ label, value, icon: Icon }) => (
  <div className="mb-6">
    <h4 className="text-gray-600 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">
      {label}
    </h4>
    <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
      {Icon && (
        <Icon size={14} className="text-yellow-500 dark:text-yellow-400" />
      )}
      <span className="text-sm">{value}</span>
    </div>
  </div>
);
