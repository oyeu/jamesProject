import React from "react"
import RichText from "../../../../../../components/RichText"

const QuestionItem = ({ question, answer }: any) => {
  return (
    <div>
      <RichText render={question} />
      <RichText render={answer} />
    </div>
  )
}

export default QuestionItem
