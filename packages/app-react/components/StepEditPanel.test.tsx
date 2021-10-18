import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import StepEditPanel from "./StepEditPanel"
import { Keyword } from "@iaf/api"

jest.mock("../utils/fetch", () => ({
  fetchEmail: jest.fn(async () => ({ address: "test@example.com" })),
}))

describe("edit panel type selector works properly", () => {
  test("renders appropriate type selector for keyword Visit", () => {
    const setSteps = jest.fn()
    const closeEditPanel = jest.fn()
    render(
      <StepEditPanel
        step={{ id: "1", keyword: Keyword.Visit, value: "http://example.com/" }}
        setSteps={setSteps}
        closeEditPanel={closeEditPanel}
      />
    )
    const typeSelector = screen.getByTestId("edit-panel-type-selector")
    expect(typeSelector).toHaveTextContent("Random email address")
  })

  test("renders appropriate type selector for keyword InputText", () => {
    const setSteps = jest.fn()
    const closeEditPanel = jest.fn()
    render(
      <StepEditPanel
        step={{ id: "1", keyword: Keyword.InputText, value: "test 1" }}
        setSteps={setSteps}
        closeEditPanel={closeEditPanel}
      />
    )
    const typeSelector = screen.getByTestId("edit-panel-type-selector")
    expect(typeSelector).toHaveTextContent("Given value")
  })
})

describe("edit panel dropdown works properly", () => {
  test("changes type selector to Visit and updates step keyword and value, on clicking dropdown item", () => {
    const setSteps = jest.fn()
    const closeEditPanel = jest.fn()
    render(
      <StepEditPanel
        step={{ id: "1", keyword: Keyword.Visit, value: "http://example.com/" }}
        setSteps={setSteps}
        closeEditPanel={closeEditPanel}
      />
    )
    const typeSelector = screen.getByTestId("edit-panel-type-selector")
    userEvent.click(typeSelector)
    const dropdownItem = screen.getByTestId("edit-panel-dropdown-item-1")
    userEvent.click(dropdownItem)
    expect(typeSelector).toHaveTextContent("Given value")
    expect(dropdownItem).not.toBeInTheDocument()
    expect(setSteps).toHaveBeenCalled()
  })

  test("changes type selector to InputText and updates step keyword and value, on clicking dropdown", async () => {
    const setSteps = jest.fn()
    const closeEditPanel = jest.fn()
    jest.mock("./StepEditPanel", () => ({
      fetchEmail: jest.fn(),
    }))
    render(
      <StepEditPanel
        step={{ id: "1", keyword: Keyword.InputText, value: "test 1" }}
        setSteps={setSteps}
        closeEditPanel={closeEditPanel}
      />
    )
    const typeSelector = screen.getByTestId("edit-panel-type-selector")
    userEvent.click(typeSelector)
    const dropdownItem = screen.getByTestId("edit-panel-dropdown-item-0")
    userEvent.click(dropdownItem)
    expect(typeSelector).toHaveTextContent("Random email address")
    expect(dropdownItem).not.toBeInTheDocument()
    await waitFor(() => expect(setSteps).toHaveBeenCalled())
  })
})

describe("edit panel input works properly", () => {
  test("renders appropriate input for keyword Visit", () => {
    const setSteps = jest.fn()
    const closeEditPanel = jest.fn()
    render(
      <StepEditPanel
        step={{ id: "1", keyword: Keyword.Visit, value: "http://example.com/" }}
        setSteps={setSteps}
        closeEditPanel={closeEditPanel}
      />
    )
    const input = screen.getByTestId("edit-panel-input")
    expect(input).toHaveValue("http://example.com/")
    expect(input).toBeDisabled()
  })

  test("renders appropriate input for keyword InputText", () => {
    const setSteps = jest.fn()
    const closeEditPanel = jest.fn()
    render(
      <StepEditPanel
        step={{ id: "1", keyword: Keyword.InputText, value: "test 1" }}
        setSteps={setSteps}
        closeEditPanel={closeEditPanel}
      />
    )
    const input = screen.getByTestId("edit-panel-input")
    expect(input).toHaveValue("test 1")
  })
  test("updates step value on changing input value", () => {
    const setSteps = jest.fn()
    const closeEditPanel = jest.fn()
    render(
      <StepEditPanel
        step={{ id: "1", keyword: Keyword.InputText, value: "test 1" }}
        setSteps={setSteps}
        closeEditPanel={closeEditPanel}
      />
    )
    const input = screen.getByTestId("edit-panel-input")
    userEvent.type(input, "test 2")
    expect(setSteps).toHaveBeenCalled()
  })
})
describe("edit panel close button works properly", () => {
  test("closes edit panel when the close button is clicked", () => {
    const setSteps = jest.fn()
    const closeEditPanel = jest.fn()
    render(
      <StepEditPanel
        step={{ id: "1", keyword: Keyword.InputText, value: "test 1" }}
        setSteps={setSteps}
        closeEditPanel={closeEditPanel}
      />
    )
    const button = screen.getByTestId("edit-panel-close-button")
    userEvent.click(button)
    expect(closeEditPanel).toHaveBeenCalled()
  })
})
