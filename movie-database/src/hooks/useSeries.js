import { useQuery } from "@tanstack/react-query";
import { nowPlayingSeriesService, popularSeriesService, topRatedSeriesService, upComingSeriesService, seriesDetailService, seriesRecommendationsService,seriesPeopleService,seriesSeasonService,seriesVideoService } from "../service/series";

const useSeries = (id, type,senid,page=1 ) => {
    const { data: upcomingSeriesData, isLoading: upcomingSeriesLoading, error: upcomingSeriesError } = useQuery({
        queryKey: ["upcomingSeries",page],
        queryFn:()=> upComingSeriesService(page),
        staleTime: 60 * 1000,
        enabled:type==="series"
    })
    const { data: topRatedSeriesData, isLoading: topRatedSeriesLoading, error: topRatedSeriesError } = useQuery({
        queryKey: ["topRatedSeries",page],
        queryFn:()=> topRatedSeriesService(page),
        staleTime: 60 * 1000,
    })
    const { data: nowPlayingSeriesData, isLoading: nowPlayingSeriesLoading, error: nowPlayingSeriesError } = useQuery({
        queryKey: ["nowPlayingSeries",page],
        queryFn:()=> nowPlayingSeriesService(page),
        staleTime: 60 * 1000,
    })
    const { data: popularSeriesData, isLoading: popularSeriesLoading, error: popularSeriesError } = useQuery({
        queryKey: ["popularSeries",page],
        queryFn:()=> popularSeriesService(page),
        staleTime: 60 * 1000,
    })
    const { data: seriesDetailData, isLoading: seriesDetailLoading, error: seriesDetailError } = useQuery({
        queryKey: ["seriesDetail", id],
        queryFn: () => seriesDetailService(id),
        enabled: type === "series" && !!id,
        staleTime: 10 * 60 * 1000,
    })
    const { data: seriesVideoData, isLoading: seriesVideoLoading, error: seriesVideoError } = useQuery({
        queryKey: ["seriesVideo", id],
        queryFn: () => seriesVideoService(id),
        enabled: type === "series" && !!id,
        staleTime: 10 * 60 * 1000,
    })
    const { data: seriesRecommendationData, isLoading: seriesRecommendationLoading, error: seriesRecommendationError } = useQuery({
        queryKey: ["seriesRecommendation", id],
        queryFn: () => seriesRecommendationsService(id),
        enabled: type === "series" && !!id,
        staleTime: 5 * 60 * 1000,
    })
    const { data: seriesPeopleData, isLoading: seriesPeopleLoading, error: seriesPeopleError } = useQuery({
        queryKey: ["seriesPeople", id],
        queryFn: () => seriesPeopleService(id),
        enabled: type === "series" && !!id,
        staleTime: 5 * 60 * 1000,
    })
    const { data: seriesSeasonData, isLoading: seriesSeasonLoading, error: seriesSeasonError } = useQuery({
        queryKey: ["seriesSeason", id,senid],
        queryFn: () => seriesSeasonService(id,senid),
        enabled: !!senid,
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
        seriesSeasonLoading,
        seriesVideoData:seriesVideoData?.results?.find((item)=>item.site==="YouTube" && item.type==="Trailer"),
        popularSeries:{
            data:popularSeriesData?.results,
            loading:popularSeriesLoading,
            error:popularSeriesError,
            count:popularSeriesData?.total_results
        },
        topRatedSeries:{
            data:topRatedSeriesData?.results,
            loading:topRatedSeriesLoading,
            error:topRatedSeriesError,
            count:topRatedSeriesData?.total_results
        },
        nowPlayingSeries:{
            data:nowPlayingSeriesData?.results,
            loading:nowPlayingSeriesLoading,
            error:nowPlayingSeriesError,
            count:nowPlayingSeriesData?.total_results
        },
        upcomingSeries:{
            data:upcomingSeriesData?.results,
            loading:upcomingSeriesLoading,
            error:upcomingSeriesError,
            count:upcomingSeriesData?.total_results
        }
    })
}
export default useSeries