import { CategoryHeader, ScrollRow, LandscapeCard } from "./components";
const SeriesSection = () => {
  const TRENDING_MOVIES = [
    {
      id: 1,
      title: "House of Dragon",
      img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=300&h=450",
    },
    {
      id: 2,
      title: "The Witcher",
      img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?auto=format&fit=crop&q=80&w=300&h=450",
    },
    {
      id: 3,
      title: "The Last of Us",
      img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=300&h=450",
    },
    {
      id: 4,
      title: "The Walking Dead",
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=300&h=450",
    },
    {
      id: 5,
      title: "The Office",
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2560&auto=format&fit=crop",
    },
  ];
  return (
    <>
      <CategoryHeader title="Series" />
      <div className="pl-4">
        <h3 className="text-gray-300 font-bold mb-4 px-8 md:px-12 text-sm uppercase">
          AIRING TODAY
        </h3>
        <ScrollRow>
          {TRENDING_MOVIES.map((movie) => (
            <LandscapeCard key={movie.id} item={movie} />
          ))}
        </ScrollRow>
        <h3 className="text-gray-300 font-bold mb-4 px-8 md:px-12 text-sm uppercase">
          ON THE AIR
        </h3>
        <ScrollRow>
          {TRENDING_MOVIES.map((movie) => (
            <LandscapeCard key={movie.id} item={movie} />
          ))}
        </ScrollRow>
        <h3 className="text-gray-300 font-bold mb-4 px-8 md:px-12 text-sm uppercase">
          POPULAR
        </h3>
        <ScrollRow>
          {TRENDING_MOVIES.map((movie) => (
            <LandscapeCard key={movie.id} item={movie} />
          ))}
        </ScrollRow>
        <h3 className="text-gray-300 font-bold mb-4 px-8 md:px-12 text-sm uppercase">
          TOP RATED
        </h3>
        <ScrollRow>
          {TRENDING_MOVIES.map((movie) => (
            <LandscapeCard key={movie.id} item={movie} />
          ))}
        </ScrollRow>
      </div>
    </>
  );
};

export default SeriesSection;
