import Logo from  "../../assets/Logo.png";
import styles from "../BurgerLogo/BurgerLogo.module.css"

export default function BurgerLogo() {
  return (
    <>
      <h1 className={styles.title}>
        <span>CRAZEE</span>
        <img src={Logo}  alt="crazee burger logo"  className={styles.logo}/>
        <span>BURGER</span>
      </h1>
    </>
  )
}
