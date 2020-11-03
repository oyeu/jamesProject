/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import DemoButton from "../DemoButton"
import PromotionButton from "./components/PromotionButton"

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
      <StaticQuery
        query={navigationQuery}
        render={data => {
          const headerContent = data.prismic.allNavigations.edges[0].node
          // console.log(data)
          return (
            <>
              <PromotionButton />
              <header className="hamburguer-header">
                <div className="menu-wrap">
                  <Link to="/">
                    <h1>
                      ADJ
                      <img src="logo-header-mobile.jpg" alt="" />
                      IPTV
                    </h1>
                  </Link>
                  <input type="checkbox" className="toggler" />
                  <div className="hamburger">
                    <div />
                  </div>
                  <div className="menu">
                    <div>
                      <div>
                        <ul>
                          {headerContent.navigation_links.map((link: Links) => {
                            if (link.link._meta.uid === "inicio") {
                              return (
                                <li key={link.link._meta.uid}>
                                  <Link to={`/`}>{link.label}</Link>
                                </li>
                              )
                            } else {
                              return (
                                <li key={link.link._meta.uid}>
                                  <Link to={`/${link.link._meta.uid}`}>
                                    {link.label}
                                  </Link>
                                </li>
                              )
                            }
                          })}
                          <li className="demo-button">
                            <Link to="/demo-page">
                              <span />
                              <span />
                              <span />
                              <span />
                              ¡Solicita tu demo gratis!
                            </Link>
                          </li>
                          <li className="promotion-button">
                            <Link to="/promotion">
                              <span />
                              <span />
                              <span />
                              <span />
                              ¡Promociones!
                            </Link>
                          </li>
                          <li className="casa-autonoma">
                            <Link to="/casa-autonoma">
                              <span />
                              <span />
                              <span />
                              <span />
                              Casa autónoma
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <header className="full-header">
                <div className="logo-header">
                  <img src={headerContent.logo.url} alt="logo header" />
                </div>
                <DemoButton
                  className="header-demo-button"
                  text="¡Solicita tu Demo gratis!"
                />
                <div className="nav-links">
                  {headerContent.navigation_links.map((link: Links) => {
                    if (link.link._meta.uid === "inicio") {
                      return (
                        <div className="nav-link" key={link.link._meta.uid}>
                          <Link to={`/`}>{link.label}</Link>
                        </div>
                      )
                    } else {
                      return (
                        <div className="nav-link" key={link.link._meta.uid}>
                          <Link to={`/${link.link._meta.uid}`}>
                            {link.label}
                          </Link>
                        </div>
                      )
                    }
                  })}
                </div>
              </header>
            </>
          )
        }}
      />
      <main className="main-content">{children}</main>
    </>
  )
}

export default Layout
