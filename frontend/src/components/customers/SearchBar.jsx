function SearchBar({
  search,
  setSearch,
  setShowForm,
}) {
  return (
    <div className="customer-header">
      <input
        type="text"
        placeholder="Search customer..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="add-btn"
        onClick={() => setShowForm(true)}
      >
        + Add Customer
      </button>
    </div>
  );
}

export default SearchBar;