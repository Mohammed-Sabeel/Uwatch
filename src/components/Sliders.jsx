import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import { movieData } from "./movieData";
import { useState } from "react";
import Latest from "./Latest";
import Popular from "./Popular";
import English from "./English";
import { createContext } from "react";
import Hindi from "./Hindi";
import Footer from "./Footer";
const Context = createContext();
 
const Sliders = () => {
  const [data, setData] = useState(false);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrow:true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let latest = {
    dots: false,
    infinite: false,
    speed: 1000,
    arrow: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div className="mobile_slider">
      <Container fluid="md">
        <Slider {...settings}>
          {movieData.map((curr) => {
            return (
              <div className="img_fluid">
                <div className="movie_slider">
                  <Row className="row_bg">
                    <Col md={4} className="d-flex align-items-center">
                      <div className="movie_content p-5">
                        <h2>{curr.title}</h2>
                        <div className="descreption">
                          <p>{curr.description}</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={8} sm={12}>
                      <div className="img_container">
                        <div className="slider_img">
                          <img
                            src={curr.image}
                            alt=""
                            className="img-fluid w-100 image-color"
                          />
                        </div>
                      </div>
                    </Col>
                    <div className="play_icon">
                      <h4>
                        <span>
                          <FaPlay />
                        </span>{" "}
                        Watch Now{" "}
                      </h4>
                    </div>
                  </Row>
                </div>
              </div>
            );
          })}
        </Slider>
        <Context.Provider value={{...latest}} >
        <Latest/>
        <Popular/>
        <English/>
        <Hindi/>
        <Footer/>
        </Context.Provider>
      </Container>
    </div>
  );
};

export default Sliders;
export {Context};
