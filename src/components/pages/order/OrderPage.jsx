import { Link, useParams } from 'react-router-dom';
import styles from "../order/OrderPage.module.css"
import NavBar from './NavBar';
import Main from './Main';

export default function OrderPage() {

  //state 
const {username} = useParams()

  //comportements

  //render
  return (
    <div className={styles.page}>
      <div className={styles.container}>
         <NavBar username={username} />
         <Main />
      </div>
    </div>
  )
}

