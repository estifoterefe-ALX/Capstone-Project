export const Loader = () => {
  return (
    <div className="flex items-center justify-center py-16 w-full min-h-[50vh] bg-white dark:bg-[#0a0f1c]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-20 h-20">
          {/* Outer ring - spins counter-clockwise */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 dark:border-t-yellow-400"
            style={{
              animation: "spin 1.5s linear infinite reverse",
            }}
          />
          {/* Middle ring - spins clockwise */}
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-r-yellow-500 dark:border-r-yellow-400"
            style={{
              animation: "spin 1s linear infinite",
            }}
          />
          {/* Inner ring - spins counter-clockwise */}
          <div
            className="absolute inset-4 rounded-full border-4 border-transparent border-b-yellow-500 dark:border-b-yellow-400"
            style={{
              animation: "spin 1.2s linear infinite reverse",
            }}
          />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
};
export const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#0a0f1c] z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-20 h-20">
          {/* Outer ring - spins counter-clockwise */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 dark:border-t-yellow-400"
            style={{
              animation: "spin 1.5s linear infinite reverse",
            }}
          />
          {/* Middle ring - spins clockwise */}
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-r-yellow-500 dark:border-r-yellow-400"
            style={{
              animation: "spin 1s linear infinite",
            }}
          />
          {/* Inner ring - spins counter-clockwise */}
          <div
            className="absolute inset-4 rounded-full border-4 border-transparent border-b-yellow-500 dark:border-b-yellow-400"
            style={{
              animation: "spin 1.2s linear infinite reverse",
            }}
          />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
};
