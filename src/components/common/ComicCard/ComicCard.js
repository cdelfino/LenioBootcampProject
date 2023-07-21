import React, { useState, useEffect } from "react";
import styles from "./ComicCard.module.css";

import star from "../../icons/star.png";

const ComicCard = ({ id, title, thumbnail, path, extension, description }) => {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  const [starClicked, setStarClicked] = useState(
    localStorage.getItem(`comic_${id}`) === "true" ? true : false
  );

  useEffect(() => {
    // Almacenamos el valor de starClicked en el localStorage cada vez que cambie
    localStorage.setItem(`comic_${id}`, starClicked);
    localStorage.setItem(`comic_${id}_title`, title);
    localStorage.setItem(`comic_${id}_imageUrl`, imageUrl);
    localStorage.setItem(`comic_${id}_description`, description);
  }, [starClicked, id, title, imageUrl, description]);

  const handleStarClick = () => {
    setStarClicked(!starClicked);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>

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
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ComicCard;
