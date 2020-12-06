import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Menu = () => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div className="App">
      <h1>Menu and pricelist</h1>
      <button onClick={handleGoBack}>go back</button>
    </div>
  );
};

export default Menu;
