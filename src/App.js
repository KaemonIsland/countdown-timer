import React, { useState } from 'react';
import './App.css';
import CountdownForm from './CountdownForm'
import { useToggle } from './useToggle';
import Countdown from './Countdown';

const App = () => {
  const [form, toggleForm] = useToggle(true)
  const [countdown, setCountdown] = useState({
    name: 'New Years',
    timeTill: '01 01 2020, 12:00 pm'
  })

  const createCountdown = (name, timeTill) => {
    setCountdown({
      name,
      timeTill
    })
    toggleForm();
  }

  return (
    <div className="App">
      <button onClick={toggleForm}>Toggler</button>
      {
        form ?
          <CountdownForm /> : 
          <Countdown
            name={countdown.name}
            timeTill={countdown.timeTill}
          />
      }
      <p>Time zone is set to Mountain Standard Time</p>
      <p>Please only use dates that end in this year.</p>
      <p>Made by Kaemon Lovendahl</p>
    </div>
  );
}

export default App;
