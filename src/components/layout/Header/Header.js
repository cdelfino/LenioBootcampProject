import React, { useState } from "react";
import styles from "./Header.module.css";
import SearchIcon from "../../icons/SearchIcon";
import StarIcon from "../../icons/StarIcon";
import { Link } from "react-router-dom";

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
     <Link to="/"> <img
        src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"
        alt="Marvel Logo"
        className={styles.logo}
      /></Link>
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
      <Link to="/favorites" className={styles.link}>
        <StarIcon className={styles.svg} />
      </Link>
      <div className={styles.separator}></div>
    </header>
  );
};

export default Header;
