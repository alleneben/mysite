import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components'

const IndexPage = () => {

    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I'm Allen, a full-stack developer living in Kumasi-Ghana</h2>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage;