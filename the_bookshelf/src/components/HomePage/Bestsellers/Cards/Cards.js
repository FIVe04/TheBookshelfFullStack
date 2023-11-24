import React from 'react'
import './Cards.css'
import Card from './Card'
import data from '../../../../assets/data/data'

const Cards = () => {
  // Object.keys(data).forEach((key, index) => {console.log(data[key])});
  const result = [];
  Object.keys(data).forEach((key, index) => {
    result.push(data[key]);
  });
  console.log(result);
  // setItems(data)
  // console.log(items)

  return (
    <div className='Cards'>
      {result.map((book, index) => {
        return (
          <Card title={book.title} author={book.author} coverUrl={book.coverUrl} price={book.price}/>
        )
        })}
    </div>
    // items.map((book) => <h1>book.title</h1>)
  )
}

export default Cards