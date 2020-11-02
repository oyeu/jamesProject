import React from "react"
import RichText from "../../../../components/RichText"
import AppCard from "./components/AppItem"
import { RichTextProps as RichTextI } from "prismic-reactjs"
import ContactButton from "../../../promotion/components/ContactButton"
import "./index.css"

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
    <section className="main-content-wrapper">
      <RichText render={mainText} />
      <div className="apps-wrapper">
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
      </div>
      <ContactButton />
    </section>
  )
}

export default MainContent
