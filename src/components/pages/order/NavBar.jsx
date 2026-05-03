import { Link } from 'react-router-dom'
import styles from '../order/NavBar.module.css'
import BurgerLogo from '../../BurgerLogo/BurgerLogo'

export default function NavBar({username}) {
  return (
       <nav className={styles.navBar}>
            <div className={styles.leftSide}>
                <BurgerLogo />
            </div>
            <div className={styles.rightSide}>
                <h1 className={styles.title}>Bonjour {username}</h1>
                <Link to="/">
                <button>Deconnexion</button>
                </Link>
            </div>
        </nav>
  )
}
