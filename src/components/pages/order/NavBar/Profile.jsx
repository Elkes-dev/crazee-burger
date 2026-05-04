import { Link } from "react-router-dom"
import styles from "../NavBar/Profile.module.css"
import { BsPersonCircle } from "react-icons/bs";

export default function Profile({username}) {
  return (
    <div className={styles.rightSide}>
        <div className={styles.info}>
            <p className={styles.title}>
                Hey, <b> {username} </b>
            </p>
            <Link to="/">
                <div className={styles.description}>    
                    <small>
                        Se déconnecter
                    </small>
                </div>
            </Link>
        </div>
        <div className={styles.picture}>
            <BsPersonCircle />
        </div>
    </div>
  )
}
