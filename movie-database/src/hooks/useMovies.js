import { useQuery } from "@tanstack/react-query";
import {
  upComingMoviesService,
  topRatedMoviesService,
  nowPlayingMoviesService,
  popularMoviesService,
  movieDetailService,
  movieRecommendationsService,
  moviePeopleService,
  movieVideoService,
} from "../service/movies";

const useMovies = (id, type, page = 1) => {
  const {
    data: upcomingMoviesData,
    isLoading: upcomingMoviesLoading,
    error: upcomingMoviesError,
  } = useQuery({
    queryKey: ["upcomingMovies", page],
    queryFn: () => upComingMoviesService(page),
    staleTime: 60 * 1000,
  });

  const {
    data: topRatedMoviesData,
    isLoading: topRatedMoviesLoading,
    error: topRatedMoviesError,
  } = useQuery({
    queryKey: ["topRatedMovies", page],
    queryFn: () => topRatedMoviesService(page),
    staleTime: 60 * 1000,
  });

  const {
    data: nowPlayingMoviesData,
    isLoading: nowPlayingMoviesLoading,
    error: nowPlayingMoviesError,
  } = useQuery({
    queryKey: ["nowPlayingMovies", page],
    queryFn: () => nowPlayingMoviesService(page),
    staleTime: 60 * 1000,
  });

  const {
    data: popularMoviesData,
    isLoading: popularMoviesLoading,
    error: popularMoviesError,
  } = useQuery({
    queryKey: ["popularMovies", page],
    queryFn: () => popularMoviesService(page),
    staleTime: 60 * 1000,
  });

  const {
    data: movieDetailData,
    isLoading: movieDetailLoading,
    error: movieDetailError,
    refetch: movieDetailRefresh,
  } = useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => movieDetailService(id),
    enabled: type === "movie" && !!id,
    staleTime: 10 * 60 * 1000,
  });

  const {
    data: movieRecommendationData,
    isLoading: movieRecommendationLoading,
    error: movieRecommendationError,
  } = useQuery({
    queryKey: ["movieRecommendation", id],
    queryFn: () => movieRecommendationsService(id),
    enabled: type === "movie" && !!id,
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: moviePeopleData,
    isLoading: moviePeopleLoading,
    error: moviePeopleError,
  } = useQuery({
    queryKey: ["moviePeople", id],
    queryFn: () => moviePeopleService(id),
    enabled: type === "movie" && !!id,
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: movieVideoData,
    isLoading: movieVideoLoading,
    error: movieVideoError,
  } = useQuery({
    queryKey: ["movieVideo", id],
    queryFn: () => movieVideoService(id),
    enabled: type === "movie" && !!id,
    staleTime: 5 * 60 * 1000,
  });

  // Handle errors from both React Query and API responses
  const handleError = (error, apiData) => {
    return error || apiData?.error;
  };

  return {
    upcomingMoviesData: upcomingMoviesData?.results || [],
    upcomingMoviesError: handleError(upcomingMoviesError, upcomingMoviesData),
    upcomingMoviesLoading,
    topRatedMoviesData: topRatedMoviesData?.results || [],
    topRatedMoviesError: handleError(topRatedMoviesError, topRatedMoviesData),
    topRatedMoviesLoading,
    nowPlayingMoviesData: nowPlayingMoviesData?.results || [],
    nowPlayingMoviesError: handleError(
      nowPlayingMoviesError,
      nowPlayingMoviesData,
    ),
    nowPlayingMoviesLoading,
    popularMoviesData: popularMoviesData?.results || [],
    popularMoviesError: handleError(popularMoviesError, popularMoviesData),
    popularMoviesLoading,
    movieDetailData: movieDetailData || {},
    movieDetailLoading,
    movieDetailError: handleError(movieDetailError, movieDetailData),
    movieDetailRefresh,
    movieRecommendationData: movieRecommendationData || { results: [] },
    movieRecommendationError: handleError(
      movieRecommendationError,
      movieRecommendationData,
    ),
    movieRecommendationLoading,
    moviePeopleData: moviePeopleData || { cast: [], crew: [] },
    moviePeopleError: handleError(moviePeopleError, moviePeopleData),
    moviePeopleLoading,
    movieVideoData: movieVideoData?.results?.find(
      (item) => item.site === "YouTube" && item.type === "Trailer",
    ),
    movieVideoError: handleError(movieVideoError, movieVideoData),
    movieVideoLoading,
    popularMovies: {
      data: popularMoviesData?.results || [],
      loading: popularMoviesLoading,
      error: handleError(popularMoviesError, popularMoviesData),
      count: popularMoviesData?.total_results || 0,
    },
    topRatedMovies: {
      data: topRatedMoviesData?.results || [],
      loading: topRatedMoviesLoading,
      error: handleError(topRatedMoviesError, topRatedMoviesData),
      count: topRatedMoviesData?.total_results || 0,
    },
    nowPlayingMovies: {
      data: nowPlayingMoviesData?.results || [],
      loading: nowPlayingMoviesLoading,
      error: handleError(nowPlayingMoviesError, nowPlayingMoviesData),
      count: nowPlayingMoviesData?.total_results || 0,
    },
    upcomingMovies: {
      data: upcomingMoviesData?.results || [],
      loading: upcomingMoviesLoading,
      error: handleError(upcomingMoviesError, upcomingMoviesData),
      count: upcomingMoviesData?.total_results || 0,
    },
  };
};

export default useMovies;
