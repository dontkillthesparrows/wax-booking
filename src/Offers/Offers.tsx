import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Offers = () => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);
  return (
    <div className="App">
      <h1>Offers</h1>
      <button onClick={handleGoBack}>go back</button>
    </div>
  );
};

export default Offers;
