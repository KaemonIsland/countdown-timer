import React from 'react';

const Circle = ({radius}) => {
  // x = centerX y = centerY, r = radius, angle in degrees
  let polarToCartesian = (x, y, r, angle) => {
    let angleRadian = ((angle - 90) * Math.PI) / 180.0;
    return {
      x: x + r * Math.cos(angleRadian),
      y: y + r * Math.sin(angleRadian)
    }
  }

  let describeArc = (x, y, r, startAngle, endAngle) => {
    let start = polarToCartesian(x, y, r, endAngle)
    let end = polarToCartesian(x, y, r, startAngle)

    let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

    let d = [
      'M',
      start.x,
      start.y,
      'A',
      r,
      r,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y
    ].join(' ');
    return d;
  }

  return (
    <svg className="countdown-svg">
      <path
        fill="none"
        stroke="#3a539b"
        strokeWidth="6"
        d={describeArc(100, 100, 80, 0, radius)}
        />
    </svg>
  )
}

export default Circle;