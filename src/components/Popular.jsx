import React from "react";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { latest_movie } from "./movieData";
const Popular = () => {
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
          slidesToScroll: 3,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div>
      <div className="mt-4 head_title">
        <h5>Tamil Movies</h5>
      </div>
      <Slider {...latest}>
        {latest_movie
          .filter((curr) => curr.category === "tamil")
          .map((curr) => {
            return (
              <div className="card_latest mt-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={curr.images}
                    className="w-100 h-100 img_latest img-fluid"
                  />
                </Card>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Popular;
