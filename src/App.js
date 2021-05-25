import styles from "./App.module.css"

import Header from "./components/Header";
import Cards from "./components/Cards"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Cards />
    </div>
  );
}

export default App;
