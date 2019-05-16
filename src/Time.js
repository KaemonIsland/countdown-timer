import React from 'react';
import Circle from './Circle';

const Time = ({ time, title }) => {
  let radius;
  
  let mapNumber = (num, in_min, in_max, out_min, out_max) => {
    return (
      ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    )
  }

  switch (title) {
    case 'days':
      radius = mapNumber(parseInt(time), 30, 0, 0, 360)
      break
    case 'hours':
      radius = mapNumber(parseInt(time), 24, 0, 0, 360)
      break
    case 'minutes':
      radius = mapNumber(parseInt(time), 60, 0, 0, 360)
      break
    case 'seconds':
      radius = mapNumber(parseInt(time), 60, 0, 0, 360)
      break
    default:
      console.log("Something went wrong!")
  }
  return (
    <div className="countdown-item">
      <Circle radius={radius} />
      {time}
      <span>{title}</span>
    </div>
  )
}

export default Time;