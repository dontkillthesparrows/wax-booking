import React from 'react';
import { useHistory } from 'react-router-dom';

const Booking = () => {
  const history = useHistory();

  return (
    <div className="App">
      <h1>booking</h1>
      <button onClick={() => history.goBack()}>go back</button>
    </div>
  );
};

export default Booking;
