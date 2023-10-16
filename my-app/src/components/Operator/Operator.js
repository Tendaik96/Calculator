import React from 'react'
import './Operator.css'

export default function Operator({operation, value, onClick}) {
  return (
    <button className="operator" value={value} onClick={onClick}>
      {operation}
    </button>
  );
}
