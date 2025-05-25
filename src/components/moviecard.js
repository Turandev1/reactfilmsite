import React from "react";
import Moviecontrols from "./moviecontrols";

function Moviecard({ movie, type }) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.poster_path}`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}
      <Moviecontrols movie={movie} type={type} />
    </div>
  );
}

export default Moviecard;
