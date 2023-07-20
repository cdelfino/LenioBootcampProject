import React from "react";
import { getSuperheroesFromLocalStorage } from "../../common/SuperheroCard/localStorage";
import styles from "./FavoritesPage.module.css";

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
          <div key={superhero.id} className={styles.favoritesCard}>
            <img
              src={superhero.imageUrl}
              alt={superhero.name}
              className={styles.favoritesImage}
            />
            <div className={styles.favoritesDetails}>
              <h1 className={styles.favoritesName}>{superhero.name}</h1>
              {/* Agrega aquí cualquier otra información que desees mostrar */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
