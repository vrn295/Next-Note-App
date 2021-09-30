import React from 'react'
import Navbar from './Navbar'
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" /> 
                <link
                    rel="preload"
                    href="/fonts/Graphik/GraphikRegular.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Graphik/GraphikBold.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
