import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SuperheroesList from "./components/pages/SuperheroesList/SuperheroesList";
import UseSuperheroes from "./hooks/UseSuperheroes";
import FavoritesPage from "./components/pages/FavoritesPage/FavoritesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { superheroes, isLoading } = UseSuperheroes(searchTerm);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route exact path="/favorites" element={<FavoritesPage />}></Route>
          <Route
            path="/"
            element={
              <SuperheroesList
                superheroes={superheroes}
                isLoading={isLoading}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
