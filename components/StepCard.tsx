import styled from "styled-components"
import { Keyword, Step } from "../pages/api/scenario"

export default function StepCard({
  step,
  stepNumber,
}: {
  step: Step
  stepNumber: number
}) {
  return (
    <Wrapper>
      <StepNumber>{stepNumber}</StepNumber>
      {getStepCardText(step)}
    </Wrapper>
  )
}

function getStepCardText(step: Step) {
  switch (step.keyword) {
    case Keyword.Visit:
      return `Visit "${step.value}"`
    case Keyword.InputText:
      return `Input "${step.value}"`
    case Keyword.ClickElement:
      return "Click element"
    default:
      return "Unknown error"
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 11.25rem;
  height: 7rem;
  border-radius: 0.25rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0.125rem 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8125rem;
  word-break: break-all;
  padding: 0.75rem;
  text-align: center;
`
const StepNumber = styled.div`
  padding: 0.125rem 0.25rem;
  min-width: 1.25rem;
  border-radius: 0.25rem;
  background-color: #333333;
  line-height: 1rem;
  font-size: 0.875rem;
  color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`
