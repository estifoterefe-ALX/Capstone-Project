import { trending,trendingMoviesService, trendingPeopleService, trendingSeriesService } from "../service/trendingPage";
import { useQuery } from "@tanstack/react-query";

const useLandingPage = (type,page=1,) => {
  const trendingItem = useQuery({
    queryKey: ["trending"],
    queryFn: trending,
    enabled:type==="all"
  });
const trendingMovies=useQuery({
  queryKey:["trendingMovies",page],
  queryFn:()=>trendingMoviesService(page),
  enabled: type==="trendingMovies"
})
const trendingSeries=useQuery({
  queryKey:["trendingSeries",page],
  queryFn:()=>trendingSeriesService(page),
  enabled:type==="trendingSeries"
})
const trendingPeople=useQuery({
  queryKey:["trendingPeople"],
  queryFn:trendingPeopleService,
  enabled:type==="trendingPeople"
})
  return {
    slidesItems:{
      slides:trendingItem.data?.results,
      loading:trendingItem.isLoading,
      error:trendingItem.error
    },
    trendingMovies:{
      data:trendingMovies.data?.results,
      loading:trendingMovies.isLoading,
      error:trendingMovies.error,
      count:trendingMovies.data?.total_results
    },
    trendingSeries:{
      data:trendingSeries.data?.results,
      loading:trendingSeries.isLoading,
      error:trendingSeries.error,
      count:trendingSeries.data?.total_results
    },
    trendingPeople
  };
};

export default useLandingPage;