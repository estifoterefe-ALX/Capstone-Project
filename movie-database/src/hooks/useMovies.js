import { useQuery } from "@tanstack/react-query";
import { upComingMoviesService, topRatedMoviesService, nowPlayingMoviesService, popularMoviesService, movieDetailService, movieRecommendationsService, moviePeopleService ,movieVideoService} from "../service/movies";

const useMovies = (id, type,page=1) => {
    const { data: upcomingMoviesData, isLoading: upcomingMoviesLoading, error: upcomingMoviesError } = useQuery({
        queryKey: ["upcomingMovies",page],
        queryFn:()=> upComingMoviesService(page),
        staleTime: 60 * 1000,
    })
    const { data: topRatedMoviesData, isLoading: topRatedMoviesLoading, error: topRatedMoviesError } = useQuery({
        queryKey: ["topRatedMovies",page],
        queryFn:()=> topRatedMoviesService(page),
        staleTime: 60 * 1000,
    })
    const { data: nowPlayingMoviesData, isLoading: nowPlayingMoviesLoading, error: nowPlayingMoviesError } = useQuery({
        queryKey: ["nowPlayingMovies",page],
        queryFn:()=> nowPlayingMoviesService(page),
        staleTime: 60 * 1000,
    })
    const { data: popularMoviesData, isLoading: popularMoviesLoading, error: popularMoviesError } = useQuery({
        queryKey: ["popularMovies",page],
        queryFn:()=> popularMoviesService(page),
        staleTime: 60 * 1000,
    })
    const { data: movieDetailData, isLoading: movieDetailLoading, error: movieDetailError, refetch: movieDetailRefresh } = useQuery({
        queryKey: ["movieDetail", id],
        queryFn: () => movieDetailService(id),
        enabled: type === "movie" && !!id,
        staleTime: 10 * 60 * 1000,
    })
    const { data: movieRecommendationData, isLoading: movieRecommendationLoading, error: movieRecommendationError } = useQuery({
        queryKey: ["movieRecommendation", id],
        queryFn: () => movieRecommendationsService(id),
        enabled: type === "movie"&& !!id,
        staleTime: 5 * 60 * 1000,
    })
    const { data: moviePeopleData, isLoading: moviePeopleLoading, error: moviePeopleError } = useQuery({
        queryKey: ["moviePeople", id],
        queryFn: () => moviePeopleService(id),
        enabled: type === "movie"&& !!id,
        staleTime: 5 * 60 * 1000,
    })
    const { data: movieVideoData, isLoading: movieVideoLoading, error: movieVideoError } = useQuery({
        queryKey: ["movieVideo", id],
        queryFn: () => movieVideoService(id),
        enabled: type === "movie"&& !!id,
        staleTime: 5 * 60 * 1000,
    })
    return ({
        upcomingMoviesData: upcomingMoviesData?.results,
        upcomingMoviesError,
        upcomingMoviesLoading,
        topRatedMoviesData: topRatedMoviesData?.results,
        topRatedMoviesError,
        topRatedMoviesLoading,
        nowPlayingMoviesData: nowPlayingMoviesData?.results,
        nowPlayingMoviesError,
        nowPlayingMoviesLoading,
        popularMoviesData: popularMoviesData?.results,
        popularMoviesError,
        popularMoviesLoading,
        movieDetailData,
        movieDetailLoading,
        movieDetailError,
        movieDetailRefresh,
        movieRecommendationData,
        movieRecommendationError,
        movieRecommendationLoading,
        moviePeopleData,
        moviePeopleError,
        moviePeopleLoading,
        movieVideoData:movieVideoData?.results?.find((item)=>item.site==="YouTube" && item.type==="Trailer"),
        popularMovies:{
            data:popularMoviesData?.results,
            loading:popularMoviesLoading,
            error:popularMoviesError,
            count:popularMoviesData?.total_results
        },
        topRatedMovies:{
            data:topRatedMoviesData?.results,
            loading:topRatedMoviesLoading,
            error:topRatedMoviesError,
            count:topRatedMoviesData?.total_results
        },
        nowPlayingMovies:{
            data:nowPlayingMoviesData?.results,
            loading:nowPlayingMoviesLoading,
            error:nowPlayingMoviesError,
            count:nowPlayingMoviesData?.total_results
        },
        upcomingMovies:{
            data:upcomingMoviesData?.results,
            loading:upcomingMoviesLoading,
            error:upcomingMoviesError,
            count:upcomingMoviesData?.total_results
        }

    })
}
export default useMovies