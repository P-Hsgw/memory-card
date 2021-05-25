import React from "react";
import styles from "./Card.module.css";

function Card({ img, name }) {
  return (
    <div className={styles.container}>
      <p>IMG: {img}</p>
      <p>NAME: {name}</p>
    </div>
  );
}

export default Card;
