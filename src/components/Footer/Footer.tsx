import React from 'react';
import styled from 'styled-components';

const FooterElement = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterContainer = styled.div`
  margin: 0 5%;
  padding: 2rem;
  border-radius: 55px 55px 0 0 / 30%;
  box-shadow: -5px 5px 30px 0 var(--brand-color-darkest) inset,
    5px -5px 30px 0 var(--brand-color-dark) inset;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  padding: 1rem 2rem 0 2rem;
  &:first-child {
    border-right: 1px solid var(--brand-color);
  }

  &:last-child {
    max-width: 35%;
    padding: 1rem;
  }
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding-inline-start: unset;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
`;

const Subheader = styled.div`
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const Discalimer = styled.div``;

const Footer = () => {
  return (
    <FooterElement>
      <FooterContainer>
        <Item>
          <Subheader>Social media</Subheader>
        </Item>
        <Item>
          <Subheader>Salons</Subheader>
          <UnorderedList>
            <ListItem>
              <address>Street 1 1234 Oslo</address>
            </ListItem>
            <ListItem>
              <address>Street 35 3232 Oslo</address>
            </ListItem>
            <ListItem>
              <address>Street 42 4321 Oslo</address>
            </ListItem>
          </UnorderedList>
        </Item>
        <Item>
          <Subheader>Contact</Subheader>
          <address>
            Send us an e-mail to{' '}
            <a href="mailto:webmaster@example.com">contact e-mail adress</a>
          </address>
        </Item>
        <Item>
          <Subheader>About cancellation</Subheader>
          <Discalimer>
            Sed rhoncus facilisis magna, non hendrerit orci imperdiet vel. Fusce
            lobortis odio magna, ut elementum justo convallis non. Morbi
            ultricies eleifend gravida. Pellentesque posuere eu nibh vitae
            ultricies. Aliquam erat volutpat.
          </Discalimer>
        </Item>
      </FooterContainer>
    </FooterElement>
  );
};

export default Footer;
