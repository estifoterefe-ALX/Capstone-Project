import landingApi from "./apis/landingApi";

export const searchMovie = async (query,page) => {
    try {
      const response = await landingApi.get("/search/movie", {
        params: {
          query,
          page
        },
      });
      return response?.data
    } catch (error) {
      console.error("Error searching movies:", error);
      throw error;
    }
  };
  
  export const searchSeries = async (query,page) => {
    try {
      const response = await landingApi.get("/search/tv", {
        params: {
          query,
          page
        },
      });
  
     return response?.data;

    } catch (error) {
      console.error("Error searching TV shows:", error);
      throw error;
    }
  };
  
  
  export const searchAll = async (query,page) => {
    try {
      const response = await landingApi.get("/search/multi", {
        params: {
          query,
          page
        },
      });
  
      return response?.data;
    } catch (error) {
      console.error("Error searching movies:", error);
      throw error;
    }
  };
  