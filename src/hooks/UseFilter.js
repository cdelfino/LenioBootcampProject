import { useState, useEffect } from "react";

const useFilter = (superheroes, searchTerm) => {
  const [filteredSuperheroes, setFilteredSuperheroes] = useState([]);
console.log(searchTerm);
  useEffect(() => {
    if (searchTerm) {
      const filtered = superheroes.filter((superhero) =>
        superhero.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuperheroes(filtered);
    } else {
      setFilteredSuperheroes(superheroes);
    }
  }, [superheroes, searchTerm]);
console.log(filteredSuperheroes);
  return filteredSuperheroes;
};

export default useFilter;
