import { trending,trendingMovies } from "../service/landingPage";
import { useQuery } from "@tanstack/react-query";

const useLandingPage = () => {
  const { data, loading, error } = useQuery({
    queryKey: ["trending"],
    queryFn: trending,
  });
const {data:trendingMoviesData , loading:trendingMoviesLoading ,error:trendingMoviesError}=useQuery({
  queryKey:["trendingMovies"],
  queryFn:trendingMovies,
})
  return {
    slides:data?.results,
    loading,
    error,
    trendingMoviesData:trendingMoviesData?.results,
    trendingMoviesLoading,
    trendingMoviesError,
  };
};

export default useLandingPage;