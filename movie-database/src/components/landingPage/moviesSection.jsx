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
import { useNavigate } from "react-router-dom";
const MoviesSection = () => {
  const navigate = useNavigate();
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
        <section id="nowPlaying">
          <NormalHeader
            title={"NOW PLAYING"}
            hasViewAll={true}
            onViewAll={() => navigate("/viewAll/nowPlayingMovies")}
          />
          <MediaRow
            data={nowPlayingMoviesData}
            error={nowPlayingMoviesError}
            loading={nowPlayingMoviesLoading}
            CardComponent={LandscapeCard}
            SkeletonComponent={LandscapeCardSkeletonGrid}
            ErrorComponent={LandscapeCardErrorGrid}
            type={"movie"}
          />
        </section>
        <section id="popular">
          <NormalHeader
            title={"popular"}
            hasViewAll={true}
            onViewAll={() => navigate("/viewAll/popularMovies")}
          />
          <MediaRow
            data={popularMoviesData}
            error={popularMoviesError}
            loading={popularMoviesLoading}
            CardComponent={PosterCard}
            SkeletonComponent={PosterCardSkeletonGrid}
            ErrorComponent={PosterCardErrorGrid}
            type={"movie"}
          />
        </section>
        <section id="topRated">
          <NormalHeader
            title={"top rated"}
            hasViewAll={true}
            onViewAll={() => navigate("/viewAll/topRatedMovies")}
          />
          <MediaRow
            data={topRatedMoviesData}
            error={topRatedMoviesError}
            loading={topRatedMoviesLoading}
            CardComponent={PosterCard}
            SkeletonComponent={PosterCardSkeletonGrid}
            ErrorComponent={PosterCardErrorGrid}
            type={"movie"}
            hasRating={true}
          />
        </section>
        <section id="upcoming">
          <NormalHeader
            title={"upcoming"}
            hasViewAll={true}
            onViewAll={() => navigate("/viewAll/upcomingMovies")}
          />
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
        </section>
      </div>
    </>
  );
};

export default MoviesSection;
