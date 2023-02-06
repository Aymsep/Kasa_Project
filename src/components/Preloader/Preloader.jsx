import React from 'react'
import './Preloader.scss'
import {BiLoaderAlt} from 'react-icons/bi'


const Preloader = () => {
  return (
    <div className='app__listing-loading'>
        <BiLoaderAlt/>
    </div>
  )
}

export default Preloader