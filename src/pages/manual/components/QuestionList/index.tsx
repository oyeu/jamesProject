import React from "react"
import RichText from "../../../../components/RichText"
import { Accordion, Card } from "react-bootstrap"
import "./index.css"

const QuestionList = ({ title, questions }: any) => {
  return (
    <section className="question-list-wrapper">
      <div className="q-list-title">
        <RichText render={title} />
      </div>
      <Accordion className="questions-accordion">
        {questions?.map((qItem: any) => {
          return (
            <Card key={qItem.question[0].text}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={qItem.question[0].text}
              >
                <RichText render={qItem.question} />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={qItem.question[0].text}>
                <Card.Body>
                  <RichText render={qItem.answer} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )
        })}
      </Accordion>
    </section>
  )
}

export default QuestionList
