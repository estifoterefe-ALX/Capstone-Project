import React, { useState, useEffect } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import useLandingPage from "../../hooks/useTrending";
import { Loader } from "../utils/Loader";
import { Error } from "../utils/Error";
import WatchTrailerButton from "../utils/watchTrailer";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const { slides, isLoading, error } = useLandingPage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides?.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides?.length - 1 ? 0 : prev + 1));
  };
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="relative h-screen w-full overflow-hidden mb-15">
      {/* Slides */}
      {slides?.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${slide?.backdrop_path}`}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Gradient Overlay - Updated for light/dark */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-100/80 via-gray-50/20 to-transparent dark:from-[#0a0f1c] dark:via-[#0a0f1c]/40 dark:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-gray-100/50 via-transparent to-transparent dark:from-[#0a0f1c]/80 dark:via-transparent dark:to-transparent" />
          {/* Content */}
          <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-3xl z-10">
            <div className="mb-4">
              <span className="bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider border border-yellow-500/50">
                {slide.media_type}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              {slide.title ? slide.title : slide.original_name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 line-clamp-2 max-w-xl">
              {slide.overview}
            </p>
            <div className="flex gap-4">
              <WatchTrailerButton id={slide.id} type={slide.media_type} />
              <button
                className="bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-gray-800 dark:text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 border border-gray-300 dark:border-white/20 transition cursor-pointer"
                onClick={() =>
                  navigate(
                    `/detailCaller/${slide.id}?type=${slide.media_type === "movie" ? "movie" : "series"}`,
                  )
                }
              >
                <Info size={20} /> More Info
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 dark:bg-black/50 dark:hover:bg-black/70 text-gray-800 dark:text-white flex items-center justify-center z-20 transition-all hover:scale-110 backdrop-blur-sm border border-gray-300/50 dark:border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 dark:bg-black/50 dark:hover:bg-black/70 text-gray-800 dark:text-white flex items-center justify-center z-20 transition-all hover:scale-110 backdrop-blur-sm border border-gray-300/50 dark:border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-1 sm:w-4 md:w-6 lg:w-8 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-yellow-500"
                : "bg-gray-400/60 hover:bg-gray-600 dark:bg-white/40 dark:hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
