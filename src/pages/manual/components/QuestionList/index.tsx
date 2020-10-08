import React from 'react'
import styled from 'styled-components'
import RichText from "../../../../components/RichText"
import {Accordion, Card} from 'react-bootstrap'

const QuestionListWrapper = styled.section`
    max-width:1200px;
    margin:0 auto;
    color:black;
    padding-bottom:40px;

    .q-list-title {
        text-align: center;
        color:white;
    }
`

const QuestionList = ({title,questions}:any) => {
    return(
        <QuestionListWrapper>
            <div className='q-list-title'>
                <RichText render={title}/>
            </div>
            <Accordion>
                {questions.map((qItem:any, i:any)=>{
                    return(
                        <Card key={i}>
                            <Accordion.Toggle as={Card.Header} eventKey={i}>
                                <RichText render={qItem.question}/>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                                <RichText render={qItem.answer}/>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        </QuestionListWrapper>
    )
}

export default QuestionList