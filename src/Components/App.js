import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { api } from "../Helpers/Api-URL";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={api.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title={"Trending Now"}
        fetchUrl={api.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title={"Top Rated"}
        fetchUrl={api.fetchTopRated}
        isLargeRow={false}
      />
      <Row
        title={"Action Movies"}
        fetchUrl={api.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title={"Comedy Movies"}
        fetchUrl={api.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title={"Horror Movies"}
        fetchUrl={api.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title={"Romance Movies"}
        fetchUrl={api.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title={"Documentaries"}
        fetchUrl={api.fetchDocumentaries}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
