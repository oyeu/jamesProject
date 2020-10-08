import React from "react"
import styled from "styled-components"
import RichText from "../../../../../../components/RichText"

const QuestionItemWrapper = styled.div``
const QuestionItem = ({ question, answer }: any) => {
  return (
    <QuestionItemWrapper>
      <RichText render={question} />
      <RichText render={answer} />
    </QuestionItemWrapper>
  )
}

export default QuestionItem
