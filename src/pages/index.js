import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import ReactGA from 'react-ga';
ReactGA.initialize('G-GQ7PW6FH0Z');

const MainContainer = styled.div`

  .blank {
    width: 100%;
    height:400px;
  }

  .main-text {
    text-align: justify;
    background-color: white;
    line-height: 26px;
    font-weight: 400;
    padding: 15px;
  }
`;

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

      <MainContainer>
        <div className="blank">&nbsp;</div>
        <div className="row main-text">
          <div className="col-12">
            <p className="text-center">“IF A DESIGN IS TRULY ELEGANT, CLASSIC, AND PURE, IT WILL REMAIN SO FOREVER.”</p>
          </div>
        </div>
        <div className="row main-text">
          <div className="col-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="row main-text">
          <div className="col-12">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </div>
        </div>
      </MainContainer>
    </Layout>
  )
}
