import { Link, useParams } from 'react-router-dom';
import styles from "../order/OrderPage.module.css"

export default function OrderPage() {

  //state 
const {username} = useParams()

  //comportements

  //render
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.navBar}>Navbar
            <div className={styles.rightSide}>
              <h1 className={styles.title}>Bonjour {username}</h1>
              <Link to="/">
                <button>Deconnexion</button>
              </Link>
            </div>
            <div className={styles.leftSide}>  
            </div>
          </nav>
        </header>
        <main className={styles.main}>
          Main
        </main>
      </div>
    </div>
  )
}

