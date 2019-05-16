import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Time from './Time';

const Countdown = ({name, timeTill}) => {
  const [time, setTime] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  })

  const [intervalId, setIntervalId] = useState(null)

  const then = moment(timeTill, 'MM DD YYYY, h:mm a')
  
  let tick = () => {
    setTime(() => {
      const now = moment()
      const countdown = moment(then - now)
      const days = then.diff(now, 'days')
      return {
        days,
        hours: countdown.format('HH') - 6,
        minutes: countdown.format('mm'),
        seconds: countdown.format('ss')
      }
    })
  }

  useEffect(() => {
    setIntervalId(setInterval(tick, 1000))
    return clearInterval(intervalId)
  }, [])

  return (
    <>
      <h1>Countdown to {name}</h1>
      <div className="countdown-wrapper">
        {
          Object.keys(time).map((t, i) => (
            <Time
              key={i}
              time={time[t]}
              title={t}
            />
          ))
        }
      </div>
    </>
  )
}

export default Countdown;