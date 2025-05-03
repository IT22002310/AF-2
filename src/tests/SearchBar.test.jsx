import { render, screen, fireEvent } from "@testing-library/react"
import SearchBar from "../components/SearchBar"

describe("SearchBar Component", () => {
  it("renders the search input correctly", () => {
    const mockSetSearchTerm = jest.fn()
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} />)

    // Check if the search input is rendered
    const searchInput = screen.getByPlaceholderText("Search for a country...")
    expect(searchInput).toBeInTheDocument()
  })

  it("displays the current search term", () => {
    const mockSetSearchTerm = jest.fn()
    render(<SearchBar searchTerm="test" setSearchTerm={mockSetSearchTerm} />)

    // Check if the input value is set correctly
    const searchInput = screen.getByPlaceholderText("Search for a country...")
    expect(searchInput).toHaveValue("test")
  })

  it("calls setSearchTerm when input changes", () => {
    const mockSetSearchTerm = jest.fn()
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} />)

    // Find the input and change its value
    const searchInput = screen.getByPlaceholderText("Search for a country...")
    fireEvent.change(searchInput, { target: { value: "new search" } })

    // Check if setSearchTerm was called with the new value
    expect(mockSetSearchTerm).toHaveBeenCalledWith("new search")
  })
})
