const appReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case "ADD_MOVIE_TOWATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "REMOVE_MOVIE_FROMWATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TOWATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      };
    case "MOVE_TOWATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [...state.watchlist, action.payload],
      };
    case "REMOVE_MOVIEFROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};

export default appReducer;
