import React from 'react'
import Arrow from '../../../assets/arrow.svg'
import './Bestsellers.css'
import Cards from './Cards/Cards'

const Popular = () => {
  return (
    <div>
        <div className="popular_subsection">
            <h1 className="popular_text">Popular books</h1>
            <img src={Arrow} alt="arrow" className='arrow' />
        </div>
        <Cards />
    </div>
  )
}

export default Popular