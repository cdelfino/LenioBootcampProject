import React from "react";
import styles from "./SuperheroesList.module.css";
import SuperheroCard from "../../common/SuperheroCard/SuperheroCard";

const SuperheroesList = ({ superheroes, isLoading }) => {
  // Función de comparación para orden aleatorio
  const compareRandom = () => {
    return Math.random() - 0.5;
  };

  // Ordenar el arreglo de superhéroes de forma aleatoria
  const shuffledSuperheroes = superheroes.sort(compareRandom);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {shuffledSuperheroes.map((superhero) => (
          <SuperheroCard
            key={superhero.id}
            id={superhero.id}
            name={superhero.name}
            thumbnail={superhero.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default SuperheroesList;
