import React from 'react';
import { Layout} from '../components'



const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <p>
                You can contact me via &nbsp;
                <a href="https://twitter.com/@AAlleneben" target="_blank" rel="noopener noreferrer">
                    @AAlleneben 
                </a> 
                &nbsp; on Twitter, 
                &nbsp; alleneben@gmail.com or hit me up on +233209783485 or +233277686939
            </p>
            <p> My github account is &nbsp;
                <a href="https://github.com/alleneben" target="_blank" rel="noopener noreferrer">
                @alleneben
                </a> 
            </p>
        </Layout>
    )
}

export default ContactPage;