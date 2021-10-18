import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons"
import Head from "next/head"
import styled from "styled-components"
import StepCard from "../components/StepCard"
import Arrow, { ARROW_HEAD_WIDTH } from "../components/Arrow"
import StepEditPanel from "../components/StepEditPanel"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { Scenario } from "@iaf/api"

export const getServerSideProps: GetServerSideProps<
  Pick<Scenario, "name" | "steps">
> = async () => {
  const res = await fetch(`http://localhost:8080/scenario`)
  const { name, steps } = (await res.json()) as Scenario
  return { props: { name, steps } }
}

export default function Home({
  name,
  steps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // The ID of the step for which edit panel is open.
  // If edit panel is closed for all steps, editPanelStepId would be null
  const [editPanelStepId, setEditPanelStepId] = useState<string | null>(null)

  const closeEditPanel = () => {
    setEditPanelStepId(null)
  }

  const handleClickStep = (id: string) => {
    if (editPanelStepId === id) {
      closeEditPanel()
    } else {
      setEditPanelStepId(id)
    }
  }

  return (
    <>
      <Head>
        <title>Autify - Frontend Interview Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>{name}</h1>
        <p>Total steps: {steps.length}</p>
        <Wrapper>
          {steps.map((step, idx) => (
            <StepWrapper key={step.id}>
              <StepCardWrapper>
                <StepCard
                  step={step}
                  stepNumber={idx + 1}
                  onClick={() => handleClickStep(step.id)}
                />
                <ArrowWrapper>
                  <Arrow />
                </ArrowWrapper>
              </StepCardWrapper>
              {/* Show the edit panel only if editPanelStepId is equal to the step's id */}
              {step.id === editPanelStepId && (
                <StepEditPanelWrapper
                  data-testid={`edit-panel-wrapper-${step.id}`}
                >
                  <StepEditPanel step={step} closeEditPanel={closeEditPanel} />
                </StepEditPanelWrapper>
              )}
            </StepWrapper>
          ))}
          <FinishCardWrapper>
            <FinishCard>
              <FontAwesomeIcon icon={faFlagCheckered} />
              Finish
            </FinishCard>
          </FinishCardWrapper>
        </Wrapper>
      </Main>
    </>
  )
}

const Main = styled.main`
  padding: 2.5rem 5rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ARROW_WIDTH = "3.25rem"
const StepWrapper = styled.div`
  margin: 1.25rem calc(${ARROW_WIDTH} - ${ARROW_HEAD_WIDTH}) 0 0;
  display: flex;
  flex-direction: column;
`
const StepCardWrapper = styled.div`
  display: flex;
  position: relative;
`
const StepEditPanelWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 8rem;
`
const ArrowWrapper = styled.div`
  position: absolute;
  right: 0;
  transform: translate(100%, -50%);
  top: 50%;
  width: ${ARROW_WIDTH};
`
const FinishCardWrapper = styled(StepCardWrapper)`
  display: flex;
  align-items: center;
  margin: 1.25rem calc(${ARROW_WIDTH} - ${ARROW_HEAD_WIDTH}) 0 0;
  height: 7rem;
`
const FinishCard = styled.div`
  background: #ffffff;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  svg {
    margin-right: 0.25rem;
  }
`
