export enum Keyword {
  Visit,
  InputText,
}
export type Step = { id: string; keyword: Keyword; value: string }
export type Scenario = {
  name: string
  steps: Step[]
}
