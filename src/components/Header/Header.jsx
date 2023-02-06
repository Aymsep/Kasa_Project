import React from 'react'
import './Header.scss'

const Header = ({image,text}) => {
  return (
    <div className="app__header">
        <img className='app__heade-img' src={image} alt="" />
        <h1 className='app__header-title'>{text}</h1>
    </div>
  )
}

export default Header