import React, { useEffect } from "react";
import { useState } from "react"
import styles from "./Card.module.css";
import "./Card-random.css"

function Card({ img, name, id }) {
  const [ clicked, setClicked ] = useState(false)
  const [ cardId, setCardId ] = useState(undefined)

  // Trzymac numer card- w stanie i aktualizowac go przy kazdym kliknieciu
  // Przy renderze generuje sie jeden numer od 0 do 9
  // Przy kliknieciu sie zmienia

  useEffect(() => {
    setCardId(Math.floor(Math.random()*9)) 
  }, [])


  function handleClick (e) {
    setClicked(!clicked)
    setCardId(Math.floor(Math.random()*9))

  }

  return (
    <div data-id={id} className={`${styles.container} card-${cardId}`} onClick={handleClick}>
      <img src={require(`../images/${img}.webp`).default} alt={name}/>
      <p>NAME: {name}</p>
    </div>
  );
}

export default Card;
