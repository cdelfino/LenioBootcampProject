import { useEffect, useState } from "react";
import { getSuperheroes } from "../api/superheroes";

const UseSuperheroes = (searchTerm) => {
  const [superheroes, setSuperheroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSuperheroes(searchTerm)
      .then((superheroesList) => {
        setSuperheroes(superheroesList);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching superheroes:", error);
        setIsLoading(false);
      });
  }, [searchTerm]);

  return { superheroes, isLoading };
};

export default UseSuperheroes;
