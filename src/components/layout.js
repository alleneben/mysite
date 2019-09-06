import React from 'react';
import { Footer, Header } from './'


import '../styles/index.scss'
import layoutstyles from './layout.module.scss';


const Layout = (props) => {
    return(
        <div className={layoutstyles.container}>
            <div className={layoutstyles.main}>
                <Header />
                <div className={layoutstyles.content}>
                    { props.children }
                </div>
                    
            </div>
            <Footer />
        </div>
    )
}


export default Layout;