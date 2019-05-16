import { useState } from 'react';

export const useToggle = (defaultState = true) => {
  const [state, toggle] = useState(defaultState);

  const handleToggle = () => toggle(!state)

  return [state, handleToggle]
}