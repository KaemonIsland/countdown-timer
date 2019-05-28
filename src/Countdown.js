import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Time from './Time';

const Countdown = ({ countdownTo, timeTill, toggleForm }) => {

  const [time, setTime] = useState({})

  const [intervalId, setIntervalId] = useState(null)

  //The date that we are counting down to
  const then = moment(`${timeTill}, 12:00 am`, 'YYYY-MM-DD, h:mm a')
  
  let tick = () => {
    setTime(() => {
      //The current Date
      const now = moment()
      const countdown = moment(then - now)
      const days = then.diff(now, 'days')
      return {
        days,
        minutes: countdown.format('mm'),
        hours: countdown.format('HH'),
        seconds: countdown.format('ss')
      }
    })
  }

  useEffect(() => {
    setIntervalId(setInterval(tick, 1000))
  }, [])

  let resetCountdown = () => {
    clearInterval(intervalId);
    localStorage.clear('countdownTime')
    toggleForm();
  }

  return (
    <div>
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
        className="btn btn-primary mt-5 mb-5"
        onClick={resetCountdown}
      >New Countdown</button>
    </div>
  )
}

export default Countdown;