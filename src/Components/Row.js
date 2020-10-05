import React, { useState, useEffect } from "react";
import axios from "../Helpers/axios";
import "../Row.css";
const base_url = "https://image.tmdb.org/t/p/w500";
const Row = ({ fetchUrl, title, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchMovie();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_poster_large"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt="posters"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
