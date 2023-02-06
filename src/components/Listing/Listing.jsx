import React,{useState,useEffect} from 'react'
import './Listing.scss'
import Card from '../../Database/Data.json'
import Preloader from '../Preloader/Preloader'
import {Link} from 'react-router-dom'

const Listing = () => {
  window.addEventListener("scroll",()=>{
    let reveal = document.querySelectorAll(".fadein")
    for(let i = 0 ; i < reveal.length ; i++ ){
        let windheight = window.innerHeight;
        let revealtop = reveal[i].getBoundingClientRect().top;
        let revealpoint = 0;
        if(revealtop < windheight - revealpoint){
            reveal[i].classList.add("active")
        }else{
            reveal[i].classList.remove("active")
        }
    }
})

  const [loading, setloading] = useState(true)
  const onload = () => {
    setloading(false)
  }
  return (
    <div className="app__listing">
        {
            Card.slice(0,18).map((item, i) =>(
        <Link to={`details/${item.id}`} key={i} className="app__listing-item1 item fadein">
            <img onLoad={onload} src={item.cover} alt="" />
            <h2>{item.title}</h2>
            <div className="app__listing-overlay"></div>
          {
            loading &&
            <Preloader/>
          }
        </Link>
            ))
        }

    </div>
  )
}

export default Listing