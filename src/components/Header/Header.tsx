import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const InnerHeader = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  width: 90%;
  margin: 30px 0 0 0;
  border-radius: 0 50px 50px 0 / 50%;
  background-color: var(--brand-color-darker);
  box-shadow: -10px 10px 30px 0 var(--brand-color-darkest),
    10px -10px 30px 0 var(--brand-color-dark);
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const Logo = styled.span`
  color: var(--white);
  margin: 0 15px 0 40px;
  font-weight: 700;
  font-size: xx-large;
`;

const Button = styled.button`
  height: 30px;
  width: 100px;
  border: none;
  background-color: transparent;
  color: var(--white);

  :hover& {
    cursor: pointer;
  }
`;

const Divider = styled.div`
  width: 20px;
  height: 60px;
  border-right: 1px solid var(--brand-color);
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
    <InnerHeader>
      <LinkWrapper href="/home">
        <Logo>Wax</Logo>
      </LinkWrapper>
      <Divider />
      <Button onClick={handleRoute('/booking')}>Booking</Button>
      <Button onClick={handleRoute('/menu')}>Menu</Button>
      <Button onClick={handleRoute('/offers')}>Offers</Button>
      <Button onClick={handleRoute('/about')}>About us</Button>
    </InnerHeader>
  );
};

export default Header;
