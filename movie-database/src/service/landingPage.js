import landingApi from "./apis/landingApi";

export const trending = async () => {
  try {
    const response = await landingApi.get("/trending/all/day", {
      params: { language: "en-US" },
    });
    return response?.data;
  } catch (error) {
    console.error("Error fetching trending content:", error);
    return null;
  }
};
export const trendingMovies = async () => {
  try {
    const response = await landingApi.get("/trending/movie/day",{
      params:{
        language:"en-US"
      }
    })
    return response?.data
  } catch (error) {
    console.error(error)
    return null
  }
}