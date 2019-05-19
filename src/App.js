import React, { useState } from 'react';
import './App.css';
import CountdownForm from './CountdownForm'
import { useToggle } from './useToggle';
import Countdown from './Countdown';

const App = () => {
  const [form, toggleForm] = useToggle(true)
  const [countdown, setCountdown] = useState({
    countdownTo: 'New Years',
    timeTill: '01 01 2020, 12:00 pm'
  })

  const createCountdown = (countdownTo, timeTill) => {
    setCountdown({
      countdownTo,
      timeTill
    })
    toggleForm();
  }

  return (
    <div className="App">
      {
        form ?
          <CountdownForm createCountdown={createCountdown} /> : 
          <Countdown
            countdownTo={countdown.countdownTo}
            timeTill={countdown.timeTill}
            toggleForm={toggleForm}
          />
      }
      <p>Time zone is set to Mountain Standard Time</p>
      <p>Please only use dates that end in this year.</p>
      <p>Made by Kaemon Lovendahl</p>
    </div>
  );
}

export default App;
