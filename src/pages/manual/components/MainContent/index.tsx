import React from "react"
import styled from "styled-components"
import RichText from "../../../../components/RichText"
import AppCard from "./components/AppItem"
import { RichTextProps as RichTextI } from "prismic-reactjs"

const MainContentWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  padding: 40px 0px;
  font-size: 20px;
`

const AppsWrapper = styled.div`
  display: flex;
`
interface Props {
  iptvApps: {
    app_link: {
      url: string
    }
    logo: {
      url: string
    }
    name: RichTextI
    targetdevice: RichTextI
  }[]
  mainText: RichTextI
}

const MainContent = ({ iptvApps, mainText }: Props) => {
  return (
    <MainContentWrapper>
      <RichText render={mainText} />
      <AppsWrapper>
        {iptvApps?.map((appItem: any) => {
          return (
            <AppCard
              key={appItem.app_link.url}
              link={appItem.app_link.url}
              logo={appItem.logo.url}
              name={appItem.name}
              targetDevice={appItem.targetdevice}
            />
          )
        })}
      </AppsWrapper>
    </MainContentWrapper>
  )
}

export default MainContent
