import React from 'react';
import User from "./components/User";
import Movies from "./components/Movies.";
import "./index.scss"
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/TopRated";
import DetailPage from "./components/Pages/DetailPage";

function App() {
  return (
      <div>


          <Routes>
              <Route path={'/'} element={<Movies/>}/>
              <Route path={'/NowPlaying'} element={<NowPlaying/>}/>
              <Route path={'/Popular'} element={<Popular/>}/>
              <Route path={'/TopRated'} element={<TopRated/>}/>
              <Route path={'/movies/movie-detail/:movieId'} element={<DetailPage/>}/>
          </Routes>



      </div>
  );
}

export default App;
