import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div className="App">
      <h1>About us</h1>
      <button onClick={handleGoBack}>go back</button>
    </div>
  );
};

export default About;
