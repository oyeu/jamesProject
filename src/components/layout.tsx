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

const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            branding
            logo
            navigation_links {
              label
              link {
                ... on PRISMIC_Page {
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
    text-shadow: 0 0 5px rgba(248, 5, 47, 1), 0 0 10px rgba(248, 5, 47, 1),
      0 0 20px rgba(248, 5, 47, 1), 0 0 40px rgba(136, 14, 59, 1),
      0 0 80px rgba(136, 14, 59, 1), 0 0 90px rgba(136, 14, 59, 1),
      0 0 100px rgba(136, 14, 59, 1), 0 0 140px rgba(136, 14, 59, 1),
      0 0 180px rgba(136, 14, 59, 1);

    &:hover {
      color: #fff;
    }
  }
`

const Header = styled.header`
  display: flex;
  background: #000f38;
  height: 50px;
  padding: 0 16px;
  box-sizing: border-box;
`
const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`

const Branding = styled.div`
  margin: auto 0;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  text-shadow: 0 0 5px rgba(0, 178, 255, 1), 0 0 10px rgba(0, 178, 255, 1),
    0 0 20px rgba(0, 178, 255, 1), 0 0 40px rgba(38, 104, 127, 1),
    0 0 80px rgba(38, 104, 127, 1), 0 0 90px rgba(38, 104, 127, 1),
    0 0 100px rgba(38, 104, 127, 1), 0 0 140px rgba(38, 104, 127, 1),
    0 0 180px rgba(38, 104, 127, 1);
`
// const Logo = styled.img``

interface Links {
  link: { _meta: { uid: string | number | null | undefined } }
  label: React.ReactNode
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header>
        <StaticQuery
          query={navigationQuery}
          render={data => {
            // console.log(data)
            return (
              <>
                <Branding>
                  {data.prismic.allNavigations.edges[0].node.branding}
                </Branding>
                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigation_links.map(
                    (link: Links) => {
                      return (
                        <NavLink key={link.link._meta.uid}>
                          <Link to={`/${link.link._meta.uid}`}>
                            {link.label}
                          </Link>
                        </NavLink>
                      )
                    }
                  )}
                </NavLinks>
              </>
            )
          }}
        />
      </Header>
      <Main>{children}</Main>
    </>
  )
}

export default Layout
