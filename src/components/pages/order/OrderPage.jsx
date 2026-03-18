import { Link } from 'react-router-dom'

export default function OrderPage() {
  return (
    <div>
      <h1>Bienvenue</h1>
      <Link to="/">
        <button type='submit'>Deconnexion</button>
      </Link>
    </div>
  )
}

