import { useState } from "react";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";
import styles from "../Cards/Card.module.css";

export default function Card() {

    const [menu, setMenu] = useState(fakeMenu2);

  return (
    <>
        {menu.map((produit) =>(
            <div className={styles.card}>
                <div>
                    <img   alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{produit.title}</div>
                    <div className={styles.description}>description</div>
                </div>
            </div>
         ))}
    </>
  )
}
