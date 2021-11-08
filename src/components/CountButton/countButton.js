import React from 'react'
import { useState, useEffect } from 'react'
import './countButton.css'

const CountButton = props => {
  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy)
  }

  const divStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    alignSelf: 'center',
    background: 'beige'
  }

  const buttonStyle = {
    backgroundColor: props.buttonColor,
    borderRadius: '10px'
  }

  useEffect(() => {
    if (currentCount === 10) {
      alert('the count is 10')
    }
  }, [currentCount])

  return (
    <div style={divStyle}>
      <button
        style={buttonStyle}
        onClick={() => {
          handleClick()
        }}
      >
        +{props.incrementBy}
      </button>
      <div className='count-Display'>{currentCount}</div>
    </div>
  )
}

export default CountButton
