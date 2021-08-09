import React, { useState } from "react";

import MovieCard from "./MovieCard";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=ae0e8159b5751b125bc699843934f406&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">
          <span className="label--title">Search for a movie:</span>
        </label>
        <input
          type="text"
          name="query"
          placeholder="Enter movie title"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Go
        </button>
      </form>
      <div className="card-list">
        {movies.map(
          (movie) =>
            movie.poster_path != null && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
}
