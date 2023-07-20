import React, { useState, useEffect } from "react";
import styles from "./SuperheroCard.module.css";
import SuperheroComics from "../SuperheroComics/SuperheroComics";
import star from "./star.png";

const SuperheroCard = ({ id, name, thumbnail }) => {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  const isImageAvailable =
    thumbnail.path !==
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

  // Obtenemos el valor de starClicked del localStorage o lo inicializamos a false
  const [starClicked, setStarClicked] = useState(
    localStorage.getItem(`superhero_${id}`) === "true" ? true : false
  );


  useEffect(() => {
    // Almacenamos el valor de starClicked en el localStorage cada vez que cambie
    localStorage.setItem(`superhero_${id}`, starClicked);
    localStorage.setItem(`superhero_${id}_name`, name);
    localStorage.setItem(`superhero_${id}_imageUrl`, imageUrl); // Almacenar la URL de la imagen en el localStorage
  }, [starClicked, id, name, imageUrl]); 

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

  if (!isImageAvailable) {
    return null; // Si la imagen no está disponible, no se renderiza la card
  }

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
      <div className={styles.shadowOverlayBottom}></div>
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
