import { Play, ChevronRight } from "lucide-react";
import { dateFormater } from "../utils/dateFormater";
import { Link } from "react-router-dom";
export const SectionHeader = ({ title, subtitle, hasViewAll = true }) => (
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
      <button className="text-yellow-500 dark:text-yellow-400 text-xs font-bold uppercase flex items-center gap-1 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors">
        View All <ChevronRight size={14} />
      </button>
    )}
  </div>
);
export const NormalHeader = ({ title, hasViewAll }) => {
  return (
    <div className="flex mb-6 mx-10">
      <h3 className="text-gray-700 dark:text-gray-300 font-bold text-sm uppercase">
        {title}
      </h3>
      {hasViewAll && (
        <button className="text-yellow-700 px-2 mx-4 border border-yellow-700 dark:border-yellow-300 dark:text-yellow-300 text-xs font-bold uppercase flex items-center gap-1 hover:text-yellow-800 dark:hover:text-yellow-400 transition-colors cursor-pointer">
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
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
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
      {item.title}
    </h3>
  </div>
);

export const LandscapeCard = ({ item, isUpcoming }) => (
  <div className="flex-none w-[240px] group cursor-pointer">
    <div className="relative aspect-video overflow-hidden rounded-lg shadow-md dark:shadow-gray-900/30">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
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
          {item.title}
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
      />
    </div>
    <span className="text-gray-600 dark:text-gray-400 text-xs text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
      {item.name}
    </span>
  </div>
);

export const PosterCardSkeleton = () => (
  <div className="flex-none w-[160px] animate-pulse">
    <div className="relative aspect-2/3 overflow-hidden rounded-lg mb-3 bg-gray-200 dark:bg-gray-700 shadow-md dark:shadow-gray-900/30"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
    </div>
  </div>
);

export const PosterCardSkeletonGrid = ({ count = 8 }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-8 md:px-16">
    {Array.from({ length: count }).map((_, index) => (
      <PosterCardSkeleton key={index} />
    ))}
  </div>
);

export const PosterCardError = () => (
  <div className="flex-none w-[160px]">
    <div className="relative aspect-2/3 overflow-hidden rounded-lg mb-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 shadow-md dark:shadow-gray-900/30 flex flex-col items-center justify-center text-center p-4">
      {/* Error icon */}
      <svg
        className="w-8 h-8 text-red-500 dark:text-red-400 mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <p className="text-xs text-red-600 dark:text-red-400 font-medium">
        Failed to load
      </p>
    </div>
    <div className="h-5 bg-red-100 dark:bg-red-900/30 rounded w-3/4 mb-2" />
    <div className="h-4 bg-red-100 dark:bg-red-900/30 rounded w-1/2" />
  </div>
);

// Error grid for multiple items
export const PosterCardErrorGrid = ({ count = 4 }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-8 md:px-16">
    {Array.from({ length: count }).map((_, index) => (
      <PosterCardError key={index} />
    ))}
  </div>
);
export const PersonCardSkeleton = () => (
  <div className="flex-none w-[100px] flex flex-col items-center animate-pulse">
    <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-700 mb-2 shadow-md" />
    <div className="space-y-2 w-full flex flex-col items-center">
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
    </div>
  </div>
);

// Multiple skeleton cards grid
export const PersonCardSkeletonGrid = ({ count = 8 }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-8 md:px-16">
    {Array.from({ length: count }).map((_, index) => (
      <PersonCardSkeleton key={index} />
    ))}
  </div>
);
export const PersonCardError = () => (
  <div className="flex-none w-[100px] flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 mb-2 shadow-md flex items-center justify-center">
      {/* Error icon */}
      <svg
        className="w-8 h-8 text-red-500 dark:text-red-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    </div>
    <span className="text-red-600 dark:text-red-400 text-xs text-center">
      Failed to load
    </span>
  </div>
);

// Error grid for multiple items
export const PersonCardErrorGrid = ({ count = 4 }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-8 md:px-16">
    {Array.from({ length: count }).map((_, index) => (
      <PersonCardError key={index} />
    ))}
  </div>
);
export const LandscapeCardSkeleton = () => (
  <div className="flex-none w-[240px] group animate-pulse">
    <div className="relative aspect-video overflow-hidden rounded-lg shadow-md dark:shadow-gray-900/30 bg-gray-200 dark:bg-gray-700">
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent">
        {/* Title placeholder - two lines */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
        </div>
      </div>
    </div>
  </div>
);

// Multiple skeleton cards grid
export const LandscapeCardSkeletonGrid = ({ count = 6, isUpcoming = true }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-8 md:px-16">
    {Array.from({ length: count }).map((_, index) => (
      <LandscapeCardSkeleton key={index} isUpcoming={isUpcoming} />
    ))}
  </div>
);
export const LandscapeCardError = () => (
  <div className="flex-none w-[240px] group">
    <div className="relative aspect-video overflow-hidden rounded-lg shadow-md dark:shadow-gray-900/30 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
      {/* Error content centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <svg
          className="w-10 h-10 text-red-500 dark:text-red-400 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p className="text-xs text-red-600 dark:text-red-400 font-medium text-center">
          Failed to load
        </p>
      </div>

      {/* Gradient overlay at bottom - subtle red tint */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-red-50/90 via-red-50/50 to-transparent dark:from-red-950/50 dark:via-red-950/30 dark:to-transparent">
        {/* Title placeholders */}
        <div className="space-y-2">
          <div className="h-4 bg-red-200 dark:bg-red-800/50 rounded w-3/4" />
          <div className="h-4 bg-red-200 dark:bg-red-800/50 rounded w-1/2" />
        </div>
      </div>
    </div>
  </div>
);
export const LandscapeCardErrorGrid = ({ count = 4, isUpcoming = true }) => (
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-8 md:px-16">
    {Array.from({ length: count }).map((_, index) => (
      <LandscapeCardError key={index} isUpcoming={isUpcoming} />
    ))}
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
