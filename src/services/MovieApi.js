import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b0e48fe02ba6d37aea5e0aa19e6f6d3c";

const categories = {
  nowPlaying: "now_playing",
  popular: "popular",
  topRated: "top_rated",
  upcoming: "upcoming",
};

export const useFetchMovies = (type) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/movie/${categories[type]}?api_key=${API_KEY}`
        );
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (type in categories) {
      getMovies();
    }
  }, [type]);

  return movies;
};
