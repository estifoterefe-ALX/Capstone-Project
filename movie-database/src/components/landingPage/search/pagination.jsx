import { ChevronRight, ChevronLeft } from "lucide-react";
const Pagination = () => (
  <div className="flex items-center justify-center gap-2 mt-20">
    <button className="w-10 h-10 rounded bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition">
      <ChevronLeft size={16} />
    </button>

    <button className="w-10 h-10 rounded bg-yellow-500 text-black font-bold flex items-center justify-center shadow-lg shadow-yellow-500/20">
      1
    </button>
    <button className="w-10 h-10 rounded bg-[#161616] border border-white/5 text-gray-400 font-medium flex items-center justify-center hover:bg-white/10 transition">
      2
    </button>
    <button className="w-10 h-10 rounded bg-[#161616] border border-white/5 text-gray-400 font-medium flex items-center justify-center hover:bg-white/10 transition">
      3
    </button>

    <span className="text-gray-600 px-2">...</span>

    <button className="w-10 h-10 rounded bg-[#161616] border border-white/5 text-gray-400 font-medium flex items-center justify-center hover:bg-white/10 transition">
      12
    </button>

    <button className="w-10 h-10 rounded bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition">
      <ChevronRight size={16} />
    </button>
  </div>
);
export default Pagination;
