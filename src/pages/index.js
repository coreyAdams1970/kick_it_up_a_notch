import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Kick It Up A Notch Alpine and Desert Design"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`desert landscaping`, `landscaping`, `landscape design`, `arizona landscape design`]}
        />
        <img style={{ margin: 0 }} src="./liz.jpeg" alt="liz martin" />
        <h1>
          Meet our Queen Bee: Liz (Hazel) Martin
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to Kick It Up A Notch.</p>
        
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
