"use client"

import { createContext, useState, useContext, useEffect } from "react"

// Create context
const ThemeContext = createContext()

// Theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  // Update theme in localStorage and DOM when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext)
}
