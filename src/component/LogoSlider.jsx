import React, { Component } from "react";
import Slider from "react-slick";

export default class LogoSlider extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="w-full">
        <Slider {...settings}>
          <div>
            <img
              className="rounded-3xl"
              src="/logo/Javascript-Logo.png"
              alt="React Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="/logo/Typescript-Logo.png"
              alt="React Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="/logo/React-Logo.png"
              alt="React Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="/logo/Redux-Logo.png"
              alt="React Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="/logo/NextJs-Logo.png"
              alt="React Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="/logo/TailwindCSS-Logo.png"
              alt="React Logo"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
