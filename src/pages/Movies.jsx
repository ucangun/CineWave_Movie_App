import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { useFetchMovies } from "../services/MovieApi";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const movies = useFetchMovies();
  return (
    <div className="background flex flex-col gap-8">
      <Navbar />
      <Search />
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
