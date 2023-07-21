import React from "react";
import styles from "./FavoriteComicCard.module.css";

const FavoriteComicCard = ({ comic }) => {
  return (
    <div key={comic.id} className={styles.favoritesCard}>
      <img className={styles.favoritesImage} src={comic.imageUrl} alt="f" />
      <div className={styles.favoritesDetails}>
        <h1 className={styles.favoritesName}>{comic.title}</h1>
        {comic.description !== "null" ? (
          <p className={styles.favoritesDescription}>{comic.description}</p>
        ) : (
          <p className={styles.favoritesDescription}>
            Description not available.
          </p>
        )}
      </div>
    </div>
  );
};

export default FavoriteComicCard;
