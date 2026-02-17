import {
  PersonCard,
  SectionHeader,
  ScrollRow,
} from "../utils/helperComponents";
import { PersonCardSkeletonGrid } from "../utils/loadingComponents";
import { PersonCardErrorGrid } from "../utils/errorComponents";
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
    <section id="trendingPeople">
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
    </section>
  );
};

export default TrendingPeople;
