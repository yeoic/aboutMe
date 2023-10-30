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
              className="rounded-3xl shadow-md dark:border-2 dark:border-amber-300/30"
              src="/logo/Javascript-Logo.png"
              alt="Javascript Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl shadow-md dark:border-2 dark:border-amber-300/30"
              src="/logo/Typescript-Logo.png"
              alt="Typescript Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl shadow-md dark:border-2 dark:border-amber-300/30"
              src="/logo/React-Logo.png"
              alt="React Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl shadow-md dark:border-2 dark:border-amber-300/30"
              src="/logo/Redux-Logo.png"
              alt="Redux Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl shadow-md dark:border-2 dark:border-amber-300/30"
              src="/logo/NextJs-Logo.png"
              alt="NextJs Logo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl shadow-md dark:border-2 dark:border-amber-300/30"
              src="/logo/Tailwind-Logo.png"
              alt="TailwindCSS Logo"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
