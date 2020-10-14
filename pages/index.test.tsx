import React from "react"
import { render } from "@testing-library/react"
import Index from "./index"

test("renders title", () => {
  const { getByText } = render(<Index />)
  const titleElement = getByText(/Welcome to/i)
  expect(titleElement).toBeInTheDocument()
})
