import React from 'react'
import './Apropos.scss'
import { images } from '../../constant'
import Header from '../../components/Header/Header'
import Dropdown from '../../components/Dropdown/Dropdown'


const Apropos = () => {
  const data = [
    {
      id: 1,
      title:'Fiabilité',
      desc:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
      id: 2,
      title:'Respect',
      desc:'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      id: 3,
      title:'Service',
      desc:'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. Nhésitez pas à nous contacter si vous avez la moindre question'
    },
    {
      id: 4,
      title:'Securite',
      desc:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ]
  return (
    <div className='app__apropos'>
      <div>
        <Header image={images.banner_2} />
      </div>
      <div className="app__apropos-items">
        {
          data.map((item)=>(
            <Dropdown key={item.id} title={item.title} description={item.desc} />
          ))
        }
      </div>
      



    </div>
  )
}

export default Apropos