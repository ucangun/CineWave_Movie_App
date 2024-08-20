import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { useFetchMovies, useSearchQuery } from "../services/MovieApi";
import CustomSlider from "../components/Slider";

const Movies = () => {
  const nowPlaying = useFetchMovies("nowPlaying");
  const popular = useFetchMovies("popular");
  const topRated = useFetchMovies("topRated");
  const upcoming = useFetchMovies("upcoming");
  const [query, setQuery] = useState("");
  const { searchedMovies } = useSearchQuery(query);

  return (
    <div className="flex flex-col pb-16 space-y-16 background">
      <Navbar />
      <Search query={query} setQuery={setQuery} />

      {searchedMovies.length > 0 && (
        <CustomSlider
          movies={searchedMovies}
          title={`Search Results for ${query}`}
        />
      )}

      <CustomSlider movies={upcoming} title="Upcoming" />
      <CustomSlider movies={topRated} title="Top Rated" />
      <CustomSlider movies={popular} title="Popular" />
      <CustomSlider movies={nowPlaying} title="Now Playing" />
    </div>
  );
};

export default Movies;
