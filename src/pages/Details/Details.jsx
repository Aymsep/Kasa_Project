import React,{useState} from 'react'
import './Details.scss'
import { useParams } from 'react-router-dom'
import { images } from '../../constant'
import Slider from '../../components/Slider/Slider'
import Rating from '../../components/Rating/Rating'
import Dropdown from '../../components/Dropdown/Dropdown'
import current_cards from '../../Database/Data.json'
import Notfound from '../../pages/Notfound/Notfound'


const Details = () => {
  const {id} = useParams()
  const current_card = current_cards.find(card => card.id === id)
  if(current_card === undefined) {
    return <>
    <Notfound />
    </>
  }
  
  
  
  return(
    <div className="app__details">
      <Slider pictures={current_card.pictures} />
      <div className="app__details-info">

        <div className="app__details-preinfo">
          <h1>{current_card.title}</h1>
          <p>{current_card.location}</p>
          {
            current_card.tags.map((item,i) =>(
              <span key={i}>{item}</span>

            ))
          }
        </div>

        <div className="app__details-owner">

          <div className="app__details-image">
            <h2>{current_card.host.name}</h2>
            <img src={current_card.host.picture} alt="house owner image"   />
          </div>
          
          <Rating number={current_card.rating}/>

        </div>

      </div>
      <div className="app__details-dropdown">
        <Dropdown title="Description" description={current_card.description} />
        <Dropdown title="Equipement" description={current_card.equipments}   />
      </div>

    </div>
  )
}

export default Details