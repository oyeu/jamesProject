import React from "react"
import RichText from "../RichText"
import styled from "styled-components"
import PriceItem from "./components/PlansPriceItem"

const PriceListWrapper = styled.section`
  text-align: center;
  margin: 40px auto;

  > div:last-child {
    display: flex;
  }
`

const PriceList = ({ title, priceItems }: any) => {
  return (
    <PriceListWrapper>
      <RichText render={title} />

      <div className="">
        {priceItems.map((priceItem: any, i: number) => {
          return (
            <PriceItem
              key={i}
              price={priceItem.price}
              title={priceItem.pricelist_title}
              pricexxx={priceItem.pricexxx}
              xxxBtnCode={priceItem.xxx_button_code}
              normalBtnCode={priceItem.normal_button_code}
            />
          )
        })}
      </div>
    </PriceListWrapper>
  )
}

export default PriceList
