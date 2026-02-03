import { Play, ChevronRight } from "lucide-react";
export const SectionHeader = ({ title, subtitle, hasViewAll = true }) => (
  <div className="flex justify-between items-end mb-6 px-8 md:px-16">
    <div>
      {subtitle && (
        <p className="text-yellow-500 text-xs font-bold uppercase tracking-wider mb-1">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    {hasViewAll && (
      <button className="text-yellow-500 text-xs font-bold uppercase flex items-center gap-1 hover:text-yellow-400 transition">
        View All <ChevronRight size={14} />
      </button>
    )}
  </div>
);

export const ScrollRow = ({ children }) => (
  <div className="flex overflow-x-auto gap-4 px-8 md:px-16 pb-8 scrollbar-hide">
    {children}
  </div>
);

export const PosterCard = ({ item }) => (
  <div className="flex-none w-[160px] group cursor-pointer">
    <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-3">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
    </div>
    <h3 className="text-white text-sm font-medium truncate group-hover:text-yellow-500 transition">
      {item.title}
    </h3>
  </div>
);
export const LandscapeCard = ({ item }) => (
  <div className="flex-none w-[240px] group cursor-pointer">
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
        {/* Date badge at bottom left */}
        {item.releaseDate && (
          <div className="mb-1">
            <div className="bg-yellow-500 px-2.5 py-0.5 rounded-md inline-block">
              <span className="text-black text-xs font-black uppercase tracking-widest">
                {item.releaseDate}
              </span>
            </div>
          </div>
        )}

        {/* Title below date */}
        <h3 className="text-white text-sm font-bold uppercase leading-tight line-clamp-2">
          {item.title}
        </h3>
      </div>
    </div>
  </div>
);
export const CategoryHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-6 px-8 md:px-16 mt-12">
    <div className="h-8 w-1 bg-yellow-500 rounded-full"></div>
    <h2 className="text-3xl font-black text-white uppercase tracking-wide">
      {title}
    </h2>
  </div>
);
export const PersonCard = ({ item }) => (
  <div className="flex-none w-[100px] flex flex-col items-center group cursor-pointer">
    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent group-hover:border-yellow-500 transition mb-2">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <span className="text-gray-400 text-xs text-center group-hover:text-white transition">
      {item.name}
    </span>
  </div>
);
