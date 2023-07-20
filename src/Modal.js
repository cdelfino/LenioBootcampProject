import React from "react";
import styles from "./Modal.module.css"; // Asegúrate de usar el nombre correcto del archivo de estilos

const Modal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen
    ? `${styles.modalOverlay} ${styles.open}`
    : `${styles.modalOverlay} ${styles.displayNone}`; // Agregar la clase displayNone al cerrar el modal

  const handleClose = () => {
    onClose(); // Llamar a la función onClose para cerrar el modal
  };

  return (
    <div className={modalClassName}>
      <div className={styles.modalContent}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button className={styles.modalCloseButton} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
