import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Time from './Time';

const Countdown = () => {
  const [time, setTime] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  })

  const [intervalId, setIntervalId] = useState(null)

  const then = moment('05/24/2019, 12:30 pm', 'MM/DD/YYYY, h:mm a')

  let tick = () => {
    setTime(() => {
      const now = moment()
      const countdown = moment(then - now)
      return {
        days: countdown.format('D'),
        hours: countdown.format('HH'),
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
      <h1>Countdown to Lava Hot Springs</h1>
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