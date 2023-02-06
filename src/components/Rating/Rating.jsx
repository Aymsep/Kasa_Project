import React from 'react'
import { images } from '../../constant'
import './Rating.scss'


const Rating = ({number}) => {
    let filled = []
    let i = 1
    const stars = (num = 5)=>{
        for(i; i <= num; i++){
            filled.push(images.filled_star)
        }
        for(i; i <= 5; i++){
            filled.push(images.empty_star)
        }
        return [filled]
    }
    let list_stars = stars(number)
  return (
    <div className='app__rating'>
        {
           list_stars.map((item)=>(

                item.map((image,index)=>(
                    <img src={image} key={index} alt="house" height={36} width={36} />
                ))
           ))
        }
    </div>
  )
}

export default Rating