import { Play, ChevronRight } from "lucide-react";
import { dateFormater } from "./dateFormater";
import { Link } from "react-router-dom";
export const SectionHeader = ({
  title,
  subtitle,
  hasViewAll = true,
  onViewAll,
}) => (
  <div className="flex justify-between items-end mb-6 px-8 md:px-16">
    <div>
      {subtitle && (
        <p className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
    {hasViewAll && (
      <button
        className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase flex items-center gap-1 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors"
        onClick={() => onViewAll?.()}
      >
        View All <ChevronRight size={14} />
      </button>
    )}
  </div>
);
export const NormalHeader = ({ title, hasViewAll, onViewAll }) => {
  return (
    <div className="flex mb-6 mx-10">
      <h3 className="text-gray-700 dark:text-gray-300 font-bold text-sm uppercase">
        {title}
      </h3>
      {hasViewAll && (
        <button
          className="text-yellow-700 px-2 mx-4 border border-yellow-700 dark:border-yellow-300 dark:text-yellow-300 text-xs font-bold uppercase flex items-center gap-1 hover:text-yellow-800 dark:hover:text-yellow-400 transition-colors cursor-pointer"
          onClick={() => onViewAll?.()}
        >
          View All
        </button>
      )}
    </div>
  );
};

export const ScrollRow = ({ children }) => (
  <div className="flex overflow-x-auto gap-4 px-8 md:px-16 pb-8 scrollbar-hide">
    {children}
  </div>
);

export const PosterCard = ({ item, hasRating }) => (
  <div className="flex-none w-[160px] group cursor-pointer">
    <div className="relative aspect-2/3 overflow-hidden rounded-lg mb-3 shadow-md dark:shadow-gray-900/30">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item.title || item.name}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-black/40 transition" />

      {/* Rating badge - top right corner */}
      {hasRating && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-md shadow-md">
          {item.vote_average?.toFixed(1) || "N/A"}
        </div>
      )}
    </div>
    <h3 className="text-gray-900 dark:text-white text-sm font-medium truncate group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
      {item.name || item.title || item.name}
    </h3>
  </div>
);
export const ViewAllPoster = ({ item, hasRating }) => (
  <div className="w-full group cursor-pointer">
    <div className="relative aspect-2/3 overflow-hidden rounded-lg mb-3 shadow-md dark:shadow-gray-900/30">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item.title || item.name}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-black/40 transition" />

      {/* Rating badge - top right corner */}
      {hasRating && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-md shadow-md">
          {item.vote_average?.toFixed(1) || "N/A"}
        </div>
      )}
    </div>
    <h3 className="text-gray-900 dark:text-white text-sm font-medium truncate group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
      {item.name || item.title || item.name}
    </h3>
  </div>
);

export const LandscapeCard = ({ item, isUpcoming }) => (
  <div className="flex-none w-[240px] group cursor-pointer">
    <div className="relative aspect-video overflow-hidden rounded-lg shadow-md dark:shadow-gray-900/30">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title || item.name}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        loading="lazy"
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent">
        {/* Date badge at bottom left */}
        {item.release_date && isUpcoming && (
          <div className="mb-1">
            <div className="bg-yellow-500 dark:bg-yellow-400 px-2.5 py-0.5 rounded-md inline-block">
              <span className="text-black text-xs font-black uppercase tracking-widest">
                {dateFormater(item.release_date)}
              </span>
            </div>
          </div>
        )}

        {/* Title below date */}
        <h3 className="text-gray-900 dark:text-white text-sm font-bold uppercase leading-tight line-clamp-2">
          {item.title || item.name}
        </h3>
      </div>
    </div>
  </div>
);

export const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-6 px-8 md:px-16 mt-12">
    <div className="h-8 w-1 bg-yellow-500 dark:bg-yellow-400 rounded-full"></div>
    <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-wide">
      {title}
    </h2>
  </div>
);

export const PersonCard = ({ item }) => (
  <div className="flex-none w-[100px] flex flex-col items-center group cursor-pointer">
    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-700 group-hover:border-yellow-500 dark:group-hover:border-yellow-400 transition mb-2 shadow-md">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
        alt={item.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <span className="text-gray-600 dark:text-gray-400 text-xs text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
      {item.name}
    </span>
  </div>
);

export const MediaRow = ({
  data,
  error,
  loading,
  CardComponent,
  SkeletonComponent,
  ErrorComponent,
  hasRating = false,
  type,
}) => {
  if (loading && SkeletonComponent) return <SkeletonComponent />;
  if (error && ErrorComponent) return <ErrorComponent />;

  return (
    <ScrollRow>
      {data?.map((item) => (
        <Link key={item.id} to={`/detailCaller/${item.id}?type=${type}`}>
          <CardComponent key={item.id} item={item} hasRating={hasRating} />
        </Link>
      ))}
    </ScrollRow>
  );
};
