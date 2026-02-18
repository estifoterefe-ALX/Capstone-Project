import React from "react";
import {
  PosterCard,
  SectionHeader,
  ScrollRow,
} from "../utils/helperComponents";
import { PosterCardSkeletonGrid } from "../utils/loadingComponents";
import { PosterCardErrorGrid } from "../utils/errorComponents";
import useLandingPage from "../../hooks/useTrending";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const TrendingMovies = () => {
  const { trendingMovies } = useLandingPage("trendingMovies");
  const navigate = useNavigate();
  const TRENDING_MOVIES = trendingMovies.data;
  if (trendingMovies.loading) {
    return (
      <section>
        <SectionHeader title="TRENDING SECTION" subtitle="POPULAR SECTION" />
        <PosterCardSkeletonGrid />
      </section>
    );
  }
  if (trendingMovies.error) {
    return (
      <section>
        <SectionHeader title="TRENDING SECTION" subtitle="POPULAR SECTION" />
        <PosterCardErrorGrid />
      </section>
    );
  }
  return (
    <section id="trendingMovies">
      <SectionHeader
        title="TRENDING SECTION"
        subtitle="POPULAR SECTION"
        onViewAll={() => navigate("/viewAll/trendingMovies")}
      />
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
