import landingApi from "./apis/landingApi";

export const searchMovie = async (query, page = 1, includeAdult = false) => {
    try {
      const response = await landingApi.get("/search/movie", {
        params: {
          query,
          page,
          include_adult: includeAdult,
        },
      });
  
      const data = response?.data;
  
      return {
        results: data.results.slice(0, 10), // only return first 10 items
        totalResults: data.total_results,
        totalPages: Math.ceil(data.total_results / 10), // your custom 10-per-page pagination
        currentPage: page,
      };
    } catch (error) {
      console.error("Error searching movies:", error);
      throw error;
    }
  };
  
  export const searchSeries = async (query, page = 1, includeAdult = false) => {
    try {
      const response = await landingApi.get("/search/tv", {
        params: {
          query,
          page, // TMDb page number
          include_adult: includeAdult,
        },
      });
  
      const data = response?.data;
  
      return {
        results: data.results.slice(0, 10), // only return first 10 items
        totalResults: data.total_results,
        totalPages: Math.ceil(data.total_results / 10), // your custom 10-per-page pagination
        currentPage: page,
      };
    } catch (error) {
      console.error("Error searching TV shows:", error);
      throw error;
    }
  };
  
  
  export const searchAll = async (query, page = 1, includeAdult = false) => {
    try {
      const response = await landingApi.get("/search/multi", {
        params: {
          query,
          page,
          include_adult: includeAdult,
        },
      });
  
      const data = response?.data;
  
      return {
        results: data.results.slice(0, 10), // only return first 10 items
        totalResults: data.total_results,
        totalPages: Math.ceil(data.total_results / 10), // your custom 10-per-page pagination
        currentPage: page,
      };
    } catch (error) {
      console.error("Error searching movies:", error);
      throw error;
    }
  };
  