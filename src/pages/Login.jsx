"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("login")

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  // Register form state
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  // Form errors
  const [errors, setErrors] = useState({})

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegisterChange = (e) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      // In a real app, you would validate credentials with a backend
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("user", JSON.stringify({ email: loginData.email }))
      setIsLoading(false)
      navigate("/")
    }, 1000)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate form
    const newErrors = {}
    if (!registerData.name) newErrors.name = "Name is required"
    if (!registerData.email) newErrors.email = "Email is required"
    if (!registerData.password) newErrors.password = "Password is required"
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    // Simulate registration process
    setTimeout(() => {
      // In a real app, you would send registration data to a backend
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: registerData.name,
          email: registerData.email,
        }),
      )
      setIsLoading(false)
      navigate("/")
    }, 1000)
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-md border rounded-lg shadow-md p-6">
        <div className="space-y-1 mb-6">
          <div className="flex justify-center mb-4">
            <span className="text-4xl">🌎</span>
          </div>
          <h2 className="text-2xl text-center font-bold">Welcome to CountryScope</h2>
          <p className="text-center text-gray-500">Sign in to your account or create a new one</p>
        </div>

        <div className="w-full">
          <div className="flex border-b mb-4">
            <button
              className={`flex-1 py-2 text-center ${activeTab === "login" ? "border-b-2 border-blue-500 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-center ${activeTab === "register" ? "border-b-2 border-blue-500 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>

          {activeTab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="register-email" className="block font-medium">
                  Email
                </label>
                <input
                  id="register-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="register-password" className="block font-medium">
                  Password
                </label>
                <input
                  id="register-password"
                  name="password"
                  type="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="block font-medium">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Register"}
              </button>
            </form>
          )}
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
            Continue as guest
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
