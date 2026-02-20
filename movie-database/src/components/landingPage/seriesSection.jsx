import {
  CategoryHeader,
  LandscapeCard,
  PosterCard,
  NormalHeader,
  MediaRow,
} from "../utils/helperComponents";
import {
  LandscapeCardSkeletonGrid,
  PosterCardSkeletonGrid,
} from "../utils/loadingComponents";
import {
  LandscapeCardErrorGrid,
  PosterCardErrorGrid,
} from "../utils/errorComponents";
import useSeries from "../../hooks/useSeries";
import { useNavigate } from "react-router-dom";
const SeriesSection = () => {
  const navigate = useNavigate();
  const {
    upcomingSeriesData,
    upcomingSeriesError,
    upcomingSeriesLoading,
    topRatedSeriesData,
    topRatedSeriesError,
    topRatedSeriesLoading,
    nowPlayingSeriesData,
    nowPlayingSeriesError,
    nowPlayingSeriesLoading,
    popularSeriesData,
    popularSeriesError,
    popularSeriesLoading,
  } = useSeries("", "series");

  return (
    <>
      <CategoryHeader title="Series" />
      <div className="pl-4">
        <section id="airingToday">
          <NormalHeader
            title={"Airing Today"}
            hasViewAll={true}
            onViewAll={() => navigate("/viewAll/nowPlayingSeries")}
          />
          <MediaRow
            data={nowPlayingSeriesData}
            error={nowPlayingSeriesError}
            loading={nowPlayingSeriesLoading}
            CardComponent={LandscapeCard}
            SkeletonComponent={LandscapeCardSkeletonGrid}
            ErrorComponent={LandscapeCardErrorGrid}
            type={"series"}
          />
        </section>
        <section id="toRatedS">
          <NormalHeader
            title={"top rated"}
            hasViewAll={true}
            onViewAll={() => navigate("/viewAll/topRatedSeries")}
          />
          <MediaRow
            data={topRatedSeriesData}
            error={topRatedSeriesError}
            loading={topRatedSeriesLoading}
            CardComponent={PosterCard}
            SkeletonComponent={PosterCardSkeletonGrid}
            ErrorComponent={PosterCardErrorGrid}
            hasRating={true}
            type={"series"}
          />
        </section>
        <section id="onTheAir">
          <NormalHeader
            title={"on the air"}
            hasViewAll={true}
            onViewAll={() => navigate("/viewAll/upcomingSeries")}
          />
          <MediaRow
            data={upcomingSeriesData}
            error={upcomingSeriesError}
            loading={upcomingSeriesLoading}
            CardComponent={LandscapeCard}
            SkeletonComponent={LandscapeCardSkeletonGrid}
            ErrorComponent={LandscapeCardErrorGrid}
            type={"series"}
          />
        </section>
        <section id="popularS">
          <NormalHeader
            title={"popular"}
            hasViewAll={true}
            onViewAll={() => navigate("/viewAll/popularSeries")}
          />
          <MediaRow
            data={popularSeriesData}
            error={popularSeriesError}
            loading={popularSeriesLoading}
            CardComponent={PosterCard}
            SkeletonComponent={PosterCardSkeletonGrid}
            ErrorComponent={PosterCardErrorGrid}
            type={"series"}
          />
        </section>
      </div>
    </>
  );
};

export default SeriesSection;
