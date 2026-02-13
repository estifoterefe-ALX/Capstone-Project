export const Error = ({ message = "Failed to load content", onRetry }) => (
  <div className="flex flex-col items-center justify-center py-16 w-full">
    <div className="bg-red-50 dark:bg-red-950/30 rounded-full p-4 mb-4">
      <svg
        className="w-12 h-12 text-red-500 dark:text-red-400"
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
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      Oops! Something went wrong
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Try Again
      </button>
    )}
  </div>
);
