import { useState } from "react";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";
import styles from "../Menu/Card.module.css";


export default function Card() {

    const [menu, setMenu] = useState(fakeMenu2);

  return (
    <>
        {menu.map((produit) =>(
            <div className={styles.card} key={produit.id}>
                <div>
                    <img src={produit.imageSource}  alt="produit menu" className={styles.image} />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{produit.title}</div>
                    <div className={styles.infoText}>
                        <div className={styles.prix}>{produit.price}</div>
                        <button className={styles.addButton}>
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
         ))}
    </>
  )
}
