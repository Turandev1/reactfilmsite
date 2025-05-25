import { createContext, useEffect, useReducer } from "react";
import Appreducer from "./appreducer";

export const Globalcontext = createContext();
const initialstate = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

export const Globalprovider = (props) => {
  const [state, dispatch] = useReducer(Appreducer, initialstate);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  const addmovietowatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TOWATCHLIST", payload: movie });
  };

  const removemoviefromwatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROMWATCHLIST", payload: id });
  };

  const addmovietowatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TOWATCHED", payload: movie });
  };

  const movetowatchlist = (movie) => {
    dispatch({ type: "MOVE_TOWATCHLIST", payload: movie });
  };
  const removemoviefromwatched = (id) => {
    dispatch({ type: "REMOVE_MOVIEFROM_WATCHED", payload: id });
  };

  return (
    <Globalcontext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addmovietowatchlist,
        removemoviefromwatchlist,
        addmovietowatched,
        movetowatchlist,
        removemoviefromwatched,
      }}
    >
      {props.children}
    </Globalcontext.Provider>
  );
};
