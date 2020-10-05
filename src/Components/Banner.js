import React, { useState, useEffect } from "react";
import axios from "../Helpers/axios";
import { api } from "../Helpers/Api-URL";
function Banner(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchBanner = async () => {
      const request = await axios.get(api.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    };
    fetchBanner();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            https://image.tmdb.org/t/p/w500${movie?.backdrop_path}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <div className="banner_button">Play</div>
          <div className="banner_button">My List</div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
