import React from "react"
import styled from "styled-components"
import RichText from "../RichText"

const PriceItemWrapper = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    margin: 0 10px;
    background: #eee;
    padding: 10px;
    color:black;
    position: relative;
`

const Button = styled.button`
    margin: 10px auto;
    background: #000f38;
    color:white;
`

const PriceItem = ({ price, title,pricexxx}: any) => {
  return (
    <PriceItemWrapper>
      <RichText render={title} />
      <div>${price} / ${pricexxx} con canales XXX</div>
      <Button>
          Quiero este plan
      </Button>
    </PriceItemWrapper>
  )
}

export default PriceItem
