import React from "react";
import styles from "./Cards.module.css";

import Card from "./Card"
import { characters } from "./Characters";

// Create cards from json dynamically - object containing img and name
// Add ID to each card
// Render cards randomly
// If =! undefined < Card json data as prop>


function Cards() {
  return (
    <div className={styles.container}>
        {characters.map((item, i) => {
          return <Card key={i} name={item.name} img={item.img} />;
        })}
    </div>
  );
}

export default Cards;
