import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components'

export const query = graphql`
    query($slug: String){
        markdownRemark(fields: { slug: { eq: $slug } }){
            frontmatter {
                title
                date
            }
            html
        }
    }
`
const Blog = (props) => {
    const { data:{ markdownRemark:{ frontmatter: { title, date }, html } } } = props
    
    

    return (
        <Layout>
            <h1>{title}</h1>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{__html: html}}></div>
        </Layout>
    )
}


export default Blog;