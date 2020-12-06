import React from 'react';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();
  return (
    <div className="App">
      <h1>About us</h1>
      <button onClick={() => history.goBack()}>go back</button>
    </div>
  );
};

export default About;
