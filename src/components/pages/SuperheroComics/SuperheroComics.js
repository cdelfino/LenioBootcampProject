import React, { useState } from "react";
import styles from "./SuperheroComics.module.css";
import ComicCard from "../../common/ComicCard/ComicCard";
import UseComics from "../../../hooks/UseComics";

const SuperheroComics = ({ superheroId, superheroName }) => {
  const { comics } = UseComics(superheroId);

  const [showComics, setShowComics] = useState(true);
  const handleCrossClick = () => {
    setShowComics(false);
  };

  if (!showComics) {
    return null; // Retorna null para desmontar el componente
  }

  return (
    <div className={styles.comics}>
      <div className={styles.comicContainer}>
        <div className={styles.comicTopBar}>
          <h1>{superheroName}</h1>
          <button>
            <img
              onClick={handleCrossClick}
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/delete-sign.png"
              alt="delete-sign"
            />
          </button>
        </div>
        <div className={styles.comicList}>
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperheroComics;
