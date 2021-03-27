import React, { useEffect, useState, useCallback } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Slider from "react-slick";
import ReactGA from 'react-ga';
ReactGA.initialize('G-GQ7PW6FH0Z');

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { url: "images/bg.png" },
  { url: "images/bg6.jpeg" },
  { url: "images/bg1.jpeg" },
  { url: "images/bg2.jpeg" },
  { url: "images/bg3.jpeg" },
  { url: "images/bg4.jpeg" },
  { url: "images/bg5.jpeg" },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  fade: true,
  autoplaySpeed: 5000,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MainContainer = styled.div`
 
  .main-text {
    text-align: justify;
    background-color: white;
    line-height: 26px;
    font-weight: 400;
    padding: 15px;
  }

  .slide-container {
    position:relative;
    top:-200px;
    width: 103%;
    max-height: 400px;
    margin: auto; 
  }
    .slide-img {
      width: 100%;
      max-height: 400px;
      height:400px;

      img {
        width: 100%;
        object-fit: cover;
      }
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
        <div className="row w-100 mb-5">
          <div className="col-12 px-0">
            <div className="slide-container">
              <Slider {...settings}>
                <div className="slide-img">
                  <img src={images[0].url} />
                </div>
                <div className="slide-img">
                  <img src={images[1].url} />
                </div>
                <div className="slide-img">
                  <img src={images[2].url} />
                </div>
                <div className="slide-img">
                  <img src={images[3].url} />
                </div>
                <div className="slide-img">
                  <img src={images[4].url} />
                </div>
                <div className="slide-img">
                  <img src={images[5].url} />
                </div>
                <div className="slide-img">
                  <img src={images[6].url} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
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
