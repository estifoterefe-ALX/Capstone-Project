import { useQuery } from "@tanstack/react-query";
import { upComingMovies, topRatedMovies, nowPlayingMovies, popularMovies, movieDetail, movieRecommendations, moviePeople } from "../service/movies";

const useMovies = (id, type) => {
    const { data: upcomingMoviesData, isLoading: upcomingMoviesLoading, error: upcomingMoviesError } = useQuery({
        queryKey: ["upcomingMovies"],
        queryFn: upComingMovies,
        staleTime: 60 * 1000,
    })
    const { data: topRatedMoviesData, isLoading: topRatedMoviesLoading, error: topRatedMoviesError } = useQuery({
        queryKey: ["topRatedMovies"],
        queryFn: topRatedMovies,
        staleTime: 60 * 1000,
    })
    const { data: nowPlayingMoviesData, isLoading: nowPlayingMoviesLoading, error: nowPlayingMoviesError } = useQuery({
        queryKey: ["nowPlayingMovies"],
        queryFn: nowPlayingMovies,
        staleTime: 60 * 1000,
    })
    const { data: popularMoviesData, isLoading: popularMoviesLoading, error: popularMoviesError } = useQuery({
        queryKey: ["popularMovies"],
        queryFn: popularMovies,
        staleTime: 60 * 1000,
    })
    const { data: movieDetailData, isLoading: movieDetailLoading, error: movieDetailError, refetch: movieDetailRefresh } = useQuery({
        queryKey: ["movieDetail", id],
        queryFn: () => movieDetail(id),
        enabled: type === "movie",
        staleTime: 10 * 60 * 1000,
    })
    const { data: movieRecommendationData, isLoading: movieRecommendationLoading, error: movieRecommendationError } = useQuery({
        queryKey: ["movieRecommendation", id],
        queryFn: () => movieRecommendations(id),
        enabled: type === "movie",
        staleTime: 5 * 60 * 1000,
    })
    const { data: moviePeopleData, isLoading: moviePeopleLoading, error: moviePeopleError } = useQuery({
        queryKey: ["moviePeople", id],
        queryFn: () => moviePeople(id),
        enabled: type === "movie",
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
        moviePeopleLoading

    })
}
export default useMovies