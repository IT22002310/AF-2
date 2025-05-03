"use client"
import { render, screen, fireEvent } from "@testing-library/react"
import CountryCard from "../components/CountryCard"

describe("CountryCard Component", () => {
  const mockCountry = {
    name: {
      common: "Test Country",
    },
    flags: {
      svg: "https://test.com/flag.svg",
      alt: "Flag of Test Country",
    },
    population: 1000000,
    region: "Test Region",
    capital: ["Test Capital"],
  }

  const mockOnClick = jest.fn()

  it("renders country information correctly", () => {
    render(<CountryCard country={mockCountry} onClick={mockOnClick} />)

    // Check if country name is displayed
    expect(screen.getByText("Test Country")).toBeInTheDocument()

    // Check if population is displayed with formatting
    expect(screen.getByText(/1,000,000/)).toBeInTheDocument()

    // Check if region is displayed
    expect(screen.getByText(/Test Region/)).toBeInTheDocument()

    // Check if capital is displayed
    expect(screen.getByText(/Test Capital/)).toBeInTheDocument()
  })

  it("calls onClick handler when clicked", () => {
    render(<CountryCard country={mockCountry} onClick={mockOnClick} />)

    // Find the card and click it
    const card = screen.getByText("Test Country").closest("div")
    fireEvent.click(card)

    // Check if onClick was called
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it("handles missing capital gracefully", () => {
    const countryWithoutCapital = {
      ...mockCountry,
      capital: undefined,
    }

    render(<CountryCard country={countryWithoutCapital} onClick={mockOnClick} />)

    // Check if N/A is displayed for capital
    expect(screen.getByText(/N\/A/)).toBeInTheDocument()
  })
})
