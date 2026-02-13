export const Loader = () => (
  <div className="flex items-center justify-center py-16 w-full min-h-1/2 bg-white dark:bg-[#0a0f1c]">
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-12 h-12 rounded-full border-4 border-yellow-200 dark:border-yellow-900/30" />
        {/* Spinning inner ring */}
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-yellow-500 dark:border-yellow-400 border-t-transparent animate-spin" />
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
        Loading...
      </p>
    </div>
  </div>
);
