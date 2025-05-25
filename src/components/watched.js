import React, { useContext } from "react";
import { Globalcontext } from "./context/globalstate";
import Moviecard from "./moviecard";

function Watched() {
  const { watched } = useContext(Globalcontext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Izlenenler</h1>
          <div className="count-pill">
            {watched.length}
            {watched.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <Moviecard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Listede film yok</h2>
        )}
      </div>
    </div>
  );
}

export default Watched;
