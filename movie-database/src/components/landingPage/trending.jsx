import React, { useState, useEffect } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";

const Trending = () => {
  const slides = [
    {
      id: 1,
      title: "DUNE: PART TWO",
      description:
        "Experience the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2560&auto=format&fit=crop",
      tag: "#1 Trending Now",
    },
    {
      id: 2,
      title: "AVATAR: THE WAY OF WATER",
      description:
        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
      image:
        "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?q=80&w=2560&auto=format&fit=crop",
      tag: "New Release",
    },
    {
      id: 3,
      title: "OPPENHEIMER",
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2560&auto=format&fit=crop",
      tag: "Oscar Winner",
    },
    {
      id: 4,
      title: "SPIDER-MAN: ACROSS THE SPIDER-VERSE",
      description:
        "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=2560&auto=format&fit=crop",
      tag: "Animation",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden mb-15">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/80 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-3xl z-10">
            <div className="mb-4">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider border border-yellow-500/50">
                {slide.tag}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
              {slide.title}
            </h1>
            <p className="text-gray-300 text-lg mb-8 line-clamp-2 max-w-xl">
              {slide.description}
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transition">
                <Play size={20} fill="currentColor" /> Watch Trailer
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 border border-white/20 transition">
                <Info size={20} /> More Info
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center z-20 transition-all hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center z-20 transition-all hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-10 h-1 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-yellow-500"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Trending;
