import React from "react";
import styles from "./Cards.module.css";

import Card from "./Card"
import { characters } from "./Characters";

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
