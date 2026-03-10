import axios from "axios";

const landingApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
  },
  params: {
    api_key: "1015980f64c8eb4222da7157e27d3288", // <-- replace this with your TMDb v3 API key
  },
});

// Request interceptor
landingApi.interceptors.request.use(
  (config) => {
    // You could add auth tokens here if needed
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
