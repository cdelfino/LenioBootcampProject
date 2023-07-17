import { useEffect, useState } from "react";
import { getSuperheroes } from "../api/superheroes";

const UseSuperheroes = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    getSuperheroes().then((superheroesList) => {
      setSuperheroes(superheroesList);
      console.log(superheroesList);
    });

    return () => {};
  }, []);

  return { superheroes };
};

export default UseSuperheroes;
