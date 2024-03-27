import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./comp/SearchBar";
import { useState } from "react";
import SearchList from "./comp/SearchList";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchList results={results} />
      </div>
    </div>
  );
}

export default App;
