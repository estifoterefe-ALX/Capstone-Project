import { CircleAlert, RefreshCw } from "lucide-react";
export const Error = ({ message = "Failed to load content", onRetry }) => (
  <div className="flex flex-col items-center justify-center py-16 w-full">
    <div className="bg-red-50 dark:bg-red-950/30 rounded-full p-4 mb-4">
      <CircleAlert className="w-12 h-12 text-red-500 dark:text-red-400" />
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
        <RefreshCw className="flex items-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors" />
        Try Again
      </button>
    )}
  </div>
);
export const FullScreenError = ({
  message = "Failed to load content",
  onRetry,
}) => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-[#0a0f1c] z-50">
    <div className="bg-red-50 dark:bg-red-950/30 rounded-full p-4 mb-4">
      <CircleAlert className="w-12 h-12 text-red-500 dark:text-red-400" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      Oops! Something went wrong
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-md text-center px-4">
      {message}
    </p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"
      >
        <RefreshCw className="flex items-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors" />
        Try Again
      </button>
    )}
  </div>
);
