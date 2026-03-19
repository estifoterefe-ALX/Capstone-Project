import axios from "axios";

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

const landingApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
  },
  params: {
    api_key: tmdbApiKey,
  },
});

// Request interceptor
landingApi.interceptors.request.use(
  (config) => {
    if (!tmdbApiKey) {
      return Promise.reject(
        new Error(
          "Missing TMDB API key. Add VITE_TMDB_API_KEY to your .env file.",
        ),
      );
    }

    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor
landingApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });

    // Enhanced error object with more details
    const enhancedError = {
      ...error,
      message: error.response?.data?.status_message || error.message,
      status: error.response?.status,
      statusCode: error.response?.data?.status_code,
      url: error.config?.url,
    };

    return Promise.reject(enhancedError);
  },
);

export default landingApi;
