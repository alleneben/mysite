const path = require('path');

module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
   
        createNodeField({node:node,name:'slug', value: slug})
    }    
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');

    const res = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const { data:{ allMarkdownRemark:{ edges } } } = res;
    
    edges.forEach((edge) => {
        let { node:{ fields: { slug } } } = edge;

        createPage({
            component: blogTemplate,
            path: `/blog/${slug}`,
            context: {
                slug: slug
            }
        })
    })
}