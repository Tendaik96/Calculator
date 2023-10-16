import React from 'react'
import './Button.css'

export default function Button({ num, value, onClick }) {
  
 

  return (
    <button className='button' role='button' value={value} onClick={onClick}>{num}</button>
  )
}
