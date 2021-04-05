import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";

const SlideContainer = styled.div`
  

.slide-container {
    width: 103%;
    max-height: 600px;
    margin: auto; 
  
    .slide-img {
      width: 100%;
      max-height: 600px;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
}

&.logo-slider{
     z-index:1000;
     position:relative;
     top:-600px;
     left:0;
}

.slick-slider-logo{

    .slick-slide {
        opacity: 0;
        transition: opacity 2.8s ease-out;
      }
      
      .slick-slide.slick-current {
        opacity: 1;
        
      }
}
.slide-img {
      width: 100%;
      max-height: 600px;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
`;

const CustomSlide = ({ index, image }) => {
    return (
        <div key={index}>
            <img src={image} />
        </div>
    );
}


export default function Slideshow(props) {
    const { images, settings, wrapperClass } = props;



    return (
        <SlideContainer className={classNames("slide-container", wrapperClass)}>
            <Slider {...settings}>
                {images.map((image, index) => <CustomSlide image={image} index={index} />)}
                {/* <div className="slide-img">
                    <img src={images[0]} />
                </div>
                <div className="slide-img">
                    <img src={images[1]} />
                </div>
                <div className="slide-img">
                    <img src={images[2]} />
                </div>
                <div className="slide-img">
                    <img src={images[3]} />
                </div>
                <div className="slide-img">
                    <img src={images[4]} />
                </div>
                <div className="slide-img">
                    <img src={images[5]} />
                </div>
                <div className="slide-img">
                    <img src={images[6]} />
                </div> */}
            </Slider>
        </SlideContainer>
    )
}