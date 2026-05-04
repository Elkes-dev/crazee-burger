import styles from "../order/OrderPage.module.css"
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';


export default function OrderPage() {

  //state 


  //comportements

  //render
  return (
    <div className={styles.page}>
      <div className={styles.container}>
         <NavBar  />
         <Main />
      </div>
    </div>
  )
}

