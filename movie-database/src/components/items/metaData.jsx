const MetadataItem = ({ label, value, isHighlight }) => (
  <div className="mb-6">
    <h4 className="text-yellow-500/80 text-[10px] font-bold uppercase tracking-wider mb-1">
      {label}
    </h4>
    <p
      className={`text-lg font-medium ${
        isHighlight ? "text-yellow-400" : "text-white"
      }`}
    >
      {value}
    </p>
  </div>
);
export default MetadataItem;
