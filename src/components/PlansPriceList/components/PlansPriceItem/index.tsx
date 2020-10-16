import React, { Fragment, Component } from "react"
import Dropdown from "react-bootstrap/esm/Dropdown"
import styled from "styled-components"
import RichText from "../../../RichText"
import "./index.css"

const PriceItemWrapper = styled.div`
  margin: 0 10px;
  background: #eee;
  padding: 10px;
  color: #000f38;
  position: relative;
  border-radius: 10px;
  border: solid;
  border-color: #ca0603;

  :hover {
    border-color: #dcda15;
  }

  .list {
    .plan-options {
      padding: 10px 0px;

      .list-header {
        background: #000f38;
      }
    }
  }

  .buttons-container {
    display:flex;
    margin: 0 auto;
    padding-top:10px;

    div {
      border:solid;
      border-width:1px;
      border-style:inset;


      form {
        margin:0;
        height:56px;
      }
    }

    p {
      align-text:center;
      font-weight:bold;
    }
  }
`

const PriceItem = ({ price, title, pricexxx }: any) => {
  return (
    <PriceItemWrapper>
      <RichText render={title} />
      <div className='buttons-container'>
        <div>
          <p>{price}$ sin XXX</p>
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
        </div>
        <div>
          <p>{pricexxx}$ con XXX</p>
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
        </div>
      </div>
      
    </PriceItemWrapper>
  )
}

const renderTypeSelector = () => {
  return (
    <div className="type-list">
      <label>Escoge el tipo</label>
      <select
        onChange={e => {
          console.log(e)
        }}
      >
        <option value="">Normal</option>
        <option value="">Con canales XXX</option>
      </select>
    </div>
  )
}
export default PriceItem
