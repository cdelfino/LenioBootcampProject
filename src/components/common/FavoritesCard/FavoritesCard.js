import React from "react";
import styles from "./FavoritesCard.module.css";

const FavoritesCard = ({ superhero }) => {
  return (
    <div key={superhero.id} className={styles.favoritesCard}>
      <img
        src={superhero.imageUrl}
        alt={superhero.name}
        className={styles.favoritesImage}
      />
      <div className={styles.favoritesDetails}>
        <h1 className={styles.favoritesName}>{superhero.name}</h1>

      </div>
    </div>
  );
};

export default FavoritesCard;
