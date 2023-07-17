import { useState, useEffect } from "react";
import { getSuperheroComics } from "../api/comics";

const UseComics = (superheroId) => { // Agregar superheroId como parámetro
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getSuperheroComics(superheroId).then((superheroComics) => { // Pasar superheroId a getSuperheroComics
      setComics(superheroComics);
      console.log(superheroComics);
    });

    return () => {};
  }, [superheroId]); // Agregar superheroId como dependencia en useEffect

  return { comics };
};

export default UseComics;
