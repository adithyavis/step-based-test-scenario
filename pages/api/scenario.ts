// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

export enum Keyword {
  Visit,
  InputText,
  ClickElement,
}

export type Step = { id: string; keyword: Keyword; value: string }
type Scenario = {
  name: string
  steps: Step[]
}

export function getScenario() {
  return {
    name: "Scenario A",
    steps: [
      {
        id: "1",
        keyword: Keyword.Visit,
        value: "http://example.com/",
      },
      { id: "2", keyword: Keyword.InputText, value: "test" },
      { id: "3", keyword: Keyword.ClickElement, value: "" },
      { id: "4", keyword: Keyword.InputText, value: "test2" },
      { id: "5", keyword: Keyword.ClickElement, value: "" },
      { id: "6", keyword: Keyword.InputText, value: "test3" },
      { id: "7", keyword: Keyword.ClickElement, value: "" },
      { id: "8", keyword: Keyword.InputText, value: "test4" },
      { id: "9", keyword: Keyword.ClickElement, value: "" },
      { id: "10", keyword: Keyword.InputText, value: "test5" },
      { id: "11", keyword: Keyword.ClickElement, value: "" },
      { id: "12", keyword: Keyword.InputText, value: "test6" },
      { id: "13", keyword: Keyword.ClickElement, value: "" },
    ],
  }
}

export default (_req: NextApiRequest, res: NextApiResponse<Scenario>): void => {
  res.status(200).json(getScenario())
}
