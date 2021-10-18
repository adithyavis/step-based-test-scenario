import { useState, ChangeEvent } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Step, Keyword } from "@iaf/api"

const allTypes = [Keyword.InputText, Keyword.Visit]

export default function StepEditPanel({
  step,
  closeEditPanel,
}: {
  step: Step
  closeEditPanel: () => void
}) {
  // type is the keyword of the current step, either Visit or InputValue
  const [type, setType] = useState<Keyword>(step.keyword)
  // If shouldShowTypesDropdown is true, the dropdown will be shown
  const [shouldShowTypesDropdown, toggleShowTypesDropdown] = useState<boolean>(
    false
  )

  const handleClickTypeSelector = () => {
    // Toggle the show state of the dropdown
    toggleShowTypesDropdown((prevVal) => !prevVal)
  }
  const handleClickDropdownItem = async (newType: Keyword) => {
    // Close the dropdown
    toggleShowTypesDropdown(false)
    if (newType === type) {
      return
    }
    setType(newType)
  }
  const handleChangeInput = () => {}
  const handleClickCloseButton = () => {
    closeEditPanel()
  }
  return (
    <>
      <Arrowhead />
      <Wrapper>
        <Title>Input Text</Title>
        <InputWrapper>
          <TypeSelector onClick={handleClickTypeSelector}>
            {getTypeText(type)}
          </TypeSelector>
          <>
            {shouldShowTypesDropdown && (
              <TypesDropdown>
                {allTypes.map((type: Keyword) => (
                  <TypesDropdownItem
                    key={type}
                    onClick={() => {
                      handleClickDropdownItem(type)
                    }}
                  >
                    {getTypeText(type)}
                  </TypesDropdownItem>
                ))}
              </TypesDropdown>
            )}
          </>
          <Input
            value={step.value}
            disabled={type === Keyword.Visit}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <CloseButton onClick={handleClickCloseButton}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </CloseButton>
      </Wrapper>
    </>
  )
}

function getTypeText(type: Keyword) {
  switch (type) {
    case Keyword.InputText:
      return `Given value`
    case Keyword.Visit:
      return `Random email address`
    default:
      return "Unknown"
  }
}

const Arrowhead = styled.div`
  width: 0;
  height: 0;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1.25rem solid white;
  margin-top: 0.5rem;
`

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
  height: 7.5rem;
  background: white;
  padding: 0 3rem;
  z-index: 1;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`
const InputWrapper = styled.div`
  display: flex;
  position: relative;
  font-size: 0.8125rem;
  border: 1px solid #6c757d;
  border-radius: 0.2rem;
  height: 2.5rem;
`
const TypeSelector = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #6c757d;
  color: white;
  cursor: pointer;
`
const TypesDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  border: 1px solid #d8d8d8;
  border-radius: 0.2rem;
  padding: 0.25rem 0;
  margin: 5px 0;
  color: #555555;
  background: white;
`
const TypesDropdownItem = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  &:hover {
    background: #f7f7f7;
  }
`
const Input = styled.input`
  flex: 1;
  outline: 0;
  border: 0;
  padding: 1rem;
  border-radius: 0 0.2rem 0.2rem 0rem;
  margin: 0.05rem;
  &:focus {
    border: 0.05rem solid #007bff;
    margin: 0;
    -webkit-box-shadow: 0px 0px 0.1rem 0.2rem rgba(0, 123, 255, 0.3);
    -moz-box-shadow: 0px 0px 0.1rem 0.2rem rgba(0, 123, 255, 0.3);
    box-shadow: 0px 0px 0.1rem 0.2rem rgba(0, 123, 255, 0.3);
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  transform: translateY(-50%);
  border: 1px solid #d7d7d7;
  border-radius: 50%;
  background: white;
  color: #6c757d;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
`
