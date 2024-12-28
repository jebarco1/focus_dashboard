import { Button, Input } from 'reactstrap'
import { TouchSpinsProp } from './TouchSpinTypes';
import { useState } from 'react';

const TouchSpins = ({ item ,arrowIcon }: TouchSpinsProp) => {
    const [touchSpinValue, setTouchSpinValue] = useState(Math.floor(Math.random() * 10));
    const decrementHandle = () => {
      if (touchSpinValue === 0) {
        console.log("value is zero now you cannot decrement");
      } else {
        setTouchSpinValue(touchSpinValue - 1);
      }
    };
    const incrementHandle = () => {
      if(touchSpinValue > 0) {
        setTouchSpinValue(touchSpinValue + 1);
      }else{
        setTouchSpinValue(1);
      }
    }
  return (
    <div className="touchspin-wrapper">
      <Button onClick={decrementHandle} color="transparent" className={`decrement-touchspin btn-touchspin ${item}`}>
        {arrowIcon ? <i className="fa fa-angle-left"> </i> : <i className="fa fa-minus"> </i>}
      </Button>
      <Input className={`input-touchspin spin-outline-${item.split('-')[item.split('-').length-1]}`} type="number" value={touchSpinValue} readOnly/>
      <Button onClick={incrementHandle} color="transparent" className={`increment-touchspin btn-touchspin ${item}`}>
        {arrowIcon ?<i className="fa fa-angle-right"></i>:<i className="fa fa-plus"> </i>}
      </Button>
    </div>
  )
}

export default TouchSpins