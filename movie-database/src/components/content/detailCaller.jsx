import { useParams, useSearchParams } from "react-router-dom";
import useMovies from "../../hooks/useMovies";
import useSeries from "../../hooks/useSeries";
import Detail from "./detail";

function DetailCaller() {
  const id = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const {
    movieDetailData,
    movieDetailLoading,
    movieDetailError,
    movieRecommendationData,
    movieRecommendationLoading,
    movieRecommendationError,
    moviePeopleData,
  } = useMovies(id.id, type);
  const {
    seriesDetailData,
    seriesDetailLoading,
    seriesDetailError,
    seriesRecommendationData,
    seriesRecommendationLoading,
    seriesRecommendationError,
    seriesPeopleData,
  } = useSeries(id.id, type);

  const isMovie = type === "movie";

  const sentData = isMovie
    ? {
        data: movieDetailData,
        error: movieDetailError,
        loading: movieDetailLoading,
        recommendation: {
          list: movieRecommendationData,
          error: movieRecommendationError,
          loading: movieRecommendationLoading,
        },
        credits: moviePeopleData,
        type: type,
      }
    : {
        data: seriesDetailData,
        error: seriesDetailError,
        loading: seriesDetailLoading,
        recommendation: {
          list: seriesRecommendationData,
          error: seriesRecommendationError,
          loading: seriesRecommendationLoading,
        },
        credits: seriesPeopleData,
        type: type,
      };
  return (
    <Detail
      items={sentData.data}
      error={sentData.error}
      loading={sentData.loading}
      recommendation={sentData.recommendation}
      credits={sentData.credits}
      type={sentData.type}
      id={id.id}
    />
  );
}
export default DetailCaller;
