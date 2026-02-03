import { SectionHeader, ScrollRow, PersonCard } from "./components";
const TrendingPeople = () => {
  const ACTORS = [
    {
      id: 1,
      name: "Leonardo DiCaprio",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 2,
      name: "Tom Hanks",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 3,
      name: "Brad Pitt",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 4,
      name: "Angelina Jolie",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100",
    },
    {
      id: 5,
      name: "Robert Downey Jr.",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100",
    },
  ];
  return (
    <>
      <SectionHeader
        title="TRENDING PEOPEL"
        subtitle="CAST & CREW"
        hasViewAll={false}
      />
      <ScrollRow>
        {ACTORS.map((actor) => (
          <PersonCard key={actor.id} item={actor} />
        ))}
        {ACTORS.map((actor) => (
          <PersonCard key={`dup-${actor.id}`} item={actor} />
        ))}
      </ScrollRow>
    </>
  );
};

export default TrendingPeople;
