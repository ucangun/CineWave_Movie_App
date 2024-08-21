import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

function CustomSlider({ movies = [], title }) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {title && (
        <h2 className="tracking-wide capitalize slider-title">{title}</h2>
      )}
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
