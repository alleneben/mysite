import React from 'react';
import { Link } from 'gatsby';

import { Layout} from '../components'



const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently volunteer to teach people programming</p>
            <p>I have knowledge in the following technologies </p>
            <ul>
                <li>JavaScript (React, Angular 2+ and Ionic)</li>
                <li>Python (Werkzeug, Flask) </li>
                <li>NodeJs</li>
                <li>Socket.io</li>
                <li>SOAP Web services</li>
                <li>PHP</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
            </ul>
            <p><Link to="/contact">Want to work with me? reach out</Link></p>
        </Layout>
    )
}

export default AboutPage;