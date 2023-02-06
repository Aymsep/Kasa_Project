import React from 'react'
import './Notfound.scss'
import { Link } from 'react-router-dom'


const Notfound = () => {
  return (
    <div className='app__notfound'>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to='/'>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Notfound