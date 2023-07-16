import React from "react";
import styles from "./SuperheroesList.module.css";
import SuperheroCard from "../../common/SuperheroCard/SuperheroCard";

const SuperheroesList = ({ superheroes, isLoading }) => {
  console.log("hola");
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {superheroes &&
          superheroes.map((superhero) => (
            <SuperheroCard
              key={superhero.id}
              name={superhero.name}
              thumbnail={superhero.thumbnail}
            />
          ))}
      </div>
    </div>
  );
};

export default SuperheroesList;
