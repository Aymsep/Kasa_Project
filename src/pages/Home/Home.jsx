import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import { images } from '../../constant'
import data from '../../Database/Data.json'
import Listing from '../../components/Listing/Listing'

const Home = () => {
  
  return (
    <div className="app__home">
        <Header image={images.banner_1} text="Chez vous, partout et ailleurs"/>
        <div>
          <Listing/>
        </div>
    </div>

    
  )
}

export default Home