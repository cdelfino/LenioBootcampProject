import { useEffect, useState } from "react";
import { getSuperheroes } from "../api/superheroes";

const UseSuperheroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    getSuperheroes()
      .then((superheroesList) => {
        setSuperheroes(superheroesList);
        console.log(superheroesList);
        // <--- aquí se cambia el estado
      })
      .finally(() => setIsLoading(false));

    return () => {
      // cleanup <-----
    };
  }, []); // <-----

  return { superheroes, isLoading }; // Devuelve un objeto en lugar de un array
};

export default UseSuperheroes;
