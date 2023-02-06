import React,{useState} from 'react'
import './Navbar.scss'
import { images } from '../../constant'

import { Link } from 'react-router-dom'
import {BsFillHouseFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  return (
    <div className='app__navbar'>

      <nav className="app__navbar-wrapper">
        {/* logo */}
        <div className="app__navbar-logo">
          <Link 
          onClick={()=>setSelected('Home')}
          to='/' >
          <img src={images.Logo} alt="" />  
          </Link>
        </div>

        {/* navbar links */}
        <ul className="app__navbar-links">

          <li>
            <Link 
            className={selected == 'Home'?'active':''}
            onClick={()=>setSelected('Home')}
            to="/">Accueil</Link>
            </li>

          <li>
            <Link 
            className={selected == 'apropos'?'active':''}
            onClick={()=>setSelected('apropos')}
            to="/apropos">A propos</Link>
            </li>

         

        </ul>

      <div className="app__navbar-mobile">
          <AiOutlineMenu/>
      </div>

      </nav>





    </div>
  )
}

export default Navbar