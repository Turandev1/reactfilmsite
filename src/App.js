import "./App.css";
import { Header } from "./components/header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Watchlist from "./components/watchlist";
import Add from "./components/add";
import Watched from "./components/watched";
import { Globalprovider } from "./components/context/globalstate";

function App() {
  return (
    <Globalprovider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </Router>
    </Globalprovider>
  );
}

export default App;
