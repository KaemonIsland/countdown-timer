import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Time from './Time';

const Countdown = ({ countdownTo, timeTill, toggleForm }) => {

  const [time, setTime] = useState({})

  const [intervalId, setIntervalId] = useState(null)

  //The date that we are counting down to
  const then = moment(timeTill, 'MM DD YYYY, h:mm a')
  
  let tick = () => {
    setTime(() => {
      //The current Date
      const now = moment()
      const countdown = moment(then - now)
      const days = then.diff(now, 'days')
      return {
        days,
        minutes: countdown.format('mm'),
        hours: countdown.format('HH') - 6,
        seconds: countdown.format('ss')
      }
    })
  }

  useEffect(() => {
    setIntervalId(setInterval(tick, 1000))
  }, [])

  let resetCountdown = () => {
    clearInterval(intervalId);
    toggleForm();
  }

  return (
    <>
      <h1>Countdown to {countdownTo}</h1>
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
      <button
        type="reset"
        className="btn btn-outline-primary mt-5 mb-5"
        onClick={resetCountdown}
      >New Countdown</button>
    </>
  )
}

export default Countdown;