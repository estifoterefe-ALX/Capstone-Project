import { useQuery } from "@tanstack/react-query";
import { searchMovie, searchAll, searchSeries } from "../service/seach";


const useSearch = ({ item, searchBy,page}) => {
    const queryFn = () => {
        if (searchBy === "movie") return searchMovie(item,page);
        if (searchBy === "series") return searchSeries(item,page);        // you can create searchTv similarly
        if (searchBy === "all") return searchAll(item,page);  // optional multi-search
    };

    const { data: searchResult1, isLoading: searchLoading, error: searchError} = useQuery({
        queryKey: ["seach", item, searchBy,page],
        queryFn,
        enabled: !!item,
    })
    const filteredResults = searchResult1?.results.filter(
        item => item.media_type === "movie" || item.media_type === "tv"
      );
    return ({
        searchResult: filteredResults?.length!==0?filteredResults:searchResult1?.results,
        searchLoading,
        searchError,
        searchCount:filteredResults?.length!==0? filteredResults?.length:searchResult1?.total_results        ,
    })
}
export default useSearch