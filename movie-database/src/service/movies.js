import landingApi from "./apis/landingApi";

/**
 * Handle API errors with fallback data
 * @param {Error} error - Error object
 * @param {Object} fallback - Fallback data structure
 * @returns {Object} Fallback data with error information
 */
const handleApiError = (
  error,
  fallback = { results: [], total_results: 0, total_pages: 0 },
) => {
  console.error("Movies API Error:", {
    message: error.message,
    status: error.status,
    statusCode: error.statusCode,
    url: error.url,
  });

  return {
    ...fallback,
    error: {
      message: error.message || "Failed to fetch movie data",
      status: error.status || 500,
      code: error.statusCode,
    },
  };
};

/**
 * Get now playing movies
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Movies data with pagination
 */
export const nowPlayingMoviesService = async (page = 1) => {
  try {
    const response = await landingApi.get("/movie/now_playing", {
      params: {
        language: "en-US",
        page: Math.max(1, page),
      },
    });
    return response?.data || { results: [], total_results: 0, total_pages: 0 };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Get popular movies
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Movies data with pagination
 */
export const popularMoviesService = async (page = 1) => {
  try {
    const response = await landingApi.get("/movie/popular", {
      params: {
        language: "en-US",
        page: Math.max(1, page),
      },
    });
    return response?.data || { results: [], total_results: 0, total_pages: 0 };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Get top rated movies
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Movies data with pagination
 */
export const topRatedMoviesService = async (page = 1) => {
  try {
    const response = await landingApi.get("/movie/top_rated", {
      params: {
        language: "en-US",
        page: Math.max(1, page),
      },
    });
    return response?.data || { results: [], total_results: 0, total_pages: 0 };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Get upcoming movies
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Movies data with pagination
 */
export const upComingMoviesService = async (page = 1) => {
  try {
    const response = await landingApi.get("/movie/upcoming", {
      params: {
        language: "en-US",
        page: Math.max(1, page),
      },
    });
    return response?.data || { results: [], total_results: 0, total_pages: 0 };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Get movie details
 * @param {number|string} id - Movie ID
 * @returns {Promise<Object>} Movie details
 */
export const movieDetailService = async (id) => {
  try {
    if (!id || id <= 0) {
      throw new Error("Invalid movie ID");
    }

    const response = await landingApi.get(`/movie/${id}`, {
      params: {
        language: "en-US",
      },
    });
    return response?.data || {};
  } catch (error) {
    return handleApiError(error, {});
  }
};

/**
 * Get movie recommendations
 * @param {number|string} id - Movie ID
 * @returns {Promise<Object>} Recommendations data
 */
export const movieRecommendationsService = async (id) => {
  try {
    if (!id || id <= 0) {
      throw new Error("Invalid movie ID");
    }

    const response = await landingApi.get(`/movie/${id}/recommendations`, {
      params: {
        language: "en-US",
      },
    });
    return response?.data || { results: [], total_results: 0, total_pages: 0 };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Get movie credits (cast and crew)
 * @param {number|string} id - Movie ID
 * @returns {Promise<Object>} Credits data
 */
export const moviePeopleService = async (id) => {
  try {
    if (!id || id <= 0) {
      throw new Error("Invalid movie ID");
    }

    const response = await landingApi.get(`/movie/${id}/credits`, {
      params: {
        language: "en-US",
      },
    });
    return response?.data || { cast: [], crew: [] };
  } catch (error) {
    return handleApiError(error, { cast: [], crew: [] });
  }
};

/**
 * Get movie videos
 * @param {number|string} id - Movie ID
 * @returns {Promise<Object>} Videos data
 */
export const movieVideoService = async (id) => {
  try {
    if (!id || id <= 0) {
      throw new Error("Invalid movie ID");
    }

    const response = await landingApi.get(`/movie/${id}/videos`, {
      params: {
        language: "en-US",
      },
    });
    return response?.data || { results: [] };
  } catch (error) {
    return handleApiError(error, { results: [] });
  }
};
