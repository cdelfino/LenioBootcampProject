import React, { useState, useEffect } from "react";
import styles from "./SuperheroCard.module.css";
import SuperheroComics from "../SuperheroComics/SuperheroComics";
import star from "./star.png";

const SuperheroCard = ({ id, name, thumbnail }) => {
  // Obtenemos el valor de starClicked del localStorage o lo inicializamos a false
  const [starClicked, setStarClicked] = useState(
    localStorage.getItem(`superhero_${id}`) === "true" ? true : false
  );

  useEffect(() => {
    // Almacenamos el valor de starClicked en el localStorage cada vez que cambie
    localStorage.setItem(`superhero_${id}`, starClicked);
    localStorage.setItem(`superhero_${id}_name`, name); // Almacenamos el name en el localStorage
  }, [starClicked, id, name]); // Asegúrate de incluir name en la dependencia de useEffect

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("se cerro");
    setIsModalOpen(false);
  };

  const modalClassName = isModalOpen
    ? `${styles.modalOverlay} ${styles.modalOpen}`
    : `${styles.modalOverlay} ${styles.modalClosed}`;

  const handleClose = () => {
    handleCloseModal();
  };

  const handleStarClick = () => {
    setStarClicked(!starClicked);
  };

  const imageUrl = thumbnail.path + "." + thumbnail.extension;

  return (
    <div className={styles.superheroCardContainer}>
      <img className={styles.superheroCard} src={imageUrl} alt={name} />
      <div className={styles.starIconContainer} onClick={handleStarClick}>
        <img
          src={star}
          alt="Star"
          className={`${styles.starIcon} ${
            starClicked ? styles.starClicked : ""
          }`}
        />
      </div>
      <div className={styles.shadowOverlayTop} onClick={handleOpenModal}></div>
      <div className={styles.shadowOverlayBottom}></div> {/* Div de sombra */}
      <h1 className={styles.superheroTitle}>{name}</h1>
      <div className={modalClassName}>
        {isModalOpen && (
          <SuperheroComics
            superheroId={id}
            superheroName={name}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default SuperheroCard;
