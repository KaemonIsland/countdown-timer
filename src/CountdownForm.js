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
    <>
      <h1>Countdown Till...</h1>
      <form className="pb-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Countdown To...</label>
          <input
            required
            type="text"
            className="form-control"
            id="countdownTo"
            aria-describedby="countdownToHelp"
            placeholder="What are we counting down to?"
            name="countdownTo"
            onChange={handleChange}
            value={form.countdownTo} />
          <small id="countdownToHelp" className="form-text">
            Countdown to will look like "Countdown to <strong>Your Text</strong>"
          </small>
        </div>
        
        <div className="form-group">
          <label>Time Till Event</label>
          <input
            required
            type="date"
            className="form-control"
            id="timeTill"
            aria-describedby="dateFormat"
            name="timeTill"
            onChange={handleChange}
            value={form.timeTill} />
        </div>

        <button
          className="btn btn-primary"
          type="submit"
        >Create Countdown</button>
      </form>
    </>
  )
}

export default CountdownTimer;