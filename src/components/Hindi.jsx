import React, { useContext, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import { Context } from './Sliders';
import { latest_movie } from "./movieData";
const Hindi = () => {
    const data=useContext(Context);
   
  return (
    <div>
            <div className="mt-4 head_title">
        <h5>Hindi Movies</h5>
      </div>
      <Slider {...data}>
        {
            latest_movie.filter((curr) => curr.category === "hindi")
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
  )
}

export default Hindi