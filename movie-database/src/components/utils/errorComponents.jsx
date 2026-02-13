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
