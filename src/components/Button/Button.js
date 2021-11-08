import React from 'react'

const Button = props => {
  return (
    <button
      style={{ color: 'white', backgroundColor: 'black', borderRadius: '5px' }}
    >
      {props.buttonText}
    </button>
  )
}

export default Button
