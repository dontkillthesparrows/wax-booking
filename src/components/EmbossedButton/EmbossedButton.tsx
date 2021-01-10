import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

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

const EmbossedButton: React.FC<Props> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default EmbossedButton;
