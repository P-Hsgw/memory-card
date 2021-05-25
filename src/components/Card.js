import React from "react";
import styles from "./Card.module.css";

function Card({ img, name }) {
  return (
    <div className={styles.container}>
      <img src={require(`../images/${img}.webp`).default} />
      <p>NAME: {name}</p>
    </div>
  );
}

export default Card;
