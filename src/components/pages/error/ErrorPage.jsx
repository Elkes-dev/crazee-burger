import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
        <h1>ErrorPage</h1>
        <Link to="/">
        <button type='Submit'>
            Retourner à la page d'accueil
        </button>
      </Link>
    </div>
  )
}
