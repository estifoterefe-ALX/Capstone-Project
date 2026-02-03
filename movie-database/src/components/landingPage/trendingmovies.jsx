import React from "react";
import { SectionHeader, ScrollRow, PosterCard } from "./components";
const TrendingMovies = () => {
  const TRENDING_MOVIES = [
    {
      id: 1,
      title: "Dune",
      img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=300&h=450",
    },
    {
      id: 2,
      title: "The Batman",
      img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?auto=format&fit=crop&q=80&w=300&h=450",
    },
    {
      id: 3,
      title: "Interstellar",
      img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=300&h=450",
    },
    {
      id: 4,
      title: "The Godfather",
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=300&h=450",
    },
    {
      id: 5,
      title: "The Dark Knight",
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2560&auto=format&fit=crop",
    },
  ];
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
