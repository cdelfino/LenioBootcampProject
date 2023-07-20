import React from "react";
import { getSuperheroesFromLocalStorage } from "../../common/SuperheroCard/localStorageSuperheroes";
import styles from "./FavoritesPage.module.css";
import FavoritesCard from "../../common/FavoritesCard/FavoritesCard";

const FavoritesPage = () => {
  // Filtrar los superhéroes favoritos
  const favoriteSuperheroes = getSuperheroesFromLocalStorage().filter(
    (superhero) => superhero.isFavorite
  );

  return (
    <div className={styles.favoritesContainer}>
      <h1>Mis favoritos</h1>
      <div className={styles.favorites}>
        {favoriteSuperheroes.map((superhero) => (
         <FavoritesCard key={superhero.id} superhero={superhero} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
