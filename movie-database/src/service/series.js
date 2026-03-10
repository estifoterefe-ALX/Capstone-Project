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
  console.error("Series API Error:", {
    message: error.message,
    status: error.status,
    statusCode: error.statusCode,
    url: error.url,
  });

  return {
    ...fallback,
    error: {
      message: error.message || "Failed to fetch series data",
      status: error.status || 500,
      code: error.statusCode,
    },
  };
};

/**
 * Get currently airing series
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Series data with pagination
 */
export const nowPlayingSeriesService = async (page = 1) => {
  try {
    const response = await landingApi.get("/tv/airing_today", {
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
 * Get popular series
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Series data with pagination
 */
export const popularSeriesService = async (page = 1) => {
  try {
    const response = await landingApi.get("/tv/popular", {
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
 * Get top rated series
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Series data with pagination
 */
export const topRatedSeriesService = async (page = 1) => {
  try {
    const response = await landingApi.get("/tv/top_rated", {
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
 * Get upcoming series
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Series data with pagination
 */
export const upComingSeriesService = async (page = 1) => {
  try {
    const response = await landingApi.get("/tv/on_the_air", {
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
 * Get series details
 * @param {number|string} id - Series ID
 * @returns {Promise<Object>} Series details
 */
export const seriesDetailService = async (id) => {
  try {
    if (!id || id <= 0) {
      throw new Error("Invalid series ID");
    }

    const response = await landingApi.get(`/tv/${id}`, {
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
 * Get series recommendations
 * @param {number|string} id - Series ID
 * @returns {Promise<Object>} Recommendations data
 */
export const seriesRecommendationsService = async (id) => {
  try {
    if (!id || id <= 0) {
      throw new Error("Invalid series ID");
    }

    const response = await landingApi.get(`/tv/${id}/recommendations`, {
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
 * Get series credits (cast and crew)
 * @param {number|string} id - Series ID
 * @returns {Promise<Object>} Credits data
 */
export const seriesPeopleService = async (id) => {
  try {
    if (!id || id <= 0) {
      throw new Error("Invalid series ID");
    }

    const response = await landingApi.get(`/tv/${id}/credits`, {
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
 * Get series season details
 * @param {number|string} id - Series ID
 * @param {number|string} seasonNumber - Season number
 * @returns {Promise<Object>} Season details
 */
export const seriesSeasonService = async (id, seasonNumber) => {
  try {
    if (!id || id <= 0 || !seasonNumber || seasonNumber <= 0) {
      throw new Error("Invalid series or season ID");
    }

    const response = await landingApi.get(`/tv/${id}/season/${seasonNumber}`, {
      params: {
        language: "en-US",
      },
    });
    return response?.data || { episodes: [] };
  } catch (error) {
    return handleApiError(error, { episodes: [] });
  }
};

/**
 * Get series season episode details
 * @param {number|string} id - Series ID
 * @param {number|string} seasonNumber - Season number
 * @param {number|string} episodeNumber - Episode number
 * @returns {Promise<Object>} Episode details
 */
export const seriesSeasonEpisodeService = async (
  id,
  seasonNumber,
  episodeNumber,
) => {
  try {
    if (
      !id ||
      id <= 0 ||
      !seasonNumber ||
      seasonNumber <= 0 ||
      !episodeNumber ||
      episodeNumber <= 0
    ) {
      throw new Error("Invalid series, season, or episode ID");
    }

    const response = await landingApi.get(
      `/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}`,
      {
        params: {
          language: "en-US",
        },
      },
    );
    return response?.data || {};
  } catch (error) {
    return handleApiError(error, {});
  }
};

/**
 * Get series videos
 * @param {number|string} id - Series ID
 * @returns {Promise<Object>} Videos data
 */
export const seriesVideoService = async (id) => {
  try {
    if (!id || id <= 0) {
      throw new Error("Invalid series ID");
    }

    const response = await landingApi.get(`/tv/${id}/videos`, {
      params: {
        language: "en-US",
      },
    });
    return response?.data || { results: [] };
  } catch (error) {
    return handleApiError(error, { results: [] });
  }
};
