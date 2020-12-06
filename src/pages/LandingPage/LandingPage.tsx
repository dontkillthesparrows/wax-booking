import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  height: 50px;
  width: 250px;
  border-radius: 10% / 50%;
  border: none;
  background-color: transparent;
  color: var(--white);
  font-weight: 700;
  font-size: large;
  box-shadow: -10px 10px 30px 0 var(--brand-color-darkest),
    10px -10px 30px 0 var(--brand-color-dark);

  :hover& {
    cursor: pointer;
  }
`;

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
      <Button onClick={handleRoute('/booking')}>Booking</Button>
    </div>
  );
};

export default LandingPage;
