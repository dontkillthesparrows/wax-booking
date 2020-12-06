import React from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();
  return (
    <div className="App">
      <h1>Landing page</h1>
      <button onClick={() => history.push('/booking')}>Booking</button>
      <button onClick={() => history.push('/menu')}>Menu</button>
      <button onClick={() => history.push('/offers')}>Offers</button>
      <button onClick={() => history.push('/about')}>About us</button>
    </div>
  );
};

export default LandingPage;
