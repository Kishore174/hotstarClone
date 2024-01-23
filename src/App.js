// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import LoginDialog from "./components/LoginDialog";
import NewHome from "./components/new";
import Movies from "./components/movies";
import Sports from "./components/sports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginDialog />} />
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<NewHome />} />
          <Route path="/tv" element={<NewHome />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/sports" element={<Sports/>} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
