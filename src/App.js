import React, { useState } from 'react';
import './App.css';
import CountdownForm from './CountdownForm'
import { useToggle } from './useToggle';
import Countdown from './Countdown';

const App = () => {
  const [form, toggleForm] = useToggle(false)
  const [countdown, setCountdown] = useState({
    countdownTo: 'New Years',
    timeTill: '01 01 2020, 12:00 am'
  })

  const createCountdown = (countdownTo, timeTill) => {
    setCountdown({
      countdownTo,
      timeTill
    })
    toggleForm();
  }

  return (
    <div className="App container">
      {
        form ?
          <CountdownForm createCountdown={createCountdown} /> : 
          <Countdown
            countdownTo={countdown.countdownTo}
            timeTill={countdown.timeTill}
            toggleForm={toggleForm}
          />
      }
      <p>Made by Kaemon Lovendahl!</p>
    </div>
  );
}

export default App;
