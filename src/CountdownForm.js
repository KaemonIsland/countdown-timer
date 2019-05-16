import React from 'react';

const CountdownTimer = () => {

  let handleSubmit = e => {
    e.preventDefault();
  }

  let handleChange = e => {

  }

  return (
    <>
      <h1>Create a Countdown</h1>
      <form onSubmit={handleSubmit}>
        <label>Timer Title</label>
        <input onChange={handleChange} />
        <label>Time Till Event</label>
        <input onChange={handleChange} />
      </form>
    </>
  )
}

export default CountdownTimer;