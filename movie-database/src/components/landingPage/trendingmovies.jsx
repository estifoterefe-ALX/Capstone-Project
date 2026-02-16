import React from "react";
import { PosterCard,SectionHeader,ScrollRow } from "../utils/helperComponents";
import { PosterCardSkeletonGrid } from "../utils/loadingComponents";
import { PosterCardErrorGrid } from "../utils/errorComponents";
import useLandingPage from "../../hooks/useTrending";
import { Link } from "react-router-dom";
const TrendingMovies = () => {
  const {
    trendingMoviesData: TRENDING_MOVIES,
    trendingMoviesLoading,
    trendingMoviesError,
  } = useLandingPage();
  if (trendingMoviesLoading) {
    return (
      <section>
        <SectionHeader title="TRENDING SECTION" subtitle="POPULAR SECTION" />
        <PosterCardSkeletonGrid />
      </section>
    );
  }
  if (trendingMoviesError) {
    return (
      <section>
        <SectionHeader title="TRENDING SECTION" subtitle="POPULAR SECTION" />
        <PosterCardErrorGrid />
      </section>
    );
  }
  return (
    <section>
      <SectionHeader title="TRENDING SECTION" subtitle="POPULAR SECTION" />
      <ScrollRow>
        {TRENDING_MOVIES?.map((movie) => (
          <Link key={movie.id} to={`/detailCaller/${movie.id}?type=movie`}>
            <PosterCard key={movie.id} item={movie} />
          </Link>
        ))}
      </ScrollRow>
    </section>
  );
};

export default TrendingMovies;
