import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons"
import Head from "next/head"
import styled from "styled-components"
import StepCard from "../components/StepCard"
import Arrow, { ARROW_HEAD_WIDTH } from "../components/Arrow"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>Scenario Editor</h1>
        <p>Total steps: {20}</p>
        <Wrapper>
          {Array.from({ length: 20 }).map((_, idx) => (
            <StepCardWrapper key={idx}>
              <StepCard stepNumber={idx + 1} />
              <ArrowWrapper>
                <Arrow />
              </ArrowWrapper>
            </StepCardWrapper>
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
const StepCardWrapper = styled.div`
  position: relative;
  margin: 1.25rem calc(${ARROW_WIDTH} - ${ARROW_HEAD_WIDTH}) 0 0;
  display: flex;
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
`
const FinishCard = styled.div`
  background: #ffffff;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  svg {
    margin-right: 0.25rem;
  }
`
