import styles from "../Menu/Card.module.css";


export default function Card({title, imageSource, leftContent}) {

  return (
            <div className={styles.card} >
                <div className={styles.imageContainer}>
                    <img src={imageSource}  alt="produit menu" className={styles.image} />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.infoText}>
                        <div className={styles.price}>{leftContent}</div>
                        <button className={styles.addButton}>
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
  )
}
