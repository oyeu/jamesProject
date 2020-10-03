import React from "react"
import RichText from "./RichText"
import styled from "styled-components"

interface Props {
  recommended: boolean
}

const PriceItemWrapper = styled.div<Props>`
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 10px;
  background: ${p => (p.recommended ? "orange" : "#eee")};
  padding: 10px;
  color: ${p => (p.recommended ? "white" : "black")};
  position: relative;

  .recommended {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    background: green;
    color: white;
  }

  .description {
    margin-top: 20px;
  }

  .price {
    text-align: center;
    font-size: 30px;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;

    .duration {
      font-size: 16px;
    }
  }
`

const PriceItem = ({ priceTitle, priceDescription, recommended }: any) => {
  return (
    <PriceItemWrapper recommended={recommended}>
      {!!recommended && <div className="recommended">Recommended</div>}
      <RichText render={priceTitle} />
      <div className="price">
        $1000 <span className="duration"> per month</span>
      </div>
      <div className="description">
        <RichText render={priceDescription} />
      </div>
    </PriceItemWrapper>
  )
}

export default PriceItem
