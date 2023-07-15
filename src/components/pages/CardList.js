import React from "react";
import styles from "./CardList.module.css";
import Superherocard from "../common/SuperheroCard/SuperheroCard";

const GridContainer = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        <Superherocard />
        <Superherocard />
        <Superherocard />
        <Superherocard />
        <Superherocard />
        <Superherocard />
        <Superherocard />
        <Superherocard />
        <Superherocard />
        <Superherocard />
        <Superherocard />
      </div>
    </div>
  );
};

export default GridContainer;
