import styles from "../Main/Main.module.css"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js"

export default function Main() {


  return (
     <main className={styles.main}>
          <div className={styles.basket}>
            Basket
          </div>
          <div className={styles.menuCards}>
            <div className={styles.card}>Cards
              <div>
                <img src={fakeMenu2[0].imageSource}  alt="" />
              </div>
              <div className={styles.info}>
                <div className={styles.title}>{fakeMenu2[0].title}</div>
                <div className={styles.description}>description</div>
              </div>
            </div>

            <div className={styles.card}>Cards
              <div>Image
                <img  alt="" />
              </div>
              <div className={styles.info}>
                <div className={styles.title}>title</div>
                <div className={styles.description}>description</div>
              </div>
            </div>

            <div className={styles.card}>Cards
              <div>Image
                <img  alt="" />
              </div>
              <div className={styles.info}>
                <div className={styles.title}>title</div>
                <div className={styles.description}>description</div>
              </div>
            </div>

            <div className={styles.card}>Cards
              <div>Image
                <img  alt="" />
              </div>
              <div className={styles.info}>
                <div className={styles.title}>title</div>
                <div className={styles.description}>description</div>
              </div>
            </div>
        
          </div>
     </main>
  )
}
