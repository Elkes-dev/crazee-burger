import styles from "../NavBar/NavBar.module.css"
import BurgerLogo from '../../../BurgerLogo/BurgerLogo'
import Profile from './Profile'
import { useParams } from 'react-router-dom'

export default function NavBar() {
    const {username} = useParams()
  return (
       <nav className={styles.navBar}>
            <div className={styles.leftSide}>
                <BurgerLogo  onClick={ () => window.location.reload()}/>
            </div>
            <Profile username={username} />
        </nav>
  )
}
