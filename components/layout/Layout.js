import React from 'react'
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Terminy medyczne</title>
        <link rel="stylesheet" href="./plugins/bootstrap-4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./plugins/meanmenu/meanmenu.css"/>
        <link rel="stylesheet" href="./fonts/ep-icon-fonts/css/style.css"/>
        <link rel="stylesheet" href="./fonts/fontawesome-5/css/all.min.css"/>
        <link rel="stylesheet" href="./css/settings.css"/>
        <link rel="stylesheet" href="./css/style.css"/>
      </Head>
      <div id="page-container">
       Lol
      </div>
    </>
  )
}

export default Layout
