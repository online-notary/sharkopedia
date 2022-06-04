import React from 'react'
import Head from "next/head"
import ScrollToTop from '../ScrollToTop';

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <meta 
                    charSet="utf-8" 
                />
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1" 
                />
                <link 
                    rel="icon" 
                    type="image/png" 
                    href="/img/favicon.png"
                ></link>
                <title>Exolot - React Multipurpose Landing Page Template</title>
            </Head>

            {children}

            <ScrollToTop />
        </>
    );
}

export default Layout;