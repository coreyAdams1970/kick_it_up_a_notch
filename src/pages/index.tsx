import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import ReactGA from 'react-ga';
import Slideshow from "../components/slideshow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactGA.initialize('G-GQ7PW6FH0Z');

const images = [
  "images/bg16x9.png",
  "images/bg1.jpeg",
  "images/bg2_16x9.jpeg",
  "images/bg516x9.jpeg",
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  lazyLoad: true,
  autoplaySpeed: 1000,
  speed: 3000,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slick-slider-fade',
};

const MainContainer = styled.div`
  
  position:relative;
  top: -200px;

  .main-text {
    text-align: justify;
    background-color: white;
    line-height: 26px;
    font-weight: 400;
    padding: 60px;
    padding-top:0;

    h3 {
      margin-top: 20px;
      border-bottom: 1px solid #face11;
    }
  }

  @media(max-width:500px){
    .main-text{
      padding: 10px;
    }
  }

  .slider-main-container {
    position: relative;
    top: 0;
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
        <div className="row w-100">
          <div className="col-12 px-0 slider-main-container">
            <Slideshow wrapperClass="images-slider" images={images} settings={settings} key="image-slider" />
          </div>
        </div>
        <div className="row main-text mt-3">
          <div className="col-12">
            <h3 className="text-center pb-1">Welcome to Kick It Up A Notch</h3>
          </div>
        </div>
        <div className="row main-text">
          <div className="col-12">
            <p>Kick It Up A Notch! Alpine Designs and Desert Designs were grown out of the desire to create outdoor living spaces that not only meet the needs and dreams of our clients but to exceed them while incorporating the surrounding beauty of Mother Nature.
            </p>
            <p>We will incorporate  your families personality and style into the design.  Your property should be a reflection of you providing family memories for years to come.
            <br/>Our experienced team prides ourselves on customer service, design innovation and old school business practices.
            </p>
            <p>Kick it Up A Notch! Desert Designs has 14 years of experience with custom home builders and high-end residential remodels in Scottsdale Arizona.
            </p><p>
              We look forward to bringing our innovation and creativity to the Wasatch and Salt Lake Valley.
            </p>
          </div>
        </div>
      </MainContainer>
    </Layout>
  )
}
