import React from "react"
import { render } from "@testing-library/react"
import Index from "./index"

test("renders finish card", () => {
  const { getByText } = render(<Index />)
  const finishCardElement = getByText(/Finish/i)
  expect(finishCardElement).toBeInTheDocument()
})
