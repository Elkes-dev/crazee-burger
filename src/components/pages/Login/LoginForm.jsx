import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import globalStyles from "../../../index.module.css"
import styles from "./LoginForm.module.css"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";


export default function LoginForm() {

     // state
    
        const [inputValue, setInputValue] = useState("")
        const navigate = useNavigate();
    
        // comportements
        const handleSubmit = (event) => {
          event.preventDefault();
          setInputValue("")
          navigate(`/order/${inputValue}`)
        }
        
        const handleChange = (event) => {
          setInputValue(event.target.value)
        }
        
        // render
  return (
    <div className={styles.loginForm}>
      <div className={styles.headerForm}>
        <h1 className={globalStyles.h1}>Bienvenue chez nous ! </h1>
          <hr />
          <h2 className={globalStyles.h2}>Connectez-vous</h2>
      </div>
        <form action="submit" onSubmit={handleSubmit}>
          <div className={styles.inputWithIcon}>
            <BsPersonCircle className="icon"/>
            <input
             value={inputValue}
             onChange={handleChange}
             type="text"
             placeholder="Entrez votre prénom"
             required
             />
          </div>
              <button className={styles.buttonWithIcon}>
                <span> Accédez à mon espace </span>
                <IoChevronForward  className={styles.colorTextButton}/>
              </button>
        </form>
    </div>
  )
}
