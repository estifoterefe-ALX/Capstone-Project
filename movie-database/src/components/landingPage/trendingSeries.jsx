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
import { useNavigate } from "react-router-dom";
const TrendingSeries = () => {
  const { trendingSeries } = useLandingPage("trendingSeries");
  const navigate = useNavigate();
  const SERIES_DATA = trendingSeries.data;
  if (trendingSeries.loading) {
    return (
      <section>
        <SectionHeader title="TRENDING SERIES" subtitle="STREAM ONLINE" />
        <PosterCardSkeletonGrid />
      </section>
    );
  }
  if (trendingSeries.error) {
    return (
      <section>
        <SectionHeader title="TRENDING SERIES" subtitle="STREAM ONLINE" />
        <PosterCardErrorGrid />
      </section>
    );
  }
  return (
    <section id="trendingSeries">
      <SectionHeader
        title="TRENDING SERIES"
        subtitle="STREAM ONLINE"
        onViewAll={() => navigate("/viewAll/trendingSeries")}
      />
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
