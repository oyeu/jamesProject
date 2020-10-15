import { navigate } from "gatsby"
import React from "react"
import styled from "styled-components"
import RichText from "../RichText"

const PageTitleWrapper = styled.section`
  background: #ca0603;
  color:white;
  text-align: center;
  border:solid;
  border-color: #dcda15;
  border-style:groove;
  display:flex;

  .title {
    margin:0 auto;
  } 

  button {
    position:fixed;
    background: #000f38;
    color:white;
    font-size:20px;
    display:flex;
    z-index:3;
    border-color:#ca0603;
    padding:10px 20px;

    :hover {
      border-color:#dcda15;
    }

    .arrow {
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 5px;
    }

    .left {
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }
  
`

const PageTitleSection = ({ title }: any) => {
  return (
    <PageTitleWrapper>
      <button onClick={()=>{
        navigate(-1)
      }}>
        <div>
        <i className="arrow left"></i>
        </div>
        <div>
          Volver
        </div>
      </button>
      <div className='title'>
        <RichText render={title} />
      </div>
    </PageTitleWrapper>
  )
}

export default PageTitleSection
