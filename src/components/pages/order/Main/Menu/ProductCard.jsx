import styles from "../Menu/ProductCard.module.css";


export default function ProductCard({title, imageSource, price}) {

  return (
            <div className={styles.card} >
                <div className={styles.imageContainer}>
                    <img src={imageSource}  alt="produit menu" className={styles.image} />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.infoText}>
                        <div className={styles.price}>{price}</div>
                        <button className={styles.addButton}>
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
  )
}
