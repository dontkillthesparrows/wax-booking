import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Booking = () => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div className="App">
      <h1>booking</h1>
      <button onClick={handleGoBack}>go back</button>
    </div>
  );
};

export default Booking;
