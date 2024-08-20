import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "b0e48fe02ba6d37aea5e0aa19e6f6d3c";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        );
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  return movies;
};
