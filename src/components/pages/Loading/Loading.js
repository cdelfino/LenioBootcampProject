import React from "react";
import styles from "./Loading.module.css";
import loading from "./loading.gif";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
