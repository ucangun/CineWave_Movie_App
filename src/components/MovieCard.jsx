import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="movie-card" onClick={() => handleNavigate(movie.id)}>
      <img src={posterUrl} alt={movie.title} />
    </div>
  );
};

export default MovieCard;
