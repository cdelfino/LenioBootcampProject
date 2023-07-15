import React from "react";
import styles from "./SuperheroCard.module.css";

const SuperheroCard = ({ name, thumbnail }) => {
  const imageUrl = thumbnail.path + "." + thumbnail.extension;

  return (
    <div className={styles.superheroCardContainer}>
      <img className={styles.superheroCard} src={imageUrl} alt={name} />
      <div className={styles.shadowOverlayTop}></div>
      <div className={styles.shadowOverlayBottom}></div> {/* Div de sombra */}
      <h1>{name}</h1>
    </div>
  );
};

export default SuperheroCard;
