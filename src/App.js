import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SuperheroesList from "./components/pages/SuperheroesList/SuperheroesList";
import UseSuperheroes from "./hooks/UseSuperheroes";
import Loading from "./components/pages/Loading/Loading";
import FavoritesPage from "./components/pages/FavoritesPage/FavoritesPage";
import { getSuperheroesFromLocalStorage } from "./components/common/SuperheroCard/localStorage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { superheroes, isLoading } = UseSuperheroes(searchTerm);
  const favoriteSuperheroes = getSuperheroesFromLocalStorage();
console.log(favoriteSuperheroes, "hoal");
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      {isLoading ? <Loading /> : <SuperheroesList superheroes={superheroes} />}
    </div>
  );
}

export default App;
