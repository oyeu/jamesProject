import React from 'react';
import {graphql} from 'gatsby';
import {RichText} from 'prismic-reactjs'
import Layout from '../components/Layout'


export const query = graphql`
query PageQuery($id: String){
    prismic {
        allPages(id: $id) {
            edges {
                node {
                    page_title
                    _meta {
                        uid
                        id
                    }
                }
            }
        }
    }
}
`
const Page = (props) =>{
    const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
    return(
        <Layout>
        <RichText render={pageTitle}/>
        </Layout>
    )
}

export default Page