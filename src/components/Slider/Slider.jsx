import React,{useState} from 'react'
import { images } from '../../constant'
import Preloader from '../Preloader/Preloader'
import './Slider.scss'

const Slider = ({pictures}) => {
  const [loading, setloading] = useState(true)
  const onload = () => {
    setloading(false)
  }
    const [indeximg, setIndeximg] = useState(1)
    const imgsize = () =>{
      const slideimag = document.querySelector('.app__slider img')
      if(!slideimag){
        return 0; 
      }
      return slideimag.width;
    }
    
    const next = ()=>{
      if(indeximg === pictures.length - 1){
        setIndeximg(1)
      }else{
        setIndeximg(indeximg + 1)
      }
    }
    
    const prev = ()=>{
      if(indeximg <=1 ){
        setIndeximg(pictures.length - 1)
      }else{
        setIndeximg(indeximg - 1)
      }
    }
    
    
    console.log(imgsize())
    
    
    
      return (
        
        <div className="app__Slider-wrapper">
          <div className="app__slider" style={{transform: `translateX(-${indeximg * imgsize()}px)`}} >
            {
              pictures.map((item,index)=>(
                <img onLoad={onload} src={item} alt="" key={index} />
              ))
            }
            {
              loading && 
              <Preloader/>
            }
          </div>
          <div className="app__slider-controls">
            <img src={images.vector_left} onClick={prev} alt=""   />
            <img src={images.vector_right}  onClick={next} alt="" />
          </div>
          <div className="app__slider-index">
            <h3>{`${indeximg}/${pictures.length - 1}`}</h3>
          </div>
          
    
    
        </div>
      )
}

export default Slider