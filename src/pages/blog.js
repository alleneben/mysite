import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { Layout} from '../components';
import blogstyle from './blog.module.scss';



const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)
    const { allMarkdownRemark:{ edges } } = data
    
    return(
        <Layout>
            <ol className={blogstyle.posts}>
            {/* {
                edges.map((edge,key) => {
                    let path = `/blog/${edge.node.fields.slug}`;

                    return (
                        <li className={blogstyle.post} key={key}>
                            <Link to={path}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })
            } */}
                <li className={blogstyle.post}>
                    <h2>There are no blogs at the moment</h2>
                </li>
            </ol>
        </Layout>
    )
}

export default BlogPage; 