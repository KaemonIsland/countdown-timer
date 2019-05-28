import React, { useState, useEffect } from 'react';
import './App.css';
import CountdownForm from './CountdownForm'
import { useToggle } from './useToggle';
import Countdown from './Countdown';
import styled from 'styled-components';

const Container = styled.div `
  margin: 0 auto;
  background-color: #acffb2;
  color: #3477db;
  width: 100vw;
  height: 100vh;
`

const App = () => {
  const [form, toggleForm] = useToggle(true)
  const [countdown, setCountdown] = useState(null)

  useEffect(() => {
    const savedTime = JSON.parse(localStorage.getItem('countdownTime'))
    if (savedTime) {
      setCountdown({
        countdownTo: savedTime.countdownTo,
        timeTill: savedTime.timeTill
      })
      toggleForm();
    }
  }, [])

  const createCountdown = (countdownTo, timeTill) => {
    setCountdown({
      countdownTo,
      timeTill
    })

    localStorage.setItem('countdownTime', JSON.stringify({
      countdownTo,
      timeTill
    }))
    toggleForm();
  }

  return (
    <Container className="App" >
      <div className="container">
        {
          form ?
            <CountdownForm createCountdown={createCountdown} /> : 
            <Countdown
              countdownTo={countdown.countdownTo}
              timeTill={countdown.timeTill}
              toggleForm={toggleForm}
            />
        }
        <a
          className="btn btn-primary"
          href="http://kaemon-lovendahl.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >Made by Kaemon Lovendahl!</a>
      </div>
    </Container>
  );
}

export default App;
