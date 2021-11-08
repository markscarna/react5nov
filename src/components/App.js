import React from 'react'
import CountButton from './CountButton/countButton'
import SearchBar from './SearchBar/searchBar'

const products = [
  'toothpaste',
  'toothbrush',
  'mouthwash',
  'dental floss',
  'mouth guard'
]

const App = () => {
  return (
    <>
      <SearchBar products={products} />
    </>
  )
}

export default App
