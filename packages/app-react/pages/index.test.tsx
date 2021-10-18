import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Index from "./index"
import { Keyword } from "@iaf/api"

test("renders finish card", () => {
  render(
    <Index
      name="Scenario A"
      steps={[
        { id: "1", keyword: Keyword.Visit, value: "http://example.com/" },
      ]}
    />
  )
  const finishCardElement = screen.getByText(/Finish/i)
  expect(finishCardElement).toBeInTheDocument()
})

test("toggles rendering of edit panel upon clicking step card", () => {
  render(
    <Index
      name="Scenario A"
      steps={[
        { id: "1", keyword: Keyword.Visit, value: "http://example.com/" },
      ]}
    />
  )
  const stepCard = screen.getByTestId("step-card-1")
  userEvent.click(stepCard)
  const editPanel = screen.getByTestId("edit-panel-wrapper-1")
  expect(editPanel).toBeInTheDocument()
  userEvent.click(stepCard)
  expect(editPanel).not.toBeInTheDocument()
})
