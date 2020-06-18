import React from 'react';
import styled from 'styled-components';
import { IonSpinner } from '@ionic/react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Preloader = () => (
  <Wrapper>
    <IonSpinner name="crescent" color="tertiary" />
  </Wrapper>
);

export default Preloader;
