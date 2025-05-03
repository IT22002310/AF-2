"use client"

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

function RegionFilter({ selectedRegion, setSelectedRegion }) {
  return (
    <select
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}
      className="w-full px-4 py-2 border rounded-md appearance-none"
    >
      <option value="all">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  )
}

export default RegionFilter
