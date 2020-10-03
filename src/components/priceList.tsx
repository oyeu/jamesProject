import React from "react"
import RichText from "./RichText"
import styled from "styled-components"
import PriceItem from "./priceItem"

const PriceListWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;

  > div:last-child {
    display: flex;
  }
`

const PriceList = ({ title, prices }: any) => {
  return (
    <PriceListWrapper>
      <RichText render={title} />
      <div>
        {prices.map((price: any, i: any) => {
          return (
            <PriceItem
              key={i}
              priceTitle={price.pricelist_title}
              priceDescription={price.pricelist_description}
              recommended={price.price_type === "Recommended"}
            />
          )
        })}
      </div>
    </PriceListWrapper>
  )
}

export default PriceList
