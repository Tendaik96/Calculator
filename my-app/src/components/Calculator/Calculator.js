import React from 'react'
import './Calculator.css';
import { useState } from 'react';
import Window from '../Window/Window';
import Button from '../Buttons/Button';
import Operator from '../Operator/Operator';
import Equals from '../Equals/Equals';

const nums = [];

export default function Calculator() {
 
  const [total, setTotal] = useState(0);

  
  

  function click(e) {
    let value = e.target.value;
    
    if(value !== '='){
    nums.push(value);
    let toget = nums.join('');
    console.log(toget);
    setTotal(toget);
      
    }  
    else {
      setTotal('Total');
      
    }
  } 

  //console.log(nums)
  

  return (
    <div id="calc">
      <Window value={total} />
      <div className="operators">
        <Operator operation={"+"} value="+" onClick={click} />
        <Operator operation={"-"} value="-" onClick={click} />
        <Operator operation={"x"} value="*" onClick={click} />
        <Operator operation={"/"} value="/" onClick={click} />
      </div>
      <div className="val-op-container">
        <div className="value-container">
          <Button num={9} value="9" onClick={click}/>
          <Button num={8} value="8" onClick={click}/>
          <Button num={7} value="7" onClick={click}/>
          <Button num={6} value="6" onClick={click}/>
          <Button num={5} value="5" onClick={click}/>
          <Button num={4} value="4" onClick={click}/>
          <Button num={3} value="3" onClick={click}/>
          <Button num={2} value="2" onClick={click}/>
          <Button num={1} value="1" onClick={click}/>
          <Button num={0} value="0" onClick={click}/>
          <Button num={"."} value="." onClick={click}/>
          <Button num={"c"} value=" " onClick={click}/>
        </div>
        <div className="equals-container">
          <Equals operation={"="} value="=" onClick={click}/>
        </div>
      </div>
    </div>
  );
}
