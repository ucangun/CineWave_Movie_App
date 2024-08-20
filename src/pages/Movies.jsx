import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Movies = () => {
  return (
    <div className="background flex flex-col gap-8">
      <Navbar />
      <Search />
    </div>
  );
};

export default Movies;
