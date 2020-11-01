import React from "react"
import RichText from "../../../../components/RichText"
import PriceItem from "./components/PlansPriceItem"
import "./index.css"

const PriceList = ({ title, priceItems }: any) => {
  return (
    <section className="price-list-wrapper">
      <RichText render={title} />

      <div className="price-list">
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
    </section>
  )
}

export default PriceList
