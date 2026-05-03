import Logo from  "../../assets/Logo.png";
import styles from "../BurgerLogo/BurgerLogo.module.css"


export default function BurgerLogo({className}) {
  return (
    <div className={`${styles.logoWrapper} ${className || "" }`}>
        <span className={styles.title}>CRAZEE</span>
        <img
          src={Logo}
          alt="crazee burger logo"
          className={styles.logo}
        />
        <span className={styles.title}>BURGER</span>
    </div>
  )
}
