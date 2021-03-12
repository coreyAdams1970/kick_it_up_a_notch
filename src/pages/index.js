import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactGA from 'react-ga';
ReactGA.initialize('G-GQ7PW6FH0Z');

export default function IndexPage(props) {

  const siteTitle = "Kick It Up A Notch Alpine and Desert Design";

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [])

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`desert landscaping`, `landscaping`, `landscape design`, `arizona landscape design`]}
      />
      <img style={{ margin: 0, width: 100, height: 100 }} src="./images/liz.jpeg" alt="liz martin" />

      <h3 className="text-white">Welcome to Kick It Up A Notch.</h3>
    </Layout>
  )

}
