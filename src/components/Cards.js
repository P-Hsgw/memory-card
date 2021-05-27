import React from "react";
import { useState } from "react";
import styles from "./Cards.module.css";

import Card from "./Card";
import { characters } from "./Characters";

function Cards() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedId, setClickedId] = useState([]);

  function handleScore(currentId) {
    if (clickedId.includes(currentId) && topScore < currentScore) {
      setTopScore(currentScore);
      setCurrentScore(0);
      setClickedId([]);
    } else if (clickedId.includes(currentId)) {
      setCurrentScore(0);
      setClickedId([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedId([...clickedId, currentId]);
    }
  }

  return (
    <div className={styles.container}>
      {characters.map((item, i) => {
        return (
          <Card
            key={i}
            name={item.name}
            img={item.img}
            id={i}
            click={handleScore}
          />
        );
      })}
    </div>
  );
}

export default Cards;
