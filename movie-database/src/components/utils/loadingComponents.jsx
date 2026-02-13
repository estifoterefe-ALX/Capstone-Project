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
