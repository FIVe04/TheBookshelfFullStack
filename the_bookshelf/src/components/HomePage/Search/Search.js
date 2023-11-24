import React from 'react'
import './Search.css'
import Input from './Input/Input'

const Search = () => {
  return (
    <div className='Search'>
      <h1 className='title_search'>Find a particular book</h1>
      <Input />
    </div>
  )
}

export default Search