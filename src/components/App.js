import React, { useEffect, useState } from 'react'
import CountButton from './CountButton/countButton'
import SearchBar from './SearchBar/searchBar'
import button from './Button/Button'
import Button from './Button/Button'

const App = () => {

  
  const [productsState, setProductState] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(productsArray => {
        const newProductsState = productsArray.map((product) => {
          return product.title
        })
        setProductState(newProductsState)
      })

    // setTimeout(() => {setProductState(['toothpaste',
    //     'toothbrush',
    //     'mouthwash',
    //     'dental floss',
    //     'mouth guard'
    //   ])}, 2000)
  }, [])

  const hasProducts = productsState.length > 0

  return (
    <>
    <Button buttonText="Prince Habeeboo"></Button>
      <CountButton incrementBy={1} buttonColor="aquamarine" ></CountButton>
      {hasProducts ? <SearchBar products={productsState} /> : 'now loading...'}
    </>
  )
}

export default App
