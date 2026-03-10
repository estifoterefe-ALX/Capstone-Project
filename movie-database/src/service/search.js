import landingApi from "./apis/landingApi";

/**
 * Search for movies
 * @param {string} query - Search query
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Search results with pagination
 */
export const searchMovie = async (query, page = 1) => {
  try {
    if (!query || query.trim().length === 0) {
      throw new Error("Search query cannot be empty");
    }

    const response = await landingApi.get("/search/movie", {
      params: {
        query: query.trim(),
        page: Math.max(1, page),
      },
    });

    return response?.data || { results: [], total_results: 0, total_pages: 0 };
  } catch (error) {
    console.error("Error searching movies:", error);
    return handleApiError(error);
  }
};

/**
 * Search for TV series
 * @param {string} query - Search query
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Search results with pagination
 */
export const searchSeries = async (query, page = 1) => {
  try {
    if (!query || query.trim().length === 0) {
      throw new Error("Search query cannot be empty");
    }

    const response = await landingApi.get("/search/tv", {
      params: {
        query: query.trim(),
        page: Math.max(1, page),
      },
    });

    return response?.data || { results: [], total_results: 0, total_pages: 0 };
  } catch (error) {
    console.error("Error searching TV shows:", error);
    return handleApiError(error);
  }
};

/**
 * Search for all media types (movies, TV series, people)
 * @param {string} query - Search query
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Search results with pagination
 */
export const searchAll = async (query, page = 1) => {
  try {
    if (!query || query.trim().length === 0) {
      throw new Error("Search query cannot be empty");
    }

    const response = await landingApi.get("/search/multi", {
      params: {
        query: query.trim(),
        page: Math.max(1, page),
      },
    });

    return response?.data || { results: [], total_results: 0, total_pages: 0 };
  } catch (error) {
    console.error("Error searching all media:", error);
    return handleApiError(error);
  }
};

/**
 * Centralized error handling for API calls
 * @param {Error} error - Error object
 * @returns {Object} Fallback data structure
 */
const handleApiError = (error) => {
  console.error("API Error Details:", {
    message: error.message,
    status: error.status,
    statusCode: error.statusCode,
    url: error.url,
  });

  // Return fallback data to prevent application crashes
  return {
    results: [],
    total_results: 0,
    total_pages: 0,
    error: {
      message: error.message || "Failed to fetch data",
      status: error.status || 500,
      code: error.statusCode,
    },
  };
};
