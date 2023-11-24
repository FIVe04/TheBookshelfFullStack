import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='Card'>
        <div className="cover">
            <img src={props.coverUrl} alt="book" className='book_image'/>
            <div className="price">
                {props.price}
            </div>
        </div>
        <h1 className='book_title'>{props.title}</h1>
        <h1 className='book_author'>{props.author}</h1>
        
    </div>
  )
}

export default Card