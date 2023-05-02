import React from 'react'
import Head from 'next/head'
import { GlobalStyles, Primary } from "./Layout.styles"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Layout = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - LeoGarden' : 'LeoGarden ecommerce'}</title>
        <meta name="description" content="784 pages text text" />
        <link rel="icon" href="../../../public/favicon.ico"/>
      </Head>

      <GlobalStyles />
        <Header />
        <Primary>{children}</Primary>
        <Footer />
    </>
  )
}

export default Layout