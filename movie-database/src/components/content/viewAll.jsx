import { useParams } from "react-router-dom";
import { useMediaData } from "../../hooks/useViewAll";
import { useState } from "react";
import { FullScreenLoader } from "../utils/Loader";
import { FullScreenError } from "../utils/Error";
import { ViewAllPoster, NormalHeader } from "../utils/helperComponents";
import { Link } from "react-router-dom";
import Pagination from "../utils/pagination";
import TopBar from "./TopBar";
function ViewAll() {
  const { type } = useParams();
  const [page, setPage] = useState(1);
  const { data, loading, error, count } = useMediaData(type, page);
  if (loading) {
    return <FullScreenLoader />;
  }
  if (error) {
    return <FullScreenError />;
  }
  const types = type.includes["movie"] ? "movie" : "series";
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <TopBar />

      {/* Add padding top to account for fixed TopBar */}
      <div className="pt-20 md:pt-24">
        <div className="px-8 md:px-16 py-6">
          <NormalHeader title={type} hasViewAll={false} />
        </div>

        {/* Grid container for posters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 px-8 md:px-16 pb-12">
          {data?.map((movie) => (
            <Link key={movie.id} to={`/detailCaller/${movie.id}?type=${types}`}>
              <ViewAllPoster item={movie} hasRating={true} />
            </Link>
          ))}
        </div>

        {/* Pagination centered */}

        <div className="flex justify-center pb-12 px-8 md:px-16">
          <Pagination page={page} setPage={setPage} count={count} />
        </div>
      </div>
    </div>
  );
}
export default ViewAll;
