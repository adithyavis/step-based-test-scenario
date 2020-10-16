import { Keyword, Step } from "../scenario"

export type StepGroup = {
  id: string
  name: string
  steps: Step[]
}

export default {
  "1": {
    id: "1",
    name: "Step Group A",
    steps: [
      {
        id: "11",
        keyword: Keyword.Visit,
        value: "http://example.com/",
      },
      { id: "12", keyword: Keyword.InputText, value: "test" },
      { id: "13", keyword: Keyword.ClickElement, value: "" },
    ],
  },
  "2": {
    id: "2",
    name: "Step Group B",
    steps: [
      {
        id: "21",
        keyword: Keyword.Visit,
        value: "http://example.com/",
      },
      { id: "22", keyword: Keyword.ClickElement, value: "" },
      { id: "23", keyword: Keyword.InputText, value: "test" },
    ],
  },
} as Record<string, StepGroup>
