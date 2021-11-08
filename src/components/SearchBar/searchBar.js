import React, { useState } from 'react'
import './searchBar.css'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const handleInputChange = event => {
    setSearchValue(event.target.value)
  }
  const handleClearClick = () => {
    setSearchValue('')
  }

  const shouldDisplayButton = searchValue.length > 0
//   console.log(shouldDisplayButton)

//   let showButton = () => {
//     if (shouldDisplayButton === true) {
//       return <button onClick={handleClearClick}>Clear</button>
//     }
//   }

  return (
    <div>
      <input
        type='text'
        value={searchValue}
        onChange={handleInputChange}
      ></input>
      {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
    </div>
  )
}

export default SearchBar
