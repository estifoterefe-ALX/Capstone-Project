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
import useMovies from "../../hooks/useMovies";
const MoviesSection = () => {
  const {
    upcomingMoviesData,
    upcomingMoviesError,
    upcomingMoviesLoading,
    topRatedMoviesData,
    topRatedMoviesError,
    topRatedMoviesLoading,
    nowPlayingMoviesData,
    nowPlayingMoviesError,
    nowPlayingMoviesLoading,
    popularMoviesData,
    popularMoviesError,
    popularMoviesLoading,
  } = useMovies();
  return (
    <>
      {/* Major Category: Movies */}
      <CategoryHeader title="Movies" />

      <div className="pl-4">
        <NormalHeader title={"NOW PLAYING"} hasViewAll={true} />
        <MediaRow
          data={nowPlayingMoviesData}
          error={nowPlayingMoviesError}
          loading={nowPlayingMoviesLoading}
          CardComponent={LandscapeCard}
          SkeletonComponent={LandscapeCardSkeletonGrid}
          ErrorComponent={LandscapeCardErrorGrid}
          type={"movie"}
        />

        <NormalHeader title={"popular"} hasViewAll={true} />
        <MediaRow
          data={popularMoviesData}
          error={popularMoviesError}
          loading={popularMoviesLoading}
          CardComponent={PosterCard}
          SkeletonComponent={PosterCardSkeletonGrid}
          ErrorComponent={PosterCardErrorGrid}
          type={"movie"}
        />

        <NormalHeader title={"top rated"} hasViewAll={true} />
        <MediaRow
          data={topRatedMoviesData}
          error={topRatedMoviesError}
          loading={topRatedMoviesLoading}
          CardComponent={PosterCard}
          SkeletonComponent={PosterCardSkeletonGrid}
          ErrorComponent={PosterCardErrorGrid}
          type={"movie"}
        />

        <NormalHeader title={"upcoming"} hasViewAll={true} />
        <MediaRow
          data={upcomingMoviesData}
          error={upcomingMoviesError}
          loading={upcomingMoviesLoading}
          CardComponent={LandscapeCard}
          SkeletonComponent={LandscapeCardSkeletonGrid}
          ErrorComponent={LandscapeCardErrorGrid}
          isUpcoming={true}
          type={"movie"}
        />
      </div>
    </>
  );
};

export default MoviesSection;
