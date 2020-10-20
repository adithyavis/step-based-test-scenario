import { NextApiRequest, NextApiResponse } from "next"
import data, { StepGroup } from "./data"

export default function stepGroupApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<StepGroup>
): void {
  const stepGroup = data[req.query.id as string]
  if (stepGroup) {
    res.status(200).json(stepGroup)
  } else {
    res.status(404).end()
  }
}
