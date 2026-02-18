import useLandingPage from "./useTrending";
import useMovies from "./useMovies";
import useSeries from "./useSeries";
export const useMediaData = (type,page=1) => {
    const landing = useLandingPage(type,page);
    const movies = useMovies('',type,page);
    const series = useSeries('',type,'',page);
  
    const hookMap = {
      trendingMovies: landing.trendingMovies,
      trendingSeries: landing.trendingSeries,
  
      popularMovies: movies.popularMovies,
      topRatedMovies: movies.topRatedMovies,
      upcomingMovies: movies.upcomingMovies,
      nowPlayingMovies: movies.nowPlayingMovies,
  
      popularSeries: series.popularSeries,
      topRatedSeries: series.topRatedSeries,
      upcomingSeries: series.upcomingSeries,
      nowPlayingSeries: series.nowPlayingSeries,
    };
  
    return hookMap[type] ?? {
      data: [],
      loading: false,
      error: null,
      count:0
    };
  };
  