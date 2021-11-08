import React, { useState } from 'react'
import './searchBar.css'

const SearchBar = props => {
  const [searchValue, setSearchValue] = useState('')
  const handleInputChange = event => {
    setSearchValue(event.target.value)
  }
  const handleClearClick = () => {
    setSearchValue('')
  }

  const shouldDisplayButton = searchValue.length > 0

  //   console.log(
  //     products.map(product => {
  //       return product.toUpperCase()
  //     })
  //   )

  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchValue)
  })

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
      <ul>
        {filteredProducts.map(product => {
          return <li key={product}>{product}</li>
        })}
      </ul>
    </div>
  )
}

export default SearchBar
