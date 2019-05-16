import React, { useState, useEffect, Suspense } from 'react';
import './App.css';

const Countdown = React.lazy(() => import('./Countdown'))

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Countdown />
      </Suspense>
    </div>
  );
}

export default App;
