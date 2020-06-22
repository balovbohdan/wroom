import React from 'react';
import { IonButton } from '@ionic/react';
import styled from 'styled-components';

import cover from './cover.svg';

type Props = {
  login: () => void;
  signUp: (email: string, password: string) => void;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${cover});
  background-size: cover;
`;

const Landing: React.FC<Props> = (props: Props) => (
  <Wrapper>
    <Cover />
    <div>
      <IonButton onClick={props.login}>Войти</IonButton>
      <IonButton onClick={() => props.signUp('balov_test@mail.com', 'TestPass1234')}>Зарегистрироваться</IonButton>
    </div>
  </Wrapper>
);

export default Landing;
