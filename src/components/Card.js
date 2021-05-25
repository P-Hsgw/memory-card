import React from "react";
import styles from "./Card.module.css";
import "./Card-random.css"

function Card({ img, name }) {
  return (
    <div className={`${styles.container} card-${Math.floor(Math.random()*8)}`}>
      <img src={require(`../images/${img}.webp`).default} />
      <p>NAME: {name}</p>
    </div>
  );
}

export default Card;
