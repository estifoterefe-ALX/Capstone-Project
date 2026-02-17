import React from "react";
import {
  PosterCard,
  ScrollRow,
  SectionHeader,
} from "../utils/helperComponents";
import { PosterCardSkeletonGrid } from "../utils/loadingComponents";
import { PosterCardErrorGrid } from "../utils/errorComponents";
import useLandingPage from "../../hooks/useTrending";
import { Link } from "react-router-dom";
const TrendingSeries = () => {
  const {
    trendingSeriesData: SERIES_DATA,
    trendingSeriesLoading,
    trendingSeriesError,
  } = useLandingPage();
  if (trendingSeriesLoading) {
    return (
      <section>
        <SectionHeader title="TRENDING SERIES" subtitle="STREAM ONLINE" />
        <PosterCardSkeletonGrid />
      </section>
    );
  }
  if (trendingSeriesError) {
    return (
      <section>
        <SectionHeader title="TRENDING SERIES" subtitle="STREAM ONLINE" />
        <PosterCardErrorGrid />
      </section>
    );
  }
  return (
    <section id="trendingSeries">
      <SectionHeader title="TRENDING SERIES" subtitle="STREAM ONLINE" />
      <ScrollRow>
        {SERIES_DATA?.map((movie) => (
          <Link key={movie.id} to={`/detailCaller/${movie.id}?type=series`}>
            <PosterCard key={movie.id} item={{ ...movie }} />
          </Link>
        ))}
      </ScrollRow>
    </section>
  );
};

export default TrendingSeries;
