"use client"

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 w-full px-4 py-2 border rounded-md"
      />
    </div>
  )
}

export default SearchBar
