import { trending,trendingMovies, trendingPeople, trendingSeries } from "../service/trendingPage";
import { useQuery } from "@tanstack/react-query";

const useLandingPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending"],
    queryFn: trending,
  });
const {data:trendingMoviesData , isLoading:trendingMoviesLoading ,error:trendingMoviesError}=useQuery({
  queryKey:["trendingMovies"],
  queryFn:trendingMovies,
})
const {data:trendingSeriesData , isLoading:trendingSeriesLoading ,error:trendingSeriesError}=useQuery({
  queryKey:["trendingSeries"],
  queryFn:trendingSeries,
})
const {data:trendingPeopleData , isLoading:trendingPeopleLoading ,error:trendingPeopleError}=useQuery({
  queryKey:["trendingPeople"],
  queryFn:trendingPeople,
})
  return {
    slides:data?.results,
    isLoading,
    error,
    trendingMoviesData:trendingMoviesData?.results,
    trendingMoviesLoading,
    trendingMoviesError,
    trendingSeriesData:trendingSeriesData?.results,
    trendingSeriesLoading,
    trendingSeriesError,
    trendingPeopleData:trendingPeopleData?.results,
    trendingPeopleLoading,
    trendingPeopleError,
  };
};

export default useLandingPage;