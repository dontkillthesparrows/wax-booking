import React, { Fragment, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import DebossedSection from '../../components/DebossedSection';
import EmbossedButton from '../../components/EmbossedButton';
import Footer from '../../components/Footer';

const BodyBox = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  margin: 3rem 0;
`;

const Paragraph = styled.p`
  width: 90%;
  margin-left: 3rem;
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
    <Fragment>
      <BodyBox>
        <Header>Welcome to Wax-Booking</Header>
        <EmbossedButton onClick={handleRoute('/booking')}>
          Booking
        </EmbossedButton>
        <DebossedSection>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque laoreet ut lacus sit amet porta. Mauris semper mauris
            neque. Aenean tincidunt efficitur ex, non congue quam vestibulum ut.
            Vivamus accumsan nunc tellus, et rhoncus mauris sodales ac. Vivamus
            elit libero, fermentum quis enim a, facilisis dignissim nisi. Ut
            pellentesque, libero nec eleifend sagittis, nibh orci interdum
            magna, a blandit lacus dolor id tortor. Sed rhoncus facilisis magna,
            non hendrerit orci imperdiet vel. Fusce lobortis odio magna, ut
            elementum justo convallis non. Morbi ultricies eleifend gravida.
            Pellentesque posuere eu nibh vitae ultricies. Aliquam erat volutpat.
            Ut venenatis vestibulum consectetur.
          </Paragraph>
        </DebossedSection>
      </BodyBox>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
