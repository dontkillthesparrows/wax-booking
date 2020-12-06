import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const handleRoute = useCallback(
    (path: string) => () => {
      history.push(path);
    },
    [history]
  );

  return (
    <div className="App">
      <h1>Landing page</h1>
      <button onClick={handleRoute('/booking')}>Booking</button>
    </div>
  );
};

export default LandingPage;
