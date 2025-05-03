"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import FavoriteButton from "../components/FavoriteButton"

function CountryDetail() {
  const [country, setCountry] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const { id } = params

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)

        if (!response.ok) {
          throw new Error("Country not found")
        }

        const data = await response.json()
        setCountry(data[0])
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching country details:", error)
        setError(error.message)
        setIsLoading(false)
      }
    }

    if (id) {
      fetchCountryDetail()
    }
  }, [id])

  const handleBackClick = () => {
    navigate(-1)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
        <p className="mb-6">{error}</p>
        <button className="px-4 py-2 border rounded-md flex items-center" onClick={handleBackClick}>
          <span className="mr-2">←</span> Go Back
        </button>
      </div>
    )
  }

  if (!country) {
    return null
  }

  // Extract country data
  const {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    languages,
    currencies,
    borders,
    area,
    timezones,
    continents,
  } = country

  return (
    <div className="container mx-auto px-4 py-8">
      <button className="px-4 py-2 border rounded-md flex items-center mb-8" onClick={handleBackClick}>
        <span className="mr-2">←</span> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-md">
          <img
            src={flags.svg || flags.png}
            alt={flags.alt || `Flag of ${name.common}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{name.common}</h1>
            <FavoriteButton countryCode={id} countryName={name.common} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <DetailItem label="Official Name" value={name.official} />
              <DetailItem label="Capital" value={capital?.join(", ") || "N/A"} />
              <DetailItem label="Population" value={population?.toLocaleString() || "N/A"} />
              <DetailItem label="Region" value={region || "N/A"} />
              <DetailItem label="Sub Region" value={subregion || "N/A"} />
              <DetailItem label="Area" value={area ? `${area.toLocaleString()} km²` : "N/A"} />
            </div>
            <div>
              <DetailItem label="Languages" value={languages ? Object.values(languages).join(", ") : "N/A"} />
              <DetailItem
                label="Currencies"
                value={
                  currencies
                    ? Object.values(currencies)
                        .map((c) => `${c.name} (${c.symbol})`)
                        .join(", ")
                    : "N/A"
                }
              />
              <DetailItem label="Timezones" value={timezones?.join(", ") || "N/A"} />
              <DetailItem label="Continent" value={continents?.join(", ") || "N/A"} />
            </div>
          </div>

          {borders && borders.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {borders.map((border) => (
                  <button
                    key={border}
                    className="px-3 py-1 border rounded-md text-sm"
                    onClick={() => navigate(`/country/${border}`)}
                  >
                    {border}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function DetailItem({ label, value }) {
  return (
    <div className="mb-3">
      <span className="font-semibold">{label}: </span>
      <span>{value}</span>
    </div>
  )
}

export default CountryDetail
