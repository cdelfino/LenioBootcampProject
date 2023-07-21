import React from "react";
import { getSuperheroesFromLocalStorage } from "../../common/SuperheroCard/localStorageSuperheroes";
import styles from "./FavoritesPage.module.css";
import FavoriteSuperheroCard from "../../common/FavoriteSuperheroCard/FavoriteSuperheroCard";
import FavoriteComicCard from "../../common/FavoriteComicCard/FavoriteComicCard";
import { getComicsFromLocalStorage } from "../../common/ComicCard/localStorageComics";
const FavoritesPage = () => {
  // Filtrar los superhéroes favoritos
  const favoriteSuperheroes = getSuperheroesFromLocalStorage().filter(
    (superhero) => superhero.isFavorite
  );
  const favoriteComics = getComicsFromLocalStorage().filter(
    (comic) => comic.isFavorite
  );

  return (
    <div className={styles.favoritesContainer}>
      <h1>Favorite Superheroes</h1>
      <div className={styles.favoriteSuperheroes}>
        {favoriteSuperheroes.map((superhero) => (
          <FavoriteSuperheroCard key={superhero.id} superhero={superhero} />
        ))}
      </div>
      <h1>Favorite Comics</h1>
      <div className={styles.favoriteComics}>
        {favoriteComics.map((comic) => (
          <FavoriteComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
