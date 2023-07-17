import { useEffect, useState } from "react";
import { getSuperheroes } from "../api/superheroes";

const UseSuperheroes = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSuperheroes()
      .then((superheroesList) => {
        setSuperheroes(superheroesList);
        setIsLoading(false);
        console.log(superheroesList);
      })
      .catch((error) => {
        console.error("Error fetching superheroes:", error);
        setIsLoading(false);
      });

    return () => {};
  }, []);

  return { superheroes, isLoading };
};

export default UseSuperheroes;
