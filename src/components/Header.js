import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header({ currentScore, topScore }) {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    setScore(currentScore);
    setMaxScore(topScore);
  }, [currentScore, topScore]);

  return (
    <header className={styles.header}>
      <h1>Memory Card Game</h1>
      <h2>CURRENT SCORE: {score} </h2>
      <h2>TOP SCORE: {maxScore}</h2>
    </header>
  );
}

export default Header;
