import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
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
      <Header>
        <LinkWrapper href="/home">
          <span>Smooth Body Wax Salon</span>
        </LinkWrapper>
        <button onClick={handleRoute('/booking')}>Booking</button>
        <button onClick={handleRoute('/menu')}>Menu</button>
        <button onClick={handleRoute('/offers')}>Offers</button>
        <button onClick={handleRoute('/about')}>About us</button>
      </Header>
      <h1>Landing page</h1>
    </div>
  );
};

export default LandingPage;
