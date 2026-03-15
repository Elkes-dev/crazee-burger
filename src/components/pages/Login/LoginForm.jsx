import { useState } from "react"

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
      <h1>BIENVENUE CHEZ NOUS</h1>
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
            <button type="submit">
                Accédez à votre espace
            </button>
        </form>
    </div>
  )
}
