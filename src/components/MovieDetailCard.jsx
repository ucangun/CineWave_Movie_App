import React from "react";
import { TfiTimer } from "react-icons/tfi";
import { IoLanguageSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";

const MovieDetailCard = ({ movie, video, posterUrl }) => {
  return (
    <div className="flex flex-col max-w-2xl gap-2 px-8 py-12 mx-auto rounded-lg bg-slate-600 ">
      {movie ? (
        <>
          <h1 className="mb-4 text-2xl font-semibold text-center text-slate-900">
            {movie.title}
          </h1>

          <div className="flex flex-col gap-4 mb-8 sm:flex-row ">
            <img
              src={posterUrl}
              alt="poster of the film"
              className="w-[12rem] sm:w-[14rem] h-[auto] object-cover rounded-lg self-center "
            />
            <div className="flex flex-col gap-4 px-2 py-4 ">
              <p className="text-sm sm:text-[1rem] text-slate-200 ">
                {movie.overview}
              </p>
              <div className="iconBox">
                <TfiTimer /> {movie.runtime} minutes
              </div>
              <div className="iconBox">
                <IoLanguageSharp /> '{movie.original_language}'
              </div>
              <div className="iconBox">
                <SlCalender />
                {movie.release_date?.split("-")[0]}
              </div>
              <div className="iconBox">
                <BiCategory />
                {movie.genres.map((item) => (
                  <span key={item.id}>{item.name}</span>
                ))}
              </div>
            </div>
          </div>

          {video ? (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="Movie Trailer"
              allowFullScreen
            ></iframe>
          ) : (
            <p>No video available.</p>
          )}
        </>
      ) : (
        <p>Loading movie details...</p>
      )}
      {movie?.homepage && (
        <a
          href={movie.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[1rem] text-slate-50 mt-4 ml-2"
        >
          More Details &rarr;
        </a>
      )}
    </div>
  );
};

export default MovieDetailCard;
