import React, { useContext } from "react";
import { Globalcontext } from "./context/globalstate";

function Moviecontrols({ movie, type }) {
  const {
    removemoviefromwatchlist,
    addmovietowatched,
    movetowatchlist,
    removemoviefromwatched,
  } = useContext(Globalcontext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addmovietowatched(movie)}>
            <i className="fa-fw far fa-eye "></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removemoviefromwatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times "></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => movetowatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash "></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removemoviefromwatched(movie.id)}
          >
            <i className="fa-fw fa fa-times "></i>
          </button>
        </>
      )}
    </div>
  );
}

export default Moviecontrols;
