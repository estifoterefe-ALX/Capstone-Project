import {
  SectionHeader,
  ScrollRow,
  PersonCard,
  PersonCardSkeletonGrid,
  PersonCardErrorGrid,
} from "./components";
import useLandingPage from "../../hooks/useTrending";
const TrendingPeople = () => {
  const {
    trendingPeopleData: ACTORS,
    trendingPeopleLoading,
    trendingPeopleError,
  } = useLandingPage();
  if (trendingPeopleError) {
    return (
      <section>
        <SectionHeader
          title="TRENDING PEOPEL"
          subtitle="CAST & CREW"
          hasViewAll={false}
        />
        <PersonCardErrorGrid />
      </section>
    );
  }
  if (trendingPeopleLoading) {
    return (
      <section>
        <SectionHeader
          title="TRENDING PEOPEL"
          subtitle="CAST & CREW"
          hasViewAll={false}
        />
        <PersonCardSkeletonGrid />
      </section>
    );
  }
  return (
    <>
      <SectionHeader
        title="TRENDING PEOPEL"
        subtitle="CAST & CREW"
        hasViewAll={false}
      />
      <ScrollRow>
        {ACTORS?.map((actor) => (
          <PersonCard key={actor.id} item={actor} />
        ))}
      </ScrollRow>
    </>
  );
};

export default TrendingPeople;
