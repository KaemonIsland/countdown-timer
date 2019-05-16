import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import CountdownForm from './CountdownForm'
import { useToggle } from './useToggle';

const Countdown = React.lazy(() => import('./Countdown'))

const App = () => {
  const [form, toggleForm] = useToggle(true)

  return (
    <div className="App">
      {
        form ? <CountdownForm /> : 
          (
            <Suspense fallback={<div>Loading...</div>}>
              <Countdown />
            </Suspense>
          )
      }
      <button onClick={toggleForm}>Toggler</button>
    </div>
  );
}

export default App;
