import React from 'react'
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover'/>
        <title>Terminy medyczne</title>
      </Head>
      <div className="container">
        <Header/>
        {props.children}
        <Footer/>
      </div>
    </>
  )
}

export default Layout
