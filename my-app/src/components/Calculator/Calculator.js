import React from 'react'
import './Calculator.css';
//import { useState } from 'react';
import Window from '../Window/Window';
import Button from '../Buttons/Button';
import Operator from '../Operator/Operator';
import Equals from '../Equals/Equals';

export default function Calculator() {
 /*  const [value, setValue] = useState(0)

  function handleChange(e) {
    setValue(e.target.value)
  } */

  return (
    <div id="calc">
      <Window />
      <div className="operators">
        <Operator operation={"+"} />
        <Operator operation={"-"} />
        <Operator operation={"x"} />
        <Operator operation={"%"} />
      </div>
      <div className="val-op-container">
        <div className="value-container">
          <Button num={9} />
          <Button num={8} />
          <Button num={7} />
          <Button num={6} />
          <Button num={5} />
          <Button num={4} />
          <Button num={3} />
          <Button num={2} />
          <Button num={1} />
          <Button num={0} />
          <Button num={'.'} />
          <Button num={'c'} />
        </div>
        <div className='equals-container'>
          <Equals operation={'='}/>
        </div>
      </div>
    </div>
  );
}
