import React from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SuperheroCard from "./components/common/SuperheroCard/SuperheroCard";
import CardList from "./components/pages/CardList";

function App() {
  return (
    <div className="App">
      <Header />
      <CardList/>
    </div>
  );
}

export default App;
