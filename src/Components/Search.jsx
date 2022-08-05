import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='searchBar'>
      <input className='Search' placeholder='Search gym name here...' type="text" />
        <button className='btn-clear'>clear</button>  
    </div>
  )
}

export default Search