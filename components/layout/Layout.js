import React from 'react'
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover'/>
        <title>Terminy medyczne</title>
      </Head>
      <div id="page-container">
        <Header/>
        <Navigation/>
        <div id="content-wrap">{props.children}</div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Layout
