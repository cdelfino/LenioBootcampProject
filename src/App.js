import React from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SuperheroesList from "./components/pages/SuperheroesList";
import UseSuperheroes from "./hooks/UseSuperheroes";
import SuperheroCard from "./components/common/SuperheroCard/SuperheroCard";

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
    </div>
  );
}

export default App;
