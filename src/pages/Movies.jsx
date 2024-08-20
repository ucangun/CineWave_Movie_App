import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { useFetchMovies } from "../services/MovieApi";
import CustomSlider from "../components/Slider";

const Movies = () => {
  const movies = useFetchMovies();

  return (
    <div className="flex flex-col space-y-16 background">
      <Navbar />
      <Search />
      <CustomSlider movies={movies} />
    </div>
  );
};

export default Movies;
