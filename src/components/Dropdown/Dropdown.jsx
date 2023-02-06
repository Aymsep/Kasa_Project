import React,{useState} from 'react'
import './Dropdown.scss'
import {images} from '../../constant'


const Dropdown = ({description,title}) => {
    const [toggle, settoggle] = useState(false)
  return (
    <div className="app__dropdown">
        <div className="app__dropdown-item">
            <p>{title}</p>
            <img src={images.arrow} alt="" onClick={()=>settoggle((prev)=>!prev)} />
        </div>
        {
            toggle &&
        <ul className="app__dropdown-description">
            {console.log(typeof(description))}
            {
                typeof(description) === "object" ?
                description.map((item,index)=>(
                    <li key={index} >{item}</li>
                )) :
                <p>{description}</p>
            }
        </ul>
        }
    </div>
  )
}

export default Dropdown