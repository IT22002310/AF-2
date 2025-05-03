"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CountryCard from "../components/CountryCard"
import SearchBar from "../components/SearchBar"
import RegionFilter from "../components/RegionFilter"
import LanguageFilter from "../components/LanguageFilter"

function Home() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [allLanguages, setAllLanguages] = useState([])
  const navigate = useNavigate()

  // Fetch all countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setCountries(data)
        setFilteredCountries(data)

        // Extract all languages for the language filter
        const languages = new Set()
        data.forEach((country) => {
          if (country.languages) {
            Object.values(country.languages).forEach((lang) => {
              languages.add(lang)
            })
          }
        })
        setAllLanguages(Array.from(languages).sort())

        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching countries:", error)
        setIsLoading(false)
      }
    }

    fetchCountries()
  }, [])

  // Filter countries based on search term, region, and language
  useEffect(() => {
    let result = countries

    // Filter by search term
    if (searchTerm) {
      result = result.filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    // Filter by region
    if (selectedRegion && selectedRegion !== "all") {
      result = result.filter((country) => country.region === selectedRegion)
    }

    // Filter by language
    if (selectedLanguage && selectedLanguage !== "all") {
      result = result.filter((country) => {
        if (!country.languages) return false
        return Object.values(country.languages).some((lang) => lang === selectedLanguage)
      })
    }

    setFilteredCountries(result)
  }, [searchTerm, selectedRegion, selectedLanguage, countries])

  const handleCountryClick = (countryCode) => {
    navigate(`/country/${countryCode}`)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Countries Explorer</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-1/2">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="flex gap-4 w-full md:w-1/2">
          <RegionFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
          <LanguageFilter
            languages={allLanguages}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="h-8 w-8 animate-spin text-gray-500">Loading...</div>
        </div>
      ) : filteredCountries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} onClick={() => handleCountryClick(country.cca3)} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-16">
          <p className="text-xl">No countries found matching your criteria</p>
        </div>
      )}
    </main>
  )
}

export default Home
