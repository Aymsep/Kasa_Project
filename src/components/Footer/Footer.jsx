import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../constant'
import './Footer.scss'


const Footer = () => {
  return (
    <div className="app__Footer">
        <div>

         <Link to='/' >
            <img src={images.Logo_white} alt="" />
          </Link>
          <h1>© 2020 Kasa. All rights reserved</h1>
        </div>
    </div>
  )
}

export default Footer