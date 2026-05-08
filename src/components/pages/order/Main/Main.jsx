import styles from "../Main/Main.module.css"
import Cards from "./Cards/Cards.jsx"

export default function Main() {


  return (
     <main className={styles.main}>
          <div className={styles.basket}>
            Basket
          </div>
          <Cards />
     </main>
  )
}
