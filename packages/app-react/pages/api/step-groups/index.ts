import { NextApiRequest, NextApiResponse } from "next"
import data, { StepGroup } from "./data"

type LeanStepGroup = Pick<StepGroup, "id" | "name">

export function getStepGroups() {
  return Object.values(data).map(({ id, name }) => ({ id, name }))
}

export default function stepGroupsApiHandler(
  _req: NextApiRequest,
  res: NextApiResponse<LeanStepGroup[]>
): void {
  res.status(200).json(getStepGroups())
}
