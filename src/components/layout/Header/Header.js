import React, { useState } from "react";
import styles from "./Header.module.css";
import SearchIcon from "../../icons/SearchIcon";
import StarIcon from "../../icons/StarIcon";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <header className={styles.headerContainer}>
      <img
        src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"
        alt="Marvel Logo"
        className={styles.logo}
      />
      <div className={styles.separator}></div>
      <SearchIcon className={styles.svg} />
      <input
        type="text"
        placeholder="Buscar"
        className={styles.searchBar}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <StarIcon className={styles.svg} />
      <div className={styles.separator}></div>
    </header>
  );
};

export default Header;
