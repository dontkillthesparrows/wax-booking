import React from 'react';
import { useHistory } from 'react-router-dom';

const Offers = () => {
  const history = useHistory();
  return (
    <div className="App">
      <h1>Offers</h1>
      <button onClick={() => history.goBack()}>go back</button>
    </div>
  );
};

export default Offers;
