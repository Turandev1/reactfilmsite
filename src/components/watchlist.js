import React, { useContext } from "react";
import { Globalcontext } from "./context/globalstate";
import Moviecard from "./moviecard";

function Watchlist() {
  const { watchlist } = useContext(Globalcontext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Izlenecek filmler</h1>
          <div className="count-pill">
            {watchlist.length}
            {watchlist.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <Moviecard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Listenizde henuz film yok</h2>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
