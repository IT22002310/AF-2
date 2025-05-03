"use client"

import { Link } from "react-router-dom"
import { useTheme } from "./ThemeProvider"

function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b" style={{ borderColor: "var(--card-border)" }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span>🌎</span>
          <span>Countries Explorer</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          <button className="p-2 rounded-full" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "☀️" : "🌙"}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
