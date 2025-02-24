import React from 'react';
import { IonTitle, IonHeader, IonToolbar, IonButtons } from '@ionic/react';

type Props = {
  title: string;
  button: React.ReactNode;
};

const Header: React.FC<Props> = ({ title, button }: Props) => (
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">{button}</IonButtons>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Header;
