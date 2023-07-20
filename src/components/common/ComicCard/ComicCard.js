import React, { useState, useEffect } from "react";
import styles from "./ComicCard.module.css";

import star from "../../icons/star.png";

const ComicCard = ({ comic }) => {
  const [starClicked, setStarClicked] = useState(
    localStorage.getItem(`comic_${comic.id}`) === "true" ? true : false
  );

  useEffect(() => {
    // Almacenamos el valor de starClicked en el localStorage cada vez que cambie
    localStorage.setItem(`comic_${comic.id}`, starClicked);
    localStorage.setItem(`comic_${comic.id}title`, comic.title);
  }, [starClicked, comic.id, comic.title, ]);

  const handleStarClick = () => {
    setStarClicked(!starClicked);
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{comic.title}</h2>

          <div className={styles.starIconContainer} onClick={handleStarClick}>
            <img
              src={star}
              alt="Star"
              className={`${styles.starIcon} ${
                starClicked ? styles.starClicked : ""
              }`}
            />
          </div>
        </div>
        <p className={styles.description}>{comic.description}</p>
      </div>
    </div>
  );
};

export default ComicCard;
