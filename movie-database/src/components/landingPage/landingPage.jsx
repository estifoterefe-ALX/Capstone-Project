import React from "react";
import Header from "./Header";
import TrendingMovies from "./trendingmovies";
import TrendingSeries from "./trendingSeries";
import TrendingPeople from "./trendingPeople";
import MoviesSection from "./moviesSection";
import SeriesSection from "./seriesSection";
import Footer from "./Footer";
import Trending from "./trending";

const App = () => {
  return (
    <div className="bg-[#0a0f1c] min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; } 
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Header Component */}
      <Header />

      {/* Hero Carousel Section */}
      <Trending />

      {/* Main Content Sections */}
      <main className="relative z-20 -mt-10">
        <TrendingMovies />
        <TrendingSeries />
        <TrendingPeople />
        <MoviesSection />
        <SeriesSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
