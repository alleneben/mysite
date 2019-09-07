import React from 'react';
import { Footer, Header } from './'


import '../styles/index.scss'
import layoutstyles from './layout.module.scss';


const Layout = (props) => {
    return(
        <div className={layoutstyles.container}>
            <Header />
            <div className={layoutstyles.main}>
                <div className={layoutstyles.content}>
                    { props.children }
                </div> 
            </div>
            <Footer />
        </div>
    )
}


export default Layout;