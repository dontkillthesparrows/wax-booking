import React from 'react';
import { useHistory } from 'react-router-dom';

const Menu = () => {
  const history = useHistory();
  return (
    <div className="App">
      <h1>Menu and pricelist</h1>
      <button onClick={() => history.goBack()}>go back</button>
    </div>
  );
};

export default Menu;
