import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

function CustomSlider({ movies }) {
  const settings = {
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
