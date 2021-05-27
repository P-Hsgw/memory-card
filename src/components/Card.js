import React, { useEffect } from "react";
import { useState } from "react"
import styles from "./Card.module.css";
import "./Card-random.css"

function Card({ img, name, id, click }) {
  const [ cardId, setCardId ] = useState(undefined)

  useEffect(() => {
    setCardId(Math.floor(Math.random()*9)) 
  }, [])


  function handleClick (e) {
    setCardId(Math.floor(Math.random()*9))
    click(e.currentTarget.dataset.id)
  }

  return (
    <div data-id={id} className={`${styles.container} card-${cardId}`} onClick={handleClick}>
      <img src={require(`../images/${img}.webp`).default} alt={name}/>
      <p>NAME: {name}</p>
    </div>
  );
}

export default Card;
