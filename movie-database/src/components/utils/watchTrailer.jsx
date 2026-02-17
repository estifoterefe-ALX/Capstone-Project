import { Play } from "lucide-react";
import useMovies from "../../hooks/useMovies";
import useSeries from "../../hooks/useSeries";
function WatchTrailerButton({ id, type }) {
  const { movieVideoData } = useMovies(id, type);
  const { seriesVideoData } = useSeries(id, type);
  const handleClick = () => {
    let encodedQuery;
    if (type === "movie") {
      encodedQuery = encodeURIComponent(movieVideoData?.key);
    } else {
      encodedQuery = encodeURIComponent(seriesVideoData?.key);
    }

    const url = `https://www.youtube.com/watch?v=${encodedQuery}`;
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <button
      className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transition cursor-pointer"
      onClick={handleClick}
    >
      <Play size={20} fill="currentColor" /> Watch Trailer
    </button>
  );
}
export default WatchTrailerButton;
