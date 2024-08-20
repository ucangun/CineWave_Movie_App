import React from "react";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
    </div>
  );
};

export default MovieCard;
