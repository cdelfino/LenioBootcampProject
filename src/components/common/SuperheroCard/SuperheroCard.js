import React, { useState } from "react";
import styles from "./SuperheroCard.module.css";
import SuperheroComics from "../../pages/SuperheroComics/SuperheroComics";

const SuperheroCard = ({ id, name, thumbnail }) => {
  const [showComics, setShowComics] = useState(false);
  const handleClick = () => {
    setShowComics(true);
  };

  const imageUrl = thumbnail.path + "." + thumbnail.extension;

  return (
    <div className={styles.superheroCardContainer} onClick={handleClick}>
      <img className={styles.superheroCard} src={imageUrl} alt={name} />
      <div className={styles.shadowOverlayTop}></div>
      <div className={styles.shadowOverlayBottom}></div> {/* Div de sombra */}
      <h1 className={styles.superheroTitle}>{name}</h1>
      {showComics && <SuperheroComics superheroId={id} />}
    </div>
  );
};

export default SuperheroCard;
