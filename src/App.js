import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CountryDetail from "./pages/CountryDetail"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<CountryDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App

