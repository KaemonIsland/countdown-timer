import React, { useState } from 'react';

const CountdownTimer = ({ createCountdown }) => {

  let defaultState = {
    countdownTo: '',
    timeTill: ''
  }

  const [form, setForm] = useState(defaultState)

  let handleSubmit = e => {
    e.preventDefault();
    createCountdown(form.countdownTo, form.timeTill)
    setForm(defaultState)
  }

  let handleChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Countdown to</label>
      <input name="countdownTo" onChange={handleChange} value={form.countdownTo} />
      <label>Time Till Event</label>
      <input name="timeTill" onChange={handleChange} value={form.timeTill} />
      <button type="submit">Create Countdown</button>
    </form>
  )
}

export default CountdownTimer;