"use client"

function CountryCard({ country, onClick }) {
  return (
    <div
      className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col card"
      onClick={onClick}
    >
      <div className="relative h-40 w-full">
        <img
          src={country.flags.svg || country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 pb-2">
        <h2 className="font-bold text-lg truncate">{country.name.common}</h2>
      </div>
      <div className="p-4 pt-0 flex-grow">
        <div className="space-y-1">
          <p>
            <span className="font-medium">Population:</span> {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-medium">Capital:</span> {country.capital?.[0] || "N/A"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
