import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {RichText} from 'prismic-reactjs'
import Layout from '../components/layout';


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

interface Props extends PageProps{
    data:{
        prismic:any
    }
}

const Page = (props:Props) =>{
    const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
    return(
        <Layout>
        <RichText render={pageTitle}/>
        </Layout>
    )
}

export default Page