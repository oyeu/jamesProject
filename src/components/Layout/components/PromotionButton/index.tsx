import React from "react"
import styled from "styled-components"
import { graphql, Link , StaticQuery} from "gatsby"
import RichText from '../../../RichText'

const query = graphql`
{
    prismic {
      allPromotion_types {
        edges {
          node {
            promotion_subtitle
            show_promotion
            _meta {
              uid
            }
          }
        }
      }
    }
  }
  
`

const PromotionButtonWrapper = styled.div`
  width: 15%;
  position: fixed;
  bottom: 70vh;
  right: 0;
  z-index: 3;
  background: orange;
  text-align:center;
  font-weight:bold;
  display:flex;
  flex-direction:column;
  

  a {
    font-size:20px;
    margin:auto;
  }

`

const PromotionButton = () => {
  return (
      <StaticQuery 
        query={query}
        render={data=> {
            data=data.prismic.allPromotion_types.edges[0].node
            if (data.show_promotion) {
                return(
                    <PromotionButtonWrapper>
                        <Link to={`/${data._meta.uid}`}>
                            <RichText render={data.promotion_subtitle}/>
                        </Link>  
                    </PromotionButtonWrapper>
                )
            } else {
                return (null)
            }   
        }}/>
)}

export default PromotionButton
