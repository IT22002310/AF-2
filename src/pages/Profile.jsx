"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import CountryCard from "../components/CountryCard"

function ProfilePage() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [favoriteCountries, setFavoriteCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    const userData = JSON.parse(localStorage.getItem("user") || "{}")

    if (!isLoggedIn) {
      navigate("/login")
      return
    }

    setUser(userData)

    // Get favorite countries from localStorage
    const favorites = JSON.parse(localStorage.getItem("favoriteCountries") || "[]")

    // Fetch details for favorite countries
    const fetchFavoriteCountries = async () => {
      if (favorites.length === 0) {
        setIsLoading(false)
        return
      }

      try {
        const countriesData = []

        for (const code of favorites) {
          const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
          if (response.ok) {
            const data = await response.json()
            countriesData.push(data[0])
          }
        }

        setFavoriteCountries(countriesData)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching favorite countries:", error)
        setIsLoading(false)
      }
    }

    fetchFavoriteCountries()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("user")
    navigate("/login")
  }

  const handleCountryClick = (countryCode) => {
    navigate(`/country/${countryCode}`)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <p>Loading profile...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="border rounded-lg shadow-md p-6">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                  <span className="text-2xl">👤</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-center">{user?.name || user?.email}</h2>
              <p className="text-center text-gray-500">{user?.email}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-2">🌎</span>
                <span>Favorite Countries: {favoriteCountries.length}</span>
              </div>
            </div>
            <div className="mt-6">
              <button
                className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center justify-center"
                onClick={handleLogout}
              >
                <span className="mr-2">🚪</span>
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="mr-2">⭐</span>
            Favorite Countries
          </h2>

          {favoriteCountries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {favoriteCountries.map((country) => (
                <CountryCard key={country.cca3} country={country} onClick={() => handleCountryClick(country.cca3)} />
              ))}
            </div>
          ) : (
            <div className="border rounded-lg shadow-md bg-gray-50 p-6">
              <div className="py-8 text-center">
                <p className="text-gray-500 mb-4">You haven't added any favorite countries yet.</p>
                <Link to="/">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center mx-auto">
                    <span className="mr-2">🌎</span>
                    Explore Countries
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
