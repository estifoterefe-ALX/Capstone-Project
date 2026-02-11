const MetadataItem = ({ label, value, isHighlight }) => (
  <div className="mb-6">
    <h4 className="text-yellow-500 dark:text-yellow-400/80 text-[10px] font-bold uppercase tracking-wider mb-1">
      {label}
    </h4>
    <p
      className={`text-lg font-medium ${
        isHighlight
          ? "text-yellow-500 dark:text-yellow-400"
          : "text-gray-900 dark:text-white"
      }`}
    >
      {value}
    </p>
  </div>
);
export default MetadataItem;
