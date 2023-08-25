
import { Container } from "react-bootstrap";
// import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
import MoviesList from "./Componants/MovieList";
import MovieDetails from "./Componants/MovieDetails";
import NavBar from "./Componants/NavBar";

function App() {
 

  return (
    <div className="font color-body ">
      <NavBar/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
