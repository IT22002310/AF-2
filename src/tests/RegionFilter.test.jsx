import { render, screen, fireEvent } from "@testing-library/react"
import RegionFilter from "../components/RegionFilter"

describe("RegionFilter Component", () => {
  it("renders the region filter correctly", () => {
    const mockSetSelectedRegion = jest.fn()
    render(<RegionFilter selectedRegion="" setSelectedRegion={mockSetSelectedRegion} />)

    // Check if the filter is rendered
    const filterSelect = screen.getByText("Filter by Region")
    expect(filterSelect).toBeInTheDocument()
  })

  it("displays all region options", () => {
    const mockSetSelectedRegion = jest.fn()
    render(<RegionFilter selectedRegion="" setSelectedRegion={mockSetSelectedRegion} />)

    // Open the select dropdown
    const selectElement = screen.getByRole("combobox")

    // Check if all options are available in the DOM
    expect(selectElement).toHaveDisplayValue("Filter by Region")

    // Check that the select has the correct number of options
    expect(selectElement.children.length).toBe(6) // 5 regions + "Filter by Region"
  })

  it("calls setSelectedRegion when a region is selected", () => {
    const mockSetSelectedRegion = jest.fn()
    render(<RegionFilter selectedRegion="" setSelectedRegion={mockSetSelectedRegion} />)

    // Get the select element and change its value
    const selectElement = screen.getByRole("combobox")
    fireEvent.change(selectElement, { target: { value: "Africa" } })

    // Check if setSelectedRegion was called with the selected region
    expect(mockSetSelectedRegion).toHaveBeenCalledWith("Africa")
  })
})
