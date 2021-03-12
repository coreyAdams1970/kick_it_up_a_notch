import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

export default function IndexPage(props) {

  const siteTitle = "Kick It Up A Notch Alpine and Desert Design"

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`desert landscaping`, `landscaping`, `landscape design`, `arizona landscape design`]}
      />
      <img style={{ margin: 0, width:100, height:100 }} src="./images/liz.jpeg" alt="liz martin" />
      
      <h3 className="text-white">Welcome to Kick It Up A Notch.</h3>
    </Layout>
  )

}
