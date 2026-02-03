export const EpisodeCard = ({ ep }) => (
  <div className="flex flex-col md:flex-row gap-6 mb-10 group cursor-pointer border-b border-gray-800 pb-10 last:border-0">
    {/* Thumbnail Container */}
    <div className="relative w-full md:w-64 h-36 flex-shrink-0">
      <div className="w-full h-full rounded-lg overflow-hidden border border-white/5">
        <img
          src={ep.img}
          alt={ep.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
      </div>
      {/* Duration Badge */}
      <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
        {ep.duration}
      </span>
    </div>

    {/* Content Container */}
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-1">
          <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider">
            Episode {ep.number}
          </span>
          <span className="text-gray-400 text-xs font-medium">{ep.date}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition">
          {ep.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {ep.desc}
        </p>
      </div>

      {/* Progress Bar Section */}
      {ep.progress > 0 && (
        <div className="mt-4">
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-yellow-500"
              style={{ width: `${ep.progress}%` }}
            />
          </div>
          <span className="text-[10px] font-bold uppercase text-yellow-500 tracking-widest">
            {ep.status}
          </span>
        </div>
      )}
    </div>
  </div>
);
export const MetadataBlock = ({ label, value, icon: Icon }) => (
  <div className="mb-6">
    <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">
      {label}
    </h4>
    <div className="flex items-center gap-2 text-white font-medium">
      {Icon && <Icon size={14} className="text-yellow-500" />}
      <span className="text-sm">{value}</span>
    </div>
  </div>
);
