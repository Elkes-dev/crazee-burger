import BurgerLogo from "../../BurgerLogo/BurgerLogo"
import LoginForm from "./LoginForm"
import styles from "./LoginPage.module.css"


export default function LoginPage(){

    return(
        <div 
            className={styles.mainContainer}
        >
            <BurgerLogo  className={styles.logoLoginPage}/>
            <LoginForm />
        </div>
    )
}