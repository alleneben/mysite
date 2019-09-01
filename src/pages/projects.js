import React from 'react';
import { Link } from 'gatsby';

import { Layout} from '../components';
import blogstyle from './blog.module.scss';


const ProjectPage = () => {
    return (
        <Layout>
            <h1>Projects</h1>
            {/* <p></p> */}
            <ol className={blogstyle.posts}>
                <li className={blogstyle.post}>
                    {/* <h2>{edge.node.frontmatter.title}</h2> */}
                    {/* <p>{edge.node.frontmatter.date}</p> */}
                    <a href="https://react-store-allen.netlify.com/" target="_blank" rel="noopener noreferrer">
                        React POS
                    </a>
                </li>
                <li className={blogstyle.post}>
                    <a  target="_blank" rel="noopener noreferrer">
                        Others are freelance jobs including
                    {/* <ul>
                        <li>POS</li>
                    </ul> */}
                    </a>
                </li>
            </ol>
        </Layout>
    )
}

export default ProjectPage;