import React from "react"
import Header from "./header"
import Footer from "./footer"
import SEO from "../components/seo"
import "../assets/main.sass"

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="MARI SEMERIKVA" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
