import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import globalStyles from "../../../index.module.css"
import styles from "./LoginForm.module.css"


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
    <div className={styles.headerForm}>
      <h1 className={globalStyles.h1}>Bienvenue chez nous ! </h1>
        <br />
        <h2 className={globalStyles.h2}>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
            <input
             value={inputValue}
             onChange={handleChange}
             type="text"
             placeholder="Entrez votre prénom"
             required
             />
              <button type="submit" >
                  Accédez à mon espace
              </button>
        </form>
    </div>
  )
}
