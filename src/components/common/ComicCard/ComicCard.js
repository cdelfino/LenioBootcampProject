import React from "react";
import styles from "./ComicCard.module.css";
import StarIcon from "../../icons/StarIcon";

const ComicCard = ({ comic }) => {
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
          <StarIcon />
        </div>
        <p className={styles.description}>{comic.description}</p>
      </div>
    </div>
  );
};

export default ComicCard;
