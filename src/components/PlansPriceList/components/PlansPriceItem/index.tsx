import React from "react"
import styled from "styled-components"
import RichText from "../../../RichText"

const PriceItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 10px;
  background: #eee;
  padding: 10px;
  color: black;
  position: relative;
`

const Button = styled.button`
  margin: 10px auto;
  background: #000f38;
  color: white;
`

const PriceItem = ({ price, title, pricexxx }: any) => {
  return (
    <PriceItemWrapper>
      <RichText render={title} />
      <div>
        ${price} / ${pricexxx} con canales XXX
      </div>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="2FL8YUDK5RTT8" />
        <input
          type="image"
          src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img
          alt=""
          src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </PriceItemWrapper>
  )
}

export default PriceItem
