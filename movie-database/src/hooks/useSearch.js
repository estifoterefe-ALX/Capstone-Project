import { useQuery } from "@tanstack/react-query";
import { searchMovie, searchAll, searchSeries } from "../service/search";

const useSearch = ({ item, searchBy, page = 1 }) => {
  const queryFn = () => {
    if (searchBy === "movie") return searchMovie(item, page);
    if (searchBy === "series") return searchSeries(item, page);
    if (searchBy === "all") return searchAll(item, page);
    return Promise.resolve({ results: [], total_results: 0, total_pages: 0 });
  };

  const {
    data: searchResult1,
    isLoading: searchLoading,
    error: searchError,
  } = useQuery({
    queryKey: ["search", item, searchBy, page],
    queryFn,
    enabled: !!item && item.trim().length > 0,
  });

  // Process results with safety checks
  const filteredResults = searchResult1?.results?.filter(
    (item) => item.media_type === "movie" || item.media_type === "tv",
  );

  // Handle errors from both React Query and API
  const error = searchError || searchResult1?.error;

  return {
    searchResult:
      filteredResults?.length > 0
        ? filteredResults
        : searchResult1?.results || [],
    searchLoading,
    searchError: error,
    searchCount:
      filteredResults?.length > 0
        ? filteredResults.length
        : searchResult1?.total_results || 0,
    totalPages: searchResult1?.total_pages || 0,
    currentPage: page,
  };
};

export default useSearch;
