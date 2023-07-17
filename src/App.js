import React from "react";
import "./App.css";


import Header from "./components/layout/Header/Header";
import SuperheroesList from "./components/pages/SuperheroesList/SuperheroesList";
import UseSuperheroes from "./hooks/UseSuperheroes";
import Loading from "./components/pages/Loading/Loading";

function App() {
  const { superheroes, isLoading } = UseSuperheroes();

  return (
    <div className="App">
      <Header />

      {isLoading ? (
       <Loading/>
      ) : (
        <SuperheroesList superheroes={superheroes} />
      )}
    </div>
  );
}

export default App;
