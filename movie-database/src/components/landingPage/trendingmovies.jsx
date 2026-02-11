import React from "react";
import { SectionHeader, ScrollRow, PosterCard } from "./components";
import useLandingPage from "../../hooks/useTrending";
const TrendingMovies = () => {
  const {
    trendingMoviesData: TRENDING_MOVIES,
    trendingMoviesLoading,
    trendingMoviesError,
  } = useLandingPage();
  console.log("trending movies", TRENDING_MOVIES);
  return (
    <section>
      <SectionHeader title="TRENDING SECTION" subtitle="POPULAR SECTION" />
      <ScrollRow>
        {TRENDING_MOVIES.map((movie) => (
          <PosterCard key={movie.id} item={movie} />
        ))}
        {TRENDING_MOVIES.map((movie) => (
          <PosterCard key={`dup-${movie.id}`} item={movie} />
        ))}
      </ScrollRow>
    </section>
  );
};

export default TrendingMovies;
