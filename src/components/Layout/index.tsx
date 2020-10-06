/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from "styled-components"
import Headroom from "react-headroom"
import DemoButton from "../DemoButton"

const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            branding
            logo
            subranding
            navigation_links {
              label
              link {
                ... on PRISMIC_Page {
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC_Homepage {
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC_Contact_page {
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC_Manual_page {
                  _meta {
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Main = styled.main`
  margin: 0 auto;
  background: #000f38;
`

const NavLink = styled.div`
  margin: auto 0;
  a {
    color: #fff;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    text-shadow: 0 0 5px rgba(0, 178, 255, 1), 0 0 10px rgba(0, 178, 255, 1),
      0 0 20px rgba(0, 178, 255, 1), 0 0 40px rgba(38, 104, 127, 1),
      0 0 80px rgba(38, 104, 127, 1), 0 0 90px rgba(38, 104, 127, 1),
      0 0 100px rgba(38, 104, 127, 1), 0 0 140px rgba(38, 104, 127, 1),
      0 0 180px rgba(38, 104, 127, 1);

    &:hover {
      color: #fff;
    }
  }
`

const Header = styled.header`
  display: flex;
  background: #000f38;
  height: auto;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 3;
`
const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`

const Branding = styled.div`
  display: flex;
  margin: auto 20px;
  padding: 0 10px;
  font-weight: bold;
  color: #fff;
  font-size: 30px;

  text-shadow: 0 0 5px rgba(0, 178, 255, 1), 0 0 10px rgba(0, 178, 255, 1),
    0 0 20px rgba(0, 178, 255, 1), 0 0 40px rgba(38, 104, 127, 1),
    0 0 80px rgba(38, 104, 127, 1), 0 0 90px rgba(38, 104, 127, 1),
    0 0 100px rgba(38, 104, 127, 1), 0 0 140px rgba(38, 104, 127, 1),
    0 0 180px rgba(38, 104, 127, 1);
  
  .branding {
    a {
      color:inherit;
    }
  }
  
  .subranding {
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    content
    
  }
  
`

/*Neon rojo
  text-shadow: 0 0 5px rgba(248, 5, 47, 1), 0 0 10px rgba(248, 5, 47, 1),
      0 0 20px rgba(248, 5, 47, 1), 0 0 40px rgba(136, 14, 59, 1),
      0 0 80px rgba(136, 14, 59, 1), 0 0 90px rgba(136, 14, 59, 1),
      0 0 100px rgba(136, 14, 59, 1), 0 0 140px rgba(136, 14, 59, 1),
      0 0 180px rgba(136, 14, 59, 1);
*/
// const Logo = styled.img``

interface Links {
  link: { _meta: { uid: string | number | null | undefined } }
  label: React.ReactNode
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

const LogoHeader = styled.div`
  display: flex;

  img {
    border: 1px solid #ddd;
    display: block;
    max-width: 200px;
    margin: 20px;
    height: auto;
    border-radius: 20px;
  }
`

const Layout = ({ children }: Props) => {
  return (
    <>
      <Headroom>
        <Header>
          <StaticQuery
            query={navigationQuery}
            render={data => {
              const headerContent = data.prismic.allNavigations.edges[0].node
              // console.log(data)
              return (
                <>
                  <LogoHeader>
                    <img src={headerContent.logo.url} alt="logo header" />
                  </LogoHeader>
                  <Branding>
                    <div className="branding">
                      <Link to="/">{headerContent.branding}</Link>
                    </div>
                    <div className="subranding">{headerContent.subranding}</div>
                  </Branding>
                  <NavLinks>
                    <DemoButton type="header" />
                    {headerContent.navigation_links.map((link: Links) => {
                      if (link.link._meta.uid === "inicio") {
                        return (
                          <NavLink key={link.link._meta.uid}>
                            <Link to={`/`}>{link.label}</Link>
                          </NavLink>
                        )
                      } else {
                        return (
                          <NavLink key={link.link._meta.uid}>
                            <Link to={`/${link.link._meta.uid}`}>
                              {link.label}
                            </Link>
                          </NavLink>
                        )
                      }
                    })}
                  </NavLinks>
                </>
              )
            }}
          />
        </Header>
      </Headroom>
      <Main>{children}</Main>
    </>
  )
}

export default Layout
