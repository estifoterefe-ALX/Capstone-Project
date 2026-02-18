import { ChevronLeft, ChevronRight } from "lucide-react";
function Pagination({ page, setPage, count }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${
            page <= 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-yellow-600 text-white hover:bg-yellow-700 active:scale-95 shadow-md hover:shadow-lg"
          }
        `}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
        <span>Prev</span>
      </button>

      {/* Page indicator */}
      <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
        Page {page} of {Math.ceil(count / 10) || 1}
      </span>

      <button
        disabled={page >= Math.ceil(count / 10)}
        onClick={() => setPage(page + 1)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${
            page >= Math.ceil(count / 10)
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-yellow-600 text-white hover:bg-yellow-700 active:scale-95 shadow-md hover:shadow-lg"
          }
        `}
        aria-label="Next page"
      >
        <span>Next</span>
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
export default Pagination;
