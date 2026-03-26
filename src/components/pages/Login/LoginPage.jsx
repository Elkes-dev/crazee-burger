import BurgerLogo from "../../BurgerLogo/BurgerLogo"
import LoginForm from "./LoginForm"
import styles from "./LoginPage.module.css"
import bg from "../../../assets/background-burger.jpg"

export default function LoginPage(){

    return(
        <div 
            className={styles.mainContainer}
            style={{ backgroundImage: ` url(${bg}) ` }}
        >
            <BurgerLogo />
            <LoginForm />
        </div>
    )
}