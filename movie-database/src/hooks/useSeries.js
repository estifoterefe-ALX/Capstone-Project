import { useQuery } from "@tanstack/react-query";
import { nowPlayingSeries, popularSeries, topRatedSeries, upComingSeries, seriesDetail, seriesRecommendations,seriesPeople,seriesSeason,seriesSeasonEpsoide } from "../service/series";

const useSeries = (id, type,senid ) => {
    const { data: upcomingSeriesData, isLoading: upcomingSeriesLoading, error: upcomingSeriesError } = useQuery({
        queryKey: ["upcomingSeries"],
        queryFn: upComingSeries,
        staleTime: 60 * 1000,
    })
    const { data: topRatedSeriesData, isLoading: topRatedSeriesLoading, error: topRatedSeriesError } = useQuery({
        queryKey: ["topRatedSeries"],
        queryFn: topRatedSeries,
        staleTime: 60 * 1000,
    })
    const { data: nowPlayingSeriesData, isLoading: nowPlayingSeriesLoading, error: nowPlayingSeriesError } = useQuery({
        queryKey: ["nowPlayingSeries"],
        queryFn: nowPlayingSeries,
        staleTime: 60 * 1000,
    })
    const { data: popularSeriesData, isLoading: popularSeriesLoading, error: popularSeriesError } = useQuery({
        queryKey: ["popularSeries"],
        queryFn: popularSeries,
        staleTime: 60 * 1000,
    })
    const { data: seriesDetailData, isLoading: seriesDetailLoading, error: seriesDetailError } = useQuery({
        queryKey: ["seriesDetail", id],
        queryFn: () => seriesDetail(id),
        enabled: type === "series",
        staleTime: 10 * 60 * 1000,
    })
    const { data: seriesRecommendationData, isLoading: seriesRecommendationLoading, error: seriesRecommendationError } = useQuery({
        queryKey: ["seriesRecommendation", id],
        queryFn: () => seriesRecommendations(id),
        enabled: type === "series",
        staleTime: 5 * 60 * 1000,
    })
    const { data: seriesPeopleData, isLoading: seriesPeopleLoading, error: seriesPeopleError } = useQuery({
        queryKey: ["seriesPeople", id],
        queryFn: () => seriesPeople(id),
        enabled: type === "series",
        staleTime: 5 * 60 * 1000,
    })
    const { data: seriesSeasonData, isLoading: seriesSeasonLoading, error: seriesSeasonError } = useQuery({
        queryKey: ["seriesSeason", id,senid],
        queryFn: () => seriesSeason(id,senid),
        enabled: type === "series",
        staleTime: 5 * 60 * 1000,
    })
    return ({
        upcomingSeriesData: upcomingSeriesData?.results,
        upcomingSeriesError,
        upcomingSeriesLoading,
        topRatedSeriesData: topRatedSeriesData?.results,
        topRatedSeriesError,
        topRatedSeriesLoading,
        nowPlayingSeriesData: nowPlayingSeriesData?.results,
        nowPlayingSeriesError,
        nowPlayingSeriesLoading,
        popularSeriesData: popularSeriesData?.results,
        popularSeriesError,
        popularSeriesLoading,
        seriesDetailData,
        seriesDetailLoading,
        seriesDetailError,
        seriesRecommendationData,
        seriesRecommendationError,
        seriesRecommendationLoading,
        seriesPeopleData,
        seriesPeopleError,
        seriesPeopleLoading,
        seriesSeasonData,
        seriesSeasonError,
        seriesSeasonLoading

    })
}
export default useSeries