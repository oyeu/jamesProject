/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link, PageProps } from "gatsby";
import "./layout.css";
import styled from "styled-components";

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto
`

const navigationQuery = graphql`
{prismic {
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

const NavLink = styled.div`
  margin: auto 0;

  a{
    color: orange;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    &:hover{
      color: blue;
    }
  }
`;

const Header = styled.header`
  display: flex;
  background: grey;
  height: 50px;
  padding: 0 16px;
  box-sizing : border-box;
`
const NavLinks = styled.div`
  margin-left: auto;
  display :flex;
`;

const Branding = styled.div`
  margin: auto 0;
  font-weight: bold;
  color: orange;
  font-size: 20px;
`;
const Logo = styled.img``;

interface link {
  link: 
    { _meta: 
      { uid: string | number | null | undefined;}; 
    }; 
  label: React.ReactNode; 
}

const Layout = ({ children }:PageProps) => {
  return (
    <>
      <Header>
        <StaticQuery 
          query={navigationQuery}
          render={(data)=>{
            console.log(data);
            return (
              <>
                <Branding>
                  {data.prismic.allNavigations.edges[0].node.branding}
                </Branding>
                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigation_links.map((link:link) =>{
                    return( 
                    <NavLink key={link.link._meta.uid}>
                      <Link to={`/${link.link._meta.uid}`}>
                        {link.label}
                      </Link>
                    </NavLink>
                    )
                  })}
                </NavLinks>
              </>
            )
          }}
        />
        </Header>
        <Main>
          {children}
        </Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
