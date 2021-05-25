import React from "react";
import { useState } from "react"
import styles from "./Card.module.css";
import "./Card-random.css"

function Card({ img, name, id }) {
  const [ clicked, setClicked ] = useState(false)


  function randomizeCards() {
    return Math.floor(Math.random()*9)
  }

  function handleClick (e) {
    setClicked(!clicked)
    console.log(e.currentTarget.dataset.id)
  }

  return (
    <div data-id={id} className={`${styles.container} card-${randomizeCards()} `} onClick={handleClick}>
      <img src={require(`../images/${img}.webp`).default} alt={name}/>
      <p>NAME: {name}</p>
    </div>
  );
}

export default Card;
