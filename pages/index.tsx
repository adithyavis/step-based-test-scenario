import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons"
import Head from "next/head"
import styled from "styled-components"
import StepCard from "../components/StepCard"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Wrapper>
          {Array.from({ length: 20 }).map((_, idx) => (
            <StepCardWrapper key={idx}>
              <StepCard />
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
  padding: 5rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const StepCardWrapper = styled.div`
  margin: 1.25rem 2.5rem 0 0;
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
