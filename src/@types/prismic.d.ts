import {PageProps} from 'gatsby'

export interface PagePropsWithPrismic extends PageProps {
    data: {
        prismic: {
            allPages: {
                edges:{node:{
                    page_title:RichTextBlock[]
                }}[]
            }
        }
    }
  }



