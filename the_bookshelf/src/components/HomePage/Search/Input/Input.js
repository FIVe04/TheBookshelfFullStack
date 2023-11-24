import React, { useState } from 'react'
import './Input.css'
import SearchIcon from '../../../../assets/Search_icon.svg'
import Card from '../../Bestsellers/Cards/Card.js'
import data from '../../../../assets/data/data.js'


const Input = () => {
  
    const result = [];
    Object.keys(data).forEach((key, index) => {
        result.push(data[key]);
    });
    const [value, setValue] = useState('');
    const filtered_books = result.filter(book => {
        return book.title.toLowerCase().includes(value.toLowerCase());
    });
  return (
    <div className='Input'>
        <div className="whole_input">
            <input className='input_field' placeholder='Search' onChange={(event) => setValue(event.target.value)}/>
            <img src={SearchIcon} alt="search_icon" className='icon_search'/>
        </div>
        
        <div className="searched_books">
        {filtered_books.map((book, index) => {
            return (<Card title={book.title} author={book.author} coverUrl={book.coverUrl} price={book.price}/>);
        })}
        </div>
       
        
    </div>
    
    
  )
}

export default Input