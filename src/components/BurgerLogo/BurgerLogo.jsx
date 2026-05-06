import Logo from  "../../assets/Logo.png";
import styles from "../BurgerLogo/BurgerLogo.module.css"


export default function BurgerLogo({className, onClick}) {
  return (
    <div className={`${styles.logoWrapper} ${className || "" }`}>
        <span className={styles.title}>CRAZEE</span>
        <img
          src={Logo}
          alt="crazee burger logo"
          className={styles.logo}
          onClick={onClick}
        />
        <span className={styles.title}>BURGER</span>
    </div>
  )
}
