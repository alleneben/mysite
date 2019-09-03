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
                        Ecommerce with React
                    </a>
                </li>
                <li className={blogstyle.post}>
                    {/* <h2>{edge.node.frontmatter.title}</h2> */}
                    {/* <p>{edge.node.frontmatter.date}</p> */}
                    <a href="http://asset.gra.themaduka.com/" target="_blank" rel="noopener noreferrer">
                        Asset Manager built with React, PHP and PostgreSQL
                    </a>
                </li>
                <li className={blogstyle.post}>
                    {/* <h2>{edge.node.frontmatter.title}</h2> */}
                    {/* <p>{edge.node.frontmatter.date}</p> */}
                    <a href="http://pwamobile.themaduka.com/" target="_blank" rel="noopener noreferrer">
                        A school app to check results etc. The app is best viewed on a mobile device.
                    </a>
                </li>
                <li className={blogstyle.post}>
                    <a  target="_blank" rel="noopener noreferrer">
                        Others are freelance jobs including
                    <ul>
                        <li>
                            Encryption and Decryption of financial data using RSA algorithm with checksum. Implementation
                            was done using Python and PostgreSQL
                        </li>
                        <li>
                            Measure for document clustering using singular value decomposition (Algorithm implemented in Python)
                        </li>
                        <li>
                            Migration Protocol for migrating live operating systems (Implementation was done using QEMU-KVM and Python. PostgreSQL was used as the database for authentication)
                        </li>
                        <li>
                            An algorithm for Role based access control (Implementation was done using PostgreSQL)
                        </li>
                        <li>
                            Data clustering using K-Means algorithm (Algorithm implemented in Python)
                        </li>
                    </ul>
                    </a>
                </li>
            </ol>
        </Layout>
    )
}

export default ProjectPage;