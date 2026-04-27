import { useState } from "react"
import { useNavigate } from "react-router-dom";
import globalStyles from "../../../index.module.css"
import styles from "./LoginForm.module.css"
import stylesButton from "../../PrimaryButton/PrimaryButton.module.css"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../TextInput/TextInput";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";



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
        <form  onSubmit={handleSubmit}>
          <div>
            <TextInput 
              value={inputValue}
              onChange={handleChange}
              placeholder={"Entrez votre prénom"}
              required
              Icon={<BsPersonCircle />}
            />
          </div>
             <PrimaryButton
                className={stylesButton.buttonWithIcon}
                label={"Accédez à mon espace" }
                Icon={<IoChevronForward />}
             />
        </form>
    </div>
  )
}
