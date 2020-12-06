import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const Header = () => {
  const history = useHistory();

  const handleRoute = useCallback(
    (path: string) => () => {
      history.push(path);
    },
    [history]
  );

  return (
    <HeaderWrapper>
      <LinkWrapper href="/home">
        <span>Smooth Body Wax Salon</span>
      </LinkWrapper>
      <button onClick={handleRoute('/booking')}>Booking</button>
      <button onClick={handleRoute('/menu')}>Menu</button>
      <button onClick={handleRoute('/offers')}>Offers</button>
      <button onClick={handleRoute('/about')}>About us</button>
    </HeaderWrapper>
  );
};

export default Header;
