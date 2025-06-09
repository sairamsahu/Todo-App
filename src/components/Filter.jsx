function Filter({ currentFilter, onFilterChange }) {
  return (
    <div className="flex gap-2 mb-4">
      {["all", "completed", "pending"].map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded ${
            currentFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;
