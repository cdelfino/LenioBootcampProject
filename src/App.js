import React from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SuperheroesList from "./components/pages/SuperheroesList/SuperheroesList";
import UseSuperheroes from "./hooks/UseSuperheroes";
import SuperheroComics from "./components/pages/SuperheroComics/SuperheroComics";

function App() {
  const { superheroes, isLoading } = UseSuperheroes(); // Utiliza el hook como 'UseSuperheroes'

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <div>Loading...</div> /*------falta darle estilos al loading------*/
      ) : (
        <SuperheroesList superheroes={superheroes} isLoading={isLoading} />
      )}
      <SuperheroComics/>
    </div>
  );
}

export default App;
