import React from "react";
import '../styles/globals.scss'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>my blog</title>
            </Head>
            <Component {...pageProps} />
        </>

    )

}

export default MyApp
