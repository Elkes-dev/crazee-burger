import { Link, useParams } from 'react-router-dom';
import styles from "../order/OrderPage.module.css"

export default function OrderPage() {

  //state 
const {username} = useParams()

  //comportements

  //render
  return (
    <div>
      <h1 className={styles.title}>Bonjour {username}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  )
}

