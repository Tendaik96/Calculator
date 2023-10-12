import React from 'react'
import './Calculator.css';
import { useState } from 'react';
import Window from '../Window/Window';
import Button from '../Button/Button';

export default function Calculator() {
  const [value, setValue] = useState(0)

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div id="calc">
      <Window />
      <div>
        <Button num={1} />
        <Button num={2} />
        <Button num={3} />
        <Button num={4} />
        <Button num={5} />
        <Button num={6} />
        <Button num={7} />
        <Button num={8} />
        <Button num={9} />
        <Button num={0} />
      </div>
    </div>
  );
}
