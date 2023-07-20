import React, { useState } from "react";
import styles from "./SuperheroCard.module.css";
import SuperheroComics from "../../pages/SuperheroComics/SuperheroComics";
import star from "./star.png";

const SuperheroCard = ({ id, name, thumbnail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('se cerro')
    setIsModalOpen(false);
  };

  const modalClassName = isModalOpen
    ? `${styles.modalOverlay} ${styles.modalOpen}`
    : `${styles.modalOverlay} ${styles.modalClosed}`;

  const handleClose = () => {
    handleCloseModal();
  };

  const [starClicked, setStarClicked] = useState(false);
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
      <div className={styles.shadowOverlayTop}onClick={handleOpenModal}></div>
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
        <div className={styles.modalContent}>
          <button className={styles.modalCloseButton} onClick={handleClose}>
            cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperheroCard;
