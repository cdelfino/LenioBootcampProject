import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SuperheroesList from "./components/pages/SuperheroesList/SuperheroesList";
import UseSuperheroes from "./hooks/UseSuperheroes";
import Loading from "./components/pages/Loading/Loading";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { superheroes, isLoading } = UseSuperheroes(searchTerm);

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
