import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import MovieDetailCard from "../components/MovieDetailCard";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b0e48fe02ba6d37aea5e0aa19e6f6d3c";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  const posterUrl = movie
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  const getMovieDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      setMovie(data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const getMovieVideo = async (id) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
      );
      setVideo(data.results?.[0]);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    getMovieDetails(id);
    getMovieVideo(id);
  }, [id]);

  return (
    <div className=" background">
      <Navbar />
      <div className="px-4 py-20 ">
        <MovieDetailCard movie={movie} video={video} posterUrl={posterUrl} />
      </div>
    </div>
  );
};

export default MovieDetails;
