import "./App.css";
import { useState, useEffect } from "react";
import { movies$ } from "./data/movies.js";
import MovieList from "./components/MovieList";

function App() {
  const [moviesFilme, setMoviesRequest] = useState(null);

  useEffect(() => {
    movies$.then((data) => setMoviesRequest(data));
  }, [moviesFilme]);

  console.log(moviesFilme);



  return (
    <div className="App">
       
        <h1>Movies </h1>
   
      {moviesFilme ? <MovieList moviesFilme={moviesFilme} /> : null}
    </div>
  );
}

export default App;
