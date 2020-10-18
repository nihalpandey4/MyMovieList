import React from 'react';
import Row from "./Row"
import Banner from "./Banner";
import requests from "../apis/requests"; 
import "./App.css"
const App =()=>{
  return (
    <div className = "App">
      <Banner />
      <Row title = "Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLarge />
      <Row title = "Trending Now" fetchUrl = {requests.fetchTrendingNow} />
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title ="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  )
}

export default App;
