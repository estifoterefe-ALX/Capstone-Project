import { CircleAlert, RefreshCw } from "lucide-react";

/**
 * Error component for displaying error messages with optional retry functionality
 * @param {Object} props - Component props
 * @param {string} [props.message="Failed to load content"] - Error message to display
 * @param {string} [props.title="Oops! Something went wrong"] - Error title
 * @param {Function} [props.onRetry] - Callback function for retry button
 * @param {boolean} [props.showDetails=false] - Whether to show error details (for debugging)
 * @param {Object} [props.error] - Error object containing details
 */
export const Error = ({
  message = "Failed to load content",
  title = "Oops! Something went wrong",
  onRetry,
  showDetails = false,
  error,
}) => (
  <div className="flex flex-col items-center justify-center py-16 w-full">
    <div className="bg-red-50 dark:bg-red-950/30 rounded-full p-4 mb-4">
      <CircleAlert className="w-12 h-12 text-red-500 dark:text-red-400" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{message}</p>

    {showDetails && error && (
      <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4 max-w-md w-full text-left text-xs text-gray-600 dark:text-gray-400">
        {error.status && (
          <p className="mb-1">
            <strong>Status:</strong> {error.status}
          </p>
        )}
        {error.code && (
          <p className="mb-1">
            <strong>Code:</strong> {error.code}
          </p>
        )}
        {error.url && (
          <p className="mb-1">
            <strong>URL:</strong> {error.url}
          </p>
        )}
      </div>
    )}

    {onRetry && (
      <button
        onClick={onRetry}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </button>
    )}
  </div>
);

/**
 * Full screen error component
 * @param {Object} props - Component props (same as Error component)
 */
export const FullScreenError = ({
  message = "Failed to load content",
  title = "Oops! Something went wrong",
  onRetry,
  showDetails = false,
  error,
}) => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-[#0a0f1c] z-50">
    <div className="bg-red-50 dark:bg-red-950/30 rounded-full p-4 mb-4">
      <CircleAlert className="w-12 h-12 text-red-500 dark:text-red-400" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-md text-center px-4">
      {message}
    </p>

    {showDetails && error && (
      <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4 max-w-md w-full text-left text-xs text-gray-600 dark:text-gray-400">
        {error.status && (
          <p className="mb-1">
            <strong>Status:</strong> {error.status}
          </p>
        )}
        {error.code && (
          <p className="mb-1">
            <strong>Code:</strong> {error.code}
          </p>
        )}
        {error.url && (
          <p className="mb-1">
            <strong>URL:</strong> {error.url}
          </p>
        )}
      </div>
    )}

    {onRetry && (
      <button
        onClick={onRetry}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </button>
    )}
  </div>
);
