import React from 'react'
import './Equals.css'

export default function Equals({operation, value, onClick}) {
  return (
    <button className="equals" value={value} onClick={onClick}>
      {operation}
    </button>
  );
}
