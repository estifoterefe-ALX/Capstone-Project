import React from "react";
import Header from "./Header";
import TrendingMovies from "./trendingmovies";
import TrendingSeries from "./trendingSeries";
import TrendingPeople from "./trendingPeople";
import MoviesSection from "./moviesSection";
import SeriesSection from "./seriesSection";
import Footer from "./footer";
import Trending from "./trending";

const App = () => {
  return (
    <div className="bg-white dark:bg-[#0a0f1c] min-h-screen text-gray-900 dark:text-white font-sans selection:bg-yellow-500 dark:selection:bg-yellow-600 selection:text-black scrollbar-hide transition-colors duration-200">
      <style>{`
    .scrollbar-hide::-webkit-scrollbar { display: none; } 
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>

      {/* Header Component */}
      <section id="home">
        <Header />
      </section>

      {/* Hero Carousel Section */}
      <section id="trending">
        <Trending />
      </section>

      {/* Main Content Sections */}
      <main className="relative z-20 -mt-10 bg-white dark:bg-[#0a0f1c]">
        <TrendingMovies />
        <TrendingSeries />
        <TrendingPeople />
        <section id="movies">
          <MoviesSection />
        </section>
        <section id="series">
          <SeriesSection />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;
