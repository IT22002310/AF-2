"use client"

import { useState, useEffect } from "react"

function FavoriteButton({ countryCode, countryName }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)

    if (loggedIn) {
      // Check if country is in favorites
      const favorites = JSON.parse(localStorage.getItem("favoriteCountries") || "[]")
      setIsFavorite(favorites.includes(countryCode))
    }
  }, [countryCode])

  const toggleFavorite = () => {
    if (!isLoggedIn) {
      alert("Please login to add countries to favorites")
      return
    }

    const favorites = JSON.parse(localStorage.getItem("favoriteCountries") || "[]")

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((code) => code !== countryCode)
      localStorage.setItem("favoriteCountries", JSON.stringify(updatedFavorites))
      setIsFavorite(false)
      alert(`${countryName} has been removed from your favorites`)
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, countryCode]
      localStorage.setItem("favoriteCountries", JSON.stringify(updatedFavorites))
      setIsFavorite(true)
      alert(`${countryName} has been added to your favorites`)
    }
  }

  const buttonClass = isFavorite
    ? "px-4 py-2 rounded-md flex items-center bg-yellow-500 text-white"
    : "px-4 py-2 rounded-md flex items-center border"

  return (
    <button className={buttonClass} onClick={toggleFavorite}>
      <span className="mr-2">{isFavorite ? "⭐" : "☆"}</span>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  )
}

export default FavoriteButton
