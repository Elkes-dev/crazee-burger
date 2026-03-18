import { useState } from "react"
import { Link } from "react-router-dom"


export default function LoginForm() {

     // state
    
        const [inputValue, setInputValue] = useState("")
    
        // comportements
        const handleSubmit = (event) => {
          event.preventDefault
          alert(`Bonjour ${inputValue}`)
          setInputValue("")
        }
        
        const handleChange = (event) => {
          setInputValue(event.target.value)
        }
        
        // render
  return (
    <div>
      <h1>Bienvenue chez nous ! </h1>
        <br />
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
            <input
             value={inputValue}
             onChange={handleChange}
             type="text"
             placeholder="Entrez votre prénom..."
             required
             />
             <Link to="/order">
              <button type="submit">
                  Accédez à votre espace
              </button>
            </Link>
        </form>
    </div>
  )
}
