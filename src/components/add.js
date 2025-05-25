import React, { useState } from "react";
import Resultcart from "./resultcart";

function Add() {
  const [query, setquery] = useState("");
  const [results, setresults] = useState([]);

  function onchange(e) {
    setquery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&query=${encodeURIComponent(e.target.value)}&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setresults(data.results);
        } else {
          setresults([]);
        }
      });
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src="/logo.webp" alt="logo" />
          <div className="titles">
            <h1>Hos geldiniz</h1>
            <h3>Milyonlarca film ve dizi burda.Simdi kesfetmeye basla...</h3>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Film,dizi,kisi ara..."
              onChange={onchange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <Resultcart movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
