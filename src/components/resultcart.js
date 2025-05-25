import React, { useContext } from "react";
import { Globalcontext } from "./context/globalstate";

function Resultcart({ movie }) {
  const { addmovietowatchlist, watched, watchlist, addmovietowatched } =
    useContext(Globalcontext);
  const addedwatched = watched.find((o) => o.id === movie.id);
  const storedmovie = watchlist.find((o) => o.id === movie.id);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title"> {movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "Tarixi bilinmir"}
          </h4>
          <h4 className="reelase-date">
            IMDB:
            <b>{movie.vote_average ? movie.vote_average.toFixed(1) : "-"}</b>
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={storedmovie}
            onClick={() => addmovietowatchlist(movie)}
          >
            Add to watchlist
          </button>
          <button
            className="btn"
            disabled={addedwatched}
            onClick={() => addmovietowatched(movie)}
          >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resultcart;
