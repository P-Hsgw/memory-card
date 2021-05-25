import React from "react";
import styles from "./Cards.module.css"

import Card from "./Card"

function Cards () {

  return (
    <div className={styles.container}>
      <Card />
    </div>
  )
}

export default Cards