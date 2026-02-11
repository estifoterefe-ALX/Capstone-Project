import { ChevronRight, ChevronLeft } from "lucide-react";

const Pagination = () => (
  <div className="flex items-center justify-center gap-2 mt-20">
    <button className="w-10 h-10 rounded bg-gray-100 dark:bg-[#161616] border border-gray-300 dark:border-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-yellow-500/50 dark:hover:border-gray-600 transition-colors">
      <ChevronLeft size={16} />
    </button>

    <button className="w-10 h-10 rounded bg-yellow-500 dark:bg-yellow-400 text-black font-bold flex items-center justify-center shadow-lg shadow-yellow-500/20 dark:shadow-yellow-400/20">
      1
    </button>
    <button className="w-10 h-10 rounded bg-gray-100 dark:bg-[#161616] border border-gray-300 dark:border-white/5 text-gray-700 dark:text-gray-400 font-medium flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors hover:border-yellow-500/30">
      2
    </button>
    <button className="w-10 h-10 rounded bg-gray-100 dark:bg-[#161616] border border-gray-300 dark:border-white/5 text-gray-700 dark:text-gray-400 font-medium flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors hover:border-yellow-500/30">
      3
    </button>

    <span className="text-gray-500 dark:text-gray-600 px-2">...</span>

    <button className="w-10 h-10 rounded bg-gray-100 dark:bg-[#161616] border border-gray-300 dark:border-white/5 text-gray-700 dark:text-gray-400 font-medium flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors hover:border-yellow-500/30">
      12
    </button>

    <button className="w-10 h-10 rounded bg-gray-100 dark:bg-[#161616] border border-gray-300 dark:border-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-yellow-500/50 dark:hover:border-gray-600 transition-colors">
      <ChevronRight size={16} />
    </button>
  </div>
);

export default Pagination;
