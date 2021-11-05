import React, { useState } from 'react'
import './searchBar.css'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('the search value')
  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <input type='text' value={searchValue} onChange={handleInputChange}
      ></input>
    </div>
  )
}

export default SearchBar
