import React from 'react';
import styled from 'styled-components';

const DebossedContainer = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
  width: 82%;
  padding: 3rem;
  background-color: var(--brand-color-darker);
  border-radius: 100px 0 0 100px / 50%;
  box-shadow: -1px 10px 30px 0 var(--brand-color-darkest) inset,
    10px -10px 30px 0 var(--brand-color-dark) inset;
`;

const DebossedSection: React.FC = ({ children }) => {
  return <DebossedContainer>{children}</DebossedContainer>;
};

export default DebossedSection;
