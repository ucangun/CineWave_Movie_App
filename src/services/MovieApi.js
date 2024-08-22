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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${BASE_URL}/movie/${categories[type]}?api_key=${API_KEY}`
        );
        setMovies(data.results);
        setError(null);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (type in categories) {
      getMovies();
    }
  }, [type]);

  return movies;
};

export const useSearchQuery = (query) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setSearchedMovies([]);
      setLoading(false);
      return;
    }

    const getSearchQuery = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        setSearchedMovies(data.results || []);
        setError(null);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getSearchQuery();
  }, [query]);

  return { searchedMovies, loading, error };
};
